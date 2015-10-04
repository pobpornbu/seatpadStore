var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Seatpad', ['$resource', function($resource){
    return {
      Productdb: $resource('data/:productId.json', {}, {
        query: {method:'GET', params:{productId:'seatpads'}, isArray:true}
      }),
      Fabricdb: $resource('data/:fabric.json', {}, {
        query: {method:'GET', params:{fabric:'fabric'}, isArray:true}
      })
    };
}]);

// http://localhost:81/seatpadStore/data/.json?category=cushion
//  http://localhost:81/seatpadStore/data/seatpad.json