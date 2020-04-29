class Board {
    constructor(game) {
        this.game = game;
        this.matrix = this.createMatrix();
        this.currentPlayer = 1;
        this.playInProgress = false;
        this.addEventListener();
        this.render();
        this.game.tellTurn(this.currentPlayer);
        //this.listener;
    }

    start() {
        this.board = new Board(this);
    }

    async makeMove(column) {
        column = +column
        console.log("make-move" + column)
        if (column < 0 || column > 6)
            throw new Error('column must be an integer between 0 and 6');

        if (this.playInProgress === true)
            return null;

        //  The method should return false if the move cannot be done because the selected column is full.
        if (this.checkIfColumnFull(column, this.matrix)) {
            return false;
        }

        //Set the playInProgress property to true.
        this.playInProgress = true;
        //Place the tray temporarily at the top of the column.
        this.matrix[0][column] = this.currentPlayer;
        //Call the render
        this.render();
        //Call the asynchronous sleep aid method to pause for 50 ms.
        await sleep(100);

        //Remove the tray if it can fall further down.
        for (let i = 1; i < 6; i++) {
            if (this.matrix[i][column] === 0) {
                this.matrix[i - 1][column] = 0;
                this.matrix[i][column] = this.currentPlayer;
                this.render();
                await sleep(100);
            }
        }

        let checkResult = this.winCheck();
        if (checkResult !== false) {
            //a) Call the removeEventListener
            this.removeEventListener();
            //c) Call the game 's method over using the winner property from winCheck's return value as an argument.
            this.game.over(checkResult.winner);
            //b) If winCheck returned an item of property combo then you should approach Markwin called with combo property from winCheck as inargument.
            if (checkResult.winner !== "draw") {
                this.markWin(checkResult.combo);
            }
            //d) Return true
            return true;
        }
        //If possible: move the tray one step down in the column and repeat from step 3.
        //Set the currentPlayer property to 2 if it is 1 and to 1 if it is 2.
        if (this.currentPlayer === 1) {
            this.currentPlayer = 2;
        } else {
            this.currentPlayer = 1;
        }

        //Call the game 's method tellTurn property with the currentPlayer property as an argument.
        this.game.tellTurn(this.currentPlayer);
        //Set the playInProgress property to false .
        this.playInProgress = false;
        //Return true .
        return true;
    }
    winCheck() {
        let winOffset = [
            [
                [0, 0],
                [0, 1],
                [0, 2],
                [0, 3]
            ], //horizontal
            [
                [0, 0],
                [1, 0],
                [2, 0],
                [3, 0]
            ], //vertical
            [
                [0, 0],
                [1, 1],
                [2, 2],
                [3, 3]
            ], //diagonal 1
            [
                [0, 0],
                [-1, -1],
                [-2, -2],
                [-3, -3]
            ], //diagonal 2

        ];
        let myObject = {}
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                for (let w = 0; w < winOffset.length; w++) {

                    //console.log("checking at " + row + " , " + col);
                    //                    if (w === 0) {
                    //                        console.log("checking horizontal |");
                    //                    } else if (w === 1) {
                    //                        console.log("checking vertical --");
                    //                    } else if (w === 2) {
                    //                        console.log("checking diagonal \\");
                    //                    } else {
                    //                        console.log("checking diagonal /");
                    //                    }
                    let slots = winOffset[w].map(([r, c]) => this.matrix[row + r] && this.matrix[row + r][col + c]).join('');
                    //  console.log(slots);
                    if (slots === '1111') {
                        myObject['winner'] = 1;
                        myObject['combo'] = winOffset[w].map(([r, c]) => [row + r, col + c]);
                        return myObject;
                    } else if (slots === '2222') {
                        myObject['winner'] = 2;
                        myObject['combo'] = winOffset[w].map(([r, c]) => [row + r, col + c]);
                        return myObject;
                    }
                }
            }

        }
        if (!this.emptyAvailable()) {
            myObject['winner'] = "draw";
            return myObject;
        }
        return false;
    }

    markWin(combo) {
        for (let i of combo) {
          this.matrix[i[0]][i[1]] = 3;
        }
        this.render();
    }

    addEventListener() {
        this.listener = event => {
            let $solt = event.target.closest('.board > div');
            if (!$solt) {
                return;
            }
            let $allslots = [...$$('.board > div')]; // get all div in the board as list.
            let index = $allslots.indexOf($solt); // get current clicked div-index
            let column = index % 7;
            this.makeMove(column);
        }

        $('.board').addEventListener('click', this.listener);
    }

    removeEventListener() {
        $('.board').removeEventListener('click', this.listener);
    }
    emptyAvailable() {

        for (let i = 0; i < 6; i++) {

            for (let j = 0; j < 7; j++) {
                if (this.matrix[i][j] === 0) {
                    return true
                }
            }

        }
        return false;
    }
    createMatrix() {
        let arr = [];
        for (let i = 0; i < 6; i++) {
            let temp = [];
            for (let j = 0; j < 7; j++) {
                temp.push(0);
            }
            arr.push(temp);
        }
        return arr;
    }

    render() {
        $('.board').innerHTML = '';
        for (let i = 0; i < this.matrix.length; i++) {
            for (let j = 0; j < this.matrix[i].length; j++) {
                let div1 = document.createElement('div');
                let div2 = document.createElement('div');
                div1.append(div2);
                if (this.matrix[i][j] === 1) {
                    div1.className = "red";
                } else if (this.matrix[i][j] === 2) {
                    div1.className = "yellow";
                } else if (this.matrix[i][j] === 3) {
                    div1.className = "win";
                }

                $('.board').append(div1);
            }
        }
    }
    checkIfColumnFull(column, matrix) {
        return matrix[0][column] !== 0;
    }
}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Board = Board
};