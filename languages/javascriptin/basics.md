#javascript 

var sum = variable that adds (+)
var difference = variable that subtracts (-)
var product = var that multiplies (*)
var quotient = var that divides (/ or %)
myvar++ = +1 when you use it
myvar++ = -1 when you use it
you can change a var by using +=
    c += 5
    c -= 5
    c *= 5
    c /= 5
escape sequences in strings
    \' = single quote 
    \" = double quote
    \\ = backslash
    \n = new line
    \r carriage return
    \t = tab
    \b = word boundary
    \f = form feed
you can ise different variables to append
    const myStr="nice";
    MyName +="it is";
    MyName += myStrconcurrent;
.length = the number that contains in an variable
    str = "myname"
    str.length = 6;
you can use [index] to discover an element of a property
 var firstName = "charles";
 var FirstLetter = firstname[0];
you can use [varName.length - 1]; to discover the last digit of a variable.
Arrays
    you can store multiple data on arrays
     myArray = ["hello", 60, 6.25];
    you can store other arrays in arrays
        my array = ["123", 80]["bulls there", 031];
    you can append data into an array with the push/unshift command
        var arr1 = [1,2,3];
        arr1.push(4);
        var arr1 = [1,2,3,4];
        .shift adds an element in front of a list
    you can remove data into an array with the pop/shift command
        pop always removes the last element of an array.
        shift always removes the first element of an array.
    you can get data from an array using .slice
to create a new function the syntax is 
    function newfunction(){ 
        console.log("hello world");
    }
to create a new parameter just add it to the right of the function
    functionwithargs(x, y);
    console.log(x + y)
you can return multiple values in a function and destructure later 
     const weather_data = () => { return [1, 2, 3 , 4]}
     [ dayOne , dayTwo , dayThree, dayFour ] = weather_data()
you can do it with objects too 
     const getName = (firstName , lastName) => { return { firstName , lastName }}
     { firstName , lastName } = getName()
loc = local variable = its only visible on that function
function example with a parameter
     var num = 5;
            function timesFive(num) {
        return num * 5;
        }
you can change a variable with a function   
    var processed = 0;
    function processArg(num) {
      return (num + 3) / 5; }
       processed = processArg(7);
booleans
    == can mean equal to, but not exactly:
     meaning that accepts 7,"7", '7'...
    === means its exactly that

 theres something here but i dont know what.        

         var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
    function golfScore(par, strokes) {
      // Only change code below this line
     if (strokes == 1) {
       return names[0]
     }
      else if ( strokes <= par - 2) {
        return names[1]
        }
      else if (strokes == par - 1) {
        return names[2]
      }
      else if (strokes == par) {
        return names[3]
      }
      else if (strokes == par + 1) {
        return names[4]
      }
      else if (strokes == par + 2) {
        return names[5]
      }
      else if (strokes >= par + 3) {
        return names[6]
      }

      return "Change Me";
      // Only change code above this line
    }

    golfScore(5, 4);
      
switch
  switch(input) {
    case input1:
    var inputvariable = 1;
    break;
    case input2:
    var inputvariable = 2;
    break;
    default:
    inputvariable = default
  }
  you can have the same answers with the same input:
    case 4:
    case 5:
    case 8:
      result = input 2;
      break;
if you know that the input will always be the same, you can return without doing any if statements
  funciton isless(a,b) {
    return a< b;
  }

objects
  they are similar to arrays, but instead of indexes to acess & modify data, you acess properties
    var theDog = {
      "name": "dogName",
      "legs": 2,
      "tails": 200,
      "friends": ["nani","lana"]
    }
  you can acess directly by using the . notation
    var hatvalue = testobj.hat; 
    var shirtvalue = testobj.shirt;
  if the property has a space in it, you need to use the [] notation
  you can assign a variable to see what property you want to see in an object
    var playerNumber = 15;
    var player = testObj[playerNumber];
  you can alter a variable name by just listing the object.property you want to alter 
    myDog.name = "happy Coder"

to add properties, you use . & the thing you want to add or []
  ourDog.bark = "woof"
  or
  ourDog["bark"] = "woof";

to remove properties you just use delete
  delete ourdog.bark;
you can lookup values with the alpha statement
if you want to lookup something without an switch statement, use the lookup syntax
  var lookup = {
    "alpha": "Adams"
    "bravo": "boston"
  }
  result = lookup[val];
  return result;
if you want to see if a property exists or not, use the .hasOwnPropery(propname)
  returns true or false if exists or not
  myObj.hasOwnProperty("top"); //true
  myObj.hasOwnProperty("top"); //false
if you want to see the object that the object has
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return "not Found"
  }
  in this code if the obj has a property, it will return the name of the property,
  if it has not the property it will return Not Found.
to add a new object in an array, after the first {} add a , and a {}
to acess the properties inside objects you
  say the var & the proceding directories like a file
to acess the other objects in an array, use [] notation
  arrayname[objposition].secondobj[secondobjposition]
while
  while is while that statement is true, something will happen
  while i > -1 the array is going to be increasing by 1
    var i = 6;
    while (i > 0 ) {
      myArray.push(i)
      i--;
    }
adding something with an array with an for loop
  for (var i = 0; i < 10; i++){
  }
to add the numbers of things in an array you,
  for (var i = 0; i < myArr,lenghtl i++) {
    total += myArr[i];
  }
do while looop. first will do a pass no matter what and then continue to run the loop while the specified condition is true
 do {
   myArray.push(i);
   i++;
 } while (i < 10) {
   console.log(i);
 }
 in this, the result will be 11
