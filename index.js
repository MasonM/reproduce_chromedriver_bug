require('chromedriver');
const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');

(async() => {
  const rate = parseInt(process.argv[2] || 4);
  const options = new chrome.Options();
  options.addArguments('--headless');

  chrome.setDefaultService(new chrome.ServiceBuilder()
    .enableVerboseLogging()
    .loggingTo('log.txt')
    .build());

  const driver = await new webdriver.Builder().forBrowser('chrome').setChromeOptions(options).build();

  console.log(`Throttling CPU by ${rate}x`);
  await driver.sendDevToolsCommand('Emulation.setCPUThrottlingRate', { rate });

  await driver.get('https://en.wikipedia.org/wiki/Main_Page');
  console.log(await driver.executeScript(`return window.performance.getEntriesByType('navigation')[0]`));

  await driver.quit();
})();
