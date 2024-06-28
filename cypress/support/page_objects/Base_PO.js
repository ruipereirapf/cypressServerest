/// <reference types="cypress" />

class Base_PO {
    //baseUrl = 'https://front.serverest.dev';

    navigate(path) {
        //cy.visit(baseUrl + path);
        cy.fixture("config.json").then((data) => {
            cy.visit(data.baseUrl + path);
        })
    }

    getPageTitle() {
        return cy.title();
    }
}
export default Base_PO;