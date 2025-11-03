# Slice 3: Help Command
**Goal:** Display available commands

```gherkin
Feature: Help System
  As a player
  I want to see available commands
  So that I know how to play the game

  Scenario: Request help shows current commands
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction]"
```
