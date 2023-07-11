#programming_basics 

for it to have gravity, you use rigid bodies & collision boxes
remember to set ground too.

Destroy(gameObject) = destroy object

target is null if in an action somehting doesnt happen to it

to create an object, you create a variable + {}
  let dog = {
    name: 'buddy'
    numLegs: 2
  };
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




