# Slice 14: Gold Collection
**Goal:** Automatically collect treasures

```gherkin
Feature: Gold Collection
  As a player
  I want to collect gold automatically
  So that I can increase my score

  Scenario: Collect gold when entering location
    Given "Treasure Room" contains 100 gold
    And I have never visited "Treasure Room"
    When I move to "Treasure Room"
    Then I should see "YOU FOUND 100 GOLD!"
    And my total gold should be 100
    And the gold should be removed from "Treasure Room"

  Scenario: No gold on revisit
    Given I previously collected gold from "Treasure Room"
    When I move to "Treasure Room"
    Then I should not see any gold message
    And my total gold should remain unchanged

  Scenario: Collect gold from opened container
    Given "Chest" contains 50 gold
    And I have never opened "Chest"
    When I successfully open "Chest"
    Then I should see "YOU FOUND 50 GOLD!"
    And my total gold should increase by 50

  Scenario: View gold in bag
    Given I have collected 150 gold
    When I enter "BAG"
    Then I should see "GOLD: 150"

  Scenario: Quit game shows gold collected
    Given I am playing the game
    And I have collected 150 gold
    When I enter "QUIT"
    Then I should see "THANKS FOR PLAYING! YOU COLLECTED 150 GOLD."
    And the game should terminate
```
