'use strict';

/* App Module */

var seatpadStore = angular.module('seatpadStore', [
  'ngRoute',
  'StoreController',
  'productFilters',
  'productServices',
  'productAnimations'
]);

seatpadStore.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/seatpad', {
        templateUrl: 'partials/seatpad-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/seatpad/:productId', {
        templateUrl: 'partials/seatpad-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      otherwise({
        redirectTo: '/seatpad'
      });
  }]);