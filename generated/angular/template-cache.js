angular.module("app").run(["$templateCache", function($templateCache) {

  $templateCache.put("anon/home.html",
    "<div>\n" +
    "    <p>chemin :{{}}</p>\n" +
    "</div>\n"
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
