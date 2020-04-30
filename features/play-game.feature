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

#  Klassen Game med metoden
#  1 constructor()
#  2 start()
#  3 tellTurn(player)
#  4 over(won)
#  5 addEventListener()

# Feature: The game class in Play Connect 4
#  As a programer
#  I hope the methods in the game calss to follow the API
#  so that the program works as expected.

# # 1 Klassen Game 'constructor()'>
#  Scenario: The right methods should be called when we constructor a game.
#     When we create a new instance of game
#     Then the constructor should call addEventListener
#     And the constructor should call the method start

#  Scenario: Start the game by calling start method
#     Given that we start the game
#     Then a new board is created

# # 2 Klassen Game 'start()'>
#  Scenario: The method should create a new instance of Board and send the current instance of Game to its constructor. The instance should be stored in the board property .
#     Given that a new instance of Board is created
#     Then then the current instance of Game should be send to its constructor
#     And the instance should be stored in the board property

# # 3 Klassen Game 'tellTurn(player)'>
#  Scenario: receive the player argument with an integer (1 or 2) or not
#     Given that a player argument is an integer (1 or 2)
#     Then the method should receive the player argument

#     Given that a player argument is not an integer (1 or 2)
#     Then the error "player must be 1 or 2" should be discarded.

#  Scenario: Right player is told to make a move
#     Given that the DOM element with the css class message is grabed
#     Then the method should change its contents to the text

#     # Examples:
#       | the value of the player |     text       |
#       |      1                  | "Red turn…"    |
#       |      2                  | "Yellow turn…" |

#  # 4 Klassen Game 'over(won)'>
# Scenario: receive an in-argument with the value “draw” , 1 or 2 or others
#     Given that in-argument has the value “draw” , 1 or 2
#     Then the in-argument won
#     And the method should grab the DOM element with the css class message and change its contents to the text
#     And a button element should be added to the DOM element with the css class message .
#     And the button should have the css class again and the text "Play again".
#     # Examples:
#       | in-argument |  message 1     |  message 2   |
#       |     1       |  "Gold won"    | "Play again" |
#       |     2       |  "Blue won"    | "Play again" |

#     Given that in-argument has not the value “draw” , 1 or 2
#     Then the error won must be draw, 1 or 2' must be discarded
#     And the method should grab the DOM element with the css class message and change its contents to the text
#     And a button element should be added to the DOM element with the css class message .
#     And the button should have the css class again and the text "Play again".
#     # Examples:
#       | in-argument |  message 1                         |  message 2   |
#       |     0       |  "Error won green must be draw"    | "Play again" |
#       |     5       |  "Error won yellor must be draw"   | "Play again" |


#  # 5.1 Klassen Game 'addEventListener()'>
#  Scenario: to add an event listener / function for click events to the element with the css class board in the DOM
#    Given that an event listener / function is added
#    Then events should be clicked to the element with the css class board in the DOM
#    And the event listener should detect after the button with the css class have been clicked again.
#     # Examples:
#      Given that a game is finished <won or fail>
#      Then it should tell a message <result>

#     # Examples:
#       | finished <won or fail>  | a message <result>              |
#       |          2              |          "Gold won"             |
#       |          1              |          "Blue fail"            |
#       |          3              | "Error won yellow must be draw" |