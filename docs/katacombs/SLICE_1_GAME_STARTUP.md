# Slice 1: Game Startup
**Goal:** Display initial location when game starts

```gherkin
Feature: Game Startup
  As a player
  I want to see the starting location when I begin
  So that I can understand where my adventure begins

  Scenario: Start new game
    Given the game is not running
    When I start the game
    Then I should see the title "LOST IN SHOREDITCH."
    And I should see the main description
    And I should see the prompt ">"
```