recursion is a function that calls for itself
on the challenge 
    for (i = 0; i < contacts.length; i++) {
      if (contacts[i].firstname === name) {
        return contacts[i][prop] || "No such property"
      }
    }
    return "No such contact"
  }
  // first it will go through all the things in the contacts and if the name has a property on firstname it will pass and return the contact name & prop
  // & if there is a prop it will return the prop, otherwise it will return " no such property"
  // if theres no name on contacts.firstname it will return "no such contact"
for random number you use Math.random
  if you want to round a number, use math.floor;
  to pich a number at random & floor it, use
    math.floor(math.random())
  if you want to pick a number between a min and a max, use
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
to convert a number to an integer, use parseInt(str);
if you want to convert a binary number to an int, use
  parseInt(str, 2);
  using radix is a int between 2 and 36
if you are to lazy to write if statements, you can use conditional statements if one is true or false
  return a > b ? "a is greater" : "b is greater";
  to do else ifs 
  return (a === b) ? "a is equal to b"
    (else if) : (a > b) ? "a is greater than b"
    : "b is greater";
let
  let makes it so you cant overrwrite an variable
  let is automatically a local variable 
  you can overwrite the same  variable you just declared by using let
      function checkScope() {
    let i = "function scope";
    if (true) {
      let i = "block scope";
      console.log("Block scope i is: ", i);
      }
    console.log("Function scope i is: ", i);
    return i;
    }
const 
  const variables are read only
    a common practice when naming constants is to use all uppercase letters with words separated by an underscore
    its common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values
    you can alter a value on a constant array by being one at a time 
        const s = [5, 7, 2];
  
     s[2] = 7;
     s[0] = 2;
     s[1] = 5 
     console.log(45);
to freeze an object you can use Object.Freeze, there you cannot add or subtract anything from the obj
you can create inline functions   
  const myFunc = () => "value";
if you want to set a default value in a inline function, use
  const increment = (number, value = 1) => number + value;
rest parameter makes it so that you can have a variable number of args
 function howMany(...args)  
 you dont need to clarify the arguments that it has, example
 before
  const sum = (x,y,z) => {
    const args = [x,y,z];
    return args.reduce((a,b) => a+b,0);
  }
  after 
    const sum (...args) => {
      return args.reduce((a,b)) => a + b, 0;
    }
if you want to append a variable amount of items in an array to another array.
  const arr1 = ["jan","feb","saturday"]
  let arr2 = 
  arr2 = [...arr1];
    this will add arr1 & other upcoming strings in the array;
    this will also copy the array
you can get an assigning multiple values in an object by requesting them all at once, and not once at a time
  before  
    const user = { name: 'john doe', age: 34};
      const name = user.name; 
      const age = user.age;
  now
    const {name, age} = user;
  with that you can extract the result and assign a new variable to that
    const user = { name: 'john doe', age: 34};
    const {name: userName, age:userAge} = user;
you can change  a property of a sub object
    const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  const{ today: { low: todayLow, high: todayHigh}} = LOCAL_FORECAST;
you can deconstruct arrays and put them into variables by using this:
    const source = [1,2,3,4,5,6,7,8,9,10];
    function removeFirstTwo(list) {
      const [a,b, ...arr] = list; 
you can call object variables without calling the object itself by using {}
  const stats = {
    max: 35,
    standard_deviation 4.32,
    median: 32,
    mode: 23,
    min:-.53,
    average: 34
  };
  const half = ({max, min}) => (max, min) /2;
istead of usinc the + sign, you can do more work? by using $()
  'hello, my name is ${person.name}
something in this but i dont know what
    const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    const failureItems = [];
      for( let i = 0; i <arr.length; i++)
       failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
    return failureItems;
  }
  const failuresList = makeList(result.failure);
in es6 you dont need to add the function part of the declaration of the function, instead you can just name the function
  before
    sayHello:function();
  now
    sayHello();
to create a script module
  <script type="module" scr="sourceFileName"></script>
if you want to use a part of a code in a file in javascript, you need to export that part
  export {lowercaseString,uppercaseString};
to import things
import {
  thing1
  thing2  
  } from './string_functions.js'
to import all things, use import * as name from './math_functions.js'
  that will be a object and treat it as such
  name.name1;
if only one value is being exported, use default function
if you want to import a function:
  import subtract from './math_functions.js/
promise
  when the task completes you fufill your promise or fail to do so. promise is a constructor, so you need to use the new keyword
    const makeServerRequest = new Promise((resolve,reject) => {
    });
  promises with if and else statements 
    const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if(responseFromServer) {
      resolve ("We got the data")
    } else {  
       reject ("Data not received");
       }
   });
  Promises are most useful when you have a process that takes an unknown amount of time in your code
  (i.e. something asynchronous), often a server request. When you make a server request it takes some
  amount of time, and after it completes you usually want to do something with the response from the server.
  This can be achieved by using the then method. The then method is executed immediately after your promise is
  fulfilled with resolve. Here’s an example:

myPromise.then(result => {
  // do something with the result.
});
result comes from the argument given to the resolve method.
catch is the method used when your promise has been rejected. its executed immediately after a promise's reject method is called
  mypromise.catch(error => {
    // do something with the error
  });
if you want to search for something and returns true
  let petString = "James has a pet cat.";
  let result = petRegex.test(petString);
  let petRegex = /dog|cat|bird|fish/; // Change this line
to make it non case sensitive, after the //, use i you want to make it non case sensitive
  /freecodecamp/i
with the .match() you can search for the thing and extract the word you want
to make it repeat, you can use /g ( use it if theres more than one case)
using the . charecter, you match everything that has the same charecter
using [] is the same as putting an |
  /[aeiou]/gi;
