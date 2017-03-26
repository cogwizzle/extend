require(["qunit", "blanket", "test/extend_test"], function(QUnit, blanket, extend_test){
  QUnit.config.autostart = false;
  blanket.options({filter : "src/extend"});
  extend_test.test();
  QUnit.start();
});
