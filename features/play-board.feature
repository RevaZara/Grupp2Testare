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