using [minLetter-Maxletter] you can cycle all the letters without typing it out
using [minNumber-maxNumber] you can cycle all the letters without typing it out
using ^ it excludes the things you put in the selection
  /[^aeiou] = matches with everything that isnt a vowel
using + and a charecter, it will only display the first thing that it catches
  example: /a+/g = "abc" & return 'a'
Match Characters that Occur Zero or More Times
  The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
  The character to do this is the asterisk or star: *.
you can use ? to find the closest match
outside of a character set, the ^ is used to search for patterns at the beginning of strings
  let firstString = "Ricky is first and can be found.";
  let firstRegex = /^Ricky/;
  firstRegex.test(firstString);
  let notFirst = "You can't find Ricky now.";
  firstRegex.test(notFirst);
 using the $, searchs for the last charecter
  instead of using[A-Za-z0-9], you can use \w
  let shortHand = /\w+/;
  instead of using[^A-Za-z0-9], you can use \w
  instead of using [0-9] you can use \d
  instead of using [^0-9] you can use \D
  if you want just the spaces, use \s
  if you dont want the spaces, use \S
  if you want a range of numbers that should match with use {}
  if you just want the minimum , just use {x,}
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element.
You can think of this symbol as saying the previous element is optional.
lookaheads search for patterns using ?= and if you dont want a pattern use, ?!
using parenteses () to check for groups of charecters
  You can search for repeat substrings using capture groups. Parentheses, ( and ), 
  are used to find repeat substrings. You put the regex of the pattern that will repeat in between the
  parentheses.
  if you want to find either Penguin or pumpkin in a string, use
    /P(engu|umpk)in/;
to allow for middle names, use .*
you can replace a regex using the.replace
use console.clear to clear the browser console.
You can use typeof to check the data structure, or type, of a variable
you can replace data in an array using splice to take it out the element and adding , + the thing you want to add
to see wich index number an element is, use .indexOf (returns - 1 if it doesnt appear)
you can use delete to delete a property from an object
something here but idk v3
  function isEveryoneHere(obj) {
    return ["Alan", "Jeff", "Sarah", "Ryan"].every(name =>
      obj.hasOwnProperty(name)
    );
  }
if you need to loop through all the keys within an object, use a for in statement 
  for (let user in users) {
    console.log(user)
  }
you can acess a property by using [] ex: usersobj[user].online
  this see if it has the property user, and if it has, see if its online
object.keys return every key of that level that an object has
  object.keys(obj) return the names of the sub-objects;
something here but im too blank to think what it is function
  reverseString(str) {

    for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
    }
    return reversedStr;
 }
 factorial is a number multiplied by every number that came beforehand
 5! = 5*4*3*2*1
    function factorialize(num) {
    for (var result = 1; num > 0; num--) {
      result *=num;
    }
    return result;
this
    function largestOfFour(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber;
    }

    return results;
  }
 first you create a variable to store the largest number, then you have to go through all the arrays and sub arrays
 you can create two loops for that: one for the main array and the other for the sub array
 then you create a second variable largestnumber to store the arrays?

 use SLICE TO COPY THE STRING 
  .slice(str)


to return the last charecters of something 
 str.slice(str.length - target.length) === target;
using a string variable += str;
 will return str as many times as you want
if you want to return something at a specific point on a string 
  use str.slice to copy the string and (min index,max index);
you can 
if you want to start at the last charecter in a for loop  
  for (var i; i = str.length -1; i >= 0; i--)
put everything in lowercase by using str.toLowerCase()
put everything in uppercase by using str.toUppercase()
array.filter the filter method takes an array as an input. takes each element in the array and it applies a conditional statement against it
if this conditional returns true, the element gets pushed to the output array
  var studentGrades = students.filter(function (student) {
    //This tests if student.grade is greater than or equal to 90. It returns the "student" object if this conditional is met.
    return student.grade >= 90;
  });

.foreach  = does something to each item on the array
  myArray.forEach(function(item,index)) {
    console.log(item,index);  //returns 1 0  2 1   3 2  
  }
.map 
  takes the item of the array, does something to it and puts that thing on the same spot on the array
  const three = [1,2,3];
  const doubled = three.map(function(item)) {
    return item * 2;
  }                   // returns [2,4,6]
.filter 
  takes an array and checks each item on the array against a condition, if its true, its going to put the item 
  back in the array, and if its not, its going to put it in another array
    const ints = [1,2,3];
    const evens = ints.filter(function(item)) {
      return item % 2 === 0;

    }     //returns     1 0   2 1   3 2    [2,4,6]   [2]
.reduce()  takes an array and do something and pass the result on the next iteration
  const sum = [1,2,3].reduce(function(result,item)) {
    return result + item;
  }, 0;                 // returns 6
.sum() check any item in the array meets the condition, returns true 
  const hasNEgativeNumbers = [1,2,3,-1,4].some(function(item)) {
    return item < 0;    // returns true because has at least one item that is less than one
  }
.every() = checks every item on the array and if every item on the array meets the condition, returns true
  const allPositiveNumbers = [1,2,3].every(function(item)) {
    return item > 0;
  }     // return true
.find() = checks every item on the array and checks if it has the correct id 
  const objects = [{id:"a"}, {id:"b"},{id:"c"}];
  const found = objects.find function(item) {
    return item.id === "b";
   }      // returns true
.findIndex() = checks every item on the array and checks if it has the correct id 
  const objects = [{id:"a"}, {id:"b"},{id:"c"}];
  const foundIndex = objects.findIndex(function(item)) {
    return item.id === "b";
   }      // returns 1

