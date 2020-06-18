export default class Paddle {

  constructor(gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.width = 150;
    this.height = 20;
    // the this. refers to each square.

    this.maxSpeed = 7;
    this.speed = 0;

    this.position = {
      x: gameWidth / 2 - this.width / 2,
      // center between 0 and 600 to make in central. To do this we divide the gamewidth by 2. However, as the width is done by squares
      // and is an even number, we also need to divide this.width by 2 to ensure we are in the middle of the square.
      y: gameHeight - this.height - 10
      // so here you are doing game height (800) - this.height (30), - 10 so it is slightly off the page.
    };
  }

moveLeft() {
    this.speed = -this.maxSpeed;
    // this is a really useful way of actually creating movement.
    // we do the exact same for moving right but with +10.
  }
moveRight(){
  this.speed = this.maxSpeed;
  // sets it to the positive instead of the negative (because it is going the other way)
}

draw(ctx){
  ctx.fillStyle = '#0ff'
  ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
}

update(deltaTime){

  if(!deltaTime) return;

  this.position.x += this.speed;
  // regarding speed, this cleverly means that when we move left (with the arrow key), we change the speed
  // to the max speed of -10 (instead of 0 which would be stationary). We then move to this update method
  // where we update the speed and position

  // to avoid the paddle moving beyond the borders of our game we can use:
  if(this.position.x < 0) this.position.x = 0;
    // this means that if the position of the paddle moves beyond 0, set it back to 0.
  if(this.position.x + this.width > this.gameWidth)
  this.position.x = this.gameWidth - this.width
  // this is also very clever - gameWidth references the width of the game. This means
  // that if the paddle touches (is the same width as the gameWidth) it will stop going any further - makes it much neater.

 }

 // deltaTime - sometimes called dt
 // delta time refers to how much time has occured since the last time this has been updated.
 // this means we want to change the position 5 pxs per second.
}

// you can join your export directly to your class - v smooth.
