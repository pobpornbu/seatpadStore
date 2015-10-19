var cuddleFilter = angular.module('productFilters', ['ngSanitize']);

cuddleFilter.filter('checkmark', function() {
	return function(input) {
  	return input ? '\u2713' : '\u2718';
	};
});

cuddleFilter.filter('starrate', function(){
  return function(rates) {
    // return input = input || '';
    // if(rates.length){
      var totalstars = [];
      var num = parseInt(rates);
      // console.log("num :"+ num +"totalstars"+ totalstars);
      for (var i = 0; i < num; i++) {
        // var star = rates[i];
        // totalstars.push(rate)
        var star = "<i class='mdi-action-star-rate'></i>";
        // var star = "\u2721";
        totalstars.push(star);
      }
      var result = totalstars.join("");
        // console.log("final :"+ result);
      return result; // ? '\u2713' : '';
    // }
  }
});