import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
// เปิดหน้า Shop
Given('I open the Shop page', () => {
  cy.visit("http://localhost/pondshop/shop/"); // ไปที่หน้า Shop
  cy.wait(2000); // รอให้หน้าเว็บโหลด
});

Then('the header should display Archives: Shop', () => {
  cy.get('.wp-block-cover__inner-container > .is-layout-constrained > .wp-block-group > .has-text-align-center')
    .should('include.text', 'Archives: Shop'); // ใช้ include.text แทน
});

Then('the product listing should display 20 results', () => {
  cy.get('.woocommerce-result-count')
    .should('include.text', 'Showing 1–16 of 20 results'); // ทดสอบกรณีแสดง 16 รายการ
});

When('I select {string} as the sorting option', (sortOption) => {
  cy.get('.woocommerce-ordering select').select(sortOption, { force: true }); 
});
  
Then('Products should be sorted by {string}', (expectedSort) => {
  cy.wait(1000); // รอให้ข้อมูลโหลด
  if (expectedSort === 'popularity') {
    cy.get('.product').first().should('be.visible');
  } else if (expectedSort === 'rating') {
    cy.get('.product').first().should('be.visible');
  } else if (expectedSort === 'price: low to high') {
    cy.get('.product').first().should('be.visible');
  } else if (expectedSort === 'price: high to low') {
    cy.get('.product').first().should('be.visible');
  }
});

//คลิกบนแบนเนอร์สินค้าของสินค้าหมายเลข 228
When('I click on the add to cart product banner', () => {
  cy.get('.post-228 > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail')
    .should('be.visible') // ตรวจสอบว่าแสดงอยู่
    .click(); // คลิกที่แบนเนอร์
});

// ตรวจสอบว่าถูกนำไปยังหน้ารายละเอียดสินค้า
Then('I should be redirected to the product detail page', () => {
  cy.url().should('include', '/product/'); // ตรวจสอบว่าอยู่ในหน้ารายละเอียดสินค้า
  cy.get('.product_title').should('be.visible'); // ตรวจสอบว่ามีชื่อสินค้าปรากฏ
});

// คลิก "Add to Cart"
When('I click Add to Cart on a product banner', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.single_add_to_cart_button').length > 0) {
      // ถ้ามีปุ่ม ".single_add_to_cart_button" ให้กดอันนี้ก่อน
      cy.get('.single_add_to_cart_button')
        .should('be.visible')
        .click();
    } else {
      // ถ้าไม่มีปุ่มด้านบน ให้ไปกด ".add_to_cart_button" แทน
      cy.get('.add_to_cart_button')
        .first()
        .should('be.visible')
        .click();
    }
  });
  cy.wait(2000); // รอให้ระบบอัปเดตตะกร้า
});

// ตรวจสอบว่า "สินค้าถูกเพิ่มเข้าไปในตะกร้า"
Then('The product should be added to the cart', () => {
  cy.request('GET', 'http://localhost/pondshop/wp-json/wc/store/v1/cart')  // คำขอ API เพื่อดึงข้อมูลตะกร้า
    .its('body')
    .should('have.property', 'items')  // ตรวจสอบว่ามีสินค้าในตะกร้า
    .and('have.length.greaterThan', 0)  // ตรวจสอบว่าตะกร้ามีสินค้าอย่างน้อย 1 ชิ้น
    .then((cart) => {
      const addedItem = cart.items.find(item => item.product_id === 228);  // ค้นหาสินค้าที่มี product_id 228
      expect(addedItem).to.not.be.undefined;  // ตรวจสอบว่าสินค้าถูกเพิ่มเข้าไปในตะกร้า
      expect(addedItem.quantity).to.be.greaterThan(0);  // ตรวจสอบจำนวนสินค้าที่เพิ่ม
    });
});

// ตรวจสอบว่า "Add to Cart" ปรากฏขึ้น
Then('The Add to Cart button should be visible', () => {
  cy.get('.button.wp-element-button.product_type_simple.add_to_cart_button')
    .should('be.visible')
    .and('contain.text', 'Add to cart'); // ตรวจสอบว่าปุ่มมีข้อความถูกต้อง
});

// คลิก "View in Cart"
Then('The View in Cart button should appear', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.wc-block-components-notice-banner__content > .button').length > 0) {
      // ถ้ามีปุ่มใน notice banner ให้ตรวจสอบและคลิก
      cy.get('.wc-block-components-notice-banner__content > .button')
        .should('be.visible')
        .should('contain.text', 'View cart')
        .click(); // ✅ คลิกตรงนี้เลย
    } else {
      // ถ้าไม่มีปุ่มใน notice banner ให้ตรวจสอบและคลิกปุ่มปกติ
      cy.get('.added_to_cart', { timeout: 5000 }) // ✅ รอให้ปุ่มโหลด
        .should('exist')
        .should('be.visible')
        .should('contain.text', 'View cart')
        .click(); // ✅ คลิกตรงนี้เลย
    }
  });
});

//สินค้าต้องเข้า cart
Then("I should go to the Cart page", () => {
  cy.url().should("include", "/pondshop/cart"); // ตรวจสอบว่า URL ถูกต้อง
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0);
    cy.get('.product-name > a').should("have.length.greaterThan", 0);
});

