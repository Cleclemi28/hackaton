angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div id=\"googleMap\"></div>\n" +
    "\n" +
    "<script>\n" +
    "    function myMap() {\n" +
    "        <!-- SHOW GOOGLE MAP IN HTML -->\n" +
    "        var mapProp = {\n" +
    "            center: new google.maps.LatLng(43.296482, 5.36978),\n" +
    "            zoom: 2,\n" +
    "            <!-- RETIRER pour apparence ordinaire de la carte -->\n" +
    "            mapTypeId: google.maps.MapTypeId.HYBRID\n" +
    "        };\n" +
    "        var map = new google.maps.Map(document.getElementById(\"googleMap\"), mapProp);\n" +
    "\n" +
    "        <!-- VARIABLE FOR LAT and LONG -->\n" +
    "        var myLatLng = {\n" +
    "            lat: 43.296482,\n" +
    "            lng: 5.36978\n" +
    "        };\n" +
    "\n" +
    "        <!-- MARKER -->\n" +
    "        var marker = new google.maps.Marker({\n" +
    "            position: myLatLng\n" +
    "        });\n" +
    "        marker.setMap(map);\n" +
    "\n" +
    "        <!-- INFO WINDOW -->\n" +
    "        google.maps.event.addListener(marker, 'click', function() {\n" +
    "            var infowindow = new google.maps.InfoWindow({\n" +
    "                content: \"<h2>Continent, Pays</h2><h1>Nom de la Webcam</h1><img src='aperçu de la webcam'><a href=''>Contacter</a>\"\n" +
    "            });\n" +
    "            infowindow.open(map, marker);\n" +
    "        });\n" +
    "    }\n" +
    "</script>\n" +
    "\n" +
    "\n" +
    "\n" +
    "<script src=\"https://maps.googleapis.com/maps/api/js?key=AIzaSyBghM65OXaB0ZDDKYf8LmCcrtTFouMvu8o&callback=myMap\"></script>\n" +
    "\n" +
    "<!-- EXEMPLE lgt,lat :\n" +
    "40.714224,-73.961452 -->\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a class=\"navbar-brand\" href=\"#\">Invitation au voyage</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\">\n" +
    "            <form class=\"navbar-form navbar-left\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Un endroit de rêve…\" ng-model=\"query\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default\" ng-click=\"goSearch()\">Submit</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

}]);
