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
	this.speed=speedStdev*almostNormal()+speedMean;
	ID++;
}

var Dudes = [];


function makeDude() {
	var currentDude = new Dude();
	Dudes.push(currentDude);
	console.log("Name:\t" + currentDude.name + "\nProperty:\t" + currentDude.property + "\nID:\t" + currentDude.ID);
	
	$("#dudeTable").find("tbody").prepend("<tr><td>" + currentDude.name +  "</td><td>" + currentDude.ID +  "</td><td>" +currentDude.property+  "</td><td>" + currentDude.speed.toFixed(2) + "</td></tr>");

}

	
