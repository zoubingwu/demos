var mapp = new Array();
// 第一个元素是脑袋坐标，新元素不断添加到最后
var r = [
	[5, 6],
	[5, 5],
	[5, 4],
	[5, 3]
];

var co = 39; //默认方向

var len = 4;

//初始食物坐标
var x = Math.floor((Math.random() * 40));
var y = Math.floor((Math.random() * 40));

//绘制地图函数
function map() {
	var tab = document.getElementById("tab");
	//绘制地图
	for (var i = 0; i < 40; i++) {
		tr = tab.insertRow(-1);
		mapp[i] = tr;
		for (var j = 0; j < 40; j++) {
			td = tr.insertCell(-1);
			mapp[i][j] = td;
		}
	}

	//绘制蛇
	for (var i = 0; i < r.length; i++) {
		mapp[r[i][0]][r[i][1]].className = "snake";
	}

	//绘制食物
	mapp[x][y].className = "food";
}

//蛇移动函数
function move() {
	//蛇最后一节改为白底
	mapp[r[len - 1][0]][r[len - 1][1]].className = "";

	//蛇从最后一节开始坐标继承前一节的坐标
	for (var i = len - 1; i > 0; i--) {
		r[i][0] = r[i - 1][0];
		r[i][1] = r[i - 1][1];
	}

	//碰到食物后蛇增加一节，添加一个元素到蛇数组最后并且重新绘制食物
	if (x == r[0][0] && y == r[0][1]) {
		r.push([r[len - 1][0], r[len - 1][1]]);
		len++;
		x = Math.floor(Math.random() * 40);
		y = Math.floor(Math.random() * 40);
		mapp[x][y].className = "food";
	}

	//加入键盘事件，用方向键来控制蛇前进的方向,方向相反时按键无效  
	document.onkeyup = function(event) {
		if (event.keyCode >= 37 && event.keyCode <= 40 && (Math.abs(event.keyCode - co) != 2)) {
			co = event.keyCode;
		}
	}

	//根据方向，重新设定蛇数组首元素的坐标，从而进行移动 
	switch (co) {
		case 37: //左
			r[0][1]--;
			break;
		case 38: //上
			r[0][0]--;
			break;
		case 39: //右
			r[0][1]++;
			break;
		case 40: //下
			r[0][0]++;
			break;
	}

	//检查游戏是否结束
	if (check()) {
		alert("GAME OVER! \nYOU GOT " + (r.length - 4) + " POINTS!");
		clearInterval(go);
	}

	//重新绘制蛇
	for (var i = 0; i < r.length; i++) {
		mapp[r[i][0]][r[i][1]].className = "snake";
	}
}


//检查游戏是否结束函数，判断蛇是否出界或者撞到自己
function check() {
	//出界
	if (r[0][0] > 39 || r[0][0] < 0 || r[0][1] > 39 || r[0][1] < 0) {
		return true;
	}

	//碰到自己
	for (var i = 1; i < r.length; i++) {
		if (r[0][0] == r[i][0] && r[0][1] == r[i][1]) {
			return true;
		}
	}
	return false;
}

//设置定时器以移动，间隔即蛇的速度
var go = setInterval(move, 200);