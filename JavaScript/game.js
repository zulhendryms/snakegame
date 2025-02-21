// Game constants
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE_LENGTH = 4;
const GAME_SPEED = 100;

// Game variables
let canvas;
let ctx;
let snake;
let food;
let direction;
let score;
let gameLoop;
let gameRunning;

// Initialize the game
function init() {
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    startGame();
    document.addEventListener('keydown', handleKeyPress);
}

// Start or restart the game
function startGame() {
    // Initialize snake in the middle of the canvas
    const startX = Math.floor(GRID_SIZE / 2);
    const startY = Math.floor(GRID_SIZE / 2);
    snake = [];
    for (let i = 0; i < INITIAL_SNAKE_LENGTH; i++) {
        snake.push({ x: startX - i, y: startY });
    }
    
    direction = 'right';
    score = 0;
    gameRunning = true;
    
    // Generate initial food
    generateFood();
    
    // Update score display
    updateScore();
    
    // Hide game over screen
    document.getElementById('game-over').style.display = 'none';
    
    // Start game loop
    if (gameLoop) clearInterval(gameLoop);
    gameLoop = setInterval(gameStep, GAME_SPEED);
}

// Handle keyboard input
function handleKeyPress(event) {
    const key = event.key.toLowerCase();
    
    if (key === 'arrowup' && direction !== 'down') direction = 'up';
    else if (key === 'arrowdown' && direction !== 'up') direction = 'down';
    else if (key === 'arrowleft' && direction !== 'right') direction = 'left';
    else if (key === 'arrowright' && direction !== 'left') direction = 'right';
}

// Generate new food position
function generateFood() {
    while (true) {
        food = {
            x: Math.floor(Math.random() * GRID_SIZE),
            y: Math.floor(Math.random() * GRID_SIZE)
        };
        
        // Check if food spawned on snake
        let foodOnSnake = false;
        for (let segment of snake) {
            if (segment.x === food.x && segment.y === food.y) {
                foodOnSnake = true;
                break;
            }
        }
        
        if (!foodOnSnake) break;
    }
}

// Update score display
function updateScore() {
    document.getElementById('score').textContent = `Score: ${score}`;
    document.getElementById('final-score').textContent = score;
}

// Game over handling
function gameOver() {
    gameRunning = false;
    clearInterval(gameLoop);
    document.getElementById('game-over').style.display = 'block';
}

// Main game loop step
function gameStep() {
    if (!gameRunning) return;
    
    // Calculate new head position
    const head = { ...snake[0] };
    switch (direction) {
        case 'up': head.y--; break;
        case 'down': head.y++; break;
        case 'left': head.x--; break;
        case 'right': head.x++; break;
    }
    
    // Check for collisions
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        gameOver();
        return;
    }
    
    // Check for self-collision
    for (let segment of snake) {
        if (head.x === segment.x && head.y === segment.y) {
            gameOver();
            return;
        }
    }
    
    // Add new head
    snake.unshift(head);
    
    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score += 10;
        updateScore();
        generateFood();
    } else {
        snake.pop(); // Remove tail if no food eaten
    }
    
    // Draw game state
    draw();
}

// Draw game state
function draw() {
    // Clear canvas
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw snake
    ctx.fillStyle = '#4CAF50';
    for (let segment of snake) {
        ctx.fillRect(
            segment.x * CELL_SIZE,
            segment.y * CELL_SIZE,
            CELL_SIZE - 1,
            CELL_SIZE - 1
        );
    }
    
    // Draw food
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(
        food.x * CELL_SIZE,
        food.y * CELL_SIZE,
        CELL_SIZE - 1,
        CELL_SIZE - 1
    );
}

// Restart game function (called from HTML)
function restartGame() {
    startGame();
}

// Start the game when the page loads
window.onload = init;
