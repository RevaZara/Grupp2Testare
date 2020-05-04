Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

# # 5.1 Klassen Board 'markWin(combo1)'>
 Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
    Given that a combo argument is received
    Then an array should be created according to the specifications specified for the winCheck methods

# # 5.2 Klassen Board 'markWin(combo2)'>
 Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
    Given that the four div elements corresponding to the positions specified in the combo
    Then it should add the css class win to each of these div elements

# # 5.3 Klassen Board 'markWin(combo3)'>
 Scenario: To use the $ auxiliary method method in the comboto obtain the correct elements in the DOM.
#   Given that a new game has the $ auxiliary method in the combo
   Then it should obtain the correct elements in the DOM