# Slice 4: Quit Game
**Goal:** Allow player to exit at any time

```gherkin
Feature: Quit Game
  As a player
  I want to quit the game at any time
  So that I can stop playing when I want

  Scenario: Quit game
    Given I am playing the game
    When I enter "QUIT"
    Then I should see "THANKS FOR PLAYING!"
    And the game should terminate

  Scenario: Help includes quit command
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], QUIT"
```
