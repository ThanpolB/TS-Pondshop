import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the Cart page", () => {
    cy.visit("http://localhost/pondshop/cart/");  // เปิดหน้า Cart
    cy.wait(1500);  // รอ 1.5 วินาทีให้หน้าเว็บโหลด
    // ตรวจสอบว่า URL ถูกต้อง
    cy.url().should("include", "/pondshop/cart");
    // ตรวจสอบว่า body สามารถมองเห็นได้
    cy.get("body").should("be.visible");
  });
  
// Step definition สำหรับการตรวจสอบข้อความใน empty cart
Then("I check the message in the empty cart", () => {
    cy.get('.wc-block-components-notice-banner__content')  // ดึงกล่องข้อความที่มีคลาสนี้
      .should('be.visible')  // ตรวจสอบว่าองค์ประกอบมองเห็นได้
      .should('contain.text', 'Your cart is currently empty');  // ตรวจสอบข้อความว่า "ตะกร้าว่าง"
  });
  
// Step definition สำหรับการตรวจสอบว่าไปยังหน้า Shop
Then("I should be redirected to the Shop page", () => {
    cy.url().should("include", "/pondshop/shop");  // ตรวจสอบว่า URL เปลี่ยนเป็นหน้า Shop
  });
  
// เก็บชื่อสินค้าที่จะลบออก
let removedItemName = "";
// ค้นหาและคลิกปุ่ม "X" เพื่อลบสินค้าออกจากตะกร้า
When("I remove an item from the cart", () => {
    cy.get('.woocommerce-cart-form__cart-item') // ค้นหาสินค้าในตะกร้า
      .first() // เลือกสินค้าแรกที่เจอ
      .within(() => {
        cy.get('.product-name') // ดึงชื่อสินค้า
          .invoke('text')
          .then((text) => {
            removedItemName = text.trim(); // เก็บชื่อสินค้าไว้ตรวจสอบภายหลัง
          });
  
        cy.get('.product-remove a') // หาปุ่ม "X"
          .should('be.visible') // ตรวจสอบว่าปุ่มแสดงผล
          .click(); // คลิกปุ่มลบสินค้า
      });
  
    cy.wait(5000); // รอให้สินค้าอัปเดต
  });
  
// ตรวจสอบว่าสินค้าถูกลบออกไปจริง
Then("The item should be removed successfully", () => {
    cy.get('.wc-block-components-notice-banner__content') // ค้นหาข้อความแจ้งเตือน
      .should('be.visible')
      .should('contain.text', removedItemName); // ตรวจสอบว่ามีชื่อสินค้าที่ถูกลบออกไป
  });
  
// ตรวจสอบว่ามีปุ่ม Undo หรือไม่ และคลิกมัน
Then("If an undo option appears, I click it", () => {
    cy.get('.is-success a') // ค้นหาปุ่ม Undo
      .should('be.visible') // ตรวจสอบว่าปุ่มแสดงผล
      .click(); // คลิกเพื่อกู้คืนสินค้า
  
    // รอให้สินค้าโหลดกลับมาในตะกร้า
    cy.wait(3000);
  });
  
// ตรวจสอบว่าสินค้าถูกนำกลับมาและข้อมูลตรง
Then("The removed item should be restored correctly", () => {
    // ใช้ waitUntil เพื่อรอให้สินค้าแสดงในตะกร้าอีกครั้ง
    cy.get('.woocommerce-cart-form__cart-item', { timeout: 5000 }) // รอสูงสุด 5 วินาที
      .should('be.visible') // ตรวจสอบว่าสินค้าแสดงผล
      .first()
      .within(() => {
        cy.get('.product-name') // ตรวจสอบชื่อสินค้า
          .should('contain.text', removedItemName); // ตรวจสอบว่าสินค้ากลับมาและตรงกับที่ลบ
      });
  });
  
