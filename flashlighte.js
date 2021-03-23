const convas = document.getElementById('canvas');
// const ctx = convas.getContext('2d');


// var rectangle = new Path2D();
// rectangle.rect(10, 10, 50, 50);
// ctx.strokeStyle = 'red'
// var circle = new Path2D();
// circle.moveTo(125, 35);
// circle.arc(100, 35, 25, 0, 2 * Math.PI);
// // ctx.globalAlpha = 0.2
// // ctx.lineJoin = 'bevel'
// const triangle = new Path2D()
// triangle.moveTo(125,75)
// triangle.lineTo(160,90)
// triangle.lineTo(175,125)
// triangle.closePath();
// ctx.stroke(rectangle);
// ctx.fill(circle);
// ctx.miterLimit = 5
// ctx.strokeStyle = 'blue'
// ctx.lineWidth = 10

// ctx.stroke(triangle);

var ctx = document.getElementById('canvas').getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 400, 200);

convas.addEventListener('mousemove', (e)=>{
    ctx.clearRect(0, 0, 400, 200)
    const img = new Image();
    img.src = 'https://i.pinimg.com/236x/00/c5/34/00c534c781c2ea7a2828206902d208cf.jpg';
    const pattern = ctx.createPattern(img, 'repeat')
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, 400, 200);

    const radgrad = ctx.createRadialGradient(e.offsetX, e.offsetY, 10, 200, 100, 250);
    radgrad.addColorStop(0, 'rgba(0,0,0,0.1)');
    // radgrad.addColorStop(0.94, '#019F62');
    radgrad.addColorStop(0.3, 'black');
    ctx.fillStyle = radgrad;
    ctx.fillRect(0, 0, 400, 200);
})