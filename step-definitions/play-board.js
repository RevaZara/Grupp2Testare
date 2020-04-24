// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {
    let board;
    let game;
    
    
//    klassen Borad 'constroctor'
//    Scenario: Properties should be set according to the api-specifications
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

    
}