/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import product from "../../Pages/productPage";


Then("the products are visible", () => {
    product.validateProducts()
});

When('a product is clicked', (dataTable) => {
    product.clickProduct()
});
Then ("the product's information is displayed",()=>{
    product.validateProductInfoPage()
})

When('I add below products to cart', (dataTable) => {
    product.addProduct((dataTable))
});

Then("the products get added to the cart", ()=>{

})