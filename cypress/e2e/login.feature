@login_users
    Feature: ServeRest - Login

    Background: Pre Condition
        Given I navigate to the ServeRest homepage

    @login_ruiadmin
    Scenario: Login with admin user
    And I type the admin email
    And I type the admin password
    And I click on the login button
    Then I should enter the admin webpage

    @login_ruiadmin
    Scenario: Login with normal user
    And I type the normal email
    And I type the normal password
    And I click on the normal button
    Then I should enter the normal user webpage