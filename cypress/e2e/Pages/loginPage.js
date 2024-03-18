class LoginPage {
    enterURL() {
        cy.visit(
            "/"
        );
    }
    enterUserNamePassword(username, password) {
        cy.get('[id="user-name"]')
            .should("exist")
            .and("be.visible")
            .type(username);
        cy.get('[id="password"]')
            .should("exist")
            .and("be.visible")
            .type(password);
        return this;
    }
    clickSubmitButton() {
        cy.get('[data-test="login-button"]')
            .click();
        return this;
    }
    validateLogin() {
        cy.title()
            .should("eq", "Swag Labs");
        cy.url()
            .should('include', '/inventory.html')
    }

    validateUnsuccessfulLogin(){
        cy.get('[data-test="error"]')
            .should("exist")
            .and("be.visible")
            .contains("Epic sadface: Sorry, this user has been locked out.")
    }
}
const login = new LoginPage();
export default login;