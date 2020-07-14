import { detectCollision } from './collision_detection'

export default class Ball {

   constructor(game){
     // we need to take in gameWidth and gameHeight so we can make sure the ball bounces off the walls of the canvas.
     // This info is now in the game class so we can simply take in the game class as a parameter.
      this.image = document.getElementById("img_ball")
      this.position = { x: 10, y: 400}
      this.speed = { x: 4, y: -2};
      // the 400 and -2 are here so that the ball starts off at the bottom of the screen instead of the top.
      this.size = 18
      this.gameWidth = game.gameWidth
      this.gameHeight = game.gameHeight
      // now the ball knows how big the game world is. We add gameHegiht and gameWidth as parameters when we create the ball object in index.js
      // this means we are giving it an x speed and a y speed, so it can move across the page in each direction.
      this.game = game;
      // creating this.game means we can now use the game class
      // within any of our other functions. It means we have access to all of the game's methods in this class.
      // e.eg. we could console.log(this.game.paddle.position.x) and it would tell us the position of the paddle at every movement.
      // This shows that by putting everything in a game class, and then calling that game class in our other classes,
      // we are able to get all the information we need (about positions and objects etc).
   }


   draw(ctx){
     ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
     // positions are the x & y co-ordinates, 15, 15 is the width and height of the ball itself.
     // Its great how the two methods connect with each other. One updates the co-ordiantes and the other draws
     // the image at the updated co-ordinates.
     // drawimage is cleverquite a clever method, in that it simply redraws the image to create the illusion of movement.
   }

   update(deltaTime){
     // ball takes deltaTime so we can know how far to move
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
    // clever way of literally updating the position depending on the speed.

    // checks wall on left or right
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0){
      this.speed.x =- this.speed.x;
      // need to incorporate the size too so that when the ball hits the side of the canvas some of it doesn't disappear - it's a clean hit.
    }
      // awesome - here we simply reverse the speed if it hits the side of the canvas (width). We can then do the same for y.
      // checks wall on top or bottom
      if (this.position.y + this.size > this.gameHeight || this.position.y < 0){
        this.speed.y =- this.speed.y;
    }

    // checks collision with paddle. - Bottom of ball needs to collide with the top of the paddle.
    // let bottomOfBall = this.position.y + this.size;
    // let topOfPaddle = this.game.paddle.position.y;
    // let leftSideOfPaddle = this.game.paddle.position.x;
    // let rightSideOfPaddle = this.game.paddle.position.y;
    //
    // if(bottomOfBall >= topOfPaddle &&
    //  this.position.x >= leftSideOfPaddle &&
    //  this.position.x + this.size <= rightSideOfPaddle) {


    if(detectCollision(this, this.game.paddle)){
      this.speed.y = -this.speed.y;
      this.position.y = this.game.paddle.position.y - this.size;
    }
   }


}
