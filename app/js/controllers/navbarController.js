angular.module('app')
    .controller('NavbarController', function($scope, mapService) {

        $scope.query = "";
        $scope.goSearch = function() {

            // GOOGLE MAP API
            mapService.getAll($scope.query).then(function(response) {
                $scope.map = response.data;
                console.log($scope.map);
            });
        };
    });
