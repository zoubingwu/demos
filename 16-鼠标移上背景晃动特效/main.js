var bg = document.getElementsByClassName("container")[0];

var l1 = document.getElementsByClassName("l1")[0];
var l2 = document.getElementsByClassName("l2")[0];
var l3 = document.getElementsByClassName("l3")[0];


bg.onmousemove = function(event) {

	var x = event.clientX, y = event.clientY;
	var oX = bg.offsetWidth/2 + bg.getBoundingClientRect().top;
	var oY = bg.offsetHeight/2 + bg.getBoundingClientRect().left;

	var offsetX = Math.abs(x-oX) / (bg.offsetWidth/2) * 20;
	var offsetY = Math.abs(y-oY) / (bg.offsetHeight/2) * 20;

	if (x - oX > 0) offsetX = -1 * offsetX;
	if (y - oY > 0) offsetY = -1 * offsetY;

	// background
	offsetXPercent = 50 - offsetX + "%";
	offsetYPercent = 50 - offsetY + "%";
	bg.style.backgroundPositionX = offsetXPercent;
	bg.style.backgroundPositionY = offsetYPercent;

	// layers
	transX = offsetX * 2 + "px";
	transY = offsetY * 2 + "px";
	l1.style.transform = "translateX(" + transX + ") translateY(" + transY + ") translateZ(100px)"
	l2.style.transform = "translateX(" + transX + ") translateY(" + transY + ") translateZ(200px)"
	l3.style.transform = "translateX(" + transX + ") translateY(" + transY + ") translateZ(300px)"
}
bg.onmouseout = function() {
	bg.style.backgroundPositionX = "50%";
	bg.style.backgroundPositionY = "50%";
	l1.style.transform = "translateX(0) translateY(0) translateZ(100px)";
	l2.style.transform = "translateX(0) translateY(0) translateZ(200px)";
	l3.style.transform = "translateX(0) translateY(0) translateZ(300px)";
}