const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  e2e: {
    // กำหนด path ของไฟล์ทดสอบ
    specPattern: 'cypress/e2e/**/*.feature', // รันไฟล์ .feature ที่อยู่ในโฟลเดอร์ e2e
    supportFile: 'cypress/support/e2e.js',    // ไฟล์ support ที่ใช้ในการ setup ต่าง ๆ
    baseUrl: 'http://localhost/pondshop/',              // กำหนด base URL สำหรับทดสอบ
    viewportWidth: 1280,                      // กำหนดขนาดหน้าจอ (สามารถปรับตามต้องการ)
    viewportHeight: 720,
    
    setupNodeEvents(on, config) {
      // เพิ่ม Cucumber Preprocessor
      const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
      preprocessor.addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpackPreprocessor({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                      options: config,
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      // เพิ่ม Code Coverage
      require('@cypress/code-coverage/task')(on, config);

      return config;
    },
  },
});
