export default class InputHandler {
// we use input as a class for all user inputs (including arrows and stopping the game etc)
 constructor(paddle){

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
     }
   });
   // this will listen to a keydown event on the arrow keys


   // stopping the paddle:
   document.addEventListener('keyup', (event) => {
  // this is SO clever - essentially key-up means releasing the key.
  // Here we are stating that when the user releases the key, we want the game to stop.

     switch(event.keyCode) {
       case 37:
       paddle.stop();
       // once again, we will need to create this function in Paddle. 
       break;

       case 39:
       paddle.stop();
       break;
     }
   });

 }

}
