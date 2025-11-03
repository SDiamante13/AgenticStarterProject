# Slice 8: Look Command (Directions)
**Goal:** Examine surroundings without moving

```gherkin
Feature: Looking Around
  As a player
  I want to look in different directions
  So that I can scout before moving

  Scenario: Look at direction with interesting content
    Given I am at "Truman Brewery"
    And there is a brick building with a door to the North
    When I enter "LOOK N"
    Then I should see "I CAN SEE A BRICK BUILDING WITH A SIGN SAYING \"TRUMAN BREWERY\" AND A WOODEN WHITE DOOR"

  Scenario: Look at direction with nothing interesting
    Given I am at "Truman Brewery"
    And there is nothing interesting to the East
    When I enter "LOOK E"
    Then I should see "Nothing interesting to look at there!"

  Scenario: Help includes look command
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction], QUIT"
```
