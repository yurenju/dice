const { defineSupportCode } = require('cucumber');
const { By, until } = require('selenium-webdriver')

defineSupportCode(function ({ Given, When, Then }) {
  When('按下 {stringInDoubleQuotes} 按鈕', function (linkText) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('骰子會顯示 {int} - {int} 之間的點數', function (int, int2) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  When('改變骰子數量變成 {int} 時', function (int) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('總共會出現 {int} 顆骰子', function (int) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });

  Then('會出現所有骰子點數的加總', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  })
});
