// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {
    this.After(() => fixNoSuchWindowError(driver));

    let board;
    let game;
    let removeEventListenerWasCalled = false;
    let startWasCalled = false;

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

    //#   # 1.3 game's method tell turn
    //Scenario: Properties should be set according to the api-specifications
    // Given that a new game is created
    // Then it should set the game with the value from the game argument
    // And it should set matrix into an array of 6 elements
    // And each element should in turn be an array of 7 elements, each element having a value of 0
    // And it should set currentPlayer to value 1
    // And it should set playInProgress to the value false
    this.Given(/^that a new game is created$/, () => {
        game = new Game();
        board = new Board(game);
    });

    this.Then(/^it should set the game with the value from the game argument$/, () => {
        expect(board.game).to.equal(game, 'game property is not equal');
    });

    this.Then(/^it should set matrix into an array of 6 elements$/, () => {
        expect(board.matrix.length).to.equal(6, 'it should matrix into an array of 6 elements');
        for (i = 0; i < board.matrix.length; i++) {
            expect(board.matrix[i].length).to.equal(7, 'in turn it must be an array of 7 elements');
            for (j = 0; j < board.matrix[i].length; j++) {
                expect(board.matrix[i][j]).to.equal(0, 'each element should have a value of 0');
            }
        }
    });

    this.Then(/^each element should in turn be an array of 7 elements, each element having a value of 0$/, () => {
        expect(board.matrix.length).to.equal(6, 'it should matrix into an array of 6 elements');
        for (i = 0; i < board.matrix.length; i++) {
            expect(board.matrix[i].length).to.equal(7, 'in turn it must be an array of 7 elements');
            for (j = 0; j < board.matrix[i].length; j++) {
                expect(board.matrix[i][j]).to.equal(0, 'each element should have a value of 0');
            }
        }
    });

    this.Then(/^it should set currentPlayer to value 1$/, () => {
        expect(board.currentPlayer).to.equal(1, 'the current player is equal to 1');
    })

    this.Then(/^it should set playInProgress to the value false$/, () => {
        expect(board.playInProgress).to.equal(false, ' playInProgress should have the value false');
    })

}

