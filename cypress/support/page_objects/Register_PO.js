/// <reference types="cypress" />
require('cypress-xpath')

import { faker } from '@faker-js/faker';
import Base_PO from './Base_PO';


class Register_PO extends Base_PO{
    elements = {
        userName_textField : () => cy.get('[data-testid="nome"]'),
        email_textField : () => cy.get('[data-testid="email"]'),
        password_textField : () => cy.get('[data-testid="password"]'),
        asAdmin_button : () => cy.get('.form-check-label'),
        register_button : () => cy.get('[data-testid="cadastrar"]'),
        successful_register_alert : () => cy.get('.alert-link'),
        missing_data_alert: () => cy.xpath('(//div[contains(@role,"alert")]')
    }

    type_userName(random_username = faker.internet.userName()){ 
        this.elements.userName_textField().type(random_username);
    }

    type_email(random_email = faker.internet.email()){
        this.elements.email_textField().type(random_email);
    }

    type_password(random_password = faker.internet.password()){
        this.elements.password_textField().type(random_password);
    }

    click_asAdmin_button(){
        this.elements.asAdmin_button().click();
    }

    click_register_user_button(){
        this.elements.register_button().click();
    }

    valid_submission_alert(){
        this.elements.successful_register_alert().should('contain', 'Cadastro realizado com sucesso');
    }

    invalid_data_alert(message){
        this.elements.missing_data_alert().contains(message);
    }
}
export default Register_PO;