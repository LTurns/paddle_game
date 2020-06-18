import Paddle from './paddle'
import InputHandler from './input'

let canvas = document.getElementById("gameScreen");

let ctx = canvas.getContext("2d");
// ctx short for context.
// The context gives us a rendering context for drawing to the canvas. It essentially
// means we can draw 2d content into this canvas.
// ctx.clearRect(0, 0, 800, 600);
// // this clears everything on the screen - if you specify for it to clear everything.
// // This means that if you update something, the previous version is removed. Otherwise, every version of an object
// // will be on the screen.
//
// // draw a square onto our canvas.
// ctx.fillStyle = '#f00';
// ctx.fillRect(20, 20, 100, 100);
// // the co-ordinates mean on 20x and 20y axis, we are making a square of 100px height and width.
//
// // fillStyle is a method that lets you change the colour of your object ( a long with other features)
// // Every time you make a new drawing it will use the same fillstyle unless you update the fillstyle before the next object.
// ctx.fillStyle = '#0000FF'
// ctx.fillRect(150, 150, 100, 70);

const GAME_WIDTH = 800;

const GAME_HEIGHT = 600;
//to pass into our paddle class (so it knows how big it needs to be when we create it).

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)

new InputHandler(paddle);
// GAME LOOP

let lastTime = 0;

function gameLoop(timestamp){
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltaTime);
  paddle.draw(ctx);

  requestAnimationFrame(gameLoop);
  // this is where the timestamp comes from.Every time this
  // method runs, when the next frame is ready, call the game loop again
  // and pass it the timestamp.
  // It will then again calculate the delta time, pass it into the update function and continue.
  //
}

gameLoop();
// calling the gameloop will then make it start - activates the movement and also gets the
// time stamp going.
// In sum, our gameloop runs every frame and calculates the time that has passed. It clears the screen, updates the paddle and redraws the paddle.
//
