# Slice 2: Basic Movement (Single Direction)
**Goal:** Move north from starting location

```gherkin
Feature: Basic Movement
  As a player
  I want to move between locations
  So that I can explore the world

  Scenario: Move to adjacent location
    Given I am at "Truman Brewery"
    And there is a location to the North
    When I enter "GO N"
    Then I should see the new location title
    And I should see the new location description

  Scenario: Attempt invalid movement
    Given I am at "Truman Brewery"
    And there is no location to the South
    When I enter "GO S"
    Then I should see "I can't do that here!"
```
