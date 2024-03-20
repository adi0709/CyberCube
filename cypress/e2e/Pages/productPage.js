class productPage {

  //Validating all the 6  products are visible
  validateProducts() {
    cy.get('.inventory_item')
      .should('have.length', 6)
      .and('exist')
      .and('be.visible')
  }

  //click the 2nd product
  clickProduct() {
    cy.get('.inventory_item')
      .eq(1)
      .within((product) => {
        cy.get('.inventory_item_name').click()
      })
  }

  //add product to the cart
  addProduct(dataTable) {
    cy.log('rows : ' + dataTable.rows())

    dataTable.hashes().forEach((elem) => {
      cy.log('Adding ' + elem.ProductName)
      cy.get('.inventory_item_name')
        .contains(elem.ProductName)
        .parent()
        .parent()
        .next()
        .find('.btn_primary')
        .click()
    })
  }

  //validating that the number on the cart increases after adding the products to the cart
  validateShoppingCartNumber(value) {
    cy.get('.shopping_cart_badge').should('contain.text', value)
    cy.get('.shopping_cart_link').click()
  }
}
const product = new productPage()
export default product
