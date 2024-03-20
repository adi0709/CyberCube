import { orderInfo, products } from '../../fixtures/testData.json'
class checkoutPage {

  //validating the checkout and confirming the details
  validateCheckout(value) {
    cy.get('.header_secondary_container')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Your Cart')

    cy.get("[id='continue-shopping']")

    cy.get('.cart_item_label').should('have.length', value)

    cy.get('.cart_item_label').each(($row, index) => {
      cy.wrap($row).within(() => {
        cy.get('.inventory_item_name').should(
          'have.text',
          products[index].productName
        )
        cy.get('.inventory_item_price').should(
          'have.text',
          products[index].productPrice
        )
      })
    })
  }

  //clicking the checkout button
  clickCheckout() {
    cy.get('[data-test="checkout"]')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()
  }

  //Enter the details for checkout
  enterCheckoutInfo() {
    cy.get('[data-test="firstName"]')
      .should('exist')
      .and('be.visible')
      .type(orderInfo.firstName)

    cy.get('[data-test="lastName"]')
      .should('exist')
      .and('be.visible')
      .type(orderInfo.lastname)

    cy.get('[data-test="postalCode"]')
      .should('exist')
      .and('be.visible')
      .type(orderInfo.postalCode)
  }

  //Clicking the continue button
  clickContinueButton() {
    cy.get('[data-test="continue"]')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()
  }

  //confirming the details of the products ordered
  confirmCheckoutDetails() {
    cy.get('.cart_item').each(($row, index) => {
      cy.wrap($row).within(() => {
        cy.get('.inventory_item_name').should(
          'have.text',
          products[index].productName
        )
        cy.get('.inventory_item_price').should(
          'have.text',
          `${products[index].productPrice}`
        )
      })
    })

    cy.get('[data-test="cancel"]')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')

    cy.get('[data-test="finish"]')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
      .click()
  }

  //Validating the order was successfully placed
  validateOrderPlaced() {
    cy.get('.complete-header')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Thank you for your order!')

    cy.get('.complete-text')
      .should('exist')
      .and('be.visible')
      .and(
        'have.text',
        'Your order has been dispatched, and will arrive just as fast as the pony can get there!'
      )

    cy.get('[data-test="back-to-products"]')
      .should('exist')
      .and('be.visible')
      .and('be.enabled')
  }
}
const checkout = new checkoutPage()
export default checkout
