angular.module('app')
    .service('mapService', function($http) {
      return {
            getAll: function() {
                return $http.get('http://www.omdbapi.com/?');
            },
            // getOne: function(title) {
            //     return $http.get('http://www.omdbapi.com/?t=' + title + '&tomatoes=true&plot=short');
            // },
        };
    });
