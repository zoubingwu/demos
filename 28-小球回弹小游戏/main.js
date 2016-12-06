window.onload = function() {
	var game;
	document.getElementsByTagName('button')[0].onclick = function() {
		game = init();
	}
	document.onkeyup = function(event) {
		if (event.keyCode === 187) {
			game.faster();
		}
		if (event.keyCode === 189) {
			game.slower();
		}
	}
}


function init() {
	var iSpeedX = 5;
	var iSpeedY = 5;
	var ball = document.getElementById('ball');
	var block = document.getElementById('block');
	document.getElementsByTagName('button')[0].style.display = 'none';
	ball.style.display = 'block';
	block.style.display = 'block';

	window.onmousemove = function(event) {
		var x = (event.clientX / document.documentElement.clientWidth) * 100;
		block.style.left = x + '%';
	}

	var init = setInterval(function() {
		var l = ball.offsetLeft + iSpeedX;
		var t = ball.offsetTop + iSpeedY;

		// 边界检测，下边框接到则改变方向，碰到左右和上边框时改变方向，下边框时没接住则游戏结束
		if (t >= document.documentElement.clientHeight - ball.offsetHeight - block.offsetHeight) {
			if (l >= block.offsetLeft && l <= (block.offsetLeft + block.offsetWidth)) {
				iSpeedY *= -1;
			}
		}

		if (t > document.documentElement.clientHeight - ball.offsetHeight) {
			clearInterval(init);
			alert('Game Over!');
		} else if (t < 0) {
			iSpeedY *= -1;
		}

		if (l > document.documentElement.clientWidth - ball.offsetWidth) {
			iSpeedX *= -1;
		} else if (l < 0) {
			iSpeedX *= -1;
		}

		ball.style.left = l + 'px';
		ball.style.top = t + 'px';
	}, 20);

	return {
		getSpeed: function() {
			return iSpeedX;
		},
		faster: function() {
			iSpeedX = iSpeedX > 0 ? iSpeedX + 2 : iSpeedX - 2;
			iSpeedY = iSpeedY > 0 ? iSpeedY + 2 : iSpeedY - 2;
		},
		slower: function() {
			if (iSpeedX > 5 || iSpeedX < -5) {
				iSpeedX = iSpeedX > 0 ? iSpeedX - 2 : iSpeedX + 2;
			}
			if (iSpeedY > 5 || iSpeedY < -5) {
				iSpeedY = iSpeedY > 0 ? iSpeedY - 2 : iSpeedY + 2;
			}
		},
	}

}