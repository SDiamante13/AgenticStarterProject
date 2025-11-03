# Slice 15: Look at Items
**Goal:** Examine items for detailed descriptions

```gherkin
Feature: Item Examination
  As a player
  I want to look at items closely
  So that I can get more information about them

  Scenario: Look at item in location
    Given I am at "Treasure Room"
    And there is a "CHEST" here
    When I enter "LOOK CHEST"
    Then I should see a detailed description of the chest

  Scenario: Look at item in bag
    Given I have "COMPASS" in my bag
    When I enter "LOOK COMPASS"
    Then I should see a detailed description of the compass

  Scenario: Look at non-existent item
    Given I am at "Empty Room"
    And there is no "SWORD" here or in my bag
    When I enter "LOOK SWORD"
    Then I should see "I don't see that here!"

  Scenario: Help shows extended look syntax
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction/item], OPEN [item], TAKE [item], DROP [item], BAG, USE [item], QUIT"
```
