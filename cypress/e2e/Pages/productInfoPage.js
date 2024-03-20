class productInfoPage {

    //Validating the product info page of the selected product
    validateProductInfoPage() {
    cy.url().should('include', '/inventory-item.html?id=0')

    cy.get('#inventory_item_container')
      .should('exist')
      .and('be.visible')
      .within((container) => {
        cy.get('.inventory_details_name')
          .should('exist')
          .and('be.visible')
          .and('have.text', 'Sauce Labs Bike Light')

        cy.get('.inventory_details_price')
          .should('exist')
          .and('be.visible')
          .and('have.text', '$9.99')
      })
  }
}
const productInfo = new productInfoPage()
export default productInfo
