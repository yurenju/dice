const { defineSupportCode } = require('cucumber');
const { By, until } = require('selenium-webdriver')
const { expect }  = require('chai');

defineSupportCode(function ({ Given, When, Then }) {
  When('按下 {stringInDoubleQuotes} 按鈕', function (linkText) {
    return this.driver.findElement({ linkText }).click();
  });

  Then('骰子會顯示 {int} - {int} 之間的點數', function (min, max) {
    return this.driver.findElement(By.css('.dice')).getAttribute('data-dots')
      .then(dataDots => {
        const dots = parseInt(dataDots);
        expect(dots).least(min)
        expect(dots).most(max)
      });
  });

  When('改變骰子數量變成 {int} 時', function (number) {
    const element = this.driver.findElement(By.css('.dice-number'));
    element.clear();
    element.sendKeys(`${number}`);

    return element;
  });

  Then('總共會出現 {int} 顆骰子', function (number) {
    return this.driver.findElements(By.css('.dice'))
      .then(dice => expect(dice.length).eq(number));
  });

  Then('會出現所有骰子點數的加總', function () {
    const getDotsPromise = this.driver.findElements(By.css('.dice'))
      .then(dice => Promise.all(dice.map(die => die.getAttribute('data-dots'))));
    const getTotalTextPromise = this.driver.findElement(By.css('.total'))
      .then(element => element.getText());

    return Promise.all([getDotsPromise, getTotalTextPromise])
      .then(values => {
        const [dotsValues, totalText] = values;

        const total = dotsValues.map(v => parseInt(v))
                                .reduce((a, b) => a + b);
        expect(parseInt(totalText)).eq(total);
      });
  })
});
