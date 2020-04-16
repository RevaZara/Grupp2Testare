class Board { 
  constructor(game){}
  async makeMove(column){}
  winCheck(){}
  render(){}
  markWin(combo){}
  addEventListener(){}
  removeEventListener(){}

}

// make it possible to test on backend
if (typeof global !== 'undefined') { global.Board = Board };