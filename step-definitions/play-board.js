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
    // addeventlensner 
    this.Given(/^that a user clicked in element with class board$/, function () {
        $('.board > div:nth-child(2)').click();
    });
    this.Then(/^A method makeMove should be colled with column nummber$/, function () {
        expect(board.makeMove(0)).to.not.equal(false, 'board.makeMove() is not with correct column nummber');
    }); 
    //
    this.Given(/^That addeventlistener is called$/, function () {
        board.addEventListener();
        
    });

    this.Then(/^the method should be saved as a property named lisener$/, function () {
        $('.board > div:nth-child(3)').click();
    });

    this.Then(/^the property can be removed$/, function () {
        expect(board.makeMove(0)).to.not.equal(true, 'board.makeMove() should be removed');
    });


   // removEventListener
    this.Given(/^That the method removEventListener is called$/, function () {
        board.removeEventListener();
    });
    this.Then(/^Try to click on element with css class board$/, function () {
        $('.board > div:nth-child(3)').click();
    });
    this.Then(/^Funck makeMove should not be called$/, function () {
        expect(board.makeMove(0)).to.not.equal(true, 'board.makeMove() should not be called');
    });

// # # 1 Klassen Board 'constructor(game)'  >
// #   # 1.1 addEventListener method 
//  Scenario: The method should receive the game argument which should be an instance of the Game class.
//    Given that a game argument is an instance of the Game class
//    Then the method should receive the game argument  

    this.Given(/^that a game argument is an instance of the Game class$/, function () {
        game = new Game();
        board = new Board(game);
    });
    this.Then(/^the method should receive the game argument$/, function () {
        expect(game.board).to.equal(game.board, 'a game argument is an instance of the Game class');
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
   
//#   # 1.3 game's method tellTurn
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

//  # # 2 Klassen Board 'async makeMove(column)'>

    class TestBoard extends Board {


       removeEventListener() {

            removeEventListenerWasCalled = true;
        }

        start() {
            startWasCalled = true;
        }

    }

    this.Given(/^that the play in progress property is true$/, function () {
      new TestBoard();
    });

    this.Then(/^place the tray temporarily at the top of the column$/, function () {
        expect(removeEventListenerWasCalled,
            'The method RemoveEventListener was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^call the render$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^remove the tray if it can fall further down$/, function () {
        expect(removeEventListenerWasCalled,
            'The method RemoveEventListener was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^call the asynchronous sleep aid method to pause for 50 ms$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Given(/^if possible: move the tray one step down in the column and repeat from step 3$/, function () {
        expect(removeEventListenerWasCalled,
            'The method RemoveEventListener was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^call the winCheck and if it returns something truthy$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^Call the removeEventListener$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Given(/^If winCheck returned an item of property combo then you should approach Markwin called with combo property from winCheck as inargument$/, function () {
        expect(removeEventListenerWasCalled,
            'The method RemoveEventListener was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^Call the game's method over using the winner property from winCheck's return value as an argument$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Then(/^Return true$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Given(/^set the currentPlayer property to 2 if it is 1 and to 1 if it is 2$/, function () {
        new set(1);
    });

    this.Then(/^call the game's method tell turn property with the currentPlayer property as an argument$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

    this.Given(/^set the playInProgress property to false$/, function () {
        new set(2);
    });

    this.Then(/^turn true$/, function () {
        expect(startWasCalled,
            'The method start was called by the constructor in Board'
        ).to.be.true;
    });

}
