/// <reference types="cypress" />
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"
import login from "../../Pages/loginPage";
Given("I navigate to the Website", () => {
    login.enterURL();
});
When("I entered valid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUserNamePassword(element.email, element.password);
    });
});
And("User click on sign in button", () => {
    login.clickSubmitButton();
});
Then("The user is successfully logged in", () => {
    login.validateLogin();
});

When("I entered invalid credential", (datatable) => {
    datatable.hashes().forEach((element) => {
        login.enterUserNamePassword(element.email, element.password);
    });
});

Then ("The user is unable to login", ()=>{
    login.validateUnsuccessfulLogin()
})

