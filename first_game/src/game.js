import Paddle from './paddle'
import InputHandler from './input'
import Ball from './ball'
import Brick from './brick'
import { buildLevel, level1 } from './levels'
// this must be how you import functions directly (not classes)

export default class Game {
  // we create the game class so that we are able to instantiate creating the objects and starting the game.
  // it makes it cleaner and is good refactorig.

  constructor(gameWidth, gameHeight){
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;
  }

   start(){
   this.paddle = new Paddle(this)
   this.ball = new Ball(this);
   new InputHandler(this.paddle);
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
  }

  update(deltaTime){
   this.gameObjects.forEach(object => object.update(deltaTime));
   this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
   // this single line is very clever - it essentially means that any objects marked for deletion
   // will not be filtered and updated, therefore they will disappear from view.

// this is SUPER clever! Here we are putting the objects into an array, therefore,
// instead of having to call everything twice, we can use a forEach method and have everything completed under one instruction.
   // this.paddle.update(deltaTime);
   // this.ball.update(deltaTime);

  }

  draw(ctx){
    // this.paddle.draw(ctx);
    // this.ball.draw(ctx);
    this.gameObjects.forEach(object => object.draw(ctx));
  }
}
// these methods can now draw and update every object in our world.
