# Slice 6: World Consistency Validation
**Goal:** Ensure bidirectional location links are valid

```gherkin
Feature: Consistent World Navigation
  As a player
  I want the world to have consistent navigation
  So that I can trust the directions and explore logically

  Scenario: Navigate back and forth between locations
    Given I am at location A
    And location B is to the North
    When I enter "GO N"
    And I enter "GO S"
    Then I should be back at location A

  Scenario: Explore world without duplicate location names
    Given I am exploring the katacomb
    When I visit multiple locations
    Then each location should have a unique title
```
