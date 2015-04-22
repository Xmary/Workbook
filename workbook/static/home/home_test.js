'use strict';

describe('Workbook module', function() {
  var HomeCtrl, $controller, $httpBackend, scope, createController;
  var getDataRequestHandler;
  //Set up the module
  beforeEach(module('Workbook'));
  
  describe('HomeCtrl', function() {

    beforeEach(function() {
      
      //find Angular service, named $controller
      inject(function($injector) {
        $controller = $injector.get('$controller');
        $httpBackend = $injector.get('$httpBackend');
        scope = $injector.get('$rootScope');
      });
      HomeCtrl = $controller('HomeCtrl', {'$scope': scope});
      //initial backend definition 
      $httpBackend.expectGET('/getData')
        .respond({'data': [{'id':'1', 'text':'newData'}]});
    });

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should be defined', function() {
      expect(HomeCtrl).toBeDefined();
      $httpBackend.flush();
    });

    it('should not define $scope.output before /getData request', function() {
      expect(scope.output).toBeUndefined();
      $httpBackend.flush();
    });

    it('should get Data and put it to scope.output', function() {
      $httpBackend.flush();
      expect(scope.output).toMatch([{'id':'1', 'text':'newData'}]);
    });

    it('should send data to backend', function() {
      expect(scope.inputError).toBeUndefined();
      $httpBackend.expectPOST('/sendData', {'text':'sendData'}).respond(204, '');
      $httpBackend.expectGET('/getData')
        .respond({'data': [{'id':'1', 'text':'newData'}, {'id':'2', 'text':'sendData'}]});
      scope.inputForm = {'$valid': true};
      scope.someData = {'text':'sendData'};
      scope.submit();
      expect(scope.inputError).toBe(false);
      $httpBackend.flush();
      expect(scope.inputError).toBe(false);
    });
    it('should set inputError to True, if response fails', function() {
      expect(scope.inputError).toBeUndefined();
      $httpBackend.expectPOST('/sendData', {'text':''}).respond(400, '');
      scope.inputForm = {'$valid': true};
      scope.someData = {'text':''};
      scope.submit();
      expect(scope.inputError).toBe(false);
      $httpBackend.flush();
      expect(scope.inputError).toBe(true);
    });
    it('should do nothing, if inputForm is invalid', function() {
      $httpBackend.flush();
      scope.inputForm = {'$valid': false};
      scope.someData = {'text':''};
      scope.submit();
    });
  });
});