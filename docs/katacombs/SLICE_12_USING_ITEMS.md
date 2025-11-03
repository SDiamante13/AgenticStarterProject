# Slice 12: Using Items
**Goal:** Use items to unlock or trigger events

```gherkin
Feature: Using Items
  As a player
  I want to use items from my bag
  So that I can solve puzzles and unlock areas

  Scenario: Use correct item in correct location
    Given I am at "Red Chamber Entrance"
    And I have "KEYS" in my bag
    And the "RED DOOR" requires "KEYS"
    When I enter "USE KEYS"
    Then I should see "THE RED DOOR HAS BEEN UNLOCKED!"
    And the "RED DOOR" should be unlocked

  Scenario: Use item not in bag
    Given I am at "Red Chamber Entrance"
    And I do not have "KEYS" in my bag
    When I enter "USE KEYS"
    Then I should see "YOU DON'T HAVE THAT!"

  Scenario: Use item in wrong location
    Given I am at "Empty Room"
    And I have "KEYS" in my bag
    When I enter "USE KEYS"
    Then I should see "I can't do that here!"

  Scenario: Help includes use command
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction], OPEN [item], TAKE [item], DROP [item], BAG, USE [item], QUIT"
```
