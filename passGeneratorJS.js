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
	document.getElementById("autoCopyChkBox").checked = localStorage.autoCopy;
}

function generateNewPass() {
	var passComponentsArr = new Array(1, 2, 3);
	if(!document.getElementById("includeLettersChkBox").checked) delete passComponentsArr[0];
	if(!document.getElementById("includeNumsChkBox").checked) delete passComponentsArr[1];
	if(!document.getElementById("includeSpCharsChkBox").checked) delete passComponentsArr[2];
	
	var generatedPass = new String();
	var typeForGenerate = 0;
	var passLength = Number(document.getElementById("passLenCB").value);
	while(passLength-- != 0) {
		do {
			typeForGenerate = Math.floor(Math.random() * (3 - 1) + 1);
			console.log(typeForGenerate);
		}
		while(!passComponentsArr.includes(typeForGenerate));
			console.log(generatedPass);
			switch(typeForGenerate) {
				case 1: 
					generatedPass += String.fromCharCode(generateLetterAscii());
					break;
					
				case 2: 
					generatedPass += String.fromCharCode(generateNum());
					break;
				
				case 3: 
					generatedPass += String.fromCharCode(generateSpCharAscii());
					break;
			};
	}
		output.value = generatedPass;

}

function generateLetterAscii() {
	return(Math.floor(Math.random() * (122 - 97)) + 97);
}

function generateNum() {
	return(Math.floor(Math.random() * (57 - 48)) + 48);
}

function generateSpCharAscii() {
	switch(Math.ceil(Math.random() * 2)) {
		case 1: 
			return(Math.floor(Math.random() *  (47 - 33)) + 47);
		case 2: 
			return(Math.floor(Math.random() *  (64 - 58)) + 58);
		case 3: 
			return(Math.floor(Math.random() *  (96 - 91)) + 91);
	};
}