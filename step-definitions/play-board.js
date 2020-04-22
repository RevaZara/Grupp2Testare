// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function() {
    let board;
    let g;
    this.Given(/^that we create a new Board$/, () => {
        this.g = new Game();
        this.board = new Board(g);
    });

    this.Then(/^property game should get value from the constructor$/, () => {
        expect(this.board.game).to.equal(g, 'game property is not equal');
    });

    this.Then(/^the property matrix should have size six into seven, and zero value at each index$/, () => {
        // check if main array is 6
        expect(this.board.matrix.length).to.equal(6, 'metrics row length must be 6');
        for (i = 0; i < this.board.matrix.length; i++) {
            expect(this.board.matrix[i].length).to.equal(7, 'metrics column length must be 7');
            for (j = 0; j < this.board.matrix[i].length; j++) {
                expect(this.board.matrix[i][j]).to.equal(0, 'value at all index must be 0');
            }
        }
    });

    this.Then(/^the property currentPlayer should have value 1$/, () => {
        expect(this.board.currentPlayer).to.equal(1, 'the current player is not equal to 1');
    })

    this.Then(/^the property playInProgress should have the value false$/, () => {
        expect(this.board.playInProgress).to.equal(false, ' playInProgress should have the value false');
    })

}