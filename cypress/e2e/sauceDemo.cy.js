/// <reference types="cypress" />

describe('Validate the Sauce Demo Website', () => {
    beforeEach(() => {
      cy.visit('/');
    })
  
    it('Add the highest Price item to the Cart', () => {
        // Login into the application
        cy.get('[data-test="username"]').type('standard_user');
        cy.get('[data-test="password"]').type('secret_sauce');
        cy.get('[data-test="login-button"]').click();

        //find the highest price
        cy.get('#inventory_container').find('.inventory_item_price').then((tbody) => {
          let allPrice = Cypress._.map(tbody, 'innerText').map(function(item){
            return item.replace('$', '');
          });
          allPrice = allPrice.map(num => Number(num));

          cy.get('#inventory_container').find('.inventory_item_price')
            .contains(Math.max.apply(Math,allPrice)).parent()
            .find('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
        })

    })

  })
  