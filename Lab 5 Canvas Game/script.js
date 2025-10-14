const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
let starX = 100;
let starY = 100;
let starTargetX = 400;
let starTargetY = 300;
let starVisible = true;

const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function drawFunction() {
    ctx.fillStyle = '#0d0d1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (starVisible) {
        ctx.drawImage(starImg, starX - 40, starY - 40, 80, 80);
    }
    
    requestAnimationFrame(drawFunction);
}

function moveStar() {
    const distanceX = starTargetX - starX;
    const distanceY = starTargetY - starY;
    const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (dist < 5) {
        starTargetX = Math.random() * 620 + 40;
        starTargetY = Math.random() * 470 + 40;
    } else {
        starX += (distanceX / dist) * 2;
        starY += (distanceY / dist) * 2;
    }
}

setInterval(moveStar, 30);

drawFunction();