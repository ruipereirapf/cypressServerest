/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import Base_PO from "./Base_PO";

class admin_registerUser_PO extends Base_PO {

    elements = {
        navbar_registerUser_button : () => cy.get('[data-testid="cadastrar-usuarios"]'),
        newUser_userName_textField : () => cy.get('[data-testid="nome"]'),
        newUser_email_textField : () => cy.get('[data-testid="email"]'),
        newUser_password_textField : () => cy.get('[data-testid="password"]'), 
        newUser_asAdmin_button : () => cy.get('[data-testid="checkbox"]'),
        newUser_asAdmin_register_button : () => cy.get('[data-testid="cadastrarUsuario"]'),
        usersList : () => cy.get('.jumbotron')
    }

    // Variables to store generated data
    generatedUsername;

    click_navbar_registerUser(){
        this.elements.navbar_registerUser_button().click();
    }

    type_userInfo(){
        this.generatedUsername = faker.internet.userName();
        this.elements.newUser_userName_textField().type(this.generatedUsername);
        this.elements.newUser_email_textField().type(faker.internet.email());
        this.elements.newUser_password_textField().type(faker.internet.password());
    }

    click_register_user(){
        this.elements.newUser_asAdmin_register_button().click();
    }

    validate_registry(){
        usersList().should('contain', this.generatedUsername);
    }

}
export default admin_registerUser_PO;