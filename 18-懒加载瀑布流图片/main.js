var arr = [
	{src:"img/1.jpg"},
	{src:"img/2.jpg"},
	{src:"img/3.jpg"},
	{src:"img/4.jpg"},
	{src:"img/5.jpg"},
	{src:"img/6.jpg"},
	{src:"img/7.jpg"},
	{src:"img/8.jpg"},
	{src:"img/9.jpg"},
	{src:"img/10.jpg"},
	{src:"img/11.jpg"},
	{src:"img/12.jpg"}
];

var i = 0;
var sum = "";

function load(){
	i++;
	if (i < 12) {
		for (;i < 12; i++) {
			createImg();
		}
	} else {
		sum = i;
		for (;i < sum + 3; i++){
			createImg();
		}
	}
}

function createImg() {
	var div = document.createElement("div");
	var img = new Image();

	img.src = arr[i % arr.length].src;
	img.style.cssText = "opacity: 0;transform: scale(0);";
	div.appendChild(img);

	getList($("ul li")).append(div);

	(function(img){
		setTimeout(function(){
			img.style.cssText = "opacity: 1; transform: scale(1);";
		}, 100);
	})(img);
}

function getList(obj) {
	var length = obj.length;
	var h = Infinity;
	var getList;
	for (var i = 0;i < length; i++) {

		if (obj.eq(i).height() < h) {
			h = obj.eq(i).height();
			getList = obj.eq(i);
		}
	}

	return getList;
}

var scrollH, scrollT;
var windowH = $(window).height();
$(window).scroll(function(){
	scrollH = document.body.scrollHeight;
	scrollT = document.body.scrollTop;
	if (windowH + scrollT + 200 > scrollH) {
		load();
	}
})

load();

