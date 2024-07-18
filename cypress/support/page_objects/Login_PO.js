/// <reference types="cypress" />

import Base_PO from "./Base_PO";

const adminEmail = Cypress.env('adminEmail');
const adminPassword = Cypress.env('adminPassword');
const adminName = Cypress.env('adminName');
const userEmail = Cypress.env('userEmail');
const userPassword = Cypress.env('userPassword');
const userName = Cypress.env('userName');

class Login_PO extends Base_PO {

    elements = {
        email_Textfield : () => cy.get('[data-testid="email"]'),
        password_Textfield : () => cy.get('[data-testid="senha"]'),
        login_Button : () => cy.get('[data-testid="entrar"]'),
        login_Header : () => cy.get('h1'),
        register_NewUser_Button : () => cy.get('[data-testid="cadastrar"]'),
        logout_Button : () => cy.get('[data-testid="logout"]')
    }

    clickOn_newUser_Button(){
        this.elements.register_NewUser_Button().click();
    }

    login_as_admin(){
        this.elements.email_Textfield().type(adminEmail);
        this.elements.password_Textfield().type(adminPassword);
    }

    login_as_user(){
        this.elements.email_Textfield().type(userEmail);
        this.elements.password_Textfield().type(userPassword);
    }

    click_login(){
        this.elements.login_Button().click();
    }

    validate_admin_login(){
        this.elements.login_Header().should('include.text', adminName);
    }

    validate_user_login(){
        this.elements.login_Header().contains('Serverest Store');
    }

    clickOn_logout_Button(){
        this.elements.logout_Button().click();
    }
}
export default Login_PO;