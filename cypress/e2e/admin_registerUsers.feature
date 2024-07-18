Feature: Login as Admin and Register a New User

    Background: Pre Conditions
        Given I navigate to the ServeRest homepage
        When I type the admin email and password
        And I validate I logged in with the correct account

    Scenario: Register User In Admin Account
        And I click on the register new user in admin page
        And I type user info at register new user in admin page
        And I click to confirm the register new user in admin page
        Then I should be presented with the user list and find the new user
        