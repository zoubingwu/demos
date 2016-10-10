$(function(){
	var index = 0;
	function changePic(){
		$("#wrap>a>img").eq(index).fadeIn().siblings().fadeOut();
		$("#wrap>div>a").eq(index).addClass("active")			
						.siblings().removeClass("active");
		var newhref = $("#wrap>div>a").eq(index).attr("href");
		$("#container").attr("href",newhref);
		index++;
		if(index>4) index = 0;
	}
	var autoChange = setInterval(changePic,1000);
	
	$("#wrap>div>a").mouseover(function(){
		index = $(this).attr("title") - 1;
		changePic();
	}).eq(0).mouseover();

	$("#wrap").mouseover(function(){
		if(autoChange){
			clearInterval(autoChange);
		}
	});

	$("#wrap").mouseout(function(){
		autoChange = setInterval(changePic,1000)
	})


})