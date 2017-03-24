angular.module('app')
    .controller('NavbarController', function($scope, camService, mapService) {
        // cam API
        $scope.query = "";
        $scope.goSearch = function() {

            camService.getOne($scope.query).then(function(response) {
                $scope.cam = response.data;
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
                        console.log(latitude);
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
                        console.log(longitude);
                    }

                }

            });

            // GOOGLE MAP API
            $scope.googleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBghM65OXaB0ZDDKYf8LmCcrtTFouMvu8o";


            // // <!-- INFO WINDOW -->
            // $scope.info = function () {
            //
            //       var infowindow = new google.maps.InfoWindow({
            //           content: "<h2>Continent, Pays</h2><h1>Nom de la Webcam</h1><img src='aperçu de la webcam'><a href=''>Contacter</a>"
            //       });
            //       infowindow.open(map, marker);
            //
            // };

            mapService.getAll($scope.query).then(function(response) {
                $scope.map = response.data;
                console.log($scope.map);


                    // google.maps.event.addListener(marker, 'click', function() {
                    //     var infowindow = new google.maps.InfoWindow({
                    //         content: "<h2>Continent, Pays</h2><h1>Nom de la Webcam</h1><img src='aperçu de la webcam'><a href=''>Contacter</a>"
                    //     });
                    //     infowindow.open(map, marker);
                    // });


                // function myMap() {
                //     // <!-- SHOW GOOGLE MAP IN HTML -->
                //     var mapProp = {
                //         center: new google.maps.LatLng(43.296482, 5.36978),
                //         zoom: 2,
                //         // <!-- RETIRER pour apparence ordinaire de la carte -->
                //         mapTypeId: google.maps.MapTypeId.HYBRID
                //     };
                //     var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
                //
                //     // <!-- VARIABLE FOR LAT and LONG -->
                //     var myLatLng = {
                //         lat: 43.296482,
                //         lng: 5.36978
                //     };
                //
                //     // <!-- MARKER -->
                //     var marker = new google.maps.Marker({
                //         position: myLatLng
                //     });
                //     marker.setMap(map);
                //
                //     // <!-- INFO WINDOW -->
                //     google.maps.event.addListener(marker, 'click', function() {
                //         var infowindow = new google.maps.InfoWindow({
                //             content: "<h2>Continent, Pays</h2><h1>Nom de la Webcam</h1><img src='aperçu de la webcam'><a href=''>Contacter</a>"
                //         });
                //         infowindow.open(map, marker);
                //     });
                // }
                // console.log(longitude);

            });

        };
    });
