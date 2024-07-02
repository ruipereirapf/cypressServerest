/// <reference types="cypress" />
require('cypress-xpath');

import Base_PO from "./Base_PO";

class UserHomepage_PO extends Base_PO {
    elements = {
        add_first_item_Button: () => cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]'),
        increase_amount_Button: () => cy.get('[data-testid="product-increase-quantity"]'),
        verify_desired_amount: () => cy.xpath("//div[@class='col-3'][contains(.,'3')]"),
        add_to_cart_Button: () => cy.get('[data-testid="adicionar carrinho"]'),
        shoppingList_Button: () => cy.get('[data-testid="lista-de-compras"]'),
        clear_shoppingList_Button: () => cy.get('[data-testid="limparLista"]'),
        shoppingCart_Content: () => cy.get('[data-testid="shopping-cart-empty-message"]')
    }
    
    selectFirstItem() {
        this.elements.add_first_item_Button().click();
    }

    selectQuantity() {
        this.elements.increase_amount_Button().click();
        this.elements.increase_amount_Button().click();
        this.elements.verify_desired_amount().contains('3');
    }

    addToCart() {
        this.elements.add_to_cart_Button().click();
    }

    checkShoppingList() {
        this.elements.shoppingList_Button().click();
    }

    clearShoppingList() {
        this.elements.clear_shoppingList_Button().click();
    }

    shoppingCartContent() {
        this.elements.shoppingCart_Content().contains('Seu carrinho está vazio');
    }
}

export default UserHomepage_PO;
