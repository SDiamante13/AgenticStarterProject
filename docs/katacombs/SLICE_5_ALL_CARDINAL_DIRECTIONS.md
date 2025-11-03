# Slice 5: All Cardinal Directions
**Goal:** Support all four cardinal directions

```gherkin
Feature: Cardinal Direction Movement
  As a player
  I want to move in all cardinal directions
  So that I can fully explore the map

  Scenario Outline: Move in cardinal directions
    Given I am at "Central Chamber"
    And there is a location to the <direction>
    When I enter "GO <command>"
    Then I should move to the <direction> location

    Examples:
      | direction | command |
      | North     | N       |
      | East      | E       |
      | South     | S       |
      | West      | W       |
```
