# Slice 9: Basic Item Interaction (Take/Drop)
**Goal:** Pick up and drop items

```gherkin
Feature: Item Management
  As a player
  I want to take and drop items
  So that I can collect useful objects

  Scenario: Take item from location
    Given I am at "Well House"
    And there are "KEYS" on the floor
    When I enter "TAKE KEYS"
    Then I should see "KEYS: TAKEN."
    And the "KEYS" should be in my bag
    And the "KEYS" should not be in the location

  Scenario: Drop item in location
    Given I have "KEYS" in my bag
    And I am at "Truman Brewery"
    When I enter "DROP KEYS"
    Then I should see "KEYS: DROPPED."
    And the "KEYS" should not be in my bag
    And the "KEYS" should be in the location

  Scenario: Attempt to take non-existent item
    Given I am at "Empty Room"
    And there are no "KEYS" here
    When I enter "TAKE KEYS"
    Then I should see "I can't do that here!"

  Scenario: Help includes item commands
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction], TAKE [item], DROP [item], QUIT"
```
