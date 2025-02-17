Feature: Home Page Functionality

  Scenario: Check phone number and email display
    Given I open the Home Page
    Then The "Call Us" and "Email Us" information should be correctly displayed in the header

  Scenario: Verify Navigation to Home Page
    Given I open the Home Page
    When I click on "Home" menu

  Scenario: Verify Navigation to Shop Page
    Given I open the Home Page
    When I click on "Shop" menu
    Then I should be navigated to the Shop Page

  Scenario: Verify Navigation to Manga Section under Shop
    Given I open the Home Page
    When I hover over the Shop menu
    And I select the product category "Manga"
    Then I should be redirected to the selected product category page

  Scenario: Verify Navigation to Novel Section under Shop
    Given I open the Home Page
    When I hover over the Shop menu
    And I select the product category "Novel"
    Then I should be redirected to the selected product category page
    
  Scenario: Verify Navigation to General Section under Shop
    Given I open the Home Page
    When I hover over the Shop menu
    And I select the product category "general"
    Then I should be redirected to the selected product category page
    
  Scenario: Verify Navigation to Contact Us Page
    When I click on "Contact Us" menu
    Then I should be navigated to the Contact Us page

  Scenario: Verify search box functionality (Failed case)
      Given I open the Home Page
      When I enter "มัง" in the search box
      Then I should see "No results found" message

  Scenario: Verify search box functionality (Success case)
      Given I open the Home Page
      When I enter "การ์ตูน" in the search box
      Then I should see relevant search results

  Scenario: Verify Login navigation
      Given I open the Home Page
      When I click on "Login"
      Then I should be navigated to the Login Page

  Scenario: Verify banner "Discover Your Favorite Book" navigation
      Given I open the Home Page
      When I click on "Shop Now" in Discover Your Favorite Book Banner
      Then I should be navigated to Discover Your Favorite Book Page

  Scenario: Verify banner "Best selling book this month" navigation
      Given I open the Home Page
      When I click on "Shop Now" in the Best Selling Banner
      Then I should be navigated to the Best Selling Page

  Scenario: Verify banner "On sale book this month" navigation
      Given I open the Home Page
      When I click on "Shop Now" On sale book Banner
      Then I should be navigated to On sale book Page

Scenario: Verify banner "Book Zones" navigation
    Given I open the Home Page
    Then The "Book Zones" and "On sale products" text should be displayed
    When I click on a product banner
    Then I should be navigated to the Product Detail Page

Scenario: Verify "Add to Cart" functionality
    Given I open the Home Page
    When I click on "Add to cart" button

  Scenario: Verify static information in the footer
    Given I open the Home Page
    Then The footer should display correct address, email, and phone number

  Scenario: Verify external Home links navigation
    Given I open the Home Page
    When I click on "Home" in the footer

  Scenario: Verify external Contact Us links navigation
    Given I open the Home Page
    When I click on "Contact Us" in the footer


  Scenario: Verify external Account links navigation
    Given I open the Home Page
    When I click on "Account" in the footer


  Scenario: Verify external Order History links navigation
    Given I open the Home Page
    When I click on "Order History" in the footer


  Scenario: Validate footer payment icons
    Given I open the Home Page
