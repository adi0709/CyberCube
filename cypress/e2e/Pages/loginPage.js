class LoginPage {
  enterURL() {
    cy.visit('/')
  }
  enterUserNamePassword(username, password) {
    cy.get('[id="user-name"]').should('exist').and('be.visible').type(username)
    cy.get('[id="password"]').should('exist').and('be.visible').type(password)
    return this
  }
  clickSubmitButton() {
    cy.get('[data-test="login-button"]').click()
    return this
  }
  validateLogin() {
    cy.title().should('eq', 'Swag Labs')
    cy.url().should('include', '/inventory.html')
  }

  validateUnsuccessfulLogin() {
    cy.get('[data-test="error"]')
      .should('exist')
      .and('be.visible')
      .contains('Epic sadface: Sorry, this user has been locked out.')
  }

  clickLogout() {
    cy.get('.bm-burger-button').should('exist').and('be.visible').click()

    cy.get('.bm-menu-wrap')
      .should('exist')
      .and('be.visible')
      .within((options) => {
        cy.get('.bm-cross-button').should('exist').and('be.visible')

        cy.get('#inventory_sidebar_link').should('exist').and('be.visible')

        cy.get('#about_sidebar_link').should('exist').and('be.visible')

        cy.get('#reset_sidebar_link').should('exist').and('be.visible')

        cy.get('#logout_sidebar_link').should('exist').and('be.visible').click()
      })
  }

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
