# Slice 7: Invalid Command Handling
**Goal:** Handle unrecognized input gracefully

```gherkin
Feature: Command Validation
  As a player
  I want clear feedback on invalid commands
  So that I know what went wrong

  Scenario: Unknown command
    Given I am playing the game
    When I enter "DANCE"
    Then I should see "I don't understand that. English please!"

  Scenario: Malformed command
    Given I am playing the game
    When I enter "GO"
    Then I should see "I don't understand that. English please!"

  Scenario: Invalid direction
    Given I am playing the game
    When I enter "GO X"
    Then I should see "I don't understand that. English please!"
```
