import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// เปิดหน้าแรก
Given("I open the Home page", () => {
  cy.visit("http://localhost/pondshop"); // ไปที่หน้า Home
  cy.wait(2000); // รอให้โหลดข้อมูล
});

// เปิด Mini Cart
Given("I open the Mini Cart", () => {
  cy.get(".wc-block-mini-cart__button", { timeout: 10000 })  // หาปุ่ม Mini Cart
    .should("be.visible") // ตรวจสอบว่าปุ่มมองเห็นได้
    .click({ force: true });  // ใช้ force: true เพื่อคลิกแม้ปุ่มจะมี pointer-events: none

  // รอให้แน่ใจว่า Mini Cart โหลดข้อมูลเสร็จแล้ว
  cy.wait(2000);  // เพิ่มเวลารอให้ Mini Cart โหลดข้อมูลและสามารถดึงข้อมูลจาก API ได้
});

// ตรวจสอบว่า API ตอบกลับข้อมูลที่ถูกต้อง
Then("The Mini Cart API should return the correct items", () => {
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0)
    .then((cart) => {
      // ตรวจสอบว่าเรามีสินค้าที่ต้องการ
      const addedItem = cart.items.find(item => item.product_id === 244); // ตรวจสอบ ID สินค้า
      expect(addedItem).to.not.be.undefined;  // ตรวจสอบว่าเจอสินค้า
      expect(addedItem.quantity).to.equal(1); // ตรวจสอบจำนวนสินค้า
    });
});



// ตรวจสอบการเปลี่ยนแปลงข้อมูลสินค้าหลังจากเพิ่มไปในตะกร้า
Then("The item should be added to the cart", () => {
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0)
    .then((cart) => {
      const addedItem = cart.items.find(item => item.product_id === 244);
      expect(addedItem).to.not.be.undefined;
      expect(addedItem.quantity).to.be.greaterThan(0); // ปรับให้รองรับการเพิ่มจำนวนสินค้า
    });
});

// ตรวจสอบราคารวมของสินค้าในตะกร้า
Then("The total price should be updated correctly", () => {
  cy.wait(3000); // รอให้ระบบอัปเดต
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .then((response) => {
      const expectedTotal = response.body.items.reduce((total, item) => {
        return total + (parseFloat(item.prices.price) * item.quantity);
      }, 0);

      cy.get('.wc-block-components-totals-item > .wc-block-formatted-money-amount')
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.include(expectedTotal.toFixed(2));
        });
    });
});

// ตรวจสอบสินค้าที่แสดงใน Mini Cart โดยไม่ใช้ CSS selectors
Then("each item in Mini Cart should have correct details", () => {
  cy.wait(3000);
  cy.reload(); // รีโหลดหน้าเพื่อให้ WooCommerce อัปเดต Mini Cart

  cy.document().then((doc) => {
    const miniCartItems = doc.querySelectorAll(".mini-cart-item");
    expect(miniCartItems.length).to.be.greaterThan(0);

    miniCartItems.forEach(item => {
      const itemName = item.querySelector(".item-name");
      expect(itemName).to.exist;
      expect(itemName.textContent).to.include("Let’s x The Zero One How to Paint CG");

      const discountedPrice = item.querySelector(".item-price");
      expect(discountedPrice).to.exist;
      expect(discountedPrice.textContent).to.include("฿351.00");

      // ตรวจสอบราคารวมของสินค้าที่อัปเดตแล้ว
      const totalPrice = item.querySelector(".item-total-price");
      expect(totalPrice).to.exist;
      expect(parseFloat(totalPrice.textContent.replace("฿", ""))).to.be.greaterThan(351.00);
    });
  });
});

// ตรวจสอบว่า API ตอบกลับข้อมูลที่ถูกต้อง
Then("The Mini Cart API should return the correct items", () => {
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0)
    .then((cart) => {
      const addedItem = cart.items.find(item => item.product_id === 244);
      expect(addedItem).to.not.be.undefined;
      expect(addedItem.quantity).to.equal(1);
    });
});

// คลิกปุ่ม "Add to Cart"
When("I click on the \"Add to cart\" button", () => {
  cy.get('.post-244 > .button')
    .should("be.visible")
    .click();
  cy.wait(2000);
});

// ตรวจสอบการเปลี่ยนแปลงข้อมูลสินค้าหลังจากเพิ่มไปในตะกร้า
Then("The item should be added to the cart", () => {
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0)
    .then((cart) => {
      const addedItem = cart.items.find(item => item.product_id === 244);
      expect(addedItem).to.not.be.undefined;
      expect(addedItem.quantity).to.be.greaterThan(0); // ปรับให้รองรับการเพิ่มจำนวนสินค้า
    });
});

