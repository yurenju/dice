var { defineSupportCode } = require('cucumber');

defineSupportCode(function ({ After, Before }) {
  Before(function () {
    return this.driver.get('http://localhost:3000');
  });

  After(function () {
    return this.driver.quit();
  });
});
