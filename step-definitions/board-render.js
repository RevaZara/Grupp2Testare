// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {
  this.After(() => fixNoSuchWindowError(driver));

  let board;
  let game;
  let removeEventListenerWasCalled = false;
  let startWasCalled = false;
  //   Klassen Board 'render'
  //   Scenario: A board adds 42 divs to the .board element
  //   Given that a new Board is created
  //   Then it should render 42 divs as children of the board element


  this.Given(/^that a new Board is created$/, function () {
    // Empty the contents of .board
    $('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();
  });

  this.Then(/^it should render (\d+) divs as children of the board element$/, function (expectedNumberOfDivs) {
    let divsCreated = $$('.board > div').length;
    expect(divsCreated).to.equal(+expectedNumberOfDivs,
      expectedNumberOfDivs + ' divs were not created as children of the .board element'
    );
  });
  //#   # 1.2 render method
  // Scenario: If a game argument is not an instance of the Game class, the error message "game must be an instance of Game" should be discarded.
  //   Given that a game argument is not an instance of the Game class
  //   Then the error message "game must be an instance of Game" should be discarded  
  this.Given(/^that a game argument is not an instance of the Game class$/, function () {
    game = new Game();
    board = new Board(game);
  });
  this.Then(/^the error message "game must be an instance of Game" should be discarded$/, function () {
    expect(game.board).to.not.equal(game, 'a game argument is an instance of the Game class');
  });
  this.Given(/^That a new game i started and first player has a tag on a position$/, function () {
    // Empty the contents of board
    $('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();

  });
  this.Then(/^Should only one element in the board have css class red$/, async function () {
    await board.makeMove(3);
    let divsWithRedClass = $$('.board > .red').length;
    expect(divsWithRedClass).to.equal(1,
      'There is no element with css class red'
    );
  });
  this.Then(/^Should no element in the board have css class yellow$/, function () {
    let divsWithYellowClass = $$('.board > .yellow').length;
    expect(divsWithYellowClass).to.equal(0,
      'divs have css class yellow'
    );
  });


  this.When(/^The players play the first two moves in a new game$/, async function () {
    await board.makeMove(3); // red player makes a move
    await board.makeMove(3); // yellow player makes a move
  })
  this.Then(/^Should only one element in the board have css class yellow$/, function () {
    let divsWithYellowClass = $$('.board > .yellow');
    expect(divsWithYellowClass.length).to.equal(1,
      'There is not exactly ONE element with the css class yellow after the yellow player has played one move'
    );
  });
  this.Given(/^That new game is started and 42 div elements is created and in turn contains a div elemen$/, function () {
    // Empty the contents of .board
    $('.board').innerHTML = '';
    // create a Game, it will create a Board
    new Game();
  });
  this.Then(/^All div that is inside divs should be empty$/, function () {
    let innerHTML = '';
    const divs = document.querySelectorAll(".board > div > div");
    divs.forEach(div => {
      innerHTML = innerHTML + div.innerHTML;
    });

    expect(innerHTML).to.equal('',
      'divs is not empty'
    );
  });
}