Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  # Klassen Board 'render'>
  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element

  Scenario: Check player 1 has div element corresponding to the position with css class red.
    Given That a new game i started and first player has a tag on a position
    Then Should only one element in the board have css class red
    And Should no element in the board have css class yellow

  Scenario: Check player 2 has div element corresponding to the position with css class yellow.
    Given The players play the first two moves in a new game
    Then Should only one element in the board have css class yellow

  Scenario: Check that all divs in the board is empty
    Given That new game is started and 42 div elements is created and in turn contains a div elemen
    Then All div that is inside divs should be empty