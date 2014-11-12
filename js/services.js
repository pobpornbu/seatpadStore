var productServices = angular.module('productServices', ['ngResource']);

productServices.factory('Seatpad', ['$resource',
  function($resource){
    return $resource('data/:productId.json', {}, {
      query: {method:'GET', params:{productId:'seatpads'}, isArray:true}
    });
  }]);