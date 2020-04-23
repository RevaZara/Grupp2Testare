class Game {
    constructor() {
        this.addEventListeners();
        this.start();
    }
    start() {
        this.board = new Board(this);
    }


    tellTurn(player) {
        player = +player
        if (player === 1 || player === 2) {
              //$(".message").innerHTML = player === 1 ? "Röds tur…" : "Guls tur…";
              this.infoMessage = player == 1 ? "Röds tur…" : "Guls tur…";
             $(".message").innerHTML = this.infoMessage;
        } else {
            throw new Error('player must be 1 or 2');
        }
    }


    over(won) {
        if (won === "draw"){
            this.infoMessage = "Det blev oavgjort!";
        }else {
            won = +won
            if (won === 1) {
                this.infoMessage = "Röd vann!";
            } else if (won === 2){
                this.infoMessage = "Gul vann!";
            } else {
                 throw (new Error('won must be “draw”, 1 or 2'));
            }
        }
    }


    addEventListeners() {
        $('.message').addEventListener('click', e => {
           if (e.target.closest('.again')) {
             this.start();
          }
         });
    }

}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};