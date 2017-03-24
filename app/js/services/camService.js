angular.module('app')
    .service('camService', function($http) {
        return {
            getOne: function(query) {
                var reqcam = {
                    method: 'GET',
                    url: "https://webcamstravel.p.mashape.com/webcams/list/nearby=-18.766947,46.869106999999985,1000?show=webcams:location,image",
                    headers: {
                        "X-Mashape-Key": "QMTzl9XYWYmshKYAQlZxWIBfqtGUp1NbA6HjsnHWG1fxDvLnw9"
                    }
                };
  							console.log(reqcam);
                return $http(reqcam);

            },
        };
    });
