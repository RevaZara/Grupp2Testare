Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

  Scenario: If a game argument is not an instance of the Game class, the error message "game must be an instance of Game" should be discarded.
    Given that a game argument is not an instance of the Game class
    Then the error message "game must be an instance of Game" should be discarded

  # Klassen Board 'constructor'  >
  # Metoden ska sätta följande egenskaper till följande värden:
  # game till värdet från inargumentet game.
  # matrix till en array med 6 element. Varje element ska i sin tur vara en array med 7 element, där varje element har värdet 0.
  # currentPlayer till värdet 1.
  # playInProgress till värdet false.
  Scenario: Properties should be set according to the api-specifications
    Given that we create a new Board
    Then property game should get value from the constructor
    And the property matrix should have size six into seven, and zero value at each index
    And the property currentPlayer should have value 1
    And the property playInProgress should have the value false

  #   # 1.3 # Klassen Board 'constructor'
  Scenario: Properties should be set according to the api-specifications
    Given that a new game is created
    Then it should set the game with the value from the game argument
    And it should set matrix into an array of 6 elements
    And each element should in turn be an array of 7 elements, each element having a value of 0
    And it should set currentPlayer to value 1
    And it should set playInProgress to the value false






  # # 2 Klassen Board 'async makeMove(column)'>
  Scenario: The async method should receive the column argument, which should be an integer between 0 and 6. If this is not the case, the error message "column must be an integer between 0 and 6" should be thrown.
    Given that the playInProgress property is true
    Then place the tray temporarily at the top of the column
    And call the render
    And remove the tray if it can fall further down
    And call the asynchronous sleep aid method to pause for 50 ms
    And if possible: move the tray one step down in the column and repeat from step 3
    And call the winCheck and if it returns something truthy
    And Call the removeEventListener
    And If winCheck returned an item of property combo then you should approach Markwin called with combo property from winCheck as inargument
    And Call the game's method over using the winner property from winCheck's return value as an argument
    And Return true
    #  And set the currentPlayer property to 2 if it is 1 and to 1 if it is 2
    And call the game's method tellTurn property with the currentPlayer property as an argument
    And set the playInProgress property to false
    And turn true

# # 3.1 Klassen Board 'winCheck(1)'>
# Scenario: Have to look at the whole board and check if anyone has won or whether it has been a draw.
# If someone has won, the method should return an item.
# The object must have the properties of the winner set to the winner (1 or 2), and the combo - an array of 4 arrays, where each inner array is a position on the board [row number, column number].
# When game ends winner must be announced
#    Given that game is finished 1
#    Then it should tell the 'Röd vann!'

# # 3.2 Klassen Board 'winCheck(2)'>
# Scenario: When game ends winner must be announced
#    Given that game is finished 2
#    Then it should tell the 'Gul vann!'

#  # 3.3 Klassen Board 'winCheck(3)'>
# Scenario: When game ends without winner must be announced
#    Given that no one has won and no draw has been made in the game
#    Then it should return the value false

