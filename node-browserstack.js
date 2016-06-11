var webdriver = require('selenium-webdriver');
require('./keep-alive');

// Input capabilities
var capabilities = {
	'browserName' : 'firefox',
	'browserstack.user' : '<youruser>',
	'browserstack.key' : '<yourpass>'
}

var driver = new webdriver.Builder().
usingServer('http://hub-cloud.browserstack.com/wd/hub').
withCapabilities(capabilities).
build();

driver.get('http://www.google.com');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
	console.log(title);
});

var fs = require('fs');

webdriver.WebDriver.prototype.saveScreenshot = function(filename) {
	return driver.takeScreenshot().then(function(data) {
		fs.writeFile(filename, data.replace(/^data:image\/png;base64,/,''), 'base64', function(err) {
			if(err) throw err;
		});
	})
};

driver.saveScreenshot('snapshot1.png');



driver.quit();