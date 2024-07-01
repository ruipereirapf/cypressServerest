/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Login_PO extends Base_PO {
    elements = {
        email_Textfield : () => cy.get('[data-testid="email"]'),
        password_Textfield : () => cy.get('[data-testid="senha"]'),
        login_Button : () => cy.get('[data-testid="entrar"]'),
        admin_Login_Header : () => cy.get('.lead'),
        user_Login_Header : () => cy.get('h1'),
        register_NewUser_Button : () => cy.get('[data-testid="cadastrar"]'),
        logout_Button : () => cy.get('[data-testid="logout"]')
    }

    clickOn_newUser_Button(){
        this.elements.register_NewUser_Button.click();
    }

    login_as_admin(){
        this.elements.email_Textfield().type('rui_admin@admin.com');
        this.elements.password_Textfield().type('rui_admin');
    }

    login_as_user(){
        this.elements.email_Textfield().type('rui_user@user.com');
        this.elements.password_Textfield().type('rui_user');
    }

    click_login(){
        this.elements.login_Button().click();
    }

    validate_admin_login(){
        this.elements.admin_Login_Header().contains('Este é seu sistema para administrar seu ecommerce.');
    }

    validate_user_login(){
        this.elements.user_Login_Header().contains('Serverest Store');
    }

    clickOn_logout_Button(){
        this.elements.logout_Button().click();
    }
}
export default Login_PO;