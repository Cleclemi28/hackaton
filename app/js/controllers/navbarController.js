angular.module('app')
    .controller('NavbarController', function($scope, camService) {
        // cam API
        $scope.query = "";
        $scope.goSearch = function() {

            camService.getOne($scope.query).then(function(response) {
                $scope.cam = response.data;
								console.log(response.data);
                //fonction tableaux long, lat
                var lat = [];
                for (var i = 0; i < 11; i++) {
                    if (i === 0) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 1) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 2) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 3) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 4) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 5) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 6) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 7) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 8) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                    }
                    if (i === 9) {
                        lat.push($scope.cam.result.webcams[i].location.latitude);
                        var latitude = lat;
                        // console.log(latitude);
                    }
                }

                var long = [];
                for (var j = 0; j < 11; j++) {
                    if (j === 0) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 1) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 2) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 3) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 4) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 5) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 6) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }

                    if (j === 7) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 8) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                    }
                    if (j === 9) {
                        long.push($scope.cam.result.webcams[j].location.longitude);
                        var longitude = long;
                      s
                    }
                }

            });
        };
    });
