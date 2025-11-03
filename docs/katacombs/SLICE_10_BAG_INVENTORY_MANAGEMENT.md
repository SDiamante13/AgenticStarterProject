# Slice 10: Bag Inventory Management
**Goal:** View inventory and enforce bag limit

```gherkin
Feature: Bag Inventory
  As a player
  I want to check my bag contents
  So that I know what items I'm carrying

  Scenario: View empty bag
    Given my bag is empty
    When I enter "BAG"
    Then I should see "THE BAG IS EMPTY."

  Scenario: View bag with items
    Given I have "KEYS" in my bag
    And I have "SWISS KNIFE" in my bag
    And I have "CANDLE" in my bag
    When I enter "BAG"
    Then I should see "THE BAG CONTAINS: KEYS, SWISS KNIFE, CANDLE."

  Scenario: Enforce 10 item limit
    Given I have 10 items in my bag
    And there are "KEYS" on the floor
    When I enter "TAKE KEYS"
    Then I should see "YOUR BAG IS FULL!"
    And the "KEYS" should remain on the floor

  Scenario: Help includes bag command
    Given I am playing the game
    When I enter "?"
    Then I should see "GO [direction], LOOK [direction], TAKE [item], DROP [item], BAG, QUIT"
```
