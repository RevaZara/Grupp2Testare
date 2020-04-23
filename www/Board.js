class Board {
    constructor(game) {
        this.game = game;
        this.matrix = createMatrix();
        this.currentPlayer = 1;
        this.playInProgress = false;
        this.addEventListener();
        render();

        // this.game.tellTurn(currentPlayer);
    }
    async makeMove(column) {
        
        if (column < 0 || column > 6)
            throw new Error('column must be an integer between 0 and 6');
        
        if (this.playInProgress === true)
            return null;
        
        if (checkIfColumFull(column, this.matrix))
            return false;
        console.log(column);
        // this.playInProgress = true;

        
     }
    winCheck() { }
    markWin(combo) { }
    addEventListener() {
        this.listener = event => { 
            let $solt = event.target.closest('.board > div');
            if (!$solt) { 
                return;
            }
            let $allslots = [...$$('.board > div')];
            let index = $allslots.indexOf($solt);
            let column = index % 7;   
            this.makeMove(column);
        }
        $('.board').addEventListener('click', this.listener);
    }
    removeEventListener() { }
}
function checkIfColumFull(column, matrix) { 
    let columnValues = [];
    for (var i = 0; i < matrix.length; i++) {
        columnValues.push(matrix[i][column]);
    }
    return columnValues.filter(val => val > 0).length === 6;
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
function render() {
    for (let i = 0; i < 7; i++) {
        for (let j = 0; j < 6; j++) {
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            div1.append(div2);
            $('.board').append(div1);
        }
    }
}



// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Board = Board
};