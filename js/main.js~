
var currentRule = 0;


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

function getRules() {
	var rules = document.getElementsByClassName("input-rule");
	for(i=0;i<rules.length;i++){
		console.log(rules[i].value)	
	} 
}