angular.module('app')
    .controller('tokyoController', function($scope, tokyoService, mapService, $location) {

      $scope.go = function ( path ) {
$location.path( path );
};

                tokyoService.getOne($scope.getTokyo).then(function(response) {
                        $scope.cam = response.data;
                        console.log($scope.cam.result);

                    });

});
