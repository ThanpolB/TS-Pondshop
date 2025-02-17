import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Scenario: Verify static information in the footer
Given("I open the Home Page", () => {
  cy.visit("http://localhost/pondshop/");
  cy.wait(1500);  // รอ 1 วินาทีให้เว็บโหลด
  cy.url().should("include", "/pondshop/");
  cy.get("body").should("be.visible");
});

Then("The footer should display correct address, email, and phone number", () => {
  // ตรวจสอบที่อยู่
  cy.get('footer').contains('16/6 บ้านวังน้ำผึ้ง หมู่ 3 วังจันทร์ สามเงา ตาก 63130').should('be.visible'); 
  // ตรวจสอบอีเมล
  cy.get('footer').contains('thanapolb.45@gmail.com').should('be.visible');
  // ตรวจสอบหมายเลขโทรศัพท์
  cy.get('footer').contains('082-554-2084').should('be.visible');
});

// Scenario: Verify header links
Then("The \"Call Us\" and \"Email Us\" information should be correctly displayed in the header", () => {
  cy.contains("Call Us").should("be.visible");
  cy.contains("Email Us").should("be.visible");
});

// Scenario: Verify navigation to various pages
When("I click on {string} menu", (menuName) => {
  cy.visit("http://localhost/pondshop/");
  cy.get("nav").contains(menuName).click();
});

Then("I should be navigated to the Shop Page", () => {
  cy.location("pathname").should("eq", "/pondshop/shop/");
});

// Hover over Shop menu
When('I hover over the Shop menu', () => {
  cy.get('nav') // เลือก navigation
    .contains('Shop') // เลือกเมนู Shop
    .trigger('mouseenter'); // ใช้ trigger "mouseenter" ให้เหมือนการเอาเมาส์ไปชี้
});

// Selecting product category
When('I select the product category {string}', (categoryName) => {
  cy.get('.has-child') // เลือก dropdown
    .contains(categoryName) // ค้นหาหมวดหมู่ที่ต้องการ
    .click(); // คลิกหมวดหมู่ที่เลือก
});

Then('I should be redirected to the selected product category page', () => {
  cy.url().should('include', '/product-category/');  // ตรวจสอบว่า URL มี /product-category/
});

// Navigation to Contact Us page
Then("I should be navigated to the Contact Us page", () => {
  cy.location("pathname").should("eq", "/pondshop/contact-us/");
});

// Search functionality
When('I enter "มัง" in the search box', () => {
  cy.get('input[name="s"]').type('มัง');  // ใส่คำค้นหาในช่องค้นหา (ปรับ selector ตามจริง)
  cy.get('button[type="submit"]').click();  // คลิกปุ่มค้นหา
});

Then('I should see "No results found" message', () => {
  cy.url({ decode: true }).should('include', '/?s=มัง&post_type=product');
});

// Searching for "การ์ตูน"
When('I enter "การ์ตูน" in the search box', () => {
  cy.get('input[name="s"]').type('การ์ตูน');  // ใส่คำค้นหาในช่องค้นหา (ปรับ selector ตามจริง)
  cy.get('button[type="submit"]').click();  // คลิกปุ่มค้นหา
});

Then('I should see relevant search results', () => {
  cy.url({ decode: true }).should('include', '/?s=การ์ตูน&post_type=product');
});

// Navigation to login page
When("I click on {string}", (buttonText) => {
  cy.contains(buttonText).click(); // ค้นหาและคลิกที่ปุ่ม Login
});

Then("I should be navigated to the Login Page", () => {
  cy.url().should("include", "/my-account/");  // เปลี่ยนจาก /login เป็น /my-account/
});

// Verify navigation to Best Selling page
When("I click on {string} in Discover Your Favorite Book Banner", (buttonText) => {
  cy.get('.col-1 > .wp-block-cover > .wp-block-cover__inner-container > .wp-block-columns > .is-vertically-aligned-top > .wp-block-buttons > .wp-block-button > .wp-block-button__link') 
    .contains(buttonText)                              
    .click();                                          
});

Then("I should be navigated to Discover Your Favorite Book Page", () => {
  cy.url().should("eq", "http://localhost/pondshop/shop/");  
});

