/// <reference types="cypress" />
import { Given, When } from "@badeball/cypress-cucumber-preprocessor";


Given('I navigate to the ServeRest homepage', () =>{
    cy.visit('https://front.serverest.dev/login');
})

When('I click on the register new user button',() => {
    cy.get('[data-testid="cadastrar"]').click();
})