class Game {
    constructor() {
        this.playerName1 = this.inputName(1);
        this.playerName2 = this.inputName(2);
        if (this.playerName1 === null) {
            this.playerName1 = "Röd"
        }
        if (this.playerName2 === null) {
            this.playerName2 = "Gul"
        }
        this.addEventListener();
        this.start();
    }
    start() {
        this.board = new Board(this);
    }

    tellTurn(player) {
        player = +player
        if (player === 1 || player === 2) {
            let playerName = player == 1 ? this.playerName1 : this.playerName2;
            if (playerName[playerName.length - 1] !== 's') {
                playerName = playerName + 's'
            }
            $(".message").innerHTML = playerName + ' tur...'
        } else {
            throw new Error('player must be 1 or 2');
        }
    }

    inputName(palyerNumber) {
        try { // Bara för att prompt inte funkar när vi kör tester
            let name = prompt('Mata in spelare' + palyerNumber + ' namn');
            return name;
        }
        catch {
            return 'Player ' + palyerNumber
        }
    }
    over(won) {
        if (won === "draw") {
            $(".message").innerHTML = "Det blev oavgjort!";
        } else {
            won = +won
            if (won === 1) {
                $(".message").innerHTML = this.playerName1 + ' vann!';
            } else if (won === 2) {
                $(".message").innerHTML = this.playerName2 + ' vann!';
            } else {
                throw (new Error('won must be “draw”, 1 or 2'));
            }
        }
        let button = document.createElement('button');
        button.innerHTML = "Spela igen";
        button.className = "again";
        $(".message").append(button);

    }

    addEventListener() {
        $('.message').addEventListener('click', e => {
            if (e.target.closest('.again')) {
                sleep(100);
                location.reload();
                this.start();
            }
        });
    }

}


// make it possible to test on backend
if (typeof global !== 'undefined') {
    global.Game = Game
};