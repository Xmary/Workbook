'use strict';

describe('Workbook module', function() {
  var $controller;

  beforeEach(function() {
    //creates module
    module('Workbook');
    //find Angular service, named $controller
    inject(function($injector) {
      $controller = $injector.get('$controller');
    });
  });

  describe('HomeCtrl', function() {
    it('should be defined', function() {
      var $scope = {};
      var HomeCtrl = $controller('HomeCtrl', {$scope: $scope});
      expect(HomeCtrl).toBeDefined();
    });
  });
});