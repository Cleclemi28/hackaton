angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div id=\"wrap\">\n" +
    "    <div class=\"container\">\n" +
    "        <div id=\"teaser\" class=\"row\">\n" +
    "            <h1 class=\"text-center\">\"Un voyage de mille lieues a commencé par un pas\"</h1>\n" +
    "        </div>\n" +
    "        <div ng-controller=\"NavbarController\">\n" +
    "            <div>\n" +
    "                <p>chemin :{{}}</p>\n" +
    "            </div>\n" +
    "\n" +
    "            <h1 class=\"text-center\">Connectez-vous </h1>\n" +
    "            <div map-lazy-load=\"https://maps.google.com/maps/api/js\" map-lazy-load-params=\"{{googleMapsUrl}}\">\n" +
    "                <ng-map center=\"43.296482,5.36978\" zoom=\"2\">\n" +
    "                    <!-- France -->\n" +
    "                    <marker title=\"<h2>Continent, Pays</h2><h1>Nom de la Webcam</h1><img src='aperçu de la webcam'><a href=''>Contacter</a>\" position=\"48.707367,2.388909\"></marker>\n" +
    "                    <!-- Etats-Unis -->\n" +
    "                    <marker position=\"40.734625,-74.161813\"></marker>\n" +
    "                    <!-- Japon -->\n" +
    "                    <marker position=\"36.753361,137.858891\"></marker>\n" +
    "                    <!-- Australie -->\n" +
    "                    <marker position=\"-33.89051,151.282468\"></marker>\n" +
    "                    <!-- Mouscou -->\n" +
    "                    <marker position=\"50.448487,30.527261\"></marker>\n" +
    "                    <!-- Portugal -->\n" +
    "                    <marker position=\"38.818411,0.0899551\"></marker>\n" +
    "                    <!-- Québec -->\n" +
    "                    <marker position=\"45.423664,-75.697213\"></marker>\n" +
    "                    <!-- Brésil -->\n" +
    "                    <marker position=\"-19.919284,-43.938281\"></marker>\n" +
    "                    <!-- Argentine -->\n" +
    "                    <marker position=\"-36.599986,-61.747273\"></marker>\n" +
    "                    <!-- Groenland -->\n" +
    "                    <marker position=\"72.711903,-39.375\"></marker>\n" +
    "                    <!-- Egypte -->\n" +
    "                    <marker position=\"27.10853,33.830616\"></marker>\n" +
    "                    <!-- Afrique du sud -->\n" +
    "                    <marker position=\"-34.009981,22.379837\"></marker>\n" +
    "                    <!-- Inde -->\n" +
    "                    <marker position=\"12.23814,79.06323\"></marker>\n" +
    "                    <!-- Thaïlande -->\n" +
    "                    <marker position=\"8.076619,98.301319\"></marker>\n" +
    "                    <!-- Canada -->\n" +
    "                    <marker position=\"51.144787,-115.573769\"></marker>\n" +
    "                    <!-- Mexique -->\n" +
    "                    <marker position=\"22.887385,-109.906712\"></marker>\n" +
    "                    <!-- Alaska -->\n" +
    "                    <marker position=\"61.218619,-149.877151\"></marker>\n" +
    "                    <!-- Finlande -->\n" +
    "                    <marker position=\"63.439804,10.408945\"></marker>\n" +
    "                    <!-- Suisse -->\n" +
    "                    <marker position=\"47.260586,8.205056\"></marker>\n" +
    "                    <!-- Allemagne -->\n" +
    "                    <marker position=\"51.226775,6.771526\"></marker>\n" +
    "                    <!-- Russie/Mongolie -->\n" +
    "                    <marker position=\"52.280407,104.282591\"></marker>\n" +
    "                    <!-- Russie/Kazakstan -->\n" +
    "                    <marker position=\"55.160486,61.40188\"></marker>\n" +
    "                    <!-- Iran -->\n" +
    "                    <marker position=\"25.142177,55.188446\"></marker>\n" +
    "                    <!-- Colombie -->\n" +
    "                    <marker position=\"1.207935,-77.261717\"></marker>\n" +
    "                    <!-- Madagascar -->\n" +
    "                    <marker position=\"-21.282017,55.469971\"></marker>\n" +
    "                </ng-map>\n" +
    "            </div>\n" +
    "\n" +
    "        </div>\n" +
    "\n" +
    "    </div>\n" +
    "</div>\n" +
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
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" ng-model=\"query\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default\" ng-click=\"goSearch()\">Submit</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

}]);
