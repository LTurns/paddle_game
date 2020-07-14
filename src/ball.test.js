// require('../src/ball');
import Ball from '../src/ball'

describe('draw', () => {

  test('return the starting position of the ball ', () => {
    const ball = new Ball("game")
    console.log(ball);
    expect(ball.position).toEqual({ x: 10, y: 400});
  })

  // test('return the new position of the ball after update', () => {
  //
  //   var game = {
  //     this.position = {
  //       x: 475,
  //       y: 570
  //     };
  //   };
  //
  //   const ball = new Ball(game)
  //   ball.update("deltaTime")
  //   console.log(ball);
  //   expect(ball.speed).toEqual({ x: 0, y: 0});
  // })
})
