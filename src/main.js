/*global define*/
define("main", function () {
  "use strict";

  require('prefs').init(function () {
    require('tree');
  });
});