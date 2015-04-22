//End-to-end tests
'use strict';

describe('Workbook', function() {
  //Browser opens page for testing
  browser.get('index.html');

  //checks, that application can open basic page '/'
  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
    expect(browser.getTitle()).toMatch(/Workbook$/);
  });
});

describe('Home page functionality', function() {
  beforeEach(function() {
    //Browser opens page for testing
    browser.get('index.html');
    element(by.name('inputText')).clear();
  });
  

  it('should send input data to server and add row to table', function() {
    var listBefore = element.all(by.repeater('data in output')).count(); 
    var inputField = element(by.name('inputText')).sendKeys('testingText');
    inputField.sendKeys(protractor.Key.ENTER);
    var listAfter = element.all(by.repeater('data in output')).count();
    expect(listAfter).toMatch(listBefore.then(function(value){ return value + 1}));
  });

  it('should put the right data into last table row', function() {
    var inputField = element(by.name('inputText')).sendKeys('testingText2');
    inputField.sendKeys(protractor.Key.ENTER);
    var listAfter = element.all(by.repeater('data in output')).last().element(by.name('text')).getText();
    expect(listAfter).toMatch('testingText2');
  });

})