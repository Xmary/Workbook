'use strict';

describe('Workbook', function() {

  browser.get('index.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
    expect(browser.getTitle()).toMatch(/Workbook$/);
  });
});