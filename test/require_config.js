/**
  Configure requirejs.
*/
requirejs.config({
  baseUrl : "/",
  paths : { // File aliases.
    src : "src",
    test : "test",
    bower : "bower_components/",
    qunit : "bower_components/qunit/qunit/qunit",
    blanket : "bower_components/blanket/dist/qunit/blanket.min",
  },
  shim: {  // Shims allow variables with global name spaces to be used inside of AMD/CommonJS modules.
    "blanket": {
      deps: ["qunit"],
      exports: "blanket"
    },
    "qunit": {
      exports: "QUnit"
    }
  },
  findNestedDependencies : true
});

/**
  Call the extend test suite.
*/
define(function(require){
  var suite = require("test/extend_suite");
});
