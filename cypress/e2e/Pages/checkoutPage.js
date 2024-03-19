import {products} from '../../fixtures/example.json'

class checkoutPage {
    validateCheckout(){

        cy.get('.header_secondary_container')
            .should("exist")
            .and("be.visible")
            .and("have.text","Your Cart")

        cy.get("[id='continue-shopping']")

        cy.get(".cart_item_label")
            .should("have.length", 3)

        cy.get(".cart_item_label").each(($row, index) => {
            cy.wrap($row).within(()=>{
                cy.get(".inventory_item_name")
                    .should("have.text", products[index].productName)
                cy.get(".inventory_item_price")
                    .should("have.text", products[index].productPrice)
            })
        })
    }

}
const checkout = new checkoutPage();
export default checkout;