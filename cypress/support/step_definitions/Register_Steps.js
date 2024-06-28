/// <reference types="cypress" />
import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from '@faker-js/faker';

let random_username = faker.internet.userName();
let random_password = faker.internet.password();
let random_email = faker.internet.email({ firstName: random_username })

When('I type username', () => {
    cy.get('[data-testid="nome"]').type(random_username);
})

When('I type email', () => {
    cy.get('[data-testid="email"]').type(random_email);
})

When('I type password', () => {
    cy.get('[data-testid="password"]').type(random_password);
})

When('I click on the register as admin button', () => {
    cy.get('.form-check-label').click();
})

When('I click on the register user button', () => {
    cy.get('[data-testid="cadastrar"]').click();
})

Then('I should be presented with successful message', () =>{
    cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
})