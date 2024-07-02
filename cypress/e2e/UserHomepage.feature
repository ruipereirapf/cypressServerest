Feature: Add and Clear Shopping List

    Background: Pre Conditions
        Given I navigate to the ServeRest homepage
        When I type the normal email and password
        And I click on the login button

    Scenario: Add Item To Cart
        And I add first item to shopping list
        And I select desired quantity
        And I click add to cart
        Then I should be redirected to the shopping cart page

    Scenario: Clear Shopping list
        And I add first item to shopping list
        And I select desired quantity
        And I click add to cart
        And I click on the shopping list button
        And I click on the clear shopping list button
        Then I should be presented with a empty list message