@registerUsers
Feature: ServeRest - Login

    Background: Pre Conditions
        Given I navigate to the ServeRest homepage
        When I click on the register new user button

    @register_admin
    Scenario: Register Random Admin User
        And I type username
        And I type email
        And I type password
        And I click on the register as admin button
        And I click on the register user button
        Then I should be presented with successful message

    @register_user
    Scenario: Register Random Normal User
        And I type username
        And I type email
        And I type password
        And I click on the register user button
        Then I should be presented with successful message

    # @register_rui_admin
    # Scenario: Register Ruiadmin
    #     And I type specific username "rui_admin"
    #     And I type specific email "rui_admin@admin.com"
    #     And I type specific password "rui_admin"
    #     And I click on the register as admin button
    #     And I click on the register user button
    #     Then I should be presented with successful message

    # @register_rui_user
    # Scenario: Register Ruiadmin
    #     And I type specific username "rui_user"
    #     And I type specific email "rui_user@user.com"
    #     And I type specific password "rui_user"
    #     And I click on the register as admin button
    #     And I click on the register user button
    #     Then I should be presented with successful message

# # @register_invalid_data
# # Scenario Outline: Register User With Invalid Data
# #     And I type username '<username>'
# #     And I type email '<email>'
# #     And I type password '<password>'
# #     And I click on the register user button
# #     Then I should be presented with '<message>'

# #     Examples:
# #         | username | email          | password | message                |
# #         |          | test@email.com | test     | Nome é obrigatório     |
# #         | test     | test@email.com |          | Password é obrigatório |
# #         | test     |                | test     | Email é obrigatório    |
