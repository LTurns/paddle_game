import Paddle from '../src/paddle'

describe('draw', () => {

  test('return the starting position of the paddle ', () => {

    const paddle = new Paddle("game")
    console.log(paddle);
    expect(paddle.position).toEqual({ x: 475, y: 570});
  })

  test('moves the paddle left', () => {
    const paddle = new Paddle("game")
    var current_speed = paddle.speed
    paddle.moveLeft()
    expect(paddle.speed).toEqual( -7 );
    // expect(ball.position).toEqual({ x: 14, y: 398});
  })

  test('moves the paddle right', () => {
    const paddle = new Paddle("game")
    var current_speed = paddle.speed
    paddle.moveRight()
    expect(paddle.speed).toEqual( 7 );
    // expect(ball.position).toEqual({ x: 14, y: 398});
  })

  test('stops the paddle', () => {
    const paddle = new Paddle("game")
    var current_speed = paddle.speed
    paddle.stop()
    expect(paddle.speed).toEqual( 0 );
  })

})
