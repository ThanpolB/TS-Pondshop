Feature: Checkout Process

Scenario: error messages during checkout
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When the user places the order
    Then an error message for should be displayed

Scenario: enter email fail 
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When the user enters email "thanapolb.45@gmailcom" into the email field
    Then the email field should contain "thanapolb.45@gmailcom"
    When the user fills in billing details
    When the user selects a payment method
    When the user places the order
    Then an error message for invalid email should be displayed
    
Scenario: User creates an account
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When the user selects 'Create an account?' and enters a random password
    Then the password field should contain the generated password
    When the user fills in billing details
    When the user selects a payment method
    When the user places the order
    Then the user should be redirected to the order received page

Scenario: login funtion process
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When clicks link and logs in
    When the user fills in billing details
    When the user selects a payment method
    When the user places the order
    Then the user should be redirected to the order received page

Scenario: shipping details funtion process
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When clicks link and logs in
    When the user fills in billing details
    When the user fills in shipping details
    When the user selects a payment method
    When the user places the order
    Then the user should be redirected to the order received page

Scenario: checkout unlogin process
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Given the user is on the checkout page
    When enters a coupon code
    When I enter the coupon code "Newregis002" into the coupon
    When the user fills in billing details
    When the user selects a payment method
    When the user places the order
    Then the user should be redirected to the order received page