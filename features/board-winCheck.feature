Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  Scenario: After player have four consecutive slots, player is declared a winner
    Given   game is in progress
    When   the player have four consecutive slots
    Then   it should tell who wins

  Scenario: Its a draw when slots are full
    Given   game is in progress
    When    no more slots are available
    Then    than it should say draw

