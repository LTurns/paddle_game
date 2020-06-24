export default class InputHandler {
// we use input as a class for all user inputs (including arrows and stopping the game etc)
 constructor(paddle, game){

   document.addEventListener('keydown', (event) => {
     // alert(event.keyCode);
     // the alert is super clever - it means that when you press down on this key,
     // it will give you its keycode (i.e down is 37 etc.)

     switch(event.keyCode) {
       case 37:
       paddle.moveLeft();
       break;
       // from here we need to create the moveLeft function in our paddle.
       case 39:
       paddle.moveRight();
       break;
       // the breaks are essential because it means you can alter your keys -
       // otherwise you could change keys and it won't do anythng on the screen.
       case 27:
       game.togglePause();
       break;
       // don't need a key-up for escape key because it is not being held down - it uses toggle instead.
       // come against before - toggle between 2 scenarios, paused and unpaused.
       // 27 is the escape key.
       case 32:
       game.start();
       break;

     }
   });
   // this will listen to a keydown event on the arrow keys


   // stopping the paddle:
   document.addEventListener('keyup', (event) => {
  // this is SO clever - essentially key-up means releasing the key.
  // Here we are stating that when the user releases the key, we want the game to stop.

     switch(event.keyCode) {
       case 37:
       if(paddle.speed < 0)
       paddle.stop();
       // we need the if statements here to ensure that the paddle is stopping in the route that it is going
       // this is so the whole thing becomes much smoother.
       // once again, we will need to create this function in Paddle by putting speed to 0.
       break;

       case 39:
       if(paddle.speed > 0)
       // we are altering between greater than and less than in left and right because
       // left refers to -10 and right refers to 10 (remember).
       paddle.stop();
       break;
     }
   });

 }

}
