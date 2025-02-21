# Snake Game

A classic Snake game implemented in JavaScript with HTML5 Canvas. Control the snake, eat food to grow longer, and try to achieve the highest score without hitting the walls or yourself!

## Features

- Smooth snake movement with arrow key controls
- Score tracking system
- Food spawning system that avoids snake's body
- Game over detection for wall and self-collision
- Clean and modern UI with a responsive design
- Instant restart capability

## How to Play

1. Use the arrow keys to control the snake's direction:
   - ↑ (Up Arrow): Move up
   - ↓ (Down Arrow): Move down
   - ← (Left Arrow): Move left
   - → (Right Arrow): Move right

2. Eat the red food squares to grow longer and increase your score
3. Avoid hitting the walls or your own tail
4. Try to achieve the highest score possible!

## Game Rules

- Each food item eaten adds 10 points to your score
- The game ends if the snake hits the wall or itself
- The snake's speed remains constant throughout the game
- The snake cannot reverse direction (e.g., cannot go right when moving left)

## Technical Implementation

### Technologies Used

- HTML5 Canvas for game rendering
- JavaScript for game logic
- CSS for styling and layout

### Game Constants

- Grid Size: 20x20
- Cell Size: 20px
- Initial Snake Length: 4 segments
- Game Speed: 100ms per move

## Setup and Running

1. Clone or download the repository
2. Open `index.html` in a modern web browser
3. The game will start automatically
4. Click "Play Again" to restart after game over

## Browser Compatibility

The game works in all modern browsers that support HTML5 Canvas:
- Chrome
- Firefox
- Safari
- Edge

## Future Improvements

- Add difficulty levels
- Implement high score tracking
- Add sound effects
- Include power-ups
- Add mobile touch controls

## License

This project is open source and available for anyone to use and modify.
