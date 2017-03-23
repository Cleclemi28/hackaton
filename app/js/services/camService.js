angular.module('app')
.service('camService', function($http) {
    return {
        getOne: function(query) {
          var reqcam = {
            method: 'GET',
            url: "https://webcamstravel.p.mashape.com/webcams/list/nearby=48.866667,2.333333,1000?show=webcams:location,image",
            headers: {
              "X-Mashape-Key": "8Ahct2XzMlmsho4XldP5Imm35hlip1NAxqGjsnVdWzShVUq7Yg"
            }
          };
            return $http(reqcam);
        },
    };
});
