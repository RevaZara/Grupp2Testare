class Board {
    constructor(game) {
        this.game = game;
        this.matrix = createMatrix();
        this.currentPlayer = 1;
        this.playInProgress = false;
    }
    async makeMove(column) {}
    winCheck() {}
    render() {}
    markWin(combo) {}
    addEventListener() {}
    removeEventListener() {}

}

function createMatrix() {
    let arr = [];
    for (i = 0; i < 6; i++) {
        let temp = [];
        for (j = 0; j < 7; j++) {
            temp.push(0);
        }
        arr.push(temp);
    }
    return arr;
}
// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Board = Board
};