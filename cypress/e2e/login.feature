@login_users
    Feature: ServeRest - Login

    Background: Pre Condition
        Given I navigate to the ServeRest homepage

    @login_ruiadmin
    Scenario: Login with admin user
    And I type the admin email and password
    And I click on the login button
    Then I validate I logged in with the correct account

    @login_ruiuser
    Scenario: Login with normal user
    And I type the normal email and password
    And I click on the login button
    Then I should enter the normal user webpage

    @logout
    Scenario: Login and Logout
    And I type the normal email and password
    And I click on the login button
    And I click on the logout button
    Then I should be redirected to the main page

#VER MELHOR TESTES NEGATIVOS
    # # Scenario: Login with empty credentials
    # # And I click on the login button
    # # Then I should be presented with empty textfields errors
    