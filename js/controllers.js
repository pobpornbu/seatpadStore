'use strict';

/* Controllers */

var StoreController = angular.module('StoreController', []);

StoreController.controller('ProductListCtrl', ['$scope', 'Seatpad',
  function($scope, Seatpad) {
    $scope.products = Seatpad.query();
    $scope.orderSort = 'id';

  }
]);

StoreController.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Seatpad',
	function($scope, $routeParams, Seatpad) {
  $scope.product = Seatpad.get({productId: $routeParams.productId}, function(product) {
    $scope.mainImageUrl = product.images[0];
  	//console.log(productId);
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }

    $scope.review = {};
    $scope.addReview = function(product){
      product.reviews.push($scope.review);
      $scope.review = {};
    };
  }]);

// StoreController.controller('ReviewController', ['$scope', 'Seatpad',
//   function($scope, Seatpad){

//   }
// ]);
