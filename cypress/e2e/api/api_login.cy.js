/// <reference types="cypress" />

describe("API - Functional Login Test", () => {
  it("Should login successfully", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/login",
      body: {
        email: "fulano@qa.com",
        password: "teste",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
    });
  });

  it("Should validate incorrect password", () => {
    cy.request({
      method: "POST",
      url: "http://localhost:3000/login",
      body: {
        email: "fulano@qa.com",
        password: "wrongpassword",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});