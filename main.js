function almostNormal() {
	var x1, x2, theta;
	
	do {
		x1 = 2 * Math.random() -1;
		x2 = 2 * Math.random() -1;
		theta = x1 * x1 + x2 * x2;
	} while (theta >= 1 || theta == 0);
	
	var y = Math.sqrt(-2 * Math.log(theta)/theta);
	return x1*y;
}

var farts = 0;
function fartClick(n){
	farts = farts + n;
	console.log(farts);
	$("#farts").html(farts);
}

var ID=0;
var speedMean = 5;
var speedStdev = 1;

function Dude() {
	this.name = chance.name();
	this.property = "poopy";
	this.ID=ID;
	this.rawSpeed=speedStdev*almostNormal()+speedMean;
	this.speed=this.rawSpeed.toFixed(2) 
	ID++;
}

var Dudes = [];


function makeDude() {
	var currentDude = new Dude();
	Dudes.push(currentDude);
	console.log("Name:\t" + currentDude.name + "\nProperty:\t" + currentDude.property +
		"\nID:\t" + currentDude.ID);
	
	$("#dudeTable").find("tbody").prepend("<tr><td>" + currentDude.name + 
		"</td><td>" + currentDude.ID +  "</td><td>" + currentDude.property +
		"</td><td>" + currentDude.speed + "</td></tr>");

}
//console.log prints to console
//use selector to output text
function makeTable() {
	//for (i = 0; i < Dudes.length; i++ ) {
	//	console.log(Dudes[i].name, "\t", Dudes[i].ID, "\t", Dudes[i].property, "\t", Dudes[i].speed);
	//}
	$("#dudeTable2").find("tbody").empty();

	for (i = 0; i < Dudes.length; i++ ) {
		$("#dudeTable2").find("tbody").prepend("<tr><td>" + Dudes[i].name + "</td><td>" + Dudes[i].ID +
			"</td><td>" + Dudes[i].property + "</td><td>" + Dudes[i].speed+ "</td></tr>");
	}
}

function makeTable2() {
	$("#dudeTable3").find("tbody").empty();

	for (i = 0; i < Dudes.length; i++ ) {
		$("#dudeTable3").find("tbody").prepend("<tr><td>" + Dudes[i].name + "</td><td>" + Dudes[i].ID +
			"</td><td>" + Dudes[i].property + "</td><td>" + Dudes[i].speed + "</td></tr>");
	}
}

function populateDDs() {
		$("#DD1").empty();

	for (i = 0; i < Dudes.length; i++ ) {
		$("#DD1").prepend("<li>" + Dudes[i].name + "\t" + Dudes[i].speed + "</li>");
		console.log("<li>" + Dudes[i].name + "\t" + Dudes[i].speed + "</li>");
	}
}