in this test
  function chunkArrayInGroups(arr, size) {
   var newArr = [];
    var i = 0;
    while (i < arr.length){
      newArr.push(arr.slice(i, i + size));
      i += size;
    }
    return newArr;
  }
  chunkArrayInGroups(["a", "b", "c", "d"], 2);
    in this test, yyou are suppose to cut the array on the specified size variable
    1 = you start by defining the variables newArr because in javascript you cant modify the array, so you create a new one 
    2 = you create a while loop 
      while ( i < arr.length)
      this makes so the loop will onlyy be running for a certain amount of time 
    3 = on the next line you push the i and the size of the array, so you push the original numbers AND the rest of the numbers that make the size\
    so i = 0; and the array is [0,1,2,3]; and the size is 2, so you take i = 0, plus the rest (the number of the rest is size)
      0 + 2 = 2 
      take 0,1,2
    4 = you make the i = the size + the i that was before
      so the i = 2 now
      and the new i in i + size = 4
              because i = 2 & size = 2
to create an object, you create a variable + {}
  let dog = {
    name: 'buddy'
    numLegs: 2
  };
to create a property, you just create a variable without using = but use :
  name:'buddy'
  numLegs: 2
you can create a function inside an object by using this syntax
  sayNumber: function() {return 'is the number' + number + ' the number that you chose?'}
using this. is a way for you to if you rename the obj, the variables will still be the same
constructor is an object that its purpose its to create a lot of its kind (the properties are meant to be altered)
  constructor have the first letter capitalized to diferentiate from functions 
    they use the notation this. for everything
    they use the ; after sentences
    to create a new object from the constructor, use new objName = new constructorName;
  you can make so the constructor accepts variables so you can use the constructor just as a template and not as an object
    function Bird(name,color) {
        this.name = name;
        this.color = color;
        this.numLegs = 2;
      }        
  then you can alter the properties just by calling the constructor
    let samuel = new Bird(name, color);
    & to alter that property, just call for the variable name . the value you want to alter
      samuel.name
      samuel.color
using instanceOf you can compare an object to an constructor, returning true or false based on wheter or not that object was created with the constructor
  let Bird = function(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 2;
  }    
    Let crow = new Bird("alexis","Black") ;


    crow instanceOf Bird; // returns true;

  if an object is creaated without using a constructor, intanceof will verify that is not an instance of that constructor;

  let canary = {
    name: 'Mildred',
    color: 'yellow',
    numLegs: 2
  };
        /// this would return false
each instance of an object created by an constructor or something, has a property and when they are defined directly on the instance of the object
(meaning that duck and canary have a different copyy of the same properties)
and you can see if an instance has properties and pass that property to an array
  function name(property1) {
    this.propery1 = property1;
    this.property2 = 2;
  }
  
  let newName = name(2);
  let arrayName = [];

  for (let varName in newName) {
    if (newName.hasOwnProperty(varName)) {
      arrayName.push(varName);      
    }
  }
    first we start by defining the variables and creating the object 
    second we stablish a loop that for every index of information (varName) this loop is going to happen
    third we use an if statement to see if the object has an property on the index that we called (varName);
    then we push the information on the index (varName) to the array (arrayName);

    if you want the same instance more than a hundred at a time, use .prototype,  where that property is shared amongs all the instances

    function Dog(name) {
      This.name = name;
      dog.prototype.numLegs = 2;

    }

    prototypes arent an own property so they cant be used on the .hasOwnProperty
      let beagle = new Dog("Snoopy");
      let ownProps = [];
       let prototypeProps = [];
        for (let i in beagle) {
          if (beagle.hasOwnProperty(i)) {
            ownProps.push(i);
          } else {
              prototypeProps.push(i);
          }
        }
      this exercise is almost the same as the last, but we have an prototype property, wich means that we have to do the else statement
if you want to know if something is an constructor, use the notation .constructor , will return true if it is an constructor or false if its not
        if (candidate.constructor === Dog) {
          return true;
        } else {
          return false;
        }
      }
you can alter the property of an object using the .prototype notation all at once 
  for example 
    instead of using
      bird.prototype.eat = function () {
        console.log('nom nom noom');
    }
      bird.prototype.describe = function() {
        console.log('my name is ' + this.name);
      }
    you can add all of those togheter!
      bird.prototype = {
        numLegs:2,
        eat: function() {
          console.log('nooom noooom nooooooooom')
        }
        describe: function () {
          console.log('My name is ' + this.name);
        }
      }
there is one crucial side effect of manually setting the prototype to a new object. it erases the constructor property! this property can be used 
to check wich constructon function created the instance, but since the property has been overwitten, it now gives false results 
    duck.constructor === Bird;
    duck.constructor === object;
    duck instanceof Bird;
      //crashes//
      it crashes because both of those things are true
to fix this, whenever a prototype is manually set to a new object, remember to define the constructor property
  bird.prototype = {
    constructor: Bird,
      eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name); 
    }
  };
  }
just like people inherit genes from their parents an object inherits its prototype from the constructor function that created it. 
  example 
    function Bird (name) {
      this.name = name;
    }
    let duck = new bird('donald');
duck inherits its prototype from the bird constructor function, you can show this relashionship with the notation isPrototypeOf(duck); // returns true
an objects prototype is itself an object and becasuse a prototype is an object, a prototype can have its own prototype, on this case the prototype of 
Bird.prototype is object.prototype
  object.prototype.isPrototypeOf(Bird.prototype);
how is this useful? you may recall the hasOwnProperty method
  let duck = new bird('donald');
  duck.hasOwnProperty('name')
