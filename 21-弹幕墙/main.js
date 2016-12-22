var setMove = null;
var btn = document.getElementsByTagName("button")[0];
btn.onclick = function () {
    send();
};
document.onkeyup = function (event) {
    if (event.keyCode === 13) send();
}

function send() {
    //创建一个新div用来放弹幕内容
    var danmu = document.createElement("span");
    var wall = document.getElementById('wall');
    var text  = document.getElementById("text");

    danmu.className = "dm";//设置弹幕的样式
    wall.appendChild(danmu);	//把弹幕的容器添加到弹幕墙中；

    if (text.value != "") {

        danmu.innerHTML = text.value; //把text的内容放进新div里；

        //随机新弹幕的随机坐标；
        var x = 602;
        var y = Math.random()*380;

        //随机新弹幕的随机颜色
        var r = parseInt(Math.random()*256);
        var g = parseInt(Math.random()*256);
        var	b = parseInt(Math.random()*256);

        //设置弹幕的坐标 颜色；
        danmu.style.top = y + "px";
        danmu.style.left = x + "px";
        danmu.style.color = "rgb(" + r + "," + g + "," + b + ")";

        //发送后清空输入框；
        text.value="";

        //声明移动x
        var moveX = x;
        function move() {
            danmu.style.left = moveX + "px";
            moveX--;
            //判断 如果弹幕移出wall，该div会被删除；
            if (danmu.offsetLeft < -10000){
                clearInterval(setMove);
                danmu.remove();
            }
        }
        //定时器
        setMove = setInterval(move, 10);
    }
}
