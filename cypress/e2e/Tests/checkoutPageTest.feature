Feature: The user want to validate the functionalities of the checkout page

  Background: The user is successfully logged in
    Given the user navigate to the Website
    When valid credential are entered
      | email         | password     |
      | standard_user | secret_sauce |
    And User click on sign in button
    And the user add below products to cart
      | ProductName              | Qty |
      | Sauce Labs Backpack      | 1   |
      | Sauce Labs Fleece Jacket | 1   |
    And 2 products get added to the cart

  Scenario: user check's out of the added products
    When the user click's on checkout
    And adds the user information
    And clicks on the continue button
    And confirms the checkout details
    Then the order is placed