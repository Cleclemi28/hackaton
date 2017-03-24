angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/bresil.html",
    "<div id=\"video\" class=\"container\">\n" +
    "  <div id=\"names\" class=\"animated slideInUp row\">\n" +
    "        <h1>Belo Horizonte</h1>\n" +
    "        <h2>South America</h2>\n" +
    "        <h2>Brazil</h2>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div id=\"video-container\" class=\"row\" ng-model=\"getBresil\">\n" +
    "            <iframe class=\"text-center\" src=\"https://api.lookr.com/embed/timelapse/1237082269/day\"></iframe>\n" +
    "            <!-- <img src=\"{{cam.result.webcams[0].image.current.preview}}\"/> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/footer.html",
    "<div class=\"footer\">\n" +
    "<footer class=\"bas text-center\">\n" +
    "    <h3>Keep in touch!</h3>\n" +
    "    <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n" +
    "    <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n" +
    "    <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n" +
    "    <i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i>\n" +
    "</footer>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/groenland.html",
    "<div id=\"video\" class=\"container\">\n" +
    "  <div id=\"names\" class=\"animated slideInUp row\">\n" +
    "        <h1>Greenland</h1>\n" +
    "        <h2>North America</h2>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div id=\"video-container\" class=\"row\" ng-model=\"getGroenland\">\n" +
    "            <iframe class=\"text-center\" src=\"https://api.lookr.com/embed/timelapse/1216629503/day\"></iframe>\n" +
    "            <!-- <img src=\"{{cam.result.webcams[0].image.current.preview}}\"/> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/home.html",
    "    <div class=\"container-fluid\">\n" +
    "        <div id=\"teaser\" class=\"row\">\n" +
    "            <h1 class=\"teaser-slogan text-center\">\"Un voyage de mille lieues a commencé par un pas\"</h1>\n" +
    "        </div>\n" +
    "        <div id=\"explain\" class=\"row\">\n" +
    "            <h1 class=\"explain-slogan text-center\">Start your next travel from your laptop!</h1>\n" +
    "            <h5 class=\"explain-slogan text-center\">With TravelCam, find your next destination and visit your dream place!\n" +
    "              Non dolor ad aliqua voluptate occaecat consequat mollit laboris qui tempor ut aliqua commodo laborum.\n" +
    "            </h5>\n" +
    "        </div>\n" +
    "        <div id=\"case-carte\" ng-controller=\"NavbarController\">\n" +
    "            <h1 class=\"text-center\">Get connected!</h1>\n" +
    "            <div id=\"carte\">\n" +
    "                <div map-lazy-load=\"https://maps.google.com/maps/api/js\" map-lazy-load-params=\"{{googleMapsUrl}}\">\n" +
    "                    <ng-map default-style=\"false\" center=\"43.296482,5.36978\" zoom=\"2\">\n" +
    "\n" +
    "                        <!-- France -->\n" +
    "                        <marker on-click=\"gotopage('paris')\" position=\"48.707367,2.388909\"></marker>\n" +
    "                        <!-- Etats-Unis -->\n" +
    "                        <marker position=\"40.734625,-74.161813\"></marker>\n" +
    "                        <!-- Japon -->\n" +
    "                        <marker on-click=\"gotopage('tokyo')\" position=\"36.753361,137.858891\"></marker>\n" +
    "                        <!-- Australie -->\n" +
    "                        <marker position=\"-33.89051,151.282468\"></marker>\n" +
    "                        <!-- Mouscou -->\n" +
    "                        <marker position=\"50.448487,30.527261\"></marker>\n" +
    "                        <!-- Portugal -->\n" +
    "                        <marker position=\"38.818411,0.0899551\"></marker>\n" +
    "                        <!-- Québec -->\n" +
    "                        <marker position=\"45.423664,-75.697213\"></marker>\n" +
    "                        <!-- Brésil -->\n" +
    "                        <marker on-click=\"gotopage3('bresil')\" position=\"-19.919284,-43.938281\"></marker>\n" +
    "                        <!-- Argentine -->\n" +
    "                        <marker position=\"-36.599986,-61.747273\"></marker>\n" +
    "                        <!-- Groenland -->\n" +
    "                        <marker on-click=\"gotopage2('groenland')\" position=\"72.711903,-39.375\"></marker>\n" +
    "                        <!-- Egypte -->\n" +
    "                        <marker position=\"27.10853,33.830616\"></marker>\n" +
    "                        <!-- Afrique du sud -->\n" +
    "                        <marker position=\"-34.009981,22.379837\"></marker>\n" +
    "                        <!-- Inde -->\n" +
    "                        <marker position=\"12.23814,79.06323\"></marker>\n" +
    "                        <!-- Thaïlande -->\n" +
    "                        <marker position=\"8.076619,98.301319\"></marker>\n" +
    "                        <!-- Canada -->\n" +
    "                        <marker position=\"51.144787,-115.573769\"></marker>\n" +
    "                        <!-- Mexique -->\n" +
    "                        <marker position=\"22.887385,-109.906712\"></marker>\n" +
    "                        <!-- Alaska -->\n" +
    "                        <marker position=\"61.218619,-149.877151\"></marker>\n" +
    "                        <!-- Finlande -->\n" +
    "                        <marker position=\"63.439804,10.408945\"></marker>\n" +
    "                        <!-- Suisse -->\n" +
    "                        <marker position=\"47.260586,8.205056\"></marker>\n" +
    "                        <!-- Allemagne -->\n" +
    "                        <marker position=\"51.226775,6.771526\"></marker>\n" +
    "                        <!-- Russie/Mongolie -->\n" +
    "                        <marker position=\"52.280407,104.282591\"></marker>\n" +
    "                        <!-- Russie/Kazakstan -->\n" +
    "                        <marker position=\"55.160486,61.40188\"></marker>\n" +
    "                        <!-- Iran -->\n" +
    "                        <marker position=\"25.142177,55.188446\"></marker>\n" +
    "                        <!-- Colombie -->\n" +
    "                        <marker position=\"1.207935,-77.261717\"></marker>\n" +
    "                        <!-- Madagascar -->\n" +
    "                        <marker position=\"-21.282017,55.469971\"></marker>\n" +
    "                    </ng-map>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <footer class=\"bas text-center\">\n" +
    "            <h3>Keep in touch!</h3>\n" +
    "            <i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>\n" +
    "            <i class=\"fa fa-twitter-square\" aria-hidden=\"true\"></i>\n" +
    "            <i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>\n" +
    "            <i class=\"fa fa-youtube-square\" aria-hidden=\"true\"></i>\n" +
    "        </footer>\n" +
    "    </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "\n" +
    "<!-- EXEMPLE lgt,lat :\n" +
    "40.714224,-73.961452 -->\n"
  );

  $templateCache.put("anon/navbar.html",
    "<nav class=\"navbar navbar-inverse navbar-custom\" role=\"navigation\" ng-controller=\"NavbarController\">\n" +
    "    <div class=\"container\">\n" +
    "        <div class=\"navbar-header\">\n" +
    "            <a class=\"navbar-brand\" href=\"#\">TravelCam</a>\n" +
    "        </div>\n" +
    "        <div id=\"navbar\">\n" +
    "            <form class=\"navbar-form navbar-right\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" placeholder=\"Your dream place…\" ng-model=\"getTokyo\">\n" +
    "                </div>\n" +
    "                <button type=\"submit\" class=\"btn btn-default\" ng-click=\"goSearch()\">Submit</button>\n" +
    "            </form>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</nav>\n"
  );

  $templateCache.put("anon/paris.html",
    "<div id=\"video\" class=\"container\">\n" +
    "  <div id=\"names\" class=\"animated slideInUp row\">\n" +
    "    <h1>Paris</h1>\n" +
    "    <h2>Europe, France</h2>\n" +
    "    <h2>Île-de-France</h2>\n" +
    "  </div>\n" +
    "  <div class=\"row\">\n" +
    "  <div id=\"video-container\" class=\"row\" ng-model=\"getParis\">\n" +
    "    <iframe class=\"text-center\" src=\"https://api.lookr.com/embed/timelapse/1178148742/day\"></iframe>\n" +
    "    <!-- <img src=\"{{cam.result.webcams[0].image.current.preview}}\"/> -->\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n"
  );

  $templateCache.put("anon/tokyo.html",
    "<div id=\"video\" class=\"container\">\n" +
    "  <div id=\"names\" class=\"animated slideInUp row\">\n" +
    "        <h1>千国</h1>\n" +
    "        <h2>Asia, Japan</h2>\n" +
    "        <h2>Nagano</h2>\n" +
    "    </div>\n" +
    "    <div class=\"row\">\n" +
    "        <div id=\"video-container\" class=\"row\" ng-model=\"getTokyo\">\n" +
    "            <iframe class=\"text-center\" src=\"https://api.lookr.com/embed/timelapse/1185236086/lifetime\"></iframe>\n" +
    "            <!-- <img src=\"{{cam.result.webcams[0].image.current.preview}}\"/> -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );

}]);
