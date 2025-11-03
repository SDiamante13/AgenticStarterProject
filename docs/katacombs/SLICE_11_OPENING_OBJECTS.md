# Slice 11: Opening Objects
**Goal:** Interact with doors and openable objects

```gherkin
Feature: Opening Objects
  As a player
  I want to open doors and containers
  So that I can access new areas or items

  Scenario: Open unlocked door
    Given I am at "Truman Brewery"
    And there is a "DOOR" that is unlocked
    When I enter "OPEN DOOR"
    Then I should see "YOU ARE INSIDE THE MAIN ROOM OF THE TRUMAN BREWERY"
    And I should be at "Main Room"

  Scenario: Attempt to open locked door
    Given I am at "Red Chamber Entrance"
    And there is a "RED DOOR" that is locked
    When I enter "OPEN DOOR"
    Then I should see "THE DOOR IS LOCKED!"

  Scenario: Attempt to open non-existent object
    Given I am at "Empty Room"
    And there is no "DOOR" here
    When I enter "OPEN DOOR"
    Then I should see "I can't do that here!"

  Scenario: Help includes open command
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction], OPEN [item], TAKE [item], DROP [item], BAG, QUIT"
```
