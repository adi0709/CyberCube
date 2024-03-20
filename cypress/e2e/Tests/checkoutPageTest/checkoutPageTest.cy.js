/// <reference types="cypress" />
import { When, Then, And } from 'cypress-cucumber-preprocessor/steps'
import checkout from '../../Pages/checkoutPage'

When("the user click's on checkout", () => {
  checkout.clickCheckout()
})

And('adds the user information', () => {
  checkout.enterCheckoutInfo()
})

And('clicks on the continue button', () => {
  checkout.clickContinueButton()
})

And('confirms the checkout details', () => {
  checkout.confirmCheckoutDetails()
})

Then('the order is placed', () => {
  checkout.validateOrderPlaced()
})
