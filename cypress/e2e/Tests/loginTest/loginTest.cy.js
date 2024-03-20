/// <reference types="cypress" />
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import login from '../../Pages/loginPage'
Given('the user navigate to the Website', () => {
  login.enterURL()
})
When('valid credential are entered', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.password)
  })
})
And('User click on sign in button', () => {
  login.clickSubmitButton()
})
Then('The user is successfully logged in', () => {
  login.validateLogin()
})

When('invalid credential are entered', (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.password)
  })
})

Then('The user is unable to login', () => {
  login.validateUnsuccessfulLogin()
})

And('the logout button is clicked', () => {
  login.clickLogout()
})
Then('the user is successfully logged out', () => {
  login.validateLogout()
})