// ตรวจสอบราคารวมของสินค้าในตะกร้า
Then("The total price should be updated correctly", () => {
  cy.wait(3000); // รอให้ระบบอัปเดต
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .then((response) => {
      const expectedTotal = response.body.items.reduce((total, item) => {
        return total + (parseFloat(item.prices.price) * item.quantity);
      }, 0);

      cy.get('.wc-block-components-totals-item > .wc-block-formatted-money-amount')
        .should("be.visible")
        .invoke("text")
        .then((text) => {
          expect(text.trim()).to.include(expectedTotal.toFixed(2));
        });
    });
});

// ตรวจสอบสินค้าที่แสดงใน Mini Cart โดยไม่ใช้ CSS selectors
Then("each item in Mini Cart should have correct details", () => {
  cy.wait(3000);
  cy.reload(); // รีโหลดหน้าเพื่อให้ WooCommerce อัปเดต Mini Cart

  cy.document().then((doc) => {
    const miniCartItems = doc.querySelectorAll(".mini-cart-item");
    expect(miniCartItems.length).to.be.greaterThan(0);

    miniCartItems.forEach(item => {
      const itemName = item.querySelector(".item-name");
      expect(itemName).to.exist;
      expect(itemName.textContent).to.include("Let’s x The Zero One How to Paint CG");

      const discountedPrice = item.querySelector(".item-price");
      expect(discountedPrice).to.exist;
      expect(discountedPrice.textContent).to.include("฿351.00");

      // ตรวจสอบราคารวมของสินค้าที่อัปเดตแล้ว
      const totalPrice = item.querySelector(".item-total-price");
      expect(totalPrice).to.exist;
      expect(parseFloat(totalPrice.textContent.replace("฿", ""))).to.be.greaterThan(351.00);
    });
  });
});


// เพิ่มจำนวนสินค้า
When('I increase the quantity of "Let’s x The Zero One How to Paint CG" to 2', () => {
  cy.get('.wc-block-components-quantity-selector__button--plus').first().click();
  cy.wait(2000);
});

// ลดจำนวนสินค้า
When('I decrease the quantity of "Let’s x The Zero One How to Paint CG" to 1', () => {
  cy.get('.wc-block-components-quantity-selector__button--minus').first().click();
  cy.wait(2000);
});

// ตรวจสอบจำนวนสินค้า
Then('The quantity of "Let’s x The Zero One How to Paint CG" in the cart should be {int}', (expectedQuantity) => {
  cy.get('.wc-block-components-quantity-selector__input')
    .should('have.value', expectedQuantity.toString());
});

When('I remove item from the cart', () => {
  cy.get('.wc-block-cart-item__remove-link').first().click();  // คลิกปุ่มลบสินค้าออกจากตะกร้า
  cy.wait(2000); // รอให้ระบบอัปเดตตะกร้า
});

// Verify "View My Cart" button
When("I click View My Cart button", () => {
  cy.get('.wp-block-woocommerce-mini-cart-cart-button-block', { timeout: 10000 })
  .should("be.visible") // ตรวจสอบว่าปุ่มมองเห็นได้
  .scrollIntoView() // เลื่อนหน้าจอให้ปุ่มอยู่ใน viewport
  .invoke('show') // ถ้าปุ่มถูกซ่อน
  .click({ force: true }); // บังคับคลิก

});

Then("I should be redirected to the Cart page", () => {
  cy.url().should("include", "/pondshop/cart"); // ตรวจสอบว่า URL ถูกต้อง
  cy.request("GET", "http://localhost/pondshop/wp-json/wc/store/v1/cart")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0);
    cy.get('.product-name > a').should("have.length.greaterThan", 0);
});

// Verify "Go to checkout" button
When("I click Go to checkout button", () => {
  cy.get('.wp-block-woocommerce-mini-cart-checkout-button-block')
  .should("be.visible") // ตรวจสอบว่าปุ่มมองเห็นได้
  .scrollIntoView() // เลื่อนหน้าจอให้ปุ่มอยู่ใน viewport
  .invoke('show') // ถ้าปุ่มถูกซ่อน
  .click({ force: true }); // บังคับคลิก

});

Then("I should be redirected to the checkout page", () => {
  cy.url().should("include", "/pondshop/cart"); // ตรวจสอบว่า URL ถูกต้อง
  cy.request("GET", "http://localhost/pondshop/checkout/")
    .its('body')
    .should('have.property', 'items')
    .and('have.length.greaterThan', 0);
    cy.get('.checkout').should("have.length.greaterThan", 0);
});