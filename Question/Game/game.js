// --- Setup Variables ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('scoreDisplay');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreDisplay = document.getElementById('finalScore');

let target = { x: canvas.width / 2, y: canvas.height / 2, size: 15 }; // The Player (Green Circle)
let chaser = { x: 50, y: 50, size: 20, speed: 2.5 }; // The AI (Red Square)

let gameLoopId;
let score = 0;
let isGameOver = false;

// --- Event Listeners ---
// Target movement: The target's position is updated to the mouse cursor's position
canvas.addEventListener('mousemove', (e) => {
    // e.offsetX and e.offsetY give coordinates relative to the canvas
    target.x = e.offsetX;
    target.y = e.offsetY;
});

// --- Game Functions ---

/**
 * Resets game state and starts the game loop.
 */
function startGame() {
    // Reset state
    score = 0;
    isGameOver = false;
    gameOverScreen.classList.add('hidden');
    scoreDisplay.textContent = 'Score: 0';
    
    // Reset chaser position (start away from the center)
    chaser.x = 50;
    chaser.y = 50;
    
    // Start/Restart the main game loop
    if (gameLoopId) {
        cancelAnimationFrame(gameLoopId);
    }
    gameLoopId = requestAnimationFrame(gameLoop);
}

/**
 * Updates the game state (movement, collision, score).
 */
function update() {
    if (isGameOver) return;

    // 1. Chaser Movement (moves toward the Target)
    
    // Calculate the vector (direction and distance)
    const dx = target.x - chaser.x;
    const dy = target.y - chaser.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // If the chaser is not at the target, move it
    if (distance > 0) {
        // Normalize the vector (get the direction components)
        const unitX = dx / distance;
        const unitY = dy / distance;

        // Move the chaser by its speed in the normalized direction
        chaser.x += unitX * chaser.speed;
        chaser.y += unitY * chaser.speed;
    }

    // 2. Collision Detection (Simple circular/square approximation)
    const minDistance = target.size + chaser.size;
    if (distance < minDistance) {
        isGameOver = true;
        endGame();
    }

    // 3. Score Update (increases based on how many times update is called)
    score++;
    scoreDisplay.textContent = `Score: ${Math.floor(score / 60)}`; // Divide by 60 for seconds (assuming 60 FPS)
}

/**
 * Draws all game elements onto the canvas.
 */
function draw() {
    // Clear the canvas on every frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the Target (Green Circle - follows cursor)
    ctx.fillStyle = 'green';
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.size, 0, Math.PI * 2);
    ctx.fill();

    // Draw the Chaser (Red Square)
    ctx.fillStyle = 'red';
    // The rectangle drawing uses the top-left corner, so adjust x/y by half size
    ctx.fillRect(chaser.x - chaser.size, chaser.y - chaser.size, chaser.size * 2, chaser.size * 2);
}

/**
 * The main game loop function.
 */
function gameLoop() {
    update();
    draw();
    
    if (!isGameOver) {
        gameLoopId = requestAnimationFrame(gameLoop);
    }
}

/**
 * Displays the game over screen and final score.
 */
function endGame() {
    cancelAnimationFrame(gameLoopId);
    finalScoreDisplay.textContent = `You survived for ${Math.floor(score / 60)} seconds.`;
    gameOverScreen.classList.remove('hidden');
}

// Start the game immediately when the page loads
startGame();


