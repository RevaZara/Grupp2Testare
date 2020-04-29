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
        await sleep(100); // not working

        //Remove the tray if it can fall further down.
         for (let i = 1; i < 6; i++) {
               if (this.matrix[i][column] === 0) {
                    this.matrix[i-1][column] = 0;
                    this.matrix[i][column] = this.currentPlayer;
                    this.render();
                    await sleep(100);
                }
         }
        //this.winCheck();
                //Call the winCheck and if it returns something truthy:
                //a) Call the removeEventListener
                //b) If winCheck returned an item of property combo then you should approach Markwin called with combo property from winCheck as inargument.
                //c) Call the game 's method over using the winner property from winCheck's return value as an argument.
                //d) Return true
        //If possible: move the tray one step down in the column and repeat from step 3.
        //Set the currentPlayer property to 2 if it is 1 and to 1 if it is 2.
        if (this.currentPlayer === 1){
            this.currentPlayer = 2;
        }else   {
           this.currentPlayer = 1;
        }

        //Call the game 's method tellTurn property with the currentPlayer property as an argument.

        //Set the playInProgress property to false .
        //Return true .
    }

    /*  winCheck() {
          player = +player
          
          if (player.win, player === 1 || player === 2) {
               $(".message").innerHTML = player == 1 || player === 2? "player 1 wins…" : "player 2 wins…";
               
               if (win = "draw") {
                  $(".value").innerHTML = "draw";   
               }
          } else {
              throw new Value ('false');
          }
      }*/

    markWin(combo) {}

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