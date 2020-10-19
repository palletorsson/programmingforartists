var height = 720
var width = 1000
var radius = 24

var w = window.innerWidth;
var h = window.innerHeight;
// select the canvas element created in the html
var canvas = document.getElementById('my_dataviz');
console.log(canvas); 
// Get the 'context'
const context = canvas.getContext('2d');
var canvas = document.getElementsByTagName('canvas')[0];
canvas.width  = width ;
canvas.height = height ;

const dx1 = radius * 2 * Math.sin(Math.PI / 3);
const dy1 = radius * 1.5;
const dx2 = radius * Math.SQRT2;
const dy2 = dx2;
const n = Math.ceil(width / Math.min(dx1, dx2) / 2);
const m = Math.ceil(height / Math.min(dy1, dy2) / 2);
const t0 = Date.now();

var change = function(){

    context.fillStyle = "#333";
    context.fillRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.beginPath();
    const tl = (Date.now() - t0) / 75000 % 1;
    for (let j = -m; j <= m; ++j) {
    const y1 = j * dy1;
    const y2 = j * dy2;
    for (let i = -n; i <= n; ++i) {
        const x1 = (i + (j & 1) / 2) * dx1;
        const x2 = i * dx2;
        const tp = Math.sqrt(i * i + j * j) / Math.sqrt(n * n + m * m);
        const tb = tl > 0.5 ? tp * 3 + 5 - tl * 8 : tl * 8 - tp * 3;
        const ti = d3.easeQuadInOut(Math.max(0, Math.min(1, tb)));
        const x = x1 * ti + x2 * (1 - ti);
        const y = y1 * ti + y2 * (1 - ti);
        context.moveTo(x + radius, y);
        context.arc(x, y, radius, 0, 2 * Math.PI);
    }
    }
    context.fillStyle = "#eee";
    context.fill("evenodd");
    context.restore();

}

var myListener = function () {
  
    // do stuff
    change()
};

document.addEventListener('mousemove', myListener, false);