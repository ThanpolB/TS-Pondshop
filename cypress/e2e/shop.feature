Feature: Shop Page
Scenario: Verify Shop Page Header
    Given I open the Shop page
    Then the header should display Archives: Shop

Scenario: Verify Product Listing
    Given I open the Shop page
    Then the product listing should display 20 results

Scenario: Sorting products in the Shop page
    Given I open the Shop page
    When I select "Sort by popularity" as the sorting option
    Then Products should be sorted by "popularity"
    When I select "Sort by average rating" as the sorting option
    Then Products should be sorted by "average rating"
    When I select "Sort by latest" as the sorting option
    Then Products should be sorted by "latest"
    When I select "Sort by price: low to high" as the sorting option
    Then Products should be sorted by "price low to high"
    When I select "Sort by price: high to low" as the sorting option
    Then Products should be sorted by "price high to low"

Scenario: Verify Banner Navigation and Click Add to Cart Button
    Given I open the Shop page
    When I click on the add to cart product banner 
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then I should go to the Cart page

Scenario: Verify Navigation and Click Add to Cart Button
    Given I open the Shop page
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then I should go to the Cart page

Scenario: Verify Navigation and Click Read More Button
    Given I open the Shop page
    When I click Read More button
    Then I should be redirected to the product detail page

Scenario: Verify Navigation and View Products button
    Given I open the Shop page
    Then I click the View Products button
    When I input a random number into selected quantity boxes
    Then The Add to Cart button should be visible
    When I click Add to Cart on a product banner
    Then The View in Cart button should appear
    Then I should go to the Cart page

Scenario: Navigate to the per page in the Shop
    Given I open the Shop page
    When I click on the next page button
    When I click on the previous page button