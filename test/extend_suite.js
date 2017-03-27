/**
  Test suite that test the extend unit test.
*/
define(["qunit", "blanket"], function(QUnit, blanket){
  QUnit.config.autostart = false;  // Stop QUnit from automatically running.
  blanket.options({filter : "src/extend"});  // Add the filter to code coverage tool.

  // Require extend test.
  require(["test/extend_test"], function(extend_test){
    extend_test.test(); // Run the extend test.
    QUnit.start(); // Run QUnit test.
  });
});
