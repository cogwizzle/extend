require(["test/extend_test"], function(extend_test){
  blanket.options({filter : "src"});
  extend_test.test();
});
