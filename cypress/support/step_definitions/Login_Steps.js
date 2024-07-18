/// <reference types="cypress" />

import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const login_page = new Login_PO();

Given('I navigate to the ServeRest homepage', () =>{
    login_page.navigate("");
})

When('I click on the register new user button',() => {
    login_page.clickOn_newUser_Button();
})

When('I type the admin email and password', () => {
    login_page.login_as_admin();
})

When('I click on the login button', () => {
    login_page.click_login();
})

Then('I validate I logged in with the correct account', () => {
    login_page.validate_admin_login();
})

When('I type the normal email and password', () => {
    login_page.login_as_user();
})

Then('I should enter the normal user webpage', () => {
    login_page.validate_user_login();
})

When('I click on the logout button', () => {
    login_page.clickOn_logout_Button();
})

Then('I should be redirected to the main page', () => {
    // cy.url().should('eq', 'https://front.serverest.dev/login');
    cy.fixture("config.json").then((data) => {
        cy.url().should('eq', data.baseUrl);
    })
})