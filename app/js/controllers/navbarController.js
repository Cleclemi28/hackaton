angular.module('app')
    .controller('NavbarController', function($scope, camService) {
        // cam API
        $scope.query = "";
        $scope.goSearch = function() {

            camService.getOne($scope.query).then(function(response) {
                $scope.cam = response.data;
                console.log($scope.cam);
            });

        };
    });
