Feature: Login Functionality

  Scenario: Verify login functionality
    Given I open the login page
    When I enter username "root" and password "pond2545"
    And I click the "Log In" button
    Then I should be logged in successfully

  Scenario: Verify login with incorrect password
    Given I open the login page
    When I enter username "root" and password "pond2546"
    And I click the "Log In" button
    Then I should see an error message "Error: The password you entered for the username root is incorrect. Lost your password?"

  Scenario: Verify login with non-existing user
    Given I open the login page
    When I enter username "user_not_exist" and password "123"
    And I click the "Log In" button
    Then I should see an error message "Error: The username user_not_exist is not registered on this site. If you are unsure of your username, try your email address instead."

  Scenario: Verify Lost Password functionality
    Given I open the login page
    When I click the "Lost your password?" link
    And I enter "newuser@example.com" in the email field
    And I click the "Reset Password" button

  Scenario: Verify user registration with valid data
    Given I open the login page
    When I enter email "newuser@example.com" and password "ValidPassword1235" for registration
    And I click the REGISTER button
    Then I should be redirected to My Account

  Scenario: Verify Dashboard navigation
    Given I log in successfully
    When I click "Dashboard" in the My Account menu

  Scenario: Verify Orders navigation
    Given I log in successfully
    When I click "Orders" in the My Account menu


  Scenario: Verify Download navigation
    Given I log in successfully
    When I click "Download" in the My Account menu

Scenario: Verify Addresses navigation
  Given I log in successfully
  When I click "Addresses" in the My Account menu


Scenario: Verify Account details navigation
  Given I log in successfully
  When I click "Account details" in the My Account menu



  Scenario: Verify Log out navigation
    Given I log in successfully
    When I click "Log out" in the My Account menu