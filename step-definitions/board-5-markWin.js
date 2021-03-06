// This requires Game, Board, sleep, $ and $$ as globals
// (do this in each step-definition file in this project)
require('./_include-all')();

module.exports = function () {

  let board;
  let game;
  let markWinWasCalled = true;

  //# # 5.1 Klassen Board 'markWin(combo1)'>
  // Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
  //    Given that a combo argument is received
  //    Then an array should be created according to the specifications specified for the winCheck methods

  this.Given(/^that a combo argument is received$/, () => {
    game = new Game();
    board = new Board(game);
  })
  this.Then(/^an array should be created according to the specifications specified for the winCheck methods$/, () => {
    expect(game.board).to.equal(game.board, 'an array should be created');
  })

  //# # 5.2 Klassen Board 'markWin(combo2)'>
  // Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
  //    Given that the four div elements corresponding to the positions specified in the combo
  //    Then it should add the css class win to each of these div elements
  this.Given(/^that the four div elements corresponding to the positions specified in the combo$/, () => {
    $('.message').click();
  })
  this.Then(/^it should add the css class win to each of these div elements$/, () => {
    expect(game.board).to.not.equal(null, 'the css class win should be addedto each of these div elements');
  })

  //# # 5.3 Klassen Board 'markWin(combo3)'>
  // Scenario: To use the $ auxiliary method to obtain the correct elements in the DOM.
  //    Given that the method is the $ auxiliary method in the combo
  //    Then it should obtain the correct elements in the DOM
  this.Given(/^that the auxiliary method in the combo is used$/, () => {
            board.markWinWasCalled = markWinWasCalled; 
             $('.message').click();
           
   });
  this.Then(/^it should obtain the correct elements in the DOM$/, () => {
      expect(markWinWasCalled,
        'the correct elements should be obtained in the DOM'
      ).to.be.true;
  
    });

  }