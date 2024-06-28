@registerUsers
Feature: ServeRest - Login

    Scenario Outline: Register Admin
        Given I navigate to the ServeRest homepage
        When I click on the register new user button
        And I type username
        And I type email
        And I type password
        And I click on the register as admin button
        And I click on the register user button
        Then I should be presented with successful message