const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
let starX = 100;
let starY = 100;
let starTargetX = 400;
let starTargetY = 300;

const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function drawFunction() {
    ctx.fillStyle = '#0d0d1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(starImg, starX - 40, starY - 40, 80, 80);

    requestAnimationFrame(drawFunction);
}

drawFunction();