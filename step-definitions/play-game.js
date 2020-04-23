// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {

    let game;

    //A new Game creates a new board
    this.Given(/^that a new Game is created$/, function() {
        this.game = new Game();
    });

    this.Then(/^it should create a new Board$/, function() {
        expect(this.game.board).to.not.equal(null, 'game.board is not an instance of Board');
    });

    //_________________________________

    //A board adds 42 divs to the .board element
    //TODO:


    //_________________________________

    // Start the game by calling start method
    this.Given(/^that we start the game$/, function() {
        this.game = new Game();
        this.game.start();
    });

    this.Then(/^game has its own reference inside the board$/, function() {
        expect(this.game.board.game).to.equal(this.game, 'game board has reference of game');
    });

     //_________________________________



    //Right player is told to make a move
    this.Given(/^that game is in progress$/, function() {
        game = new Game();
        game.start();
    });
    this.When(/^the player is (\d+)$/, function(arg1) {
        game.tellTurn(arg1);

    });

    this.Then(/^it should tell right "([^"]*)"$/, function(arg1) {
          let value = game.infoMessage;
          expect(value).to.equal(arg1, 'game board has reference of game');
    });
     //_________________________________

   //Invalid player is asked to make a move
    this.Then(/^turn using (\d+) will produce erorr "([^"]*)"$/, function(player, errorMessage) {
    player = +player;
        expect(
            game.tellTurn(player)
        ).to.throw(Error, errorMessage);

    });

}