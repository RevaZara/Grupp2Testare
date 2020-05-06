// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {
  this.After(() => fixNoSuchWindowError(driver));

  let board;
  let game;

  this.Given(/^that a game argument is an instance of the Game class$/, function () {
    game = new Game();
    board = new Board(game);
  });
  this.Then(/^the method should receive the game argument$/, function () {
    expect(game.board).to.equal(game.board, 'a game argument is an instance of the Game class');
  });
  // addeventlensner 
  game = new Game();
  board = new Board(game);
  this.Given(/^that a user clicked in element with class board$/, async function () {
    await board.makeMove(3);
  });
  this.Then(/^A method makeMove should be colled with column nummber$/, function () {
    expect(board.makeMove(0)).to.not.equal(false, 'board.makeMove() is not with correct column nummber');
  });
  //
  this.Given(/^That addeventlistener is called$/, function () {
    board.addEventListener();
  });
  this.Then(/^The event should be saved as a property named listener$/, function () {
    expect(board.listener).to.not.equal(null, 'listener should have value');
  });
  this.Then(/^Call method removEventListener$/, function () {
    board.removeEventListener();
  });
  this.Then(/^Check that the property listener have null value$/, function () {
    expect(board.listener).to.equal(null, 'listener should not have value');
  });

  // removEventListener
  this.Given(/^That the method removEventListener is called$/, function () {
    board.removeEventListener();
  });
  this.Then(/^Try to click on element with css class board$/, async function () {
    await board.makeMove(6);
  });
  this.Then(/^Function makeMove should not be called$/, function () {
    expect(board.makeMove(0)).to.not.equal(true, 'board.makeMove() should not be called');
  });


}
