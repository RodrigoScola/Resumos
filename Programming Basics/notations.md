#javascript #programming_basics 
parseInt()
    convert a number to an integer
.length();
    gets you the length
objects
    obj.key();
    .newprop()
    to add an property
        delete 
            use delete propName
    .hasOwnProperty(propName);
        to see if a property exists or not
    .freeze();
        then you cant add or subtract anything
    this.
        instead of using the objects name, use this.
    obj = new objName(name,color)
        this.name = name
        this.color = color
        this.num

arrays
    arr.splice()
        replace data in a directory
            .splice(thing, replacement)
    arr.push();
        adds an element last on a list
    arr.shift();
        adds an element first on a list
    arr.pop();
        removes the last element of the array
    arr.unshift();
        removes the first element of the array
    arr.slice()
        you can get data fomr an array?
    .toLowerCase()
        puts everything in lowercase
    .toUppercase()
        puts everything in uppercase
    .filter()
        filters an array to just what you want
    .forEach()
        does something to each item on the array
    .map()
        takes an item of an array, does something and puts it on the same spot
    .reduce()
        takes an array and do something and pass the result on the next iteration
            const sum = [1,2,3].reduce(function(result,item)) {
                return result + item;
    .sum()
        something in the array is true
    .every()
        everything in an array is true
    .find()
        check every item on the array and checks if it has the correct id
             const objects = [{id:"a"}, {id:"b"},{id:"c"}];
             const found = objects.find function(item) {
                return item.id === "b";
                }      // returns true
    .findIndex()
        .findIndex() = checks every item on the array and checks if it has the correct id 
        const objects = [{id:"a"}, {id:"b"},{id:"c"}];
        const foundIndex = objects.findIndex(function(item)) {
        return item.id === "b";
        }      // returns 1
    .sort(function(a,b) {
        return a - b;
    }


Math
    .random()
        for a random number
    .pow()
        for a number powered a number of Times
            math.pow(3,2);

regex 
    .replace()
        replace a string
    .match()
        search for something that is specified
    .test()
        search for something & returns true or false
    | 
     or    
    i
        non case sensitive
    g
        global
    [] 
        anything in there
        [minletter-maxletter]
        [minnumber-maxnumber]
    +    
        only display the first thing that it catches
            /a+/ = abc; will return a 
    ? 
        the closest match
    $
        the last character 
    \w 
        anything in [a-zA-Z0-9]
    \d
        only numbers    
    {}
        range of numbers
            minimum
                {1,}
    ?=
        looking for patterns
    !?
        dont want patterns
    ()
        group of characters
    
variables
    typeOf()
        returns the type of a variable
    indexOf()
        returns the index of a variable
    Boolean(collection[i]) returns true or false 






