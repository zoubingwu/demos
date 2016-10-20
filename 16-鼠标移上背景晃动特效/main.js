var bg = document.getElementsByClassName("container")[0];
var box = document.getElementsByClassName("outer")[0];


bg.onmousemove = function(event) {
	var x = event.clientX, y = event.clientY;
	var oX = bg.offsetWidth/2 + bg.offsetLeft;
	var oY = bg.offsetHeight/2 + bg.offsetTop;

	var offsetX = Math.abs(x-oX) / (bg.offsetWidth/2) * 10;
	var offsetY = Math.abs(y-oY) / (bg.offsetHeight/2) * 10;

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
	box.style.transform = "translateX(" + transX + ") translateY(" + transY + ")"
}
bg.onmouseout = function() {
	bg.style.backgroundPositionX = "50%";
	bg.style.backgroundPositionY = "50%";
	box.style.transform = "translateX(0) translateY(0)";
}