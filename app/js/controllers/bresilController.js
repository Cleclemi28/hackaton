angular.module('app')
    .controller('bresilController', function($scope, bresilService, mapService, $location) {



                bresilService.getOne($scope.getBresil).then(function(response) {
                        $scope.cam = response.data;
                        console.log($scope.cam.result);

                    });

});
