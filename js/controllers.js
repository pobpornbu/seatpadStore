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
    $scope.product = Seatpad.get({productId: $routeParams.productId},
      function(product) {
        console.log($scope.product);
        $scope.mainImageUrl = product.images[0];
      }
    );

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    $scope.review = {};
    $scope.addReview = function(product){
      product.reviews.push($scope.review);
      $scope.review = {};
    };
  }
]);

StoreController.controller('ProductCategoryCtrl', ['$scope', '$routeParams', 'Seatpad',
  function($scope, $routeParams, Seatpad) {
    $scope.products = Seatpad.query();
    $scope.categoryName = $routeParams.category;
    console.log($scope.categoryName);
    $scope.orderSort = 'id';
    $scope.query = $scope.categoryName;
  }
]);

StoreController.directive('fabric', function(){
  var validElement = angular.element("<button type='button' class='btn btn-default' data-container='body' data-toggle='popover' data-placement='left' data-content='Vivamus sagittis lacus vel augue laoreet rutrum faucibus.'>Popover on left</button>");

    //in the video, I accidentally typed "this.link". "this" in a directive is "Window". Instead, use "var link" as shown below.
    // var link = function(scope) {
    //     scope.$watch("model.input", function(value) {
    //         if (value === "password") {
    //             validElement.toggleClass("alert-danger alert");
    //         }
    //     });
    // };

    var popover = function(scope){
      validElement.popover({"placement": "right"});
    }

  return {
    restrict: "A",
    transclude: true,
    template: "<ng-transclude></ng-transclude><a href='#/fabric'>เลือกลายผ้า</a>",
    link: function(scope, element, attr){
      element.children(1).addClass('link').attr('id', 'guide');
      element.children(1).popover();
    },
    compile: function(tElem){
      tElem.append(validElement);
      return popover;
    }
  }
});
// StoreController.controller('ReviewController', ['$scope', 'Seatpad',
//   function($scope, Seatpad){

//   }
// ]);