the hasOwProperty method is defined in object.prototype, which can be accessed by Bird.prototype which can then be accessed by duck. this is an example of the prototype chain. in this prototype chain, 
Bird is the supertype for duck. while duck is the subtype. object is a supertype for both bird and duck. Object is a supertype for all objects in javascript therefore, any object can use the hasOwnPropertyMethos
 funtion Dog(name) {
   this.name = name;
 }
 let beagle = new Dog('snoopy')
 Dog.prototypeisprototypeOf(beagle)
 (object.prototype) ???.isprototypeOf(Dog.prototype)
  the results is kinda like a food chain where the smaller one starts
  beagle => Dog => object
lets say that you have a method called eating, and to not put the same method on every constructor, you can use a supertype and to define where this
supertype goes, we can use a method called inheritance
    first you have to create a new instance of the object but without using the new Object method, instead lets use a new one
    let animal = object.create(Animal.prototype); // this makes it easier when we are dealing with inheritance
  obj.create(obj) creates an objects and sets the new objects prototype
  let duck = Object.create(Animal.prototype);
  let beagle = Object.create(Animal.prototype);
  this creates an object called duck/beagle and sets as the animals prototype
to make an inheritance to an object and still be able to alter that object, you can make a subdivision of an object and that inheritance goes to the prototype
  Dog.prototype = Object.create(Animal.prototype)
when dog.prototype was created, the old constructor disappears and the new one is the one that was set last (animal.prototype)
to reverse this, just set the constructor after all the functions are set
  Bird.prototype = Object.create(Animal.prototype);
    bird.prototype.constructor = object.create(Animal.prototype)
  Dog.prototype = Object.create(Animal.prototype);
    Dog.prototype.constructor = object.create(animal.prototype)
you can overrwrite an function by just rewriting and adding what you want
sometimes you just want one quality to be shared among both things, and sometimes a common aspect is not the best solution,
inheritance does not work well with birds and airplanes, theyy both can fly but they arent the same thing
  to bypass that, you can create a specific function called flying and add the object after

      let flying = function(obj) {
        obj.fly = function() {
          console.log('wooosh, im flying')
        }
      }

      to call for that just use flying(bird)/flying(airplane);
in this exercise 
  function Animal() { }
  Animal.prototype.eat = function() { console.log("nom nom nom"); };
  function Dog() { }
  // Only change code below this line
  Dog.prototype = Object.create(Animal.prototype);
  Dog.prototype.constructor = Dog;
  Dog.prototype.bark = function() {
    console.log('Woof!')
  };
  // Only change code above this line
  let beagle = new Dog();
    the objective was so that the animal could use the function eat & the function bark
    first we create the Dog.prototype and make it equal to Object.create(Animal.prototype)
      this means that if something changes in the animal prototype, it will change in the dog prototype aswell
      then we make the Dog.prototype constructor the Dog because if i want to change something in the variables that arent prototypes i can do so
      then we add the function bark 
if you want a function to be immediately invoked, after everything you use this syntax
  (function () {
    console.log('chirp chirp');
  })();
IIFE (immediately invoked) is often used to group related funtionality into a single objext or module. for example 
  function glideMixin(obj) {
    obj.glide = function() {
      console.log("Gliding on the water");
    };
  }
  function flyMixin(obj) {
    obj.fly = function() {
      console.log("Flying, wooosh!");
    };
  }
we can group these mixins into a module as follows:
  let motionModule = (function () {
 return {
      glideMixin: function(obj) {
        obj.glide = function() {
          console.log('glidin on the water);
        };
      },
      flyMixin: function(obj) {
        obj.fly = function(obj) {
          console.log('im flying babyy');
        };
      }
    }
  }
    motionModule.glideMixin(duck);
    to do this group, first you have to tinitialize, using an IIFE  then you create a return part where you put your functions
    and you transform them in functions for an object 4head
    dont forget to use }, & };
functional programming is a style  of programming  where solutions are simple isolated functions, without any side effects outside of the function scope
  input -> process -> output
functional progeamming is about 
  isolated functions (there is no dependance on the state of the program, witch includess global variables that are sucject to change)
  pure functions - the same input always gives the same output
  functions with limited side effects - any changes or mutations, to the state of the program outside the fucntion are careffully controled
you can assign a variable to a function and a return node
  const prepareGreenTea = () => 'greentea';
  will return greentea
on this exercise
a good practice of functional programming is to always declare your dependencies explicitly. meaning that if a function depends on a variable 
or object being present then pass that variable or object directly into the function as an argument
its easier to test ,you know what input it takes, and it wont depend on anything else in your program
instead of using a function like this
  var fixedValye = 4;

  function incrementer () {
    return fixedValue + 1;
  }
look at this... discusting, now if we change anything we can get bugs to appear, instead lets use this
    var fixedValue = 4;

    function incrementer (argument) {
      argument = fixedValue + 1;
      return argument;
    }
beautiful, now you have an argument that you know exactly what is needed to function, you dont need to directly use the variable fixed value because if we want to change it,
we just need to change one thing that is the variable fixedValue name
using something like var newArr = arrVar, where arrVar is an array will simpply create a reference to the existing variable and not a copy. so changing a value
in newArr would change the value in arrVar
DECLARE FUNCTION PARAMETERS
dont be a lazy bum and put the parameters, its way better and everyone around you will clap and chant your name
passing by reference bersus value 
pass By value (primitives);
  b = 2
  a = b
  console.log(a) = 2
  console.log(b) = 2

