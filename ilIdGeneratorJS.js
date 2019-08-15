var idNum = 0;

var idStr;
var output;

function onLoad() {
	output = document.getElementById("idOutput");
	document.getElementById("generateIdBtn").onmouseover = function() {
		if(output.value == "") {
			output.style.backgroundColor = "gray";
		}
	};
	document.getElementById("generateIdBtn").onmouseout = function() {
		if(output.value == "") {
			output.style.backgroundColor = "black";
		}
	};
	document.getElementById("autoCopyChkBox").checked = localStorage.autoCopy;
}

function generateIdNum () {
	output.style.backgroundColor = "gray";
	output = document.getElementById("idOutput");
	idNum = 0;
	output.value = "";
	var id = 0;
	var i = 0;
	while(i++ < 8)
	id = id === 0 ? getRndNum() : id * 10 + getRndNum();
	idStr = id.toString().split('').reverse().join('');
	calcCheckDigit(id);
	output.value = idStr;
	var chkBoxAutoCopyToClipBrd = document.getElementById("autoCopyChkBox").checked;
	document.getElementById("copyToClipBrdBtn").disabled = false;
	if(chkBoxAutoCopyToClipBrd == true) copyGeneratedToClipBrd();
	if(localStorage.autoCopy != chkBoxAutoCopyToClipBrd) localStorage.autoCopy = chkBoxAutoCopyToClipBrd;
	
}

function getRndNum() {
	return(Math.ceil(Math.random() * 9));
}

function calcCheckDigit(id) {
			var tmpArrDig = 1;
			var i = 0;
	var checkDigit = 0;
	while(id != 0) {
		var idDigTmp = id % 10;
		id = Math.floor(id / 10);
		output.value = idDigTmp;
		var x = idDigTmp * tmpArrDig;

		if(x > 9) {
			var tmp1 = x % 10;
			x = Math.floor(x / 10);
			x += tmp1;
		}
		tmpArrDig = tmpArrDig === 1 ? 2 : 1;
		checkDigit += x;
	}
	idStr += (checkDigit % 10 === 0 ? 0 : 10 - checkDigit % 10).toString();
			console.log(checkDigit + " " +checkDigit % 10);
}

function copyGeneratedToClipBrd() {
	document.getElementById("idOutput").select(0, 1);
	document.execCommand("copy");
	output.style.background = "#00ff00";
	output.style.color = "#000000";
	document.getElementById("idOutput").selectionEnd = 0;

	output.blur();

}




















