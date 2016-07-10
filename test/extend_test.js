/**
 * Test the extend microlibrary.
 */

var objectA = {};
var objectB = {};

QUnit.module("Extend", {
 beforeEach : function(){
   console.info("Before extend test fire.");
   objectA = {"x" : "x"};
   objectB = {"x" : "z", "y" : "y"};
 }
});

QUnit.test("Test that values from objectB is included in objectA after objectA extends objectB", function(assert){
  extend(objectA, objectB);
  assert.deepEqual(objectA, objectB, "Expected that objectA has objectB's values.");
});
  
QUnit.test("Test that objectB maintains extra attributes when extended by objectA.", function(assert){
  var expectedResults = {"x" : "x", "y" : "y"};
  extend(objectB, objectA);
  assert.deepEqual(objectB, expectedResults, "Expected that objectB's x value will be objectA's x value.")
});