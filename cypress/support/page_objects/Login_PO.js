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
        email_textField : () => cy.get('[data-testid="email"]'),
        password_textField : () => cy.get('[data-testid="senha"]'),
        login_button : () => cy.get('[data-testid="entrar"]'),
        login_header : () => cy.get('h1'),
        register_NewUser_button : () => cy.get('[data-testid="cadastrar"]'),
        logout_button : () => cy.get('[data-testid="logout"]')
    }

    clickOn_newUser_Button(){
        this.elements.register_NewUser_button().click();
    }

    login_as_admin(){
        this.elements.email_textField().type(adminEmail);
        this.elements.password_textField().type(adminPassword);
    }

    login_as_user(){
        this.elements.email_textField().type(userEmail);
        this.elements.password_textField().type(userPassword);
    }

    click_login(){
        this.elements.login_button().click();
    }

    validate_admin_login(){
        this.elements.login_header().should('include.text', adminName);
    }

    validate_user_login(){
        this.elements.login_header().contains('Serverest Store');
    }

    clickOn_logout_Button(){
        this.elements.logout_button().click();
    }
}
export default Login_PO;