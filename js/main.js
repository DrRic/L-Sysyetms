
var currentRule = 0;
var iterations =1;


function addRule() {
	element = document.getElementById("rules");
	var row = document.createElement("div")
	row.className="row";
	
	var col20 = document.createElement("div");
	col20.className = "col-20";
	
	var col80 = document.createElement("div");
	col80.className = "col-80";
	
	var card1 = document.createElement("div");
	card1.className = "card-100";
	var card2 = document.createElement("div");
	card2.className = "card-100";
	
	var label = document.createElement("div");
	label.className="label";	
	label.innerHTML="Rule:"+currentRule;
	
	var input = document.createElement("input");
	input.type="text";
	input.className="input-rule";	
	
	row.appendChild(col20);
	row.appendChild(col80);
	col20.appendChild(card1);
	col80.appendChild(card2);
	card1.appendChild(label);
	card2.appendChild(input);
	element.appendChild(row);
	currentRule++;
}

function runRules() {
	var rules = document.getElementsByClassName("input-rule");
	ruleArray=[]
	for(i=0;i<rules.length;i++){
		rule = rules[i].value.split('->')
		ruleArray.push(rule)	
	} 
	//console.log(ruleArray)
	var axiom = document.getElementById("axiom")
	var outputString = axiom.value;
	
	for (var i =0; i<iterations;i++) {
		outputString = parse(outputString,ruleArray);
		console.log(outputString);
	}
	
	var element = document.getElementById("output")
	element.value = outputString;
	var newSvg = document.getElementById('svgcanvas');
		newSvg.outerHTML = '<svg xmlns="http://www.w3.org/2000/svg" style="margin:0;padding:0;top:0em;left:0.5em"  width="100px" height="100px"><circle cx="40" cy="40" r="40" stroke="red" stroke-width="4" fill="blue" /></svg>';
		expand(outputString);
}


function expand(string) {
	
	if (string[0]=="B") {
		
		console.log("BUD");
		return 0;	
	}
	
	if (string[0]=="-") {
		console.log("left");	
	} else if (string[0]=="+") {
		console.log("Right");	
	} else {
		console.log(string[0]);	
	}
	expand( string.substr(1, string.length) )
}

function parse( startString, rules) {
	var newString=""
	console.log(startString.length);
	for(i=0; i<startString.length; i++){
		focusString = startString[i]
		for (j=0;j<rules.length;j++) {
			console.log(focusString,rules[j][0]);
			if (focusString==rules[j][0]) {
				focusString="";
				newString+=rules[j][1];			
			}		
		}
		if (focusString!="") {
			newString+=focusString;		
		}
	}
	return newString;
}


function addIteration() {
	console.log(iterations)
	iterations++;
	element =  document.getElementById("iteration");
	element.value = iterations;
}

function subtractIteration() {
	iterations--;
	if(iterations <1){
		iterations = 1;	
	}
	element =  document.getElementById("iteration");
	element.value = iterations;
}