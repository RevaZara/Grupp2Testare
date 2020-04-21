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
