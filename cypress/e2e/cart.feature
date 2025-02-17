Feature: Verify Cart Page

Scenario: Verify empty cart items & Return to shop button
    Given I open the Cart page
    Then I check the message in the empty cart
    When I click the "Return to shop" button
    Then I should be redirected to the Shop page

Scenario: Verify cart items & Remove & restored ฺButton
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    When I remove an item from the cart
    Then The item should be removed successfully
    And If an undo option appears, I click it
    Then The removed item should be restored correctly

Scenario: Apply valid coupon
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then cart should display the correct product details
    When I enter the coupon code "Newregis002" into the coupon
    When I click the Apply Coupon button for coupon 
    Then the coupon should show the correct message

Scenario: Apply expired coupon
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then cart should display the correct product details
    When I enter the coupon code "Newregis001" into the coupon
    When I click the Apply Coupon button for coupon 
    Then the coupon should show the correct message

Scenario: Apply exist coupon
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then cart should display the correct product details
    When I enter the coupon code "Newregis003" into the coupon 
    When I click the Apply Coupon button for coupon 
    Then the coupon should show the correct message

Scenario: shipping address and update
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    When I change the shipping address and update it

Scenario: Verify Cart Pages
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then cart should display the correct product details
    When I input a random number into selected quantity boxes
    Then I update the cart and verify price and tax changes
    Then I click Proceed to checkout and verify redirection to checkout page