import './commands';  // ดึง commands.js เข้ามาใช้งาน
import '@badeball/cypress-cucumber-preprocessor'; // ใช้ Cucumber Preprocessor
// ตัวอย่างการตั้งค่าที่จะทำงานก่อนการทดสอบ
before(() => {
  cy.log('This will run before any tests start');
});

// ตัวอย่างการตั้งค่าที่จะทำงานหลังจากการทดสอบเสร็จสิ้น
after(() => {
  cy.log('This will run after all tests are finished');
});

// กำหนดฟังก์ชันเพื่อป้องกันไม่ให้ Cypress หยุดหากเกิดข้อผิดพลาด
Cypress.on('uncaught:exception', (err, runnable) => {
  // ป้องกันไม่ให้ Cypress หยุดเมื่อพบข้อผิดพลาด uncaught exception
  return false;
});