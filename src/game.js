import Paddle from './paddle'
import InputHandler from './input'
import Ball from './ball'
// import Brick from './brick'
import { buildLevel, level1 } from './levels'
// this must be how you import functions directly (not classes)

// This is where we introduce our states:
// Game states are used to indicate the structure of the game (if it's runnning/paused/over etc).
const GAMESTATE = {
  PAUSED: 0,
  RUNNING: 1,
  MENU: 2,
  GAMEOVER: 3
}

export default class Game {
  // we create the game class so that we are able to instantiate creating the objects and starting the game.
  // it makes it cleaner and is good refactorig.

  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
    this.gamestate = GAMESTATE.MENU;
    // We want the game to start with menu - they hit the spacebar and it starts the game.
     this.paddle = new Paddle(this)
     this.ball = new Ball(this);
     // this on it's own refers to the class you are in - so this, in this instance, is game.
    new InputHandler(this.paddle, this);
  }

   start(){
   // let brick = new Brick(this, {x: 20, y: 20});
   // here we are creating a new brick - we passed the position as a parameter so can simply state the position of the brick here.
   // we no longer have to specify "GAMEHEIGHT AND GAMEWIDTH" because we have specified them at the top/
   // this means, instead, we can just call this.
   let bricks = buildLevel(this, level1);
     // this is highly clever and effective - here we are creating multiple objects and pushing them to an array.
     // this means that we can create loads of objects simultaneously - so useful. It resembles the gameObjects array below,
     // however, there we are not creating new objects, but ensuring every object passes through an update and draw method.
   this.gameObjects = [this.ball, this.paddle, ...bricks];
   // the three dots is called a sprit operator - it enables us to add an array to an existing array.
   this.gamestate = GAMESTATE.RUNNING;
  }

  update(deltaTime){

    if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.MENU) return;

    // return and a semi-colon on its own (like above), essentially means we are returning nothing -
    // if gamestate is paused - return nothing (don't continue the game).

   this.gameObjects.forEach(object => object.update(deltaTime));
   this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
   // this single line is very clever - it essentially means that any objects marked for deletion
   // will not be filtered and updated, therefore they will disappear from view.

// this is SUPER clever! Here we are putting the objects into an array, therefore,
// instead of having to call everything twice, we can use a forEach method and have everything completed under one instruction.
   // this.paddle.update(deltaTime);
   // this.ball.update(deltaTime);

  }

  togglePause(){

    if(this.gamestate === GAMESTATE.PAUSED){

      this.gamestate = GAMESTATE.RUNNING
      // This is for the toggle effect - if it's paused and you click key 27 again,
      // it will undo the pause and revert back to running - and vice versa (see below)
    } else {
      this.gamestate = GAMESTATE.PAUSED
    }

  }

  draw(ctx){
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    this.gameObjects.forEach(object => object.draw(ctx));


    // to make sure the game is paused and not frozen, we can change the canvas colour, like below:
    if(this.gamestate === GAMESTATE.PAUSED){

    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fill();

     ctx.font = "30px Arial";
     ctx.fillStyle = "white";
     ctx.textAlign = "center";
     ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
  }

  if(this.gamestate === GAMESTATE.MENU){

    ctx.rect(0, 0, this.gameWidth, this.gameHeight);
    ctx.fillStyle = "rgba(0,0,0,1)";
    ctx.fill();

   ctx.font = "30px Arial";
   ctx.fillStyle = "white";
   ctx.textAlign = "center";
   ctx.fillText("Press SPACEBAR to Start", this.gameWidth / 2, this.gameHeight / 2);
 }
}
}
// these methods can now draw and update every object in our world.
