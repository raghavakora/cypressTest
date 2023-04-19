
describe('Validate the Sauce Demo Website', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Add the highest Price item to the Cart', () => {
    // Login into the application
    cy.fixture('loginDetails').then((loginDetails) => {
      cy.getBySel('username').type(loginDetails.username);
      cy.getBySel('password').type(loginDetails.password);
    })
    cy.contains('Login').click({ force: true })


    //find the highest price
    cy.get('#inventory_container').find('.inventory_item_price').then((allPriceElement) => {
      let allPrice = Cypress._.map(allPriceElement, 'innerText').map(function (item) {
        return item.replace('$', '');
      });
      allPrice = allPrice.map(num => Number(num));

      cy.get('#inventory_container').find('.inventory_item_price')
        .contains(Math.max.apply(Math, allPrice)).parent().then(($highestPriceDiv) => {
          cy.wrap($highestPriceDiv).contains('Add to cart').click();
          cy.wrap($highestPriceDiv).contains('Remove').should('be.visible');
        })
    })

  })

})
