var chai = require('chai');
var chaiWebdriver = require('chai-webdriver')
var webdriver = require('selenium-webdriver');
var expect = chai.expect;
// var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
// chai.use(chaiWebdriver(driver));

var serverUri = 'https://www.google.de/'
var serverUri = 'http://localhost:3000'
describe('basic test', function () {
    var driver;
    before(function(){
        // Start of test use this
        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).build();
        chai.use(chaiWebdriver(driver));

        console.log("Selenium Webdriver Chrome Started");
    });

    after(function(done) {
      return driver.quit().then(function() {
        console.log("Selenium Webdriver Chrome Shutdown");
        return done();
      });
    });

    it('gets a correct title', function (done) {
      this.timeout(5000);

      driver.get(serverUri);
      driver.getTitle().then(function(title) {
        expect(title).to.equal('Vue Materialize Example');
        done();
      })
    });

    it('has a correct header', function (done) {
      this.timeout(1000);
      driver.get(serverUri);
      expect('h1').dom.to.contain.text('Starter Template');
      done();
    });

    it('has a search field', function (done) {
      this.timeout(1000);
      driver.get(serverUri);
      expect('input.validate').dom.to.be.visible();
      expect('input.validate').dom.not.to.have.text('invalid')
      done();
    });

    it('has a login form', function (done) {
      this.timeout(1000);
      driver.get(serverUri);
      driver.findElement(By.className("validate")).sendKeys('webdriver')

      expect('input.validate').dom.to.be.visible();
      expect('input.validate').dom.not.to.have.text('invalid')
      done();
    });
});
