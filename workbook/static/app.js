'use strict';

var Workbook = angular.module('Workbook', [
  'ui.router'
])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to login
  $urlRouterProvider.otherwise("/");

  // States
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'static/home/home.html',
      controller: 'HomeCtrl'
    })
}]);