in this exercise
  var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


  function add(arr, bookName) {
    let newArr = [...arr]; 
    newArr.push(bookName); 
    return newArr; 
  }

  function remove(arr, bookName) {
    let newArr = [...arr]; 
    if (newArr.indexOf(bookName) >= 0) {
   
      newArr.splice(newArr.indexOf(bookName), 1); 
      return newArr; 
    }
  }

  var newBookList = add(bookList, 'A Brief History of Time');
  var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
  var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

  console.log(bookList);
  this one is easy, just looks intimidating by its size
  first you create a new array to modyfy the properties, since modifying the original array on javascript is impossible
  then you add the parameters to the functions, being arr and bookname, 
  arr gets in the variable declaring by being a placeholder on the new array
  then you just push the new book
  to to remove, you do almost the same thing 
  first you use the same placeholder on the array
  then you check if the book exists, using the notation .indexOf, if the index of that bookname is over or equal to 0
  then it passes and you remove that thing
  and return the new array

functions are considered first class objects in javascript which means they can be used like any other object. they can be saved in variables, stored in and
object, or passed as function arguments
the .map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. it does 
this without mutating the original array
When the callback is used it is passed three arguments. the first argument is the current element being processed, the second is the index of that element and 
the third is the array upon which the map method was called
  const names = users.map ( user => user.name);
  console.log(names);
    ['John','Amy','camperCat']
using the .map function it returns an array, but you can filter the messages that you want on that array
  for example in this exercise
  ```js
  var watchList = [
   {
     "Title": "Inception",
     "Year": "2010",
     "Rated": "PG-13",
     "Released": "16 Jul 2010",
     "Runtime": "148 min",
     "Genre": "Action, Adventure, Crime",
     "Director": "Christopher Nolan",
     "Writer": "Christopher Nolan",
     "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
     "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
     "Language": "English, Japanese, French",
     "Country": "USA, UK",
     "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
     "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
     "Metascore": "74",
     "imdbRating": "8.8",
     "imdbVotes": "1,446,708",
     "imdbID": "tt1375666",
     "Type": "movie",
     "Response": "True"
    },
```
theres a ton of information that we dont need so lets add the info that we need into an array
first we need to make the map function
  const ratings = watchList.map(item => ({
    title: item["Title"],
    rating: item["imdbRating"]
  }));

 first we create two categories that we want, title and rating, next using the item notation, it takes whatever it has on the item["Title"], 
 and the same for the rating
map method returns an array of the same length as the one it was called on. it also doesnt alter the original array as long as its callback function doesnt
using the .filter notation, it takes an array, filters it with the thing that its lloonking for, and it returns the whole index
in this exercise 
  var filteredList = watchList
    .map(function(e) {
      return { title: e["Title"], rating: e["imdbRating"] };
    })
    .filter(e => e.rating >= 8);
  console.log(filteredList);
  this exercise we learn something totally cool and not at all annoying bc i had to look at the answers and find out that this mechanic was never brought it up
  well someday, you might want to do more than just one operation like, you want to map and filter the options
  well you can, after you use .map, just use .filter right after without anything else 

 concatenation means to join items end to end. javascript offers the concat method for both strings and arrays that work the same way. for arrays the method is called on
 one, then another array is provided as the argument to concat, witch is added to the end of the first array. it returns a new array and does not mutate either
of the original arrays 
  arr1.concat(arr2)
you can do this thing
  var averageRating = 
          watchList
            .filter(film => film.director === "christopher Nolan")
            .map(film = Number(fil,.imdbRating))
            .redice((sumOfRatings,rating) => sumOfRatings + rating)/ watchList.filter(film => film.director === "christopher Nolan").length
        return averageRating

you can convert strings to numbers using the method Number()
in this exercise
    const squareList = arr => {
    // Only change code below this line
    return arr
              .filter(e => e > 0 && e % parseInt(e) === 0)
              .map(e => Math.pow(e,2));
    // Only change code above this line
  };
  we have to take an array and make all the integers that are above 0 and power them by 2
    first we have to return the array, then we use the notation .filter to filter out the numbers < 0 and then to make only integers we use the function 
    & === 0 , that function in javascript is to see if the number is divisible by an number, we take the number and use the parseInt to convert an number 
    to an integer.
      .filter(e => e > 0 && e % parseInt(e) === 0)
    then we have to power them by two, for that we use the notation Math.pow, Math is to indicate that we want to use math, pow is that the operation that 
    we want to use is the power functio , it takes 2 arguments, the number and how much you want to power to
      .map ( e => Math.pow(e,2));
using the sort method it sorts the elements of an array according to the callback function
  function ascendingOrder(arr) {
    return arr.sort(function(a,b)) {
      return a - b;
    });
  }
  ascendingOrder([1,5,3,2,4]);
    this would return the value [1,2,3,4,5];
  
  function reverseAlpha(arr) {
    return arr.sort(function(a,b)) {
      return a === b ? 0 : a < b ? 1 : -1;
    });
  }
  reversealpha([l,h,z,b,s]);
    this would return [z,s,l,h,b]

    this is an elaborate if statement, weve wseen this before, but for a simple lookback, ill try to explain it

      a === b ? 0 // this is the first statement, meaning that is the more important one, means that if a is exactly b, then return 0
      a < b ? 1 // this is an else if statement, meaning that if index a (every letter has an index number so to speak from 1 to 26 and a is 1) is less than b
                // then return 1
       1        //this is an else, meaning that if a > b, return 1

    this sequence makes so that it organizes the array into a sequence of -1 , 0 , 1 going from the largest number to the smallest
    if you want to make it so that it goes from smallest to largest, write
    a === b ? 0 : a > b ? 1 : -1;
