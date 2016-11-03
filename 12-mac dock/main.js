window.onload = function(){
	var dock = document.getElementById("dock");
	var imgs = document.getElementsByTagName("img");
	var imgsWidth = [];

	//设置图片的初始大小为原图的一半，并把原图大小存入数组
	for (var i = 0; i < imgs.length; i++) {
		imgsWidth.push(imgs[i].offsetWidth);
		imgs[i].width = parseInt(imgs[i].offsetWidth / 2);
	}



	window.onmousemove = function(event){
		
		for (var i = 0; i < imgs.length; i++) {
			// 获得鼠标位置到每张图片中心部位的水平和垂直方向上的距离
			var x = event.clientX - imgs[i].offsetLeft - imgs[i].offsetWidth / 2;
			var y = event.clientY - dock.offsetTop - imgs[i].offsetTop - imgs[i].offsetHeight / 2;

			// 第一种方式：勾股定理算出鼠标到图片中心位置的距离，距离越远图片变化比例越小，距离越小图片变化比例越大
			// var scale = 1 - Math.sqrt(x * x + y * y) / 500;

			// 第二种方式（mac实际上鼠标垂直移动不会放大图标）：图片添加transition属性使变化更平滑
			// 鼠标在y轴方向上的位置变化不会放大图标，同时y轴方向离图标超过一定距离时鼠标水平移动不会触发放大镜效果。
			if (Math.abs(y) < 100) {
				var scale = 1 - Math.abs(x)/600;
			} else {
				var scale = 0.5;
			}

			// 比例小于0.5即比初始的比例还小的让比例维持为0.5，以免使图片比初始更小
			if (scale < 0.5) scale = 0.5;

			// 设置图片的宽度按比例变化
			imgs[i].width = scale * imgsWidth[i];
		}
	}
}