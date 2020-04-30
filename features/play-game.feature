Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  Scenario: A new Game creates a new board
    Given that a new Game is created
    Then it should create a new Board

  #  klassen Game 'constroctor'
  Scenario: The right methods should be called when constructing a new Game
    When we create a new instance of Game
    Then the constructor should call the method addEventListener
    And the constructor should call the method start



  # Klassen Game 'start' >
  # Metoden ska skicka nuvarande instans av Game till dess konstruktor.
  # Instansen ska lagras i egenskapen board.
  Scenario: Start the game by calling start method
    Given that we start the game
    Then game has its own reference inside the board


  #Klassen Game 'tellturn' >
  #om player har värdet 1, byta innehåll till texten “Guls tur…”.
  Scenario Outline: Right player is told to make a move
    Given that game is in progress
    When the player is <player>
    Then it should tell right <message>

    Examples:
      | player | message      |
      | 1      | "Röds tur…" |
      | 2      | "Guls tur…" |


  # Klassen Game 'tellturn' >
  # om player har fel värdet så ska error kastas.
  Scenario Outline: Invalid player is asked to make a move
    Given that game is in progress
    Then turn using <player> will produce error <message>

    Examples:
      | player | message                 |
      | 3      | "player must be 1 or 2" |
      | 0      | "player must be 1 or 2" |





  #Klassen Game 'over' >
  #after game is over there must be right information
  Scenario Outline: When game ends winner must be announced
    Given that game is in progress
    When that game is finished <winner>
    Then it should tell the <result>

    Examples:
      | winner | result               |
      | 1      | "Röd vann!"          |
      | 2      | "Gul vann!"          |
      | "draw" | "Det blev oavgjort!" |


  # Klassen Game 'tellturn' >
  # om player har fel värdet så ska error kastas.
  Scenario Outline: Invalid player wins
    Given that game is in progress
    Then <player> wins will produce error <message>

    Examples:
      | player | message                        |
      | 3      | "won must be “draw”, 1 or 2" |
      | 0      | "won must be “draw”, 1 or 2" |


  #klassen  addEventlistener

  Scenario: A bottom with css class again is clicked.
    Given that a user clicked in bottom with class again.
    Then A method start should be called.






