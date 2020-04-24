// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {
    let board;
    let game;

// Scenario: Properties should be set according to the api-specifications
//    Given that we create a new Board
//    Then property game should get value from the constructor
//    And the property matrix should have size six into seven, and zero value at each index
//    And the property currentPlayer should have value 1
//    And the property playInProgress should have the value false
   
    this.Given(/^that we create a new Board$/, () => {
        game = new Game();
        board = new Board(game);
    });

    this.Then(/^property game should get value from the constructor$/, () => {
        expect(board.game).to.equal(game, 'game property is not equal');
    });

    this.Then(/^the property matrix should have size six into seven, and zero value at each index$/, () => {
        // check if main array is 6
        expect(board.matrix.length).to.equal(6, 'metrics row length must be 6');
        for (i = 0; i < board.matrix.length; i++) {
            expect(board.matrix[i].length).to.equal(7, 'metrics column length must be 7');
            for (j = 0; j < board.matrix[i].length; j++) {
                expect(board.matrix[i][j]).to.equal(0, 'value at all index must be 0');
            }
        }
    });

    this.Then(/^the property currentPlayer should have value 1$/, () => {
        expect(board.currentPlayer).to.equal(1, 'the current player is not equal to 1');
    })

    this.Then(/^the property playInProgress should have the value false$/, () => {
        expect(board.playInProgress).to.equal(false, ' playInProgress should have the value false');
    })



    //____________________________

    //   Klassen Board 'render'
    //   Scenario: A board adds 42 divs to the .board element
    //   Given that a new Board is created
    //   Then it should render 42 divs as children of the board element


    this.Then(/^that a new Board is created$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });

    this.Then(/^it should render 42 divs as children of the board element$/, function(callback) {
      // Write code here that turns the phrase above into concrete actions
      callback(null, 'pending');
    });






// // Scenario: Start the game by calling start method
// //   Given that we start the game
// //   Then then new board is created
// //   And game has its own reference inside the board
//    this.Given(/^that we start the game$/, () => {
//        this.g = new Game();
//        this.board = new Board(g);
//    });
//    this.Then(/^then new board is created$/, () => {
//        expect(this.board.game).to.equal(g, 'new board should be created');
//    });
//
//    this.Then(/^game has its own reference inside the board$/, () => {
//        // check if game has its own reference inside the board
//        expect(this.board.reference).to.equal(g, 'game has its own reference inside the board');
//    });
//
//// Scenario: When game ends winner must be announced
////   When that game is finished 1
////   Then it should tell the 'Röd vann!'
//this.Given(/^When game ends winner must be announced$/, () => {
//    this.g = new Game();
//    this.board = new Board(g);
//  });
//  this.Then(/^When that game is finished 1$/, () => {
//    expect(this.board.game).to.equal(g, 'When that game is finished 1');
//  });
//
//  this.Then(/^it should tell the 'Röd vann!'$/, () => {
//    expect(this.board.game).to.equal(g, 'it should tell "the Röd vann!"');
//  });
//
//  // Scenario: When game ends winner must be announced
//  //   When that game is finished 2
//  //   Then it should tell the 'Gul vann!'
//  this.Given(/^When game ends winner must be announced$/, () => {
//    this.g = new Game();
//    this.board = new Board(g);
//  });
//  this.Then(/^When that game is finished 2$/, () => {
//    expect(this.board.game).to.equal(g, 'When that game is finished 2');
//  });
//
//  this.Then(/^Then it should tell the 'Gul vann!'$/, () => {
//    expect(this.board.game).to.equal(g, 'it should tell the "Gul vann!"');
//  });
//
//  // Scenario: When game ends winner must be announced
//  //   When that game is finished 'draw'
//  //   Then it should tell the 'Det blev oavgjort!'
//  this.Given(/^When game ends winner must be announced$/, () => {
//    this.g = new Game();
//    this.board = new Board(g);
//  });
//  this.Then(/^When that game is finished 'draw'$/, () => {
//    expect(this.board.game).to.equal(g, 'When that game is finished "draw"');
//  });
//
//  this.Then(/^Then it should tell the 'Det blev oavgjort!'$/, () => {
//    // check if game has its own reference inside the board
//    expect(this.board.game).to.equal(g, 'it should tell the "Det blev oavgjort!"');
//  });

}