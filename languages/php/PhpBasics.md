#php 
to run code in the terminal 
     php path.php
how is php used in html 
     its used to build dynamic web pages 
          each visitor gets a customized page that can look different than how the site looks to another visitor 
     the start of in-line php is denoted wit <?php and the end is ?>
     the echo keyword is used to output text, the text in this case is everything between the double quotes
          <?php echo "<h1>this is an html header text"; ?>
how is php code executed 
     its flexible and can also be executed from the terminal. you can use as a general purpose programming language to write programs that give simple intructions to the computer without involving html or the web 
     when writing a php script file, you still need to denote that we are beginning the php code using <?php but the closing tag is no longer required, its typically left out by convention 
               {
                    <?php echo "Hello world"; //this will run normally 
                    <?php 
                         echo "hello world"; //this will also run 
               }
escape sequences 
     this string will not work because of escape sequences
          "She said "hi"to the dog."
     to use that you need to 
          "She said \"hi\" to the dog."
you can print multiple lines on the same <?php 
     <?php echo "line 1";
          echo "line 2";
to set another thing to another line you \n
     {
          <?php echo "this is one thing that i need to do";
               echo "\n this is another thing that i need to do :)";
     }
string concat  
     to add 2 or more strings togheter 
          echo "one " . "two ";

declaring variables 
     $varname = value;
using them 
     echo $varname;
you can also use them in sentences 
     "My name is $name";
if you want to use variables but add something else in there 
     "hello my name is $name and i love ${verb}ing " // will print hi my name is rodrgigo scola and i love playing 
string variable concat   
     instad of adding stuff to variables using 
          $varname = $varname . "thing that you want to add";
     you can use 
          $varname .= "thing that you want to add";
alias
     you can create an alias, instead of a copy of the originals variable value, you can create a new name which points to the same spot in memory 
          $firstvar = "firstOne";
          $secondvar =& $firstvar;
          $firstvar = "notFirstOne";
          echo $secondvar; //prints notFirstOne;
numbers 
     addition and subtraction 
          you can echo and calculate 
     same with variables 
          $varname = $onevar + $twovar;
exponentiation
     if you want to exponentiate a number
          echo 10 ** 2;
     
defining 
     funciton funcnaem() {}
params 
     function funcnaem($params) {}
function addXpermanently (&$param) {
     $param = $param . "X";
} // this transforms the variable value 
if you want to have a global variable you can assign the global key 
     $feed_quantity = 200;
     function calculateDays () {
          global $feed_quantity;
          return $feed_quantity += 2;
     }
built in functions 
     get variable type 
          gettype() takes a variable as an argument and returns a string value representing the data type of the argument
string functions
     var_dump() takes a variable argument. it prints details about the argument it receives 
          var_dump($name) // prints : string(15) "aisle nevertell"
     streev() takes a string and reverse it 
     strtolower() takes a string and makes the characters lowercase 
     str_repeat() takes a string and an int and repeats the int amount of times 
     sbstr_count() prints how many times one word was used
number functions 
     abs() takes a number and return the absolute value (the positive version)
     round() rounds the float to an integer 
generating random numbers 
     rand() returns a random integer, if no params then will return num between 0 and the current env max
     getrandmax() gets the max random int on rand();
     
create array 
     $newArray = array(element1,element2,element3);
     $array = [1,2,3];
getting the length
     count($newArray);
counting the length of an string 
     strlen(string)
printing arrays     
     if you use the echo, it will print the type 
to actually print the array 
     print_r($number_array); will print in the format 
          {
               Array 
               (
                    [0] => 0;
                    [1] => 1;
                    [2] => "value";
               )
          }
to print in a normal way
     echo implode(", ", $array);
push and pop 
     to push an element to an array 
          array_push(array,elements);
     to pop an element to an array 
          array_pop(array);
shift and unshift 
     
objects 
     defining an object 
          $objname = [
               "thing1" => "value1"
          ];
prining one 
     echo implode(" , ",$objname);
     print_r($objname);
add something 
     panda["thing"] = "value";
remove something   
     unset(objname[objthing]);
joining arrays 
     $new_array = $array1 + $array2;

conditionals :)
conventional conditionals
     if (something) {
          return true;
     }
turnary statements 
     return $age <= 12 ? true : false;
else if 
     if (something) {
          return true;
     }
     elseif (something_else) {
          return false;
     }
     return null;

readline()
     prompts the user to type a string 

xor 
     exclusive or 
          takes two different boolean values or expressions and returns a single boolean value 
          evalues to true if they dont match
               true xor true // returns false
               false xor true //returns true
               true xor false // returns true 
               false xor false // returns false  

multi-file programs 
     you can use the include , it will bring the code from a file into the current file and run the code 
          //one.php 
          echo "how "
          //two.php
          echo "are "
          //index.php
          echo "you" // will print how are you;
foreach loop 
     if you just want the value 
          foreach(arrayname as value);
     if you want the key aswell
          foreach(arrayname as $key => $value);
     
break 
     can be used to terminate any of the loop types early 
continue 
     skips the current cicle and continues to the next 

classes 
     defining  
          class Pet {

          }
     within the curly brackets, we can add props which define the data each obj of the class will contain 
          class Pet {
               public $name, $color;
          }
     creating a new instance 
          varname = new Pet();
     adding values 
          varname-> props = 'propname'
     methods 
          class Pet {
               public $first, $last;
               function newFunction() {
                    return this->first . ' ' . this->last;
               }
          }
          echo $newPet->newFunction();
     constructor 
          class pet {
               public $deserves_love;
               function __construct($things) {
                    $this->name = $things;
               }
          }
     inheritance 
          class ChildClass extends ParentClass {
               function __construct() {
                    $this->name = "beverly";
               }
          }
overloading methods 
     sometimes you want to change how methods behave for subclasses from the original parent definition, this is called overloading a method. to do this, define a new method within the subclass with the same name as the parent method 
          for example in the pet you might have a type method 
               class Pet {
                    function type() {
                         return 'pet';
                    }
               }
               but in the dog you want to update the message
               class Dog extends Pet {
                    function WhatIsThis() {
                         return 'dog';
                    }
               }
               you can call the parents definition of the method within the subclass using parent:: followed by the method name 
                    funciton classify() {
                         echo "this " . parent::type() . ' is of type ' . this->type();
                    };
               