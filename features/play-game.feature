Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.



# Klassen Game 'start' >
# Metoden ska skapa ett ny instans av Board
# och skicka nuvarande instans av Game till dess konstruktor.
# Instansen ska lagras i egenskapen board.
  Scenario: Start the game by calling start method
    Given that we start the game
    Then then new board is created
    And game has its own reference inside the board.

# Klassen Game 'tellturn' >
# om player har värdet 1, byta innehåll till texten “Guls tur…”.
  Scenario Outline: Right player is told to make a move
    Given that game is in progress
    When the player is <player>
    Then it should tell right <message>

    Examples:
      | player |     message |
      |      1 | 'Röds tur…' |
      |      2 | 'Guls tur…' |


# Klassen Game 'over' >
# after game is over there must be right information
  Scenario Outline: When game ends winner must be announced
    When that game is finished <won>
    Then it should tell the <result>

    Examples:
      | won         |              result |
      |          1  |          'Röd vann!' |
      |          2  |          'Gul vann!' |
      |      'draw' | 'Det blev oavgjort!' |



