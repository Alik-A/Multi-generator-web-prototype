var LETTERS = 1;
var NUMS = 2;
var SP_CHRS = 3;

function onLoad() {
	output = document.getElementById("passOutput");
	document.getElementById("generatePassBtn").onmouseover = function() {
		if(output.value == "") {
			output.style.backgroundColor = "gray";
		}
	};
	document.getElementById("generatePassBtn").onmouseout = function() {
		if(output.value == "") {
			output.style.backgroundColor = "black";
		}
	};
}

function generateNewPass() {
	var passComponentsArr = new Array();
	if(document.getElementById("includeLowCaseLettersChkBox").checked) passComponentsArr.push(1);
	if(document.getElementById("includeUpCaseLettersChkBox").checked) passComponentsArr.push(2);
	if(document.getElementById("includeSpCharsChkBox").checked) passComponentsArr.push(3);
	if(document.getElementById("includeNumsChkBox").checked) passComponentsArr.push(4);
	
	var generatedPass = new String();
	var typeForGenerate = 0;
	var passLength = Number(document.getElementById("passLenCB").value);
	console.log(passComponentsArr.length);
	if(passComponentsArr.length == 0) {
		alert("choose at least one type of characters to generate password");
		return;
	}
	while(passLength-- != 0) {
		do {
			typeForGenerate = Math.floor(Math.random() * 4 + 1);
 		}
		while(!passComponentsArr.includes(typeForGenerate));
			switch(typeForGenerate) {
				case 1: 
					generatedPass += String.fromCharCode(generateLowCaseLetterAscii());
					break;
					
				case 2: 
					generatedPass += String.fromCharCode(generateUpCaseLetterAscii());
					break;
				
				case 3: 
					generatedPass += String.fromCharCode(generateSpCharAscii());
					break;
					
				case 4: 
					generatedPass += String.fromCharCode(generateNum());
			};
	}
	output.value = generatedPass;
	document.getElementById("copyToClipBrdBtn").disabled = false;
}

function generateLowCaseLetterAscii(includeCapLetters) {
	return(Math.floor(Math.random() * (122 - 97)) + 97);
}

function generateUpCaseLetterAscii() {
	return(Math.floor(Math.random() * (90 - 65)) + 65);
}

function generateNum() {
	return(Math.floor(Math.random() * (57 - 48)) + 48);
}

function generateSpCharAscii() {
	switch(Math.floor(Math.random() * (3 - 1) + 1)) {
		case 1: 
			return(Math.floor(Math.random() *  (47 - 33)) + 33);
		case 2: 
			return(Math.floor(Math.random() *  (64 - 58)) + 58);
		case 3: 
			return(Math.floor(Math.random() *  (96 - 91)) + 91);
	};
}

function copyGeneratedToClipBrd() {
	document.getElementById("passOutput").select(0, 1);
	document.execCommand("copy");
	output.style.background = "#00ff00";
	output.style.color = "#000000";
	document.getElementById("passOutput").selectionEnd = 0;

	output.blur();

}
