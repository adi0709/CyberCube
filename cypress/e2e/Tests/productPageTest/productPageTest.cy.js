/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import product from "../../Pages/productPage";
import productInfo from "../../Pages/productInfoPage";
import checkoutPage from "../../Pages/checkoutPage";


Then("the products are visible", () => {
    product.validateProducts()
});

When('a product is clicked', (dataTable) => {
    product.clickProduct()
});
Then ("the product's information is displayed",()=>{
    productInfo.validateProductInfoPage()
})

When('I add below products to cart', (dataTable) => {
    product.addProduct((dataTable))
});

Then("the products get added to the cart", ()=>{
    cy.get(".shopping_cart_badge").should("contain.text", "3")
    cy.get('.shopping_cart_link').click()

    checkoutPage.validateCheckout()
})