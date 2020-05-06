Feature: Play Connect 4
  As a poor Connect 4 player
  I want to play the game on my screen with my friends
  So that I don't need to buy it.

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
    And Function makeMove should not be called
