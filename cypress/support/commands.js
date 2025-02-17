// ***********************************************
// This example commands.js shows you how to
// create custom commands and overwrite
// existing commands in Cypress.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// ตัวอย่าง: คำสั่งสำหรับล็อกอิน
Cypress.Commands.add("login", (username, password) => {
    cy.visit("http://localhost/pondshop/my-account/"); // เปลี่ยน URL ตามเว็บของคุณ
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("button[type=submit]").click();
  });
  
  // ตัวอย่าง: คำสั่งเช็คว่ามีข้อความอยู่ในหน้า
  Cypress.Commands.add("verifyText", (selector, text) => {
    cy.get(selector).should("contain", text);
  });
  
  // ตัวอย่าง: คำสั่งเช็คการ Redirect
  Cypress.Commands.add("checkRedirect", (url) => {
    cy.url().should("include", url);
  });
  
  // ตัวอย่าง: คำสั่งสำหรับคลิกปุ่มโดยใช้ label
  Cypress.Commands.add("clickButton", (label) => {
    cy.contains("button", label).click();
  });
  
  // Export คำสั่งเพื่อให้สามารถเรียกใช้ได้ในไฟล์อื่น
  module.exports = {};
  