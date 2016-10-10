window.onload = function(){
	var pic = document.getElementById("pic");

	pic.onmousemove = function(event) {
		// mouse coord relative to window
		var x = event.clientX, y = event.clientY,

			// rotate origin coordinate relative to window
			picX = pic.offsetWidth/2 + pic.getBoundingClientRect().left,
			picY = pic.offsetHeight/2 + pic.getBoundingClientRect().top,

			// mouse coordinate relative to rotate origin
			paramX = x - picX, 
			paramY = y - picY,

			// rotate angle
			angleY = Math.abs(paramX/pic.offsetWidth/2 * 30),
			angleX = Math.abs(paramY/pic.offsetHeight/2 * 30);

		if (paramX>=0) angleY = angleY;
		else angleY = -1 * angleY;

		if (paramY>=0) angleX = -1 * angleX;
		else angleX = angleX;

		pic.style.webkitTransform = "rotateX(" + angleX + "deg) rotateY(" + angleY + "deg)";

	}

	pic.onmouseout = function() {
		pic.style.webkitTransform = "rotateX(0) rotateY(0)";
	}
}