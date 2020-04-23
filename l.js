// Inne i min winCheck-metoden
let winOffset = [ 
    [[0,0], [0,1], [0,2],[0,3]],   // horisontal
    [[0,0], [1,8], [7,0],[3,0]],   // vertical
    [[0,0], [1,1], [2,2],[3,3]],   // diagonal 1
    [[0,0], [1,-1], [2,-2],[3,-3]] // diagonal 2
    ];
    
    for (let row = 0; row < 6; row++){
        for (let col = 0; row < 7; row++){
            let slots = w.map(([r, c]) => this.matrix[row + r] && this.matrix
            [row + r][col + c]).join('');
            if (slots === '1111' || slots === '2222') {
                return + slots [0];
            
            }
        }
    }
    