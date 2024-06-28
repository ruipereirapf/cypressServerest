/// <reference types="cypress" />

import Base_PO from "./Base_PO";

class Homepage_PO extends Base_PO{
    
    clickOn_newUser_Button(){
        cy.get('[data-testid="cadastrar"]').click();
    }

    clickOn_Login_Button(){}
}
export default Homepage_PO;