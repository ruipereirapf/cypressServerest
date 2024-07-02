/// <reference types="cypress" />
import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
import UserHomepage_PO from "../page_objects/UserHomepage_PO";

const userHome_Page = new UserHomepage_PO();

When('I add first item to shopping list', () => {
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]')
    .click();
})

When ('I select desired quantity', () => {
    cy.get('[data-testid="product-increase-quantity"]').click();
    cy.get('[data-testid="product-increase-quantity"]').click();
    cy.xpath("//div[@class='col-3'][contains(.,'3')]").contains('3')
})

When('I click add to cart',() => {
    cy.get('[data-testid="adicionar carrinho"]').click();
})

Then('I should be redirected to the shopping cart page', () => {
    cy.fixture("config.json").then((data) => {
        cy.url().should('eq', data.cartPage);
    })
})

When('I click on the shopping list button', () => {
    cy.get('[data-testid="lista-de-compras"]').click();
})

When ('I click on the clear shopping list button', () =>{
    cy.get('[data-testid="limparLista"]').click();
})

When('I should be presented with a empty list message', () => {
    cy.get('[data-testid="shopping-cart-empty-message"]').contains('Seu carrinho está vazio');
})