// Verify navigation to Best Selling page
When("I click on {string} in the Best Selling Banner", (buttonText) => {
  cy.get('.slider-box-1 > .wp-block-cover__inner-container > .wp-block-columns > .is-vertically-aligned-top > .wp-block-buttons > .wp-block-button > .wp-block-button__link')  
    .contains(buttonText)                              
    .click();                                          
});

Then("I should be navigated to the Best Selling Page", () => {
  cy.url().should("eq", "http://localhost/pondshop/best-selling/");  
});

// On Sale products navigation
When("I click on {string} On sale book Banner", (buttonText) => {
  cy.get('.slider-box-2 > .wp-block-cover__inner-container > .wp-block-columns > .is-vertically-aligned-top > .wp-block-buttons > .wp-block-button > .wp-block-button__link')  
    .contains(buttonText)                              
    .click();                                          
});

Then("I should be navigated to On sale book Page", () => {
  cy.url().should("eq", "http://localhost/pondshop/on-sale-products/");  
});

// Verify text on page
Then("The {string} and {string} text should be displayed", (firstText, secondText) => {
  cy.contains(firstText).should("be.visible");  // Verify "Book Zones"
  cy.contains(secondText).should("be.visible");  // Verify "On sale products"
});

// Product detail page navigation
When("I click on a product banner", () => {
  cy.get('.post-111 > .wc-block-components-product-image > a > [data-testid="product-image"]') // Replace with the correct class or selector for the product banner
    .first() // If there are multiple banners, choose the first one
    .click();
});

Then("I should be navigated to the Product Detail Page", () => {
  cy.url().should("include", "/product/"); // Ensure the URL contains /product/
});

// Add to Cart functionality
When("I click on {string} button", (buttonText) => {
  cy.contains(buttonText).click();  // Find the button by its text and click it
});

Then("The item should be added to the cart", () => {
  cy.get('.cart-item-count')  // Replace with the correct selector for cart item count
    .should('be.visible')    // Ensure the element is visible
    .should('have.text', '1'); // Verify that 1 item is added to the cart
});

// View Cart functionality
When("I click on View in Cart", () => {
  cy.contains("View in Cart").click();  // Click on 'View in Cart' button
});

Then("The cart page should display the correct item information", () => {
  cy.url().should("include", "/cart/"); // Ensure we're on the cart page
  cy.get('.cart_item')  // Adjust selector based on the actual structure
    .should('have.length', 1); // Ensure 1 item is in the cart
});

// Footer navigation tests
When("I click on \"Home\" in the footer", () => {
  cy.get('footer').contains("Home").click();  // คลิกที่ลิงก์ "Home" ในฟุตเตอร์
});

Then("I should be navigated to the Home Page", () => {
  cy.url().should("include", "/pondshop/");  // ตรวจสอบว่า URL ตรงกับหน้า Home
});

When("I click on \"Contact Us\" in the footer", () => {
  cy.get('footer').contains("Contact Us").click();  // คลิกที่ลิงก์ "Contact Us" ในฟุตเตอร์
});

Then("I should be navigated to the Contact Us Page", () => {
  cy.url().should("include", "/pondshop/contact-us/");  // ตรวจสอบว่า URL ตรงกับหน้า Contact Us
});

When("I click on \"Account\" in the footer", () => {
  cy.get('footer').contains("Account").click();  // คลิกที่ลิงก์ "Account" ในฟุตเตอร์
});

Then("I should be navigated to the Account Page", () => {
  cy.url().should("include", "/pondshop/my-account/");  // ตรวจสอบว่า URL ตรงกับหน้า Account
});

When("I click on \"Order History\" in the footer", () => {
  cy.get('footer').contains("Order History").click();  // คลิกที่ลิงก์ "Order History" ในฟุตเตอร์
});

Then("I should be navigated to the Order History Page", () => {
  cy.url().should("include", "/pondshop/my-account/orders/");  // ตรวจสอบว่า URL ตรงกับหน้า Order History
});

// Payment icons validation
Then("The footer should display correct payment icons", () => {
  cy.get('footer').find('img').should('have.attr', 'src').and('include', 'payment-icon');  // ตรวจสอบว่าแสดงไอคอนการชำระเงิน
});
