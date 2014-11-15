'use strict';

/* Controllers */

var StoreController = angular.module('StoreController', []);

// 1 - phonecat
// seatpadStore.controller('StoreController', function($scope, $http) {
//   $http.get('data/seatpads.json').success(function(data) {
//     $scope.products = data;
//   });

//   $scope.orderProp = 'age';
// });
 
// 1 - koko
// StoreController.controller("ProductListCtrl", function($scope, $http) {
// 	$http.defaults.headers.common["X-Custom-Header"] = "Angular.js";
// 	$http.get('data/seatpads.json').success(function(data, status, headers, config) {
//     $scope.products = data;
//   });
// });


// 1
// StoreController.controller('ProductDetailCtrl', ['$scope', '$routeParams', 
// 	function($scope, $routeParams) {
//   	$scope.productId = $routeParams.productId;
// }]);

// 2
// StoreController.controller('ProductDetailCtrl', ['$scope', '$routeParams', '$http',
//   function($scope, $routeParams, $http) {
//     $http.get('data/' + $routeParams.productId + '.json').success(function(data) {
//       console.log($routeParams.productId + "-" + data);
//       $scope.product = data;
//       $scope.mainImageUrl = data.images[0];
//     });
//     $scope.setImage = function(imageUrl) {
//       $scope.mainImageUrl = imageUrl;
//     }
//   }]);

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
}]);