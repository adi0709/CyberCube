Feature: The user want to login into and logout of the site with valid data

  Background: The user navigates to the sauceDemo site
    Given the user navigate to the Website

  Scenario: Log into the website with correct user data
    When valid credential are entered
      | email         | password     |
      | standard_user | secret_sauce |
    And User click on sign in button
    Then The user is successfully logged in


  Scenario: Log into the website with Incorrect user data
    When invalid credential are entered
      | email           | password     |
      | locked_out_user | secret_sauce |
    And User click on sign in button
    Then The user is unable to login


  Scenario: Logout of the website
    And valid credential are entered
      | email         | password     |
      | standard_user | secret_sauce |
    And User click on sign in button
    When the logout button is clicked
    Then the user is successfully logged out