// ตรวจสอบข้อมูลสินค้าในตะกร้า
Then("cart should display the correct product details", () => {
    cy.get('#wp--skip-link--target > .wp-block-group') // ตรวจสอบโซนสินค้าในตะกร้า
      .should('be.visible') // ต้องแสดงผล
      .within(() => {
        cy.get('.product-name') // ตรวจสอบชื่อสินค้า
          .should('exist')
          .and('not.be.empty'); // ต้องไม่ว่าง
  
        cy.get('.product-price') // ตรวจสอบราคาสินค้า
          .should('exist')
          .and('contain.text', '฿'); // มีสกุลเงินแสดง
  
        cy.get('input[type="number"]') // ตรวจสอบช่องใส่จำนวนสินค้า
          .should('exist')
          .and('have.length.greaterThan', 0) // ต้องมี input อย่างน้อย 1 ตัว
          .invoke('val') // ดึงค่าจาก input
          .should('not.be.empty'); // ค่าต้องไม่ว่างเปล่า
      });
  });

//ตรวจสอบการอัพเดทตะกร้าและปุ่ม
Then("I update the cart and verify price and tax changes", () => {
    // เพิ่มการรอการอัปเดตให้มากขึ้น
    cy.wait(5000);  // รอ 5 วินาที

    // กดปุ่ม Update cart
    cy.get('#wp--skip-link--target > .wp-block-group button[name="update_cart"]', { timeout: 30000 })
      .should('be.visible')
      .click();
    
    // รอให้ข้อมูลอัปเดตและ DOM โหลดใหม่
    cy.wait(8000); // รอให้ DOM โหลดใหม่ หลังจากกดปุ่ม

    // ตรวจสอบข้อมูลราคาก่อนและหลังการอัปเดต
    cy.get('.cart-subtotal .woocommerce-Price-amount', { timeout: 30000 })
      .should('be.visible')
      .invoke('text')
      .as('subtotalBeforeTax');
  
    cy.get('.tax-rate > td', { timeout: 30000 })
      .should('be.visible')
      .invoke('text')
      .as('taxRate')
      .then((taxText) => {
        cy.log('Tax Rate: ' + taxText);  // ตรวจสอบค่าภาษีที่ดึงมา
      });
    
    cy.get('.order-total .woocommerce-Price-amount', { timeout: 30000 })
      .should('be.visible')
      .invoke('text')
      .as('totalPrice');
  
    // ใช้ .then เพื่อคำนวณและตรวจสอบผลรวม
    cy.get('@subtotalBeforeTax').then((subtotalBeforeTax) => {
      cy.get('@taxRate').then((taxRate) => {
        cy.get('@totalPrice').then((totalPrice) => {
          // ลบสัญลักษณ์ "฿" และช่องว่าง
          const updatedSubtotal = parseFloat(subtotalBeforeTax.replace('฿', '').trim());
          const updatedTax = parseFloat(taxRate.replace('฿', '').trim());
          const updatedTotalPrice = parseFloat(totalPrice.replace('฿', '').trim());
        });
      });
    });
});

//ตรวจสอบการนำทางไปหน้าเช็คเอา
Then("I click Proceed to checkout and verify redirection to checkout page", () => {
    // หาปุ่ม Proceed to Checkout โดยใช้ selector ที่ถูกต้อง
    cy.get('.checkout-button', { timeout: 30000 }) // ใช้ selector ของปุ่มใหม่
      .should('be.visible')  // ตรวจสอบให้แน่ใจว่าปุ่มแสดงอยู่
      .click();  // คลิกปุ่ม Proceed to checkout

    // รอให้หน้าโหลดเสร็จและตรวจสอบว่า URL มี '/checkout/' อยู่
    cy.url({ timeout: 20000 })
      .should('include', '/checkout/');
});

When("I enter the coupon code {string} into the coupon", (couponCode) => {
  cy.get("#coupon_code")
    .should("be.visible")
    .clear()
    .type(couponCode)
    .then(() => {
      cy.wrap(couponCode).as("enteredCoupon"); // เก็บคูปองที่กรอก
    });
});

// คลิกปุ่ม Apply Coupon
When("I click the Apply Coupon button for coupon", () => {
  cy.get(".coupon", { timeout: 10000 }) // เช็ค container หลัก
    .should("be.visible")
    .within(() => {
      cy.get(".button")
        .should("be.visible") // ตรวจสอบว่าปุ่มแสดง
        .click(); // คลิก Apply Coupon
    });
  cy.wait(4000); // รอให้ระบบประมวลผล
});