A side effect of the sort method is that it changes the order of the elements in the original array. in other words, it mutates the array in place.One 
way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then return the 
sort method 
  this can be evaluated by this exercise

    var globalArray = [5,6,3,2,9];
    function nonMutatingSort(arr) {
      return [].concat(arr).sort(function(a,b) {
        retrun a === b ? a > b ? 1 : -1;
      }
    }

    to copy an array and return a new array without copying the old one, you can use the .concat notation and [] to create a new array, (i dont know 
    where its stored if you dont put a variable to it);
the split method splits a string into an array of strings. it takes an argumetn for the delimiter, which can be a character to use to break up the 
string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an 
array of each character in the string, you get am array of each character in the string. 
  Here are two examples that split one string by spaces, then another by digits using a regular expression:
    var str = 'hello world';
    var byS[ace = str.split(' ');

    var otherString = ' how are you today ';
    var byDigits = otherString.split(/\d\/g);
      bySpace would have return the value of ['hello', 'world'] and byDigits would have returned the value ['how','are','you','today']
        since strings are immutable, the split method makes it easier to work with them
      use regular expression to split more than one character (best practice omegalul);
the join notation is used to join the alements of an array together to create a string. it takes an argument for the delimiter that is used to separate the
aray elements in the string 
  var arr ["Hello","There"];
  var str = arr.join(" ");
you can change notations togheter just by writing them after for example
  str.split(/\W/).join(" ");

  this takes a string and removes the non alphabetic and numeric characters, wich returns an array, then using the join notation, we merge the array with a space
  in between
from computing averages to sorting, any array operation can be achieved by applying. recall that map and filter are special cases of reduce
lets cobined what weve learned to solve a pratical problem 
many content management sites(cms) have the titles of a post added to part of the URL for simple bookmarking purposes. for example, if you write 
a medium post titled stop using Reduce, its likely the URL woulld have some for of the title string in it(.../stop-using-reduce). you may have 
already noticed this on the freecodecamp site
if theres an blank space on the beginning of your sentence, use the notation .trim()  
to see if every element of an array passes an certain test. use the .every method
  var numbers = [1,5,8,0,10,11];
  numbers.every(function(currentValue) {
    return currentValue < 10;
  }
    in this case, it would return false, because not every member is greater than 10
The some method works with arrays to check if any element passes a particular test. it returns a boolean value- true if any of the valyes meet the criteria
  For example, the following code would check if any element in the numbers array is less than 10
  var numbers = [10,50,8,220,110,11]
  numbers.some(function(currentValue) {
    return currentValue < 10;
  });
        this whis would return true by the some notation, but false by the every notation
the arity of a function is the number of arguments it requires. currying a function means to convert a function of n arity into functions of arity 1
in other words, it resttructures a function so it takes one argument, then returns another function that takes the next argument and so on
  heres an example  
    function unCurried(x,y) {
      return x + y;
    }

    function curried(x) {
      return function(y) {
        return x + y;
      }
    }

  const curried = x => y => x + y;
  curried(1)(2);

  this is useful in your program if you cant supply all the arguments to a function at one time. you can save each function call into a variable
  wich will hold the returned function reference that takes the next argument when its available, heres an example using the curried function in the 
  example above
    var funcForY = curried(1);
    console.log(funcForY(2)); //3
    similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied 
    applied to more arguments. heres an example

    function impartial (x,y,z) {
      return x + y + z;
    }
    var partialFn = impartial.bind(this,1,2);
    partialFn(10); // 13

the bind notatien creates a new function that when called has the keyword this defined with the input value, with a sequence determined of arguments
before every other value for when the function is called
  
imagine a train station, where after the train has everyone on board, only then the train will leave,
the instruction that you want to be the last is the thing that has everything inside it, meaning the instructions of what to do
  function add(x)  {
    return function(y) {
      return function(z) {
        return x + y + z;
      }
    }
  }

INTERMEDIATE ALGORITHM SCRIPTING

to discover the min and max of two numbers use the Math.min && Math.max notation
  to discover the sum of an array 
  ```js
function sumAll(arr) {
	let min = math.min(arr[0],arr[1]);
	let max = math.min(arr[0],arr[1]);
	let array = 0;
	for(let i 0; i <= max; i++) {
        array += i;
}
```
on this exercise we have to compare two arrays and return a new array with any items only found in one of the two arrays, but not both. in 
other words, return the symmetric difference of the two arrays
    function diffArray(arr1, arr2) {
      var newArr = [];

      function count (first,second) {
        for (let i = 0; i < first.length;i++) {
            if (second.indexOf(first[i]) === -1) {
              newArr.push(first[i]);
            }
          }
      }
          count(arr1,arr2);
          count(arr2,arr1);
      return newArr;
    }
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  first, we need to create an array to store the new information, then we need to create the fuction that does the job for us, using the first and second
  as parametersthen we create a for loop that goes to the "first" array, then we create an if statement that sees if the second array has the index of 
  the i and if its equal to -1 (meaning that was not on the other one), if that statement is true, then push the i 
  then we need to initialise the function containing the arr1 and arr2 as first and the other (arr2,arr1) as the second, to make the difference to each one

in this exercise
    function destroyer(arr) {
      let deleteNumbers = Object.values(arguments).slice(1);

      for (let i = 0; i < arr.length;i++) {
        for (let j = 0; j < deleteNumbers.length; j++) {
          if (arr[i] === deleteNumbers[j]){
            delete arr[i];
          }
        }
      }
      return arr.filter(item => item != null);
    }

    destroyer([1, 2, 3, 1, 2, 3], 2, 3);
   we have to see if an number in an array corresponds to  an argument, if it does, delete that number from the array
    we dont need to create a new array to store the new numbers in this exercise so we dont need to create the array, but we do need to create something different
    we need to create an arguments variable
      arguments
        arguments is an array like object accessible inside functions that contains the values of the arguments passed to that function 
        so in the exercise the arguments on the array ([1,2,3,1,2,3]2,3) are 2 and 3;
        array like means that arguments has a length property and properties indexed from zero but it doesnt have arrays biult in methods like forEach() or 
        map()
        The Arguments object is a local variable available within all non-arrow fucntions. you can refer to a functions arguments inside that functions arguments 
        inside that functions arguments inside that function by using its arguments object. it has entries for each argument the function was called with, 
        for example if a function is passed 3 arguments, you can access them as follows
          arguments[0] = first argument
          arguments[1] = second argument
          arguments[2] = third argument
    create an array of values to remove using Object.values(arguments).slice(1) and store it in the varable valsToRemove. well use this to check against arr
    then create 1 loop to iterate through arr, and change the integer variable j
    and arr to vals to remove, this second loop is going to iterate through vals to remove
    then if the value of i is equal to the value of j, then delete the value of i

we have to write an algorithm that will take an array for the first argument and return an array with all the objects that matches all the properties 
and values in the object passed as second parameter
  in this exercise we have to use the object.keys method, and with that we can cycle through an object keys 
    first we have to add a variable to it, well use scr (let scr = Object.keys(source))
      then we have to return the function, because since we have to return the array and if the source doesnt match any, we have to return false, if
      it does we have to return true, then we have to filter the array, using the method
        return collection.filter(function(obj) {
        }
      then we have to cycle through the array of object keys, so we use the for loop
      for(let i=0;i<src.length;i++) {

      }
      then we have to return false if it doesnt find anything, well use 2 methods and doing it in the same if statement, well have to join them togheter by an ||
      if (!obj.HasOwnProperty(src[i]) || obj.scr[i] != source[scr[i]]) {
        return false;
      }
      on the first one if the object doesnt have its own property then return false
      on the second one, if the obj key doesnt happen to be the source, then return false
      the final result is

        function passArray(collection,source) {
            let src = Object.keys(source);


          return Collection.filter(function(obj) {
            for(let i=0;i<src.length;i++) {
              if (!obj.hasOwnProperty(scr[i]) || obj[scr[i]] != source[scr[i]]) {
                rerturn false
              }
            }
              return true;
          });
Array.isArray() returns true if an object is in an array 
 
Datacamp 

to see if a number is an int 
  Number.isInteger(numb);

you can use if statements on variable assignments
  let tool = newVar || 'string'
    if newVar is empty, tool contains 'string'

  helper functions you can return value of a function inside another function. these functions are refered to as helper functions 
  fucntion multiplyByNineFifths(number) {
    return number * (9/5);
  }
  function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
  }
  getFahrenheit(15) // returns 59;

 you can use default parameters on functions 
  const function = (fruit = 'apple') => console.log(`hmmmm i love ${fruit}`)
  function() // returns hmmmm i love apple
  
if the property of an object is the same as the variable you want to assign to 
  const {variableName} = object
    its the same as
  const variableName = object.variableName;
if you want to see the keys of an object 
  Object.keys(objname);
if you want to see the entries (everything that the object has (returns an array for each property)) 
  Object.entries(objname);
if you want to assign a property to an object 
  Object.assign({
    item1 : value1,
    item2 : value2
  })
 
 
functions as data 
    you can assign functions as variables for example 
      function checkThatTwoPlusTwoIsFourAMillionTimes () {
        let i =0;
        while(i <= 100000) {
          if (2 + 2 != 4) {
            console.log('Something is not right')
          }
        }
      }
      const 2p2e4 = checkThatTwoPlusTwoIsFourAMillionTimes
  you can also see the properties 
    function.name // returns the original name of the function if you reassigned
    function.length // returns the number of arguments 
    function.apply // calls a function and set its this to the provided this Arg. Arguments can be passes as an array object 
    function.bind // creates a new function which when called has its this set to the provided thisArg. optionally a given sequence of arguments will be prepended to arguments provided the newly bound fucntion is called
functions as parameters 
	if you dont use the () in a func assignment in a function you can use it as an parameter
		const funcName = (func) => {
			console.log(func.name);
		}

javascript Error Types 
     SyntaxError <- this error will happen when someone makes an invalid code, code that cannot be interpreted by the compiler. When the error is thrown, scan your code to make sure
          you properly opened and closed all brackets, braces, and parentheses and that you didnt include any invalid semicolons.
     RefereceError <- this error will happen when you use a variable that does not exists, make sure that the variables are properly declared
     TypeError <- this error will happen if you attempt to perform an operation on a value of the wrong type.
     
classes
     constructor
          constructor is called when you use the new keyword, its creating a new instance of the class
               class Dog {
                    constructor(name) {
                         this.name = name;
                         this.behavor = 0;
                    }
               }
               dog <- name of the class. capitalize and camelCase class names
               constructor <- we invoke the constructor() every time you create a new instance of that class
               this. <- this makes so we can use the new name of the class for example: const obj = new Object;
                                                                                          obj.name;

instance
     you are able to make new classes instances by using the new keyword
          const doggie = new Dog('good dog');

inheritance
     extends <- makes the methods of the main class also works on the subclass
     super <-passes the argument of the subclass to the constructor of the main class;
          if you create something in the main class, youll be able to use it on the sub class;
          however, if you create something in the subclass, it will not be able to be used in the main class

sometimes you want a class that have methods that arent available in individual instances but can call directly from the class
     class Animal {
          constructor(name) {
               this._name = name;
               this._behavior = 0;
          }
          static generateName() {
               const names = ['angelica','robert','camila']
               return names[Math.round(Math.random() * names.length )]
          }
     }
     now you can use the .generateName in the Animal class but if you want to create an instance of it, you wont be able to

