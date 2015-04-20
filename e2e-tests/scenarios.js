//End-to-end tests
'use strict';

describe('Workbook', function() {

  browser.get('index.html');
  //checks, that application can open basic page '/'
  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
    expect(browser.getTitle()).toMatch(/Workbook$/);
  });
});