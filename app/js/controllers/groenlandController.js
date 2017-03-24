angular.module('app')
    .controller('groenlandController', function($scope, groenlandService, mapService, $location) {



                groenlandService.getOne($scope.getGroenland).then(function(response) {
                        $scope.cam = response.data;
                        console.log($scope.cam.result);

                    });

});
