# Slice 13: Stairs Navigation
**Goal:** Move up and down between levels

```gherkin
Feature: Vertical Navigation
  As a player
  I want to use stairs to move between levels
  So that I can explore vertically

  Scenario: Go up stairs
    Given I am at "Lower Chamber"
    And there are stairs going up
    When I enter "GO UP"
    Then I should be at "Upper Chamber"

  Scenario: Go down stairs
    Given I am at "Upper Chamber"
    And there are stairs going down
    When I enter "GO DOWN"
    Then I should be at "Lower Chamber"

  Scenario: Attempt to use non-existent stairs
    Given I am at "Flat Room"
    And there are no stairs
    When I enter "GO UP"
    Then I should see "I can't do that here!"

  Scenario: Navigate back and forth using stairs
    Given I am at "Lower Chamber"
    And there are stairs going up to "Upper Chamber"
    When I enter "GO UP"
    And I enter "GO DOWN"
    Then I should be back at "Lower Chamber"
```
