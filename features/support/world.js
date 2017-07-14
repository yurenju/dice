require('chromedriver')
var seleniumWebdriver = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
var { defineSupportCode } = require('cucumber');

function CustomWorld() {
  const options = new Options();
  options.addArguments('--headless');

  this.driver = new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
}

defineSupportCode(function ({ setWorldConstructor }) {
  setWorldConstructor(CustomWorld);
});
