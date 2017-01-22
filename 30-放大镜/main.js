var container = document.getElementById('container');
var pic = document.getElementById("pic");
var mark = document.getElementsByClassName('mark')[0];
var magnifier = document.getElementById('magnifier');

container.addEventListener("mouseover", function(e){
	magnifier.style.display = "block";
	mark.style.display = "block";
})

container.addEventListener("mouseout", function(e){
	magnifier.style.display = "none";
	mark.style.display = "none";
})

container.addEventListener("mousemove", function(e){
	var posL = e.clientX - container.offsetLeft - 5 - mark.offsetWidth/2;
	var posT = e.clientY - container.offsetTop - 5 - mark.offsetHeight/2;
	if (posL < 0) posL = 0;
	if (posT < 0) posT = 0;
	mark.style.left = posL + 'px';
	mark.style.top = posT + 'px';
	magnifier.style.backgroundPosition = posL/container.offsetWidth*100+'% '+posT/container.offsetHeight*100+'%';
})