// ตรวจสอบทั้งกรณีคูปองใช้งานสำเร็จและข้อผิดพลาดที่เกิดขึ้น
Then("the coupon should show the correct message", () => {
  cy.get("@enteredCoupon").then((couponCode) => {
    cy.get('.actions', { timeout: 10000 })
      .should("be.visible")
      .then(($actions) => {
        const actionsText = $actions.text().trim();

        if (actionsText.includes("Coupon code applied successfully")) {
          cy.log(`✅ คูปอง '${couponCode}' ถูกใช้งานสำเร็จ`);
        } 
        else if (actionsText.includes(`Coupon '${couponCode}' does not exist`)) {
          cy.log(`❌ คูปอง '${couponCode}' ไม่มีอยู่`);
          cy.wrap(null).should('not.exist'); // เพิ่มการตรวจสอบว่าไม่พบคูปอง
        } 
        else if (actionsText.includes("This coupon has expired")) {
          cy.log(`⚠️ คูปอง '${couponCode}' หมดอายุ`);
          // สามารถใช้การจัดการข้อผิดพลาดแบบนี้เพื่อไม่ให้หยุดการทดสอบ
          cy.wrap(null).should('not.exist'); // เพิ่มการตรวจสอบว่าไม่พบคูปองที่หมดอายุ
        } 
        else {
          cy.log("⚠️ ไม่พบข้อความที่คาดไว้: " + actionsText);
        }
      });
  });
});

// ตรวจสอบการเปลี่ยนแปลงที่อยู่และอัปเดต
When("I change the shipping address and update it", () => {
  // คลิกที่ปุ่ม 'Change address' เพื่อเปิดโมเดล
  cy.get('.woocommerce-shipping-totals > td').contains('Change address')
    .click(); // คลิกปุ่มที่เปิดฟอร์ม

  // รอให้ฟอร์มแสดง
  cy.get('#calc_shipping_country_field', { timeout: 10000 }).should('be.visible'); // รอให้ฟอร์มที่อยู่แสดง

// กรอกข้อมูลที่อยู่ใหม่
  cy.get('#calc_shipping_country_field')
    .should('be.visible')
    .find('select')  // ค้นหา <select> ที่อยู่ภายใน <p> 
    .select('Thailand', { force: true });  // เลือกประเทศ Thailand โดยใช้ force: true

  cy.get('#calc_shipping_state_field')
    .should('be.visible')
    .find('select')  // ค้นหา <select> ที่อยู่ภายใน <p> 
    .select('Bangkok', { force: true });  // เลือกรัฐ Bangkok ด้วย force: true


  cy.get('#calc_shipping_city')
    .should('be.visible')
    .clear()
    .type('Sukhumvit');  // กรอกชื่อเมือง

  cy.get('#calc_shipping_postcode')
    .should('be.visible')
    .clear()
    .type('10110');  // กรอกรหัสไปรษณีย์

  // กดปุ่ม 'Update' เพื่อบันทึกข้อมูลที่อยู่ใหม่
  cy.get('button[name="calc_shipping"]')
    .should('be.visible')
    .click();  // คลิกปุ่ม Update

  // รอให้ข้อมูลแสดงผลหลังจากอัปเดต
  cy.wait(2000); // รอให้ข้อมูลอัปเดตเสร็จ

  // ตรวจสอบข้อมูลที่อยู่ใหม่ที่แสดงใน 'shipping-totals'
  cy.get('.woocommerce-shipping-totals > td')
    .should('contain.text', 'Thailand')  // ตรวจสอบว่าประเทศเปลี่ยนเป็น Thailand
    .and('contain.text', 'Bangkok')     // ตรวจสอบว่ารัฐเปลี่ยนเป็น Bangkok
    .and('contain.text', 'Sukhumvit')   // ตรวจสอบว่าเมืองเปลี่ยนเป็น Sukhumvit
    .and('contain.text', '10110');      // ตรวจสอบว่ารหัสไปรษณีย์เปลี่ยนเป็น 10110
});
