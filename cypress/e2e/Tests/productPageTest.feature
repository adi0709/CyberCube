Feature: I want to validate the functionalities of the product page

  Background: The user is successfully logged in
    Given I navigate to the Website
    When I entered valid credential
      | email         | password |
      | standard_user | secret_sauce  |
    And User click on sign in button

  Scenario: Validate the products in the product page
    When The user is successfully logged in
    Then the products are visible

  Scenario: View a product
    When a product is clicked
    Then the product's information is displayed

  Scenario: Add products to the cart
    When I add below products to cart
      |ProductName                |Qty|
      |Sauce Labs Backpack        |1  |
      |Sauce Labs Fleece Jacket   |1  |
      |Sauce Labs Onesie          |1  |
    Then the products get added to the cart