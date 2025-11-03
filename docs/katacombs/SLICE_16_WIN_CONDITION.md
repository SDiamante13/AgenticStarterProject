# Slice 16: Win Condition (Exit Location)
**Goal:** Complete game by reaching exit

```gherkin
Feature: Game Victory
  As a player
  I want to win by reaching the exit
  So that I can complete my adventure

  Scenario: Reach exit location and win
    Given "Katacomb Exit" is marked as the exit location
    And I am one room away from "Katacomb Exit"
    And I have collected 500 gold
    When I move to "Katacomb Exit"
    Then I should see "CONGRATULATIONS! YOU ESCAPED WITH 500 GOLD!"
    And the game should terminate

  Scenario: Configure exit in adjacent room for testing
    Given the world has only 2 locations
    And "Exit Room" is marked as the exit location
    And I am at the starting location
    When I move to "Exit Room"
    Then I should see the victory message
    And the game should terminate
```
