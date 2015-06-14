'use strict';

/* App Module */

var seatpadStore = angular.module('seatpadStore', [
  'ngRoute',
  'StoreController',
  'productFilters',
  'productServices',
  'productAnimations',
  'ui.bootstrap'
]);

seatpadStore.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/product', {
        templateUrl: 'partials/seatpad-list.html',
        controller: 'ProductListCtrl'
      }).
      when('/product/:productId', {
        templateUrl: 'partials/seatpad-detail.html',
        controller: 'ProductDetailCtrl'
      }).
      when('/category/:category', {
        templateUrl: 'partials/seatpad-category.html',
        controller: 'ProductCategoryCtrl'
      }).
      when('/cart', {
        templateUrl: 'partials/seatpad-add.html'
        //controller: 'ProductAddCtrl'
      }).
      otherwise({
        redirectTo: '/product'
      });
  }
]);