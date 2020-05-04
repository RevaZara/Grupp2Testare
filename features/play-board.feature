Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.


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



  # Klassen Board 'render'>
  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element


  Scenario: If a game argument is not an instance of the Game class, the error message "game must be an instance of Game" should be discarded.
    Given that a game argument is not an instance of the Game class
    Then the error message "game must be an instance of Game" should be discarded

  Scenario: Check player 1 has div element corresponding to the position with css class red.
    Given That a new game i started and first player has a tag on a position
    Then Should only one element in the board have css class red
    And Should no element in the board have css class yellow

  Scenario: Check player 2 has div element corresponding to the position with css class yellow.
    Given That a new game i started and first and secand player has a tag on a position
    Then Should only one element in the board have css class yellow

  Scenario: Check that all divs in the board is empty
    Given That new game is started and 42 div elements is created and in turn contains a div elemen
    Then All div that is inside divs should be empty



  # klass board addEventListener()
  Scenario: A element with css class board is clicked.
    Given that a user clicked in element with class board
    Then A method makeMove should be colled with column nummber

  Scenario: Check that a property listener can be removed at a later time
    Given That addeventlistener is called
    Then The event should be saved as a property named listener
    And Call method removEventListener
    And Check that the property listener have null value

  Scenario: The method should receive the game argument which should be an instance of the Game class.
    Given that a game argument is an instance of the Game class
    Then the method should receive the game argument

  # klass board removEventListener()
  Scenario: Check if event listener is removed.
    Given That the method removEventListener is called
    Then Try to click on element with css class board
    And Funck makeMove should not be called


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








# # 5.1 Klassen Board 'markWin(combo1)'>
# Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
#    Given that a combo argument is received
#    Then an array should be created according to the specifications specified for the winCheck methods

# # 5.2 Klassen Board 'markWin(combo2)'>
# Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
#    Given that the four div elements corresponding to the positions specified in the combo
#    Then it should add the css class win to each of these div elements

# # 5.3 Klassen Board 'markWin(combo3)'>
# Scenario: To use the $ auxiliary method to obtain the correct elements in the DOM.
#   Given that the game have the $ auxiliary method in the combo
#    Then it should obtain the correct elements in the DOM
