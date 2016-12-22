var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var r = width / 2;
var rem = width / 200;
var PI = Math.PI;
var sin = Math.sin;
var cos = Math.cos;

function drawBackground() {
    ctx.save();
    ctx.translate(r, r);
    ctx.beginPath();
    ctx.lineWidth = 10 * rem;
    ctx.arc(0, 0, r - ctx.lineWidth / 2, 0, 2 * PI, false);
    ctx.stroke();

    var hourNum = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
    ctx.font = 18 * rem + 'px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    hourNum.forEach(function(num, i){
        var rad = 2 * PI / 12 * i;
        var x = (r - 30 * rem) * cos(rad);
        var y = (r - 30 * rem) * sin(rad);
        ctx.fillText(num, x, y);
    });

    for (var i = 0; i < 60; i++) {
        var rad = 2 * PI / 60 * i;
        var x = (r - 18 * rem) * cos(rad);
        var y = (r - 18 * rem) * sin(rad);
        ctx.beginPath();
        if (i % 5 === 0) {
            ctx.fillStyle = '#000';
        } else {
            ctx.fillStyle = '#ccc';
        }
        ctx.arc(x, y, 2 * rem, 0, 2*PI, false);
        ctx.fill();
    }
}

function drawHourPointer(hour, min, sec) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * PI / 12 * hour;
    var mrad = 2 * PI / 12 / 60 * min;
    var srad = 2 * PI / 12 / 60 / 60 * sec;
    ctx.rotate(rad + mrad + srad);
    ctx.lineWidth = 6 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r / 2);
    ctx.stroke();
    ctx.restore();
}
function drawMinPointer(minute , sec) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * PI / 60 * minute;
    var srad = 2 * PI / 60 / 60 * sec;
    ctx.rotate(rad + srad);
    ctx.lineWidth = 4 * rem;
    ctx.lineCap = 'round';
    ctx.moveTo(0, 10);
    ctx.lineTo(0, -r + 38 * rem);
    ctx.stroke();
    ctx.restore();
}
function drawSecPointer(second) {
    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = 'red'
    var rad = 2 * PI / 60 * second;
    ctx.rotate(rad);
    ctx.moveTo(-2 * rem, 20 * rem);
    ctx.lineTo(2 * rem, 20 * rem);
    ctx.lineTo(1, -r + 18 * rem * rem);
    ctx.lineTo(-1, -r + 18 * rem);
    ctx.fill();
    ctx.restore();
}

function drawCenter() {
    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.arc(0, 0, 3, 0, 2 * PI, false);
    ctx.fill();
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    drawBackground();
    drawHourPointer(hour, min, sec);
    drawMinPointer(min, sec);
    drawSecPointer(sec);
    drawCenter();
    ctx.restore();
    setTimeout(draw, 1000);
}

draw();
