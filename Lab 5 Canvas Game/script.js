const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

star = {
    x: 100,
    y: 100,
    targetX: 400,
    targetY: 300,
    visible: true,
};


const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function drawFunction() {
    ctx.fillStyle = '#0d0d1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (star.visible) {
        ctx.drawImage(starImg, star.x - 40, star.y - 40, 80, 80);
    }
    
    requestAnimationFrame(drawFunction);
}

function moveStar() {
    const distanceX = star.targetX - star.x;
    const distanceY = star.targetY - star.y;
    const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    if (dist < 5) {
        star.targetX = Math.random() * 620 + 40;
        star.targetY = Math.random() * 470 + 40;
    } else {
        star.x += (distanceX / dist) * 2;
        star.y += (distanceY / dist) * 2;
    }
}

canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const dx = mouseX - star.x;
    const dy = mouseY - star.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist < 40 && star.visible) {
        star.visible = false;
        alert('You caught a Star!');
    }
});

setInterval(moveStar, 30);

drawFunction();