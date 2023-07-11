#javascript 
lodash is a popular js library 
     .clamp() 
          takes three arguments, number , lower bound, upper bound.
          modifies the number to be within the two provided bounds
                https://content.codecademy.com/programs/programming-with-javascript/lodash-assets/clamp.svg
     .inRange() 
          takes three values number, start value, end value.
          if (number < startValue || number > endValue) {
               return false
          }
          if (number > startValue && number < endValue) {
               return true
          }
     .words()
          takes a string and returns an array of the words that you inputted
     .pad() 
          takes two parameters a string and length;
          adds spaces evenly to both sides to make it reach the desired length
          extra padding is added to the end of the string if an odd amount of padding is requeired to reach the specified length
     .has() 
          takes two objects an obj and a key
          checks if the obj has the key
          returns true if the obj has the key
          returns false if the obj doesnt have the key
     .invert() 
          takes one parameter, an object
          iterates through each key / value pair in the provided object and swaps the key and value
     .findKey() 
          takes two arguments, an object and a predicate function (a function that returns a bool value)
          iterates through each key, value pair in the 
          returns the first key that has a value that returns a truthy value from the preducate function
          retuns undefined if no values return truthy values from the predicate function


Arrays          
     .chunk() 
          takes two arguments, an array and a size 
          breaks up the supplied array into arrays of the specified size
          returns an array containing all of the previously-created array chunks in the order of the array
          if the array cant be broken up evenly, the last chunk will be smaller thank the specified size
          if no size is supplied to the method, the size is set to 1     
     .drop()
          takes two arguments, array and a number of items to drop in the beginning of the array
          returns a new array whick contains the elements from the original array, excluding the specified number of elements from the beginning of the array
     .dropWhile()
          takes two arguments,an array and a predicate function 
          the supplied function takes three arguments, the curr element, the curr element ind, the array
          creates a new copu of the supplied array, dropping elements from the beginning of the array until an element causes the function to return false
