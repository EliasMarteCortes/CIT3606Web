const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let score = 0;

const starImg = new Image();
starImg.src = 'star.png';

const voidImg = new Image();
voidImg.src = 'void.png';

function drawFunction() {
            ctx.fillStyle = '#0d0d1e';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
}

drawFunction();