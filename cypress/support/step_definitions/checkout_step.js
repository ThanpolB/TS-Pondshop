import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user is on the checkout page", () => {
  cy.visit("http://localhost/pondshop/checkout/");
});

When("clicks link and logs in", () => {
    // ค้นหาและคลิกที่ลิงก์ที่มีข้อความ "Click here to login"
    cy.contains('a', 'Click here to login').click();
  
    // กรอกข้อมูลในฟิลด์ Username หรือ email
    cy.get('#username').type('root'); // กรอก username หรือ email ที่ถูกต้อง
  
    // กรอกข้อมูลในฟิลด์ Password
    cy.get('#password').type('pond2545'); // กรอกรหัสผ่านที่ถูกต้อง
  
    // คลิกปุ่ม Login
    cy.get('button[name="login"]').click(); // คลิกปุ่ม login
    
    // ตรวจสอบว่าเข้าสู่ระบบสำเร็จหรือไม่ (อาจจะตรวจสอบว่า redirect ไปหน้าไหน)
    cy.url().should('include', '/checkout/'); // หรือเช็คการเปลี่ยนเส้นทางไปยังหน้า checkout
  });

// ฟังก์ชันสุ่มตัวอักษรและตัวเลข
const getRandomString = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

// ฟังก์ชันสุ่มค่าข้อมูลต่าง ๆ
const getRandomName = () => `User${getRandomString(4)}`;
const getRandomPhone = () => `08${Math.floor(Math.random() * 1000000000)}`;
const getRandomAddress = () => `Street ${Math.floor(Math.random() * 100)} ${getRandomString(5)}`;
const getRandomEmail = () => `${getRandomString(5)}@example.com`;

// ฟังก์ชันกรอกข้อมูลลงในฟิลด์
const fillFieldWithUserData = (fieldSelector, fieldName, randomValueFunction) => {
  cy.get(fieldSelector).then(($input) => {
    cy.window().then((window) => {
      const currentUser = window.localStorage.getItem("current_user");
      if (currentUser) {
        const user = JSON.parse(currentUser); // ดึงข้อมูลผู้ใช้จาก localStorage
        if (user.billing[fieldName] && !$input.val()) {
          cy.wrap($input).type(user.billing[fieldName]); // ถ้ามีข้อมูลใน WooCommerce ก็กรอกข้อมูลนั้น
        }
      } else if (!$input.val()) {
        cy.wrap($input).type(randomValueFunction()); // ถ้าไม่มีข้อมูลจาก WooCommerce ให้ใช้ข้อมูลสุ่ม
      }
    });
  });
};

// การกรอกข้อมูล
When("the user fills in billing details", () => {
  // กรอกข้อมูลในฟิลด์ต่างๆ
  fillFieldWithUserData("#billing_first_name", "first_name", getRandomName);
  fillFieldWithUserData("#billing_last_name", "last_name", getRandomName);
  fillFieldWithUserData("#billing_address_1", "address_1", getRandomAddress);
  fillFieldWithUserData("#billing_city", "city", () => "Bangkok");
  fillFieldWithUserData("#billing_postcode", "postcode", () => "10200");
  fillFieldWithUserData("#billing_email", "email", getRandomEmail);
  fillFieldWithUserData("#billing_phone", "phone", getRandomPhone);

  // เลือก Bangkok จาก dropdown
  cy.get("#select2-billing_state-container").click();
  cy.get(".select2-results__option").contains("Bangkok").click();
});

// กรอกข้อมูลในฟิลด์สำหรับ "Ship to a different address?"
When("the user fills in shipping details", () => {
  // เช็คว่า "Ship to a different address?" ถูกเลือก
  cy.get('#ship-to-different-address-checkbox').check();  // ติ๊กเลือก checkbox นี้

  // รอให้ฟิลด์ที่เกี่ยวข้องกับ shipping ปรากฏ
  cy.get('#shipping_first_name').should('be.visible');
  cy.get('#shipping_last_name').should('be.visible');

  // กรอกข้อมูลในฟิลด์ต่างๆ
  fillFieldWithUserData("#shipping_first_name", "first_name", getRandomName);
  fillFieldWithUserData("#shipping_last_name", "last_name", getRandomName);
  fillFieldWithUserData("#shipping_address_1", "address_1", getRandomAddress);
  fillFieldWithUserData("#shipping_city", "city", () => "Nonthaburi");
  fillFieldWithUserData("#shipping_postcode", "postcode", () => "11000");

  // เลือก Nonthaburi จาก dropdown
  cy.get("#select2-shipping_state-container").click();
  cy.get(".select2-results__option").contains("Nonthaburi").click();
});



When("enters a coupon code", () => {
  // ค้นหาข้อความที่มี "Have a coupon? Click here to enter your code"
  cy.contains('a', 'Click here to enter your code') // ค้นหาลิงก์ที่มีข้อความ
    .click(); // คลิกที่ลิงก์
  // ตรวจสอบว่าโมเดลกรอกคูปองปรากฏขึ้น
  cy.get('#coupon_code').should('be.visible'); // เช็คว่า input สำหรับคูปองปรากฏขึ้น
  });
  
When("the user selects a payment method", () => {
    const paymentMethods = ["#payment_method_bacs", "#payment_method_cod"]; // ตัวเลือก: Direct bank transfer และ Cash on delivery
    const randomPaymentMethod = paymentMethods[Math.floor(Math.random() * paymentMethods.length)]; // เลือกแบบสุ่ม
    cy.get(randomPaymentMethod).click(); // คลิกที่ตัวเลือกที่สุ่ม
  });
  
When("the user places the order", () => {
  cy.get("#place_order").should('be.visible').click({ force: true }); // คลิก "Place Order"
  cy.wait(5000); // รอ 5 วินาที
});

Then("the user should be redirected to the order received page", () => {
  cy.url().should("include", "/checkout/order-received/"); // ตรวจสอบ URL
  cy.contains("Thank you. Your order has been received.").should("be.visible"); // ตรวจสอบข้อความ "Thank you"
});

Then("an error message for should be displayed", function () {
  cy.get('[role="alert"] > .wc-block-components-notice-banner')
    .should('be.visible') // ตรวจสอบว่ากล่องข้อความแสดงผลอยู่
    .and('contain', 'Billing First name is a required field.')
    .and('contain', 'Billing Last name is a required field.')
    .and('contain', 'Billing Street address is a required field.')
    .and('contain', 'Billing Town / City is a required field.')
    .and('contain', 'Billing Postcode / ZIP is a required field.');
});

When("the user enters email {string} into the email field", function (email) {
  cy.get('#billing_email')
    .scrollIntoView() // เลื่อนฟิลด์ไปยังตำแหน่งที่มองเห็นได้
    .should('be.visible')
    .and('not.be.disabled')
    .clear()
    .type(email);
});

Then("the email field should contain {string}", function (email) {
  // Locate the email field and check that it contains the specified email
  cy.get('#billing_email') // Replace with the correct selector if necessary
    .should('have.value', email); // Check that the email field contains the provided email value
});

Then("an error message for invalid email should be displayed", function () {
  cy.get('[role="alert"] > .wc-block-components-notice-banner') // เลือกองค์ประกอบที่แสดงข้อความ error
    .should('be.visible') // ตรวจสอบว่า error message แสดงอยู่
    .and('contain.text', 'Invalid billing email address'); // ตรวจสอบว่าข้อความใน error เป็น "Invalid billing email address"
});

// ฟังก์ชันสุ่มรหัสผ่าน
const getRandomPassword = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

When("the user selects 'Create an account?' and enters a random password", function () {
  // คลิกที่ checkbox "Create an account?"
  cy.get('#createaccount').check();  // หรือเลือก selector ที่ถูกต้องสำหรับ checkbox นี้
  
  // สุ่มรหัสผ่าน
  this.randomPassword = getRandomPassword(10); // เก็บรหัสผ่านที่สุ่ม
  cy.get('#account_password').type(this.randomPassword);  // กรอกในฟิลด์รหัสผ่าน
  
  // ตรวจสอบว่าได้กรอกรหัสผ่านลงในฟิลด์แล้ว
  cy.get('#account_password').should('have.value', this.randomPassword);
});

Then("the password field should contain the generated password", function () {
  // ตรวจสอบว่า ฟิลด์รหัสผ่านมีค่าตรงกับรหัสผ่านที่สุ่ม
  cy.get('#account_password').should('have.value', this.randomPassword);
});
