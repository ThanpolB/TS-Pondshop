import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

const baseUrl = "http://localhost/pondshop/my-account/"; // URL หลักของเว็บ

// เปิดหน้า Login
Given("I open the login page", () => {
  cy.visit(`${baseUrl}`);
});

// กรอกชื่อผู้ใช้และรหัสผ่าน
When("I enter username {string} and password {string}", (username, password) => {
  cy.get("#username").type(username); // ใช้ ID ของช่อง Username
  cy.get("#password").type(password); // ใช้ ID ของช่อง Password
});

// คลิกปุ่มที่ระบุ
When("I click the {string} button", (buttonText) => {
  // ลองเลือกปุ่มจากทั้ง <button>, <input type="submit"> และ <a>
  cy.get("button, input[type='submit'], a")
    .contains(buttonText, { matchCase: false }) // case-insensitive
    .click({ force: true }); // บังคับคลิกแม้โดนบัง
});

// ตรวจสอบว่าเข้าสู่ระบบสำเร็จ
Then("I should be logged in successfully", () => {
  cy.url().should("include", "/my-account"); // ตรวจสอบว่าเปลี่ยนไปหน้าหลังล็อกอิน
});

// ✅ เพิ่มสำหรับการลงทะเบียน
When("I enter email {string} and password {string} for registration", (email, password) => {
  cy.get("#reg_email").type(email); // ใช้ ID ช่องอีเมลสมัครสมาชิก
  cy.get("#reg_password").type(password); // ใช้ ID ช่องรหัสผ่านสมัครสมาชิก
});

// ✅ ตรวจสอบว่าเข้าสู่ระบบหลังสมัครสำเร็จ
Then("I should be redirected to My Account", () => {
  cy.url().should("include", "/my-account"); // ตรวจสอบว่าถูกนำไปที่หน้าหลังสมัคร
});

// ตรวจสอบข้อความ error เมื่อเข้าสู่ระบบผิดพลาด
Then("I should see an error message {string}", (errorMessage) => {
  cy.contains(errorMessage).should("be.visible");
});

// คลิกลิงก์ (ใช้สำหรับ "Lost your password?" หรืออื่น ๆ)
When("I click the {string} link", (linkText) => {
  cy.contains("a", linkText).click();
});

// กรอกอีเมลสำหรับรีเซ็ตรหัสผ่าน
When("I enter {string} in the email field", (email) => {
  cy.get("input[name='user_login'], #email", { timeout: 6000 })
    .should("be.visible")
    .type(email);
});

// ตรวจสอบข้อความยืนยันการส่งอีเมลรีเซ็ตรหัสผ่าน
Then("I should see a message {string}", (message) => {
  cy.contains(message).should("be.visible");
});

When("I click the REGISTER button", () => {
  cy.get("button, input[type='submit'], a")
    .contains("REGISTER", { matchCase: false }) // ค้นหาปุ่ม "REGISTER" ไม่สนตัวพิมพ์เล็ก/ใหญ่
    .click({ force: true }); // คลิกแม้จะถูกบัง
});

// ตรวจสอบว่าหลังจากกดปุ่ม REGISTER แล้ว ระบบพาไปที่หน้าหลักของบัญชีผู้ใช้
Then("I should be redirected to the My Account page", () => {
  cy.url().should("include", "/my-account"); // ตรวจสอบว่า URL มี "/my-account"
});

const baseUrls = "http://localhost/pondshop/my-account/"; // URL หลักของเว็บ

// ✅ ล็อกอินก่อนทำการทดสอบ
Given("I log in successfully", () => {
  cy.visit(baseUrls); // เปิดหน้า Login
  cy.get("#username").type("root"); // ใช้ username จากเคสแรก
  cy.get("#password").type("pond2545"); // ใช้ password จากเคสแรก
  cy.get("button[name='login']").click(); // กดปุ่มล็อกอิน
  cy.url().should("include", "/my-account/"); // ตรวจสอบว่าเข้าสู่หน้าหลักสำเร็จ
});

// ✅ คลิกเมนูเพื่อนำทางไปยังแต่ละหน้า
When("I click {string} in the My Account menu", (menuItem) => {
  cy.contains(".woocommerce-MyAccount-navigation-link a", menuItem.trim())
  .should("be.visible")
  .then((el) => {
    cy.log("Found menu:", el.text()); // Debugging
    cy.wrap(el).click();
  });
});

// ✅ ตรวจสอบว่า URL ตรงกับหน้าที่ควรไป
Then("I should be on the {string} page", (expectedPage) => {
  if (expectedPage === "Account details") {
    cy.url().should("eq", "http://localhost/pondshop/my-account/edit-account/");
  } else {
    cy.url().should("include", expectedPage.toLowerCase().replace(/ /g, "-"));
  }
});