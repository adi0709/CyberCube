class LoginPage {

  //Visit the website
  visitURL() {
    cy.visit('/')
  }

  //Enter the login credential
  enterUserNamePassword(username, password) {
    cy.get('[id="user-name"]')
        .should('exist')
        .and('be.visible')
        .type(username)
    cy.get('[id="password"]')
        .should('exist')
        .and('be.visible')
        .type(password)
  }

  //Get login button and click it
  clickLoginButton() {
    cy.get('[data-test="login-button"]')
        .should('exist')
        .and('be.visible')
        .click()
  }

  //Validating successful login by checking title and the url
  validateLogin() {
    cy.title()
        .should('eq', 'Swag Labs')
    cy.url()
        .should('include', '/inventory.html')
  }

  //Validating unsuccessful login
  validateUnsuccessfulLogin() {
    cy.get('[data-test="error"]')
      .should('exist')
      .and('be.visible')
      .contains('Epic sadface: Sorry, this user has been locked out.')
  }

  //Get the logout button from burger button and clicking it
  clickLogout() {
    cy.get('.bm-burger-button').should('exist').and('be.visible').click()

    cy.get('.bm-menu-wrap')
      .should('exist')
      .and('be.visible')
      .within((options) => {
        //validating the close button is present in the menu
        cy.get('.bm-cross-button').should('exist').and('be.visible')

        //validating the inventory section link is present in the menu
        cy.get('#inventory_sidebar_link').should('exist').and('be.visible')

        //validating the about us section link is present in the menu
        cy.get('#about_sidebar_link').should('exist').and('be.visible')

        //validating the reset app
        // section link is present in the menu
        cy.get('#reset_sidebar_link').should('exist').and('be.visible')

        //validating the logout button is present in the menu
        cy.get('#logout_sidebar_link').should('exist').and('be.visible').click()
      })
  }

  //Validating that logout was successful
  validateLogout() {
    cy.title().should('eq', 'Swag Labs')
    cy.url().should('include', '/')
    cy.get('.login_logo')
      .should('exist')
      .and('be.visible')
      .and('have.text', 'Swag Labs')
    cy.get('[id="user-name"]').should('exist').and('be.visible')
    cy.get('[id="password"]').should('exist').and('be.visible')
  }
}
const login = new LoginPage()
export default login
