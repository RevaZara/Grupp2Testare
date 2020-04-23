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

<<<<<<< HEAD
  
=======
>>>>>>> 81f1b0ff436affcbe7d333216f1b926101adce38
# Klassen Board 'render'>
  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 81f1b0ff436affcbe7d333216f1b926101adce38
=======

 # Klassen Board med 7 metoden
 # 1 constructor(game)
 # 2 async makeMove(column)
 # 3 winCheck()
 # 4 render()
 # 5 markWin(combo)
 # 6 addEventListener()
 # 7 removeEventListener()
 
# Feature: The board class in Play Connect 4
#  As a tester
#  I hope the methods in the board calss to follow the API 
#  so that the test works as expected.

# 1 Klassen Board 'constructor(game)'  >
  # addEventListener method
  Scenario: The method should receive the game argument which should be an instance of the Game class.
   Given that a game argument is an instance of the Game class
   Then the method should receive the game argument  

  # render method
  Scenario: If a game argument is not an instance of the Game class, the error message "game must be an instance of Game" should be discarded.
   Given that a game argument is not an instance of the Game class
   Then the error message "game must be an instance of Game" should be discarded  

  # game 's method tellTurn
  Scenario: Properties should be set according to the api-specifications
    Given that a new game is created
    Then it should set the game with the value from the game argument
    And it should set matrix into an array of 6 elements
    And each element should in turn be an array of 7 elements, each element having a value of 0
    And it should set currentPlayer to value 1
    And it should set playInProgress to the value false

# 2 Klassen Board 'async makeMove(column)'>
 Scenario: The async method should receive the column argument, which should be an integer between 0 and 6. If this is not the case, the error message "column must be an integer between 0 and 6" should be thrown.
The method should return null if the playInProgress property is true. The method should return false if the move cannot be done because the selected column is full.
    Given that the playInProgress property is true
    Then place the tray temporarily at the top of the column
    And call the render
    And remove the tray if it can fall further down
    And call the asynchronous sleep aid method to pause for 50 ms
    And if possible: move the tray one step down in the column and repeat from step 3
    And call the winCheck and if it returns something truthy 
  And Call the removeEventListener
  And If winCheck returned an item of property combo then you should approach Markwin called with combo property from winCheck as inargument.
  And Call the game 's method over using the winner property from winCheck's return value as an argument
  And Return true
    And set the currentPlayer property to 2 if it is 1 and to 1 if it is 2
    And call the game 's method tellTurn property with the currentPlayer property as an argument
    And set the playInProgress property to false
    And return true

# 3.1 Klassen Board 'winCheck(1)'>
Scenario: Have to look at the whole board and check if anyone has won or whether it has been a draw.
If someone has won, the method should return an item. 
The object must have the properties of the winner set to the winner (1 or 2), and the combo - an array of 4 arrays, where each inner array is a position on the board [row number, column number].
When game ends winner must be announced
   Given that game is finished 1
   Then it should tell the 'Röd vann!'    

# 3.2 Klassen Board 'winCheck(2)'>
Scenario: When game ends winner must be announced
   Given that game is finished 2
   Then it should tell the 'Gul vann!' 

 # 3.3 Klassen Board 'winCheck(3)'>
Scenario: When game ends without winner must be announced
   Given that no one has won and no draw has been made in the game
   Then it should return the value false    

# 4.1 Klassen Board 'render(1)'>
  Scenario: The method should find the element with the css class board in the DOM and change the contents of this element to an html structure with 42 div- elements in a row. 
  These correspond to the different positions on the board from the upper left corner to the lower right corner.
 
    Given that player 1 has a tag on a position
    Then the div element corresponding to the position should get the css class red 

# 4.2 Klassen Board 'render(2)'>
    Given that player 2 has a tag on a position
    Then the div element corresponding to the position should get the css class red 

# 4.3 Klassen Board 'render(3)'>
  Scenario: A board adds 42 divs to the .board element
    Given that a new Board is created
    Then it should render 42 divs as children of the board element

# 4.4 Klassen Board 'render(4)'>
  Scenario:Each of the 42 div elements described above should in turn contain a div element. This should be empty.
    Given that each of the 42 div elements described above in turn contains a div element
    Then this should be empty

# 4.5 Klassen Board 'render(5)'>
  Scenario: The method should use the $ auxiliary method to obtain the correct elements in the DOM.
    Given that a $ auxiliary method is used
    Then it should obtain the correct elements in the DOM

# 5.1 Klassen Board 'markWin(combo1)'>
Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
   Given that a combo argument is received
   Then an array should be created according to the specifications specified for the winCheck methods

# 5.2 Klassen Board 'markWin(combo2)'>
Scenario: find the four div elements corresponding to the positions specified in the combo and add the css class win to each of these div elements.
   Given that the four div elements corresponding to the positions specified in the combo
   Then it should add the css class win to each of these div elements

# 5.3 Klassen Board 'markWin(combo3)'>
Scenario: To use the $ auxiliary method to obtain the correct elements in the DOM.
  Given that the game have the $ auxiliary method in the combo
   Then it should obtain the correct elements in the DOM 

# 6.1 Klassen Board 'addEventListener(1)'>
Scenario: to add an event listener / function for click events to the element with the css class board in the DOM
   Given that an event listener / function is added 
   Then events should be clicked to the element with the css class board in the DOM 

# 6.2 Klassen Board 'addEventListener(2)'>
Scenario: Event listeners should detect which column the user has clicked on and call the makeMove method using this column as an argument.
   Given that event listeners detect a column the user has clicked on 
   Then event listeners should call the makeMove method using this column as an argument 
    #Examples:
     Given that a game is finished <won or fail>
     Then it should tell a message <result>
    #Examples:
      | finished <won or fail>  | a message <result>              |
      |          1              |          "Red won"              |
      |          2              |          "Green won"            |
      |          0              | "Error won black must be draw"  |

# 6.3 Klassen Board 'addEventListener(3)'>
Scenario: The event listener should be saved as a property named listener , so that it can be removed at a later time.
   Given that an event listener is saved as a property named listener 
   Then it should be removed at a later time 

# 6.4 Klassen Board 'addEventListener(4)'>
Scenario: The method should use the $ auxiliary method to obtain the correct elements in the DOM.
   Given that the $ auxiliary method is used 
   Then it should obtain the correct elements in the DOM

# 7.1 Klassen Board 'removeEventListener(1)'>
Scenario: The method should remove the event listener stored in the listener property from the element with the css class board in the DOM.
   Given that an event listener is stored in the listener property
   Then it should been remove from the element with the css class board in the DOM

# 7.2 Klassen Board 'removeEventListener(2)'>
Scenario: The method should use the $ auxiliary method to obtain the correct elements in the DOM.
   Given that an event listener is used
   Then it should obtain the correct elements in the DOM
>>>>>>> 2deece93f6a5dfeeefc3446920bf7d2cb79a70fb
