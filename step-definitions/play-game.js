// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {

    let game;

    //A new Game creates a new board
    this.Given(/^that a new Game is created$/, function() {
        game = new Game();
    });

    this.Then(/^it should create a new Board$/, function() {
        expect(game.board).to.not.equal(null, 'game.board is not an instance of Board');
    });

    //_________________________________

    // Start the game by calling start method
    this.Given(/^that we start the game$/, function() {
        game = new Game();
        game.start();
    });

    this.Then(/^game has its own reference inside the board$/, function() {
        expect(game.board.game).to.equal(game, 'game board has reference of game');
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

    this.Then(/^it should tell right "([^"]*)"$/, function(message) {
        let value = game.infoMessage;
        expect(value).to.equal(message);
    });

    //_________________________________

    //Invalid player is asked to make a move
    this.Then(/^turn using (\d+) will produce error "([^"]*)"$/, function(player, errorMessage) {
        player = +player;
        expect(
            () => game.tellTurn(player)
        ).to.throw(Error, errorMessage);

    });



     //_________________________________
     //When game ends winner must be announced

    this.When(/^that game is finished (\d+)$/, function(winner) {
        game.over(winner)
    });

    this.When(/^that game is finished "([^"]*)"$/, function(winner) {
        game.over(winner)
    });

    this.Then(/^it should tell the "([^"]*)"$/, function(arg1) {
        let value = game.infoMessage;
        expect(value).to.equal(arg1);
    });

 //_________________________________
   //Invalid player wins
   this.Then(/^(\d+) wins will produce error "([^"]*)"$/, function (player, message) {
       player = +player;
       expect(
           () => game.over(player)
       ).to.throw(Error, message);
       });

}