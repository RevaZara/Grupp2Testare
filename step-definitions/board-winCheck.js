// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {

  this.After(() => fixNoSuchWindowError(driver));

  let board;

  //  Scenario: when player have four consecutive slots
  //     Given   the game is in progress
  //     When   the player have 4 consecutive slots
  //     Then   it should tell who wins
  this.Given(/^game is in progress$/, () => {
    game = new Game();
    board = new Board(game);
  })

  this.When(/^the player have four consecutive slots$/, async function () {
    await board.makeMove(1);
    await board.makeMove(2);
    await board.makeMove(1);
    await board.makeMove(2);
    await board.makeMove(1);
    await board.makeMove(2);
    await board.makeMove(1);



  });

  this.Then(/^it should tell who wins$/, function () {
    let result = board.winCheck();
    console.log(result);
    expect(result.winner).to.equal(1);
  });

  //  Scenario: Its a draw when slots are full
  //     Given   game is in progress
  //     When    no more slots are available
  //     Then    than it should say draw
  //
  this.When(/^no more slots are available$/, function () {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 7; j++) {
        board.matrix[i][j] = 5
      }
    }
  });

  this.Then(/^than it should say draw$/, function () {
    let result = board.winCheck();
    console.log(result);
    expect(result.winner).to.equal("draw");
  });

  //  Scenario: If game is not done, it must return false
  //      Given   game is in progress
  //      Then    the method should return the value false
  //


  this.Then(/^the method should return the value false$/, function () {
    let result = board.winCheck();
    console.log(result);
    expect(result).to.be.false;
  });





}





