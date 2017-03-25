/**
 * Test the extend microlibrary.
 */
define(['src/extend'], (function(){
    function test(){
      var objectA = {};
      var objectB = {};
      console.log("extend: ", extend);

      QUnit.module("Extend", {
        beforeEach : function(){
          objectA = {"x" : "x"};
          objectB = {"x" : "z", "y" : "y"};
        }
      });

      QUnit.test("Extend shall have the ability to append new properties.", function(assert){
        extend(objectA, objectB);
        objectB.super = objectA;
        assert.deepEqual(objectA, objectB, "Expected that objectA has objectB's values.");
      });

      QUnit.test("Extend shall be able to override previously existing properties.", function(assert){
        var expectedResults = {"x" : "x", "y" : "y"};
        extend(objectB, objectA);
        expectedResults.super = objectA;
        assert.deepEqual(objectB, expectedResults, "Expected that objectB's x value will be objectA's x value.");
      });
 
    }

    return {"test" : test};
})());
