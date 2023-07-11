#error
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
          