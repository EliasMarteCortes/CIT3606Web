const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;
stars = [];

const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function createStar() {
    const star = {
        x: Math.random() * 620 + 40,
        y: Math.random() * 470 + 40,
        targetX: Math.random() * 620 + 40,
        targetY: Math.random() * 470 + 40,
    };
    stars.push(star);
}

function drawFunction() {
    ctx.fillStyle = '#0d0d1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < stars.length; i++) {
        ctx.drawImage(starImg, stars[i].x - 40, stars[i].y - 40, 80, 80);
    }
    
    requestAnimationFrame(drawFunction);
}

function moveStar() {
    for (let i = 0; i < stars.length; i++) {
        const distanceX = stars[i].targetX - stars[i].x;
        const distanceY = stars[i].targetY - stars[i].y;
        const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (dist < 5) {
            stars[i].targetX = Math.random() * 620 + 40;
            stars[i].targetY = Math.random() * 470 + 40;
        } else {
            stars[i].x += (distanceX / dist) * 2;
            stars[i].y += (distanceY / dist) * 2;
        }
    }
}

canvas.addEventListener('mousedown', function(e) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    for (let i = 0; i < stars.length; i++) {
        const distanceX = mouseX - stars[i].x;
        const distanceY = mouseY - stars[i].y;
        const dist = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        if (dist < 40) {
            stars.splice(i, 1);
            alert('You caught a Star!');
            break;
        }
    }
});

for (let i = 0; i < 3; i++) {
    createStar();
}

setInterval(createStar, 2000);

setInterval(moveStar, 30);

drawFunction();