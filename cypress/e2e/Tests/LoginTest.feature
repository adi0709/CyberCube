Feature: I want to login into the site with valid data

  Scenario: Log into the system with correct user data
    Given I navigate to the Website
    When I entered valid credential
      | email         | password |
      | standard_user | secret_sauce  |
    And User click on sign in button
    Then The user is successfully logged in


  Scenario: Log into the system with Incorrect user data
    Given I navigate to the Website
    When I entered invalid credential
      | email         | vpassword |
      | locked_out_user | secret_sauce  |
    And User click on sign in button
    Then The user is unable to login