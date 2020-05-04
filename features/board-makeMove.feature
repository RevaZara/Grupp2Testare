Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  Scenario: After making a move the current player is changed
    Given the game is in progress
    When  player makes a move
    Then  the current player is changed

  Scenario:  After making a move matrix will have last move information
    Given  the game is in progress
    When   player makes a move
    Then   the matrix will have last move information


  Scenario: after making a move the message will be changeed
    Given   the game is in progress
    When    player makes a move
    Then    the message will be Gul tur

  Scenario: Making a move with wrong coulmn no will generate an error
    Given  the game is in progress
    Then   make move with wrong coulmn will generate an error

  Scenario: After completing amake move with both players the message should be Red tur
    Given   the game is in progress
    When    both players makes a move
    Then    the message should be rod tur
