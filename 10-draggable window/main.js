window.onload = function(){
	var bar = document.getElementsByTagName("span")[0];
	var box = document.getElementsByTagName("div")[0];

	bar.onmousedown = function(event){
		var x = event.clientX - box.offsetLeft;
		var y = event.clientY - box.offsetTop;

		bar.onmousemove = function(e){
			box.style.left =  (e.clientX - x) + "px";
			box.style.top = (e.clientY - y) + "px";
		}
		bar.onmouseup = function(e){
			bar.onmousemove = null;
			bar.onmouseup = null;
		}
	}

}