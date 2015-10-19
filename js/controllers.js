'use strict';

/* Controllers */

var StoreController = angular.module('StoreController', []);

StoreController.controller('ProductListCtrl', ['$scope', 'Seatpad',
  function($scope, Seatpad) {
    $scope.products = Seatpad.Productdb.query();
    $scope.orderSort = 'id';
  }
]);

StoreController.controller('ProductDetailCtrl', ['$scope', '$routeParams', 'Seatpad',
  function($scope, $routeParams, Seatpad) {

    $scope.product = Seatpad.Productdb.get({productId: $routeParams.productId},
      function(product) {
        // console.log($scope.product);
        $scope.mainImageUrl = product.images[0];
      }
    );

    $scope.customfabric = true;

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    };

    $scope.review = {};
    $scope.addReview = function(product){
      product.reviews.push($scope.review);
      $scope.review = {};
    };

    $scope.fabric = Seatpad.Fabricdb.get({fabric: $routeParams.fabric},
      function(fabric){
        // console.log("Item");
        $scope.fabricImage = fabric.images[0];
    });

  }
]);

StoreController.controller('ProductCategoryCtrl', ['$scope', '$routeParams', 'Seatpad',
  function($scope, $routeParams, Seatpad) {
    $scope.products = Seatpad.Productdb.query();
    $scope.categoryName = $routeParams.category;
    $scope.query = $scope.categoryName;
    $scope.orderSort = 'id';
    // console.log($scope.categoryName);
  }
]);

StoreController.directive('aboutgal', function(){
  var directive = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.aboutgal, function(){
        element.lightSlider({
          item: 1,
          pager: false
        });
      });
    }
  };
  return directive;
});

StoreController.directive('fabricgal', function(){
  var fabricgaldr = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.fabricgal, function(){
        element.lightSlider({
          item: 5,
          pager: false,
          responsive: [
            {
              breakpoint: 640,
              settings: {
                item: 3
              }
            },
            {
              breakpoint: 480,
              settings: {
                item: 1
              }
            }
          ]
        });
      });
    }
  };
  return fabricgaldr;
});

StoreController.directive('fabricbtn', function(){
  var fabricbtndr = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.fabricbtn, function(){
        element.click(function(){
          // element.next('.js-gallery-fabric').toggleClass('show');
          element.next().toggleClass('show');
        });
      });
    }
  };
  return fabricbtndr;
});

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

StoreController.directive('scrollTo', function ($location, $anchorScroll) {
  return function(scope, element, attrs) {
    //console.log($anchorScroll);
    element.bind('click', function(event) {
        event.stopPropagation();
        var off = scope.$on('$locationChangeStart', function(ev) {
            off();
            ev.preventDefault();
        });
        var location = attrs.scrollTo;
        $location.hash(location);
        $anchorScroll();
    });

  };
});
// StoreController.controller('ReviewController', ['$scope', 'Seatpad',
//   function($scope, Seatpad){

//   }
// ]);
