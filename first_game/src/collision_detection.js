export function detectCollision(ball, gameObject){


  let bottomOfBall = ball.position.y + ball.size;
  let topOfBall = ball.position.y
  let topOfObject = gameObject.position.y
  let leftSideOfObject = gameObject.position.x
  let rightSideOfObject = gameObject.position.x + gameObject.width;
  let bottomSideOfObject = gameObject.position.y + 20;
  // same when doing the ball, we have to add objectWidth so the whole of the ball shows during the collision.

  if(bottomOfBall >= topOfObject &&
   topOfBall <= bottomSideOfObject &&
   ball.position.x >= leftSideOfObject &&
   ball.position.x + ball.size <= rightSideOfObject) {

    return true
  } else {
    return false
  }


}

// we are only returning true or false because this function is used to tell us if there is a collision or not
// not what to do with it.
// using the same collision material we used for paddle and ball, but making them specific
// to object. We also now need to encompass the top of the ball because the ball is not just going
// downwards but upwards.
