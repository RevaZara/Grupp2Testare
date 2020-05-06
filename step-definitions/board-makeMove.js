// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {

    this.After(() => fixNoSuchWindowError(driver));

    let board;

    //Scenario: After making a move the current player is changed
    //    Given the game is in progress
    //    When player makes a move
    //    Then the current player is changed

    this.Given(/^the game is in progress$/, () => {
        game = new Game();
        board = new Board(game);
    })

    this.When(/^player makes a move$/, async function () {
        await board.makeMove(5);
    });


    this.Then(/^the current player is changed$/, () => {
        expect(board.currentPlayer).to.equal(2, "the current player is not changed");
    })

    //  Scenario:  After making a move matrix will have last move information
    //    Given    the game is in progress
    //    When     player makes a move
    //    Then    the matrix will have last move information
    this.Then(/^the matrix will have last move information$/, () => {
        expect(board.matrix[5][5]).to.equal(1, "matrix is not updated as it should be");
    })

    //Scenario: after making a move the message will be changeed
    //  Given   the game is in progress
    //  When    player makes a move
    //  Then    the message will be Gul tur
    this.Then(/^the message will be Gul tur$/, () => {
        let x = $('.message').innerHTML;
        expect(x).to.equal("Player 2 tur.");
    })


    //Scenario: Making a move with wrong coulmn no will generate an error
    //  Given  the game is in progress
    //  Then   make move with wrong coulmn will generate an error
    this.Then(/^make move with wrong coulmn will generate an error$/, async function () {
        expect(await board.makeMove(8).throwCheck).to.throw(
            Error,
            'column must be an integer between 0 and 6',
            'Expected makeMove to throw an error on out of bound column'
        );
    });

    // Scenario: After completing amake move with both players the message should be Red tur
    // Given   the game is in progress
    // When    both players makes a move
    // Then    the message should be rod tur

    this.When(/^both players makes a move$/, async function () {
        await board.makeMove(1);
        await board.makeMove(2);

    })
    this.Then(/^the message should be rod tur$/, () => {
        let x = $(".message").innerHTML
        expect(x).to.equal("Player 1 tur.");

    })

}