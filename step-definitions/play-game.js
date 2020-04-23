// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {

  let game;

  this.Given(/^that a new Game is created$/, function () {
    game = new Game();
  });

  this.Then(/^it should create a new Board$/, function () {
    expect(game.board).to.be.an.instanceof(Board,
      'game.board is not an instance of Board'
    );
  });

  this.Given(/^that a new Board is created$/, function () {
    // Empty the contents of .board
    $$('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();
  });

  this.Then(/^it should render (\d+) divs as children of the board element$/, function (expectedNumberOfDivs) {
    let divsCreated = $$('.board > div').length;
    expect(divsCreated).to.equal(+expectedNumberOfDivs,
      expectedNumberOfDivs + ' divs were not created as children of the .board element'
    );
  });

  this.Given(/^that the game is in progress$/, function () {
    game = new Game();
  })

  this.When(/^the player is (\d+)$/, function (player) {
    game.tellTurn(+player);
  });

  this.Then(/^it should tell right (<message>)$/, function (expectedMessage) {
    let message = $$(".message").innerHTML = '';
    expect(message).to.equal(+expectedMessage, expectedMessage + 'player must be 1 or 2');
  });

  this.Given(/^that a new game is in progress$/, function () {
    game = new Game();
  })

  this.When(/^the player is <player> it should throw erorr <message>$/, function (player, message) {
    game.tellTurn(player);
    expect(message).to.throw();
  });

}