Feature: Mini Cart Functionality

  Scenario: Verify empty item display correctly
    Given I open the Home page
    And I open the Mini Cart
    When I click the "Start shopping" button

Scenario: Verify item details display correctly
    Given I open the Home page
    And I open the Mini Cart
    When I click the "Start shopping" button
    When I click on the "Add to cart" button
    And I open the Mini Cart 

Scenario: Verify quantity update in Mini Cart
    Given I open the Home Page
    And I open the Mini Cart
    When I click the "Start shopping" button
    When I click on the "Add to cart" button
    And I open the Mini Cart 
    When I increase the quantity of "Let’s x The Zero One How to Paint CG" to 2
    Then The quantity of "Let’s x The Zero One How to Paint CG" in the cart should be 2
    When I decrease the quantity of "Let’s x The Zero One How to Paint CG" to 1
    Then The quantity of "Let’s x The Zero One How to Paint CG" in the cart should be 1
    When I remove item from the cart

Scenario: Verify "Go to checkout" button
    Given I log in successfully
    Given I open the Home Page
    And I open the Mini Cart
    When I click Go to checkout button
    Given I open the login page
    When I click "Log out" in the My Account menu
    Given I open the Home Page
    And I open the Mini Cart
    When I click the "Start shopping" button
    When I click on the "Add to cart" button
    And I open the Mini Cart
    When I click Go to checkout button

Scenario: Verify "View My Cart" button
    Given I open the Home Page
    And I open the Mini Cart
    When I click the "Start shopping" button
    When I click on the "Add to cart" button
    And I open the Mini Cart
    When I click View My Cart button
    Then I should be redirected to the Cart page


