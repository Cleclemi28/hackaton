angular.module('app')
    .controller('MainController', function($scope, mapService) {

          $scope.query = "";
          $scope.goSearch = function() {

              // GOOGLE MAP API
              mapService.getOne($scope.query).then(function(response) {
                  $scope.data = response.data;
                  console.log($scope.data);
              });
          };
      });
