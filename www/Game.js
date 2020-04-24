class Game {
    constructor() {
        this.addEventListener();
        this.start();
    }
    start() {
        this.board = new Board(this);
    }


    tellTurn(player) {
        player = +player
        if (player === 1 || player === 2) {
             $(".message").innerHTML = player == 1 ? "Röds tur…" : "Guls tur…";
        } else {
            throw new Error('player must be 1 or 2');
        }
    }


    over(won) {
        if (won === "draw"){
            $(".message").innerHTML = "Det blev oavgjort!";
        }else {
            won = +won
            if (won === 1) {
                $(".message").innerHTML = "Röd vann!";
            } else if (won === 2){
                $(".message").innerHTML = "Gul vann!";
            } else {
                 throw (new Error('won must be “draw”, 1 or 2'));
            }
        }
    }


    addEventListener() {
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