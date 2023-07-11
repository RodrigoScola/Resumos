#testing 

installing
     npm init
     npm install mocha -D (the d makes it signalizes that is a dev dependency);

in the scripts part on the package.json, set the value of "test" to mocha
     "scripts": {
          "test": "mocha"
     }

to group tests togheter you use the describe function and define tests using the it function
     describe('groupName',() => {
          describe('subGroupName',() => {
               it ('what you want to say when it passes',() => {
                    //the test goes here
               })
          })
     })
describe and it functions accepts two parameters, a descriptive string
assert
     const assert = require('assert');

assert.ok(expression) only throw an error if the expression returns false

Setup exercise and Verify
     setup <- create objects, variables and set condition that your test depends on
     exercise <- execute the functionality you are testing
     verify <- check your expectations against the result of the exercise phase
some tests require a fourth phase, teardown
     teardown <- reset any conditions that were changed during the test
          altering files and directory structure
          changing read and write permissions on a file
          editing records in a database

using fs 
     const fs = require('fs');
     write to file
          fs.appendFileSync(path,whatYouWantToWrite)
     compare file contents to string
          fs.readFileSync(path);
     delete the file at path before the test finishes
          fs.unlinkSync(path);

hooks
     using the it block made the test isolated but not reliable
     if the system encounters an error before it reaches the teardown, it will not execute that phase
     hooks is a piece of code that is executed when a certain event happens, hooks can be used to set and reset conditions like setup and teardown
          afterEach(() => {
               teardown goes here
          })
          it ('sample, ()=> {
               test goes here
          })
          the code afterEach is called after each it block is executed,

assert.ok 
     only throws an error if the affirmation is false
          assert.ok(6 - 1 === 5);
     
assert.equal
     only throws an error if it is not equal
          assert.equal(thing1,thing2);
     instead of needing to see the entire statement, you only need to see the first two words

assert.equal
     will only throw an error if its not exactly equal 
          const b = 3;
          const a = '3'
          assert.strictEqual(b,a); // this will throw an error because its not strictly equal
          assert.equal(a,b) // this will not throw an error

assert.deepEqual 
     if you want to compare values within objects/arrays
          const a = {value: 1, age: 10};
          const b = {value: 2, age: 10};
          assert.deepEqual(a,b)     
     
assert.notEqual
     will throw an error if the thing is not equal


edge cases 
     is a problem or situation that occurs only at an extreme(minimum or maximum) operating parameter, you can think this as a special parameters
