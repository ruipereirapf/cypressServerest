/// <reference types="cypress" />

describe('API - Functional Login Test', () => {
    it('Should login successfully', () =>{
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
              }
        })
    });
});