const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

let score = 0;
stars = [];

const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function createStar() {
    const isVoid = Math.random() < 0.2;

    const star = {
        x: Math.random() * 620 + 40,
        y: Math.random() * 470 + 40,
        targetX: Math.random() * 620 + 40,
        targetY: Math.random() * 470 + 40,
        isVoid: isVoid,
        createdAt: Date.now(),
    };
    stars.push(star);
}

function drawFunction() {
    ctx.fillStyle = '#0d0d1e';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const now = Date.now();
    
    for (let i = 0; i < stars.length; i++) {
        if (stars[i].isVoid) {
            ctx.drawImage(voidImg, stars[i].x - 40, stars[i].y - 40, 80, 80);
        } else {
            ctx.drawImage(starImg, stars[i].x - 40, stars[i].y - 40, 80, 80);
        }
        
        const age = now - stars[i].createdAt;
        const maxAge = stars[i].isVoid ? 7000 : 5000;
        const timeLeft = maxAge - age;
        
        if (timeLeft < 2000) {
            const pulsePhase = (now % 900) / 900;
            const pulseOpacity = pulsePhase < 0.5 ? pulsePhase * 2 : (1 - pulsePhase) * 2;
            ctx.strokeStyle = `rgba(255, 100, 100, ${pulseOpacity})`;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(stars[i].x, stars[i].y, 50, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    
    requestAnimationFrame(drawFunction);
}

function moveStar() {
    const now = Date.now();
    
    for (let i = stars.length - 1; i >= 0; i--) {
        const age = now - stars[i].createdAt;
        const maxAge = stars[i].isVoid ? 7000 : 5000;
        
        if (age > maxAge) {
            stars.splice(i, 1);
            continue;
        }
        
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
            if (stars[i].isVoid) {
                alert('Oh no! You touched a Dark Void!\n-5 Points!');
                score -= 5;
                scoreDisplay.textContent = score;
                stars.splice(i, 1);
                return;
            }
            else {
                stars.splice(i, 1);
                alert('You caught a Star!\n+10 Points!');
                score += 10;
                scoreDisplay.textContent = score;
            }
            break;
        }
    }
});

for (let i = 0; i < 3; i++) {
    createStar();
}

setInterval(createStar, 800);

setInterval(moveStar, 30);

drawFunction();