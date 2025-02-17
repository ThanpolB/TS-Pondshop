import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user visits the contact us page", () => {
  cy.visit("http://localhost/pondshop/contact-us/"); // เปลี่ยน URL ตามที่ใช้ในโปรเจคจริง
});

When("the user fills in the contact form", () => {
  // สุ่มข้อมูล
  const firstNames = ['John', 'Jane', 'Alex', 'Emily', 'Chris'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Brown', 'Davis'];

  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];

  const randomName = randomFirstName + ' ' + randomLastName; // สุ่มชื่อเต็ม
  const randomEmail = randomFirstName.toLowerCase() + Math.floor(Math.random() * 1000) + '@example.com';
  const randomSubject = 'Testing Contact Form ' + Math.floor(Math.random() * 1000);
  const randomMessage = 'This is a test message with random content ' + Math.floor(Math.random() * 1000);

  // กรอกข้อมูลในฟอร์ม
  cy.get('input[name="your-name"]').should('be.visible').type(randomName);
  cy.get('input[name="your-email"]').should('be.visible').type(randomEmail);
  cy.get('input[name="your-subject"]').should('be.visible').type(randomSubject);
  cy.get('textarea[name="your-message"]').should('be.visible').type(randomMessage);
});

When("the user fills with invalid email", () => {
    const randomName = "User" + Math.floor(Math.random() * 1000);
    const invalidEmail = "test" + Math.floor(Math.random() * 1000) + ".com"; // ไม่มี "@"
    const randomSubject = "Test Subject " + Math.floor(Math.random() * 100);
    const randomMessage = "Random message " + Math.random().toString(36).substring(7);
  
    cy.get('input[name="your-name"]').type(randomName);
    cy.get('input[name="your-email"]').type(invalidEmail);
    cy.get('input[name="your-subject"]').type(randomSubject);
    cy.get('textarea[name="your-message"]').type(randomMessage);
  });  

Then("the user should see an email validation error", () => {
    // ตรวจสอบข้อความแจ้งเตือนใต้ฟิลด์อีเมล
    cy.get('.wpcf7-form-control-wrap > :nth-child(3)')
      .should("be.visible")
      .and("contain", "Please enter an email address.");
  
    // ตรวจสอบข้อความแจ้งเตือนหลักด้านล่างปุ่ม Submit
    cy.get('.wpcf7-response-output')
      .should("be.visible")
      .and("contain", "One or more fields have an error. Please check and try again.");
  });
  
When("the user submits the form", () => {
  cy.get('input[type="submit"]').click();
});

Then("the user should see a success message", () => {
  cy.get('.wpcf7-response-output')
    .should("be.visible")
    .and("contain", "Thank you for your message. It has been sent.");
});

Then("the user should see error messages", () => {
 // ตรวจสอบทุกฟิลด์ว่ามี error "Please fill out this field."
 cy.get('.wpcf7-not-valid-tip').each(($el, index) => {
  cy.wrap($el).invoke('text').then((text) => {
    cy.log(`Field ${index + 1}: ${text}`);
  });
});

// ตรวจสอบข้อความแจ้งเตือนโดยรวมที่ด้านล่างฟอร์ม
cy.get('.wpcf7-response-output')
 .should("be.visible")
 .and("contain", "One or more fields have an error. Please check and try again.");
});