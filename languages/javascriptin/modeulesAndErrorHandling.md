#javascript 
modules 

javascript runtime enviroments
     what is a runtime enviroment
          wher a program will be executed, it determines what global obnject your program can access and it can also impact how it runs

how to run code in node
     go to the file through terminal 
          node file.js


what are modules
     modules are reusable pieces of code.

module.exports
     to share a module 
          module.exports.thing
          and using the require(), you can import those things
     require()
          accepts a string as an argument, is the file path that you want to import that module from 
               const variableName = require('./filename.js')
               variableName.function
     when you use require(), the entire module.exports is returned and store in the variable, meaning that even if you dont use the other functions, they will be there,
     this is good if you dont know yet if you will or wont use the functions, but bad if you want to keep the code light 

using object destructuring to be more selective with require()
     const { functionNeeded } = require('./filename.js')

importing modules in html
     <script type='module' src='./filename.js'></script>

changing named export
     import {functionName as func } from './filename.js'

if you just want the default function
     import {default as defaultFunc} from './filename.js'

the default export is an object, the values inside cannot be extracted until after the object is imported like so
     import resources from './filename.js'
     const { valueA , valueB } = resources

if you want to default export as an object
     export default {
          function1, function2
     }
     but they have to be imported like so
          import functions from './filename.js'
          const {valueA, valueB} = functions;

---------------------------------------------------------------------Error Handling---------------------------------------------------------------------

what if we need an error message that isnt covered by the biult-in errors?
     console.log(Error('your password is too weak));
          the Error() takes a string which becomes the value of the message, you can see errors created with the new keyword, they lead to the same result;
               console.log(new Error('your password is too weak'))

     doing that type of error the code will still run, but it will console.log an error

throw an error
     this type of error causes the program to stop
          throw Error('errorMessage');
               this stops the code on its track

try catch
     thrown errors have caused our program to stop running. but, we have the ability to anticipate and HANDLE these errors by writing code to address the error and allow the program to continue
     in javascript its used the try catch method
          try {
               throw Error('this error will get caught')
          } catch(e) {
               console.log(e);
          }
          //prints this error wil get caught
          console.log('programMessage')
          //prints programMessage;
          