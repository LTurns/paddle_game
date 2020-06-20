import Paddle from './paddle'
import InputHandler from './input'
import Ball from './ball'

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
   // we no longer have to specify "GAMEHEIGHT AND GAMEWIDTH" because we have specified them at the top/
   // this means, instead, we can just call this.

   this.gameObjects = [this.ball, this.paddle];
  }

  update(deltaTime){
   this.gameObjects.forEach(object => object.update(deltaTime));

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
