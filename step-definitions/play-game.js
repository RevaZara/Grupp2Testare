// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {
    
    let game;
    let addEventListenerWasCalled = false;
    let startWasCalled = false;

    //A new Game creates a new board
    this.Given(/^that a new Game is created$/, function() {
        game = new Game();
    });

    this.Then(/^it should create a new Board$/, function() {
        expect(game.board).to.not.equal(null, 'game.board is not an instance of Board');
    });

    //_________________________________
//    klassen Game 'constroctor'
    //Scenario: The right methods should be called when constructing a new Game
    //When we create a new instance of Game
    //Then the constructor should call the method addEventListener
    //And the constructor should call the method start


    

    class TestGame extends Game {

       
        addEventListener() {
        
            addEventListenerWasCalled = true;
        }

        start() {
            startWasCalled = true;
        }

    }

    this.When(/^we create a new instance of Game$/, function () {
        new TestGame();
    });

    this.Then(/^the constructor should call the method addEventListener$/, function () {
        expect(addEventListenerWasCalled,
            'The method addEventListener was not called by the constructor in Game'
        ).to.be.true;
    });

    this.Then(/^the constructor should call the method start$/, function () {
        expect(startWasCalled,
            'The method start was not called by the constructor in Game'
        ).to.be.true;
    });

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
        let value = $(".message").innerHTML;
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
        let value = $(".message").innerHTML;
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

    //klassen  addEventlistener 

   // Scenario: A bottom with css class again is clicked.
   // Given that a user clicked in bottom with class again.
  //Then A method start should be colled. 
    this.Given(/^that a user clicked in bottom with class again\.$/, function () {
        $('.message').click();
    });
    this.Then(/^A method start should be colled\.$/, function () {
        expect(game.board).to.not.equal(null, 'game.board is not an instance of Board');
    
    });

}