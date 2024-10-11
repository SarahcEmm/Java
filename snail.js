const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let basketWidth = 80;
let basketHeight = 20;
let basketX = (canvas.width - basketWidth) / 2;

let snails = [];
let score = 0;
let gameOver = false;

// Load snail image
const snailImage = new Image();
snailImage.src = 'snail.png'; // Path to your snail image

document.addEventListener('keydown', moveBasket);

function moveBasket(event) {
    const basketSpeed = 30; // Speed of the basket
    if (event.key === 'ArrowLeft' && basketX > 0) {
        basketX -= basketSpeed; // Move left
    } else if (event.key === 'ArrowRight' && basketX < canvas.width - basketWidth) {
        basketX += basketSpeed; // Move right
    }
}

function createSnail() {
    const snailX = Math.random() * (canvas.width - 30); // Random x position
    snails.push({ x: snailX, y: 0, width: 30, height: 20 }); // Create snail
}

function drawBasket() {
    ctx.fillStyle = '#b9663d';
    ctx.fillRect(basketX, canvas.height - basketHeight, basketWidth, basketHeight);
}

function drawSnails() {
    snails.forEach((snail) => {
        ctx.drawImage(snailImage, snail.x, snail.y, 60, 40); // Draw the snail image
        snail.y += 3; // Move snail down
    });
}

function checkCollision() {
    snails.forEach((snail, index) => {
        if (
            snail.y + 20 >= canvas.height - basketHeight && // Adjusted height check
            snail.x + 30 >= basketX && // Adjusted width check
            snail.x <= basketX + basketWidth
        ) {
            score++;
            snails.splice(index, 1); // Remove caught snail
        } else if (snail.y > canvas.height) {
            gameOver = true; // Snail fell off screen
        }
    });
}

function updateScore() {
    document.getElementById('score').innerText = `Score: ${score}`;
}

function gameLoop() {
    if (gameOver) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over!', canvas.width / 4, canvas.height / 2);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    drawBasket();
    drawSnails(); // Draw snails as images
    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

setInterval(createSnail, 1000); 
gameLoop(); 