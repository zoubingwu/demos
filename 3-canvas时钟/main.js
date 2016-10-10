var ctx = document.getElementById("myCanvas").getContext("2d");

function clockPlate(){
	// 1/60 marks
	for(var i = 0; i < 60; i++){
		ctx.beginPath();
		ctx.moveTo(600,300);
		ctx.arc(600,300,200,i*6*Math.PI/180,(i+1)*6*Math.PI/180);
		ctx.lineWidth = "2";
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,190,0,2*Math.PI);
	ctx.fillStyle = "white";
	ctx.fill();

	// 1/12 marks
	for(var j = 0; j < 12; j++){
		ctx.beginPath();
		ctx.moveTo(600,300);
		ctx.arc(600,300,200,j*30*Math.PI/180,(j+1)*30*Math.PI/180);
		ctx.lineWidth = "7";
		ctx.stroke();
	}
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,180,0,2*Math.PI);
	ctx.fillStyle = "white";	
	ctx.fill();

	// center
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,10,0,2*Math.PI);
	ctx.fillStyle = "#000";
	ctx.fill();

	// numbers
	ctx.font = "30px Courier New";
	ctx.fillStyle = "black";
	ctx.fillText("12",582,150);
	ctx.fillText("6",590,470);
	ctx.fillText("9",425,310);
	ctx.fillText("3",755,310);
}

function tiktok(){
	var date = new Date(),
		h = date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds(),
		ms = date.getMilliseconds(),

		hRad = (-90 + 30 * (h + m / 60)) * Math.PI / 180,
		mRad = (-90 + 6 * (m + s / 60)) * Math.PI / 180,
		sRad = (-90 + 6 * (s + ms / 1000)) * Math.PI / 180;

	// clear canvas
	ctx.clearRect(0,0,1200,600);

	// plate
	clockPlate();

	// digital time
	var hh, mm, ss;
	h < 10 ? hh = "0" + h : hh = h;
	m < 10 ? mm = "0" + m : mm = m;
	s < 10 ? ss = "0" + s : ss = s;
	var time = hh + ":" + mm + ":" + ss;
	ctx.font = "30px Courier New";
	ctx.fillStyle = "black";
	ctx.fillText(time,530,220);

	// sec pointer
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,175,sRad,sRad);
	ctx.strokeStyle = "black";
	ctx.lineWidth = "2";
	ctx.stroke();

	// min pointer
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,135,mRad,mRad);
	ctx.strokeStyle = "black";
	ctx.lineWidth = "4";
	ctx.stroke();

	// hour pointer
	ctx.beginPath();
	ctx.moveTo(600,300);
	ctx.arc(600,300,95,hRad,hRad);
	ctx.strokeStyle = "black";
	ctx.lineWidth = "6";
	ctx.stroke();

	setTimeout(tiktok, 10);
}

window.onload = tiktok();