angular.module('app')
    .service('mapService', function($http) {
      return {
            getAll: function(query) {
                return $http.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + query + '&key=AIzaSyBghM65OXaB0ZDDKYf8LmCcrtTFouMvu8o');
            },
        };
    });



// API KEY : AIzaSyBghM65OXaB0ZDDKYf8LmCcrtTFouMvu8o
