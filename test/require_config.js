requirejs.config({
  baseUrl : "/",
  paths : {
    src : "src",
    test : "test",
    bower : "bower_components/",
    qunit : "bower_components/qunit/qunit/qunit",
    blanket : "bower_components/blanket/dist/qunit/blanket.min",
  },
  shim: {
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
