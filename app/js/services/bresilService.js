angular.module('app')
    .service('bresilService', function($http) {
        return {
            getOne: function(query) {
                var reqcam = {
                    method: 'GET',
                    url: "https://webcamstravel.p.mashape.com/webcams/list/nearby=-19.919284,-43.938281,10?show=webcams:location,image,timelapse",
                    // url: "https://webcamstravel.p.mashape.com/webcams/list/bbox=42.442020,23.334540,42.442020,23.334540?show=webcams:location,image",

                    headers: {
                        "X-Mashape-Key": "QMTzl9XYWYmshKYAQlZxWIBfqtGUp1NbA6HjsnHWG1fxDvLnw9"
                    }
                };
  							console.log(reqcam);
                return $http(reqcam);

            },
        };
    });
