angular.module('app')
    .controller('parisController', function($scope, camService, mapService, $location) {



                camService.getOne($scope.getParis).then(function(response) {
                        $scope.cam = response.data;
                        console.log($scope.cam.result);

                    });

});