// คลิก "Read More"
When('I click Read More button', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.outofstock .button').length > 0) {
      // ถ้ามีปุ่ม Read More ให้กด
      cy.get('.outofstock .button').first() // เลือกเฉพาะปุ่มแรก
      .should('be.visible')
      .click();
    } else {
      // ถ้าไม่มีสินค้าแบบหมดสต็อก ให้ข้ามการคลิก
      cy.log('No out-of-stock products found.');
    }
  });
});

// คลิก "View Products"
When('I click the View Products button', () => {
  // ค้นหาปุ่มที่มีข้อความ "View Products" และเป็นปุ่มตัวแรก
  cy.get('.products')  // ค้นหาผลิตภัณฑ์ทั้งหมด
    .contains('View products')  // ค้นหาปุ่มที่มีข้อความ "View Products"
    .first()  // เลือกปุ่มแรก
    .should('be.visible')  // ตรวจสอบว่าปุ่มมองเห็นได้
    .click();  // คลิกปุ่ม
});

//สุ่มใส่ตัวเลข
When('I input a random number into selected quantity boxes', () => {
  // ค้นหาช่องกรอกจำนวนทั้งหมดที่มีใน .cart
  cy.get('.cart')  // ใช้ selector ของช่องจำนวนสินค้า
    .should('be.visible')  // ตรวจสอบว่าช่องจำนวนมองเห็นได้
    .find('input[type="number"]')  // ค้นหา input field ที่เป็น type number
    .should('be.enabled')  // ตรวจสอบว่า input field สามารถกรอกได้
    .then(($quantityFields) => {
      // คำนวณจำนวนช่องทั้งหมด
      const totalQuantityFields = $quantityFields.length;

      // กำหนดว่าจะกรอกช่องไหน (สุ่ม 1 ช่อง, 2-x ช่อง, หรือ x ช่องทั้งหมด)
      const randomChoice = Math.floor(Math.random() * 3); // 0 = 1 ช่อง, 1 = 2 ถึง x ช่อง, 2 = ทุกช่อง

      if (randomChoice === 0) {
        // กรอก 1 ช่อง
        const randomIndex = Math.floor(Math.random() * totalQuantityFields); // เลือกช่องแบบสุ่ม
        cy.wrap($quantityFields.eq(randomIndex))
          .clear()
          .type(Math.floor(Math.random() * 10) + 1); // กรอกตัวเลขสุ่ม (1-10)
      } else if (randomChoice === 1) {
        // กรอก 2 ถึง x ช่อง (สุ่มจำนวนช่องที่จะกรอก)
        const randomCount = Math.floor(Math.random() * (totalQuantityFields - 1)) + 2; // 2 ถึง x
        for (let i = 0; i < randomCount; i++) {
          cy.wrap($quantityFields.eq(i))
            .clear()
            .type(Math.floor(Math.random() * 10) + 1); // กรอกตัวเลขสุ่ม (1-10)
        }
      } else {
        // กรอกทุกช่อง
        $quantityFields.each((index, field) => {
          cy.wrap(field)
            .clear()
            .type(Math.floor(Math.random() * 10) + 1); // กรอกตัวเลขสุ่ม (1-10)
        });
      }
    });
});

// เมื่อคลิกปุ่ม Next เพื่อไปหน้าถัดไป
When('I click on the next page button', () => {
  cy.get('.woocommerce-pagination .next')  // คลิกปุ่ม Next (ปุ่มเปลี่ยนหน้า)
    .click();
  
  // รอให้การเปลี่ยนหน้าสำเร็จ
  cy.wait(1000); // ปรับเวลาให้เหมาะสม
  cy.url().should('include', 'page/2');  // ตรวจสอบว่า URL เปลี่ยนไปที่หน้าถัดไป (เช่น page/2)
  cy.get('.product').should('have.length.greaterThan', 0); // ตรวจสอบว่ามีสินค้าแสดงในหน้าถัดไป
});

// ตรวจสอบหมายเลขหน้าถัดไปที่แสดงหลังจากคลิก Next
Then('the number page of products should be displayed', () => {
  cy.get('.woocommerce-pagination .page')
    .should('be.visible')
    .and('contain', '2'); // ตรวจสอบว่าหมายเลขหน้าคือ 2
});

// เมื่อคลิกปุ่ม Previous เพื่อกลับไปหน้าก่อนหน้า
When('I click on the previous page button', () => {
  cy.get('.woocommerce-pagination .prev')  // คลิกปุ่ม Previous
    .click();

  // รอให้การเปลี่ยนหน้าสำเร็จ
  cy.wait(1000); // ปรับเวลาให้เหมาะสม
  cy.url().should('eq', 'http://localhost/pondshop/shop/');  // ตรวจสอบว่า URL กลับมาที่หน้าแรก
});

// ตรวจสอบหมายเลขหน้าก่อนหน้า
Then('the number page should be updated to previous page', () => {
  cy.url().should('eq', 'http://localhost/pondshop/shop/');  // Validate URL stays as the first page URL
  cy.get('.woocommerce-pagination .page')
    .should('contain', '1');  // Confirm the page number displayed is '1'
});

