#express
# Express Middleware

### DRY 
**D**ont 
**R**epeat
**Y**ourself

## DRYing with app.use()

if you create a function and call it all over the app, it wouldnt be better than not making it a function at all
how do you get code to run everytime on an expressRoute? you use `middleware`
> *Middleware* is a function that can perform logic on the request and response obj, sending the response back to the user
   
```js
app.use((req,res,next) => {
     console.log('message received');
})
```
## next();

is what you might think it is, it makes the function go forward
like a switch statement, if you want to keep going, you dont use a break or return 

express routes also have the option of sending a response body and status code and closing the connection.

### Route-Level app.use() - single path
    
     app.use function signature 
          app.use([path,] callback[,callback])
     in the documentation for many programming language, optional arguments for functions are placed in [], meaning that we can write middleware that will run for every request at a specific path
          app.use('/path',(req,res,next) => {
               console.log('app is listening with ${porst}');
               next()
          });

Route-level app.use - multiple paths
     path - the path for which the middleware function is invoked, can be any of 
          a string representing a path 
          a path pattern
          regular expression pattern to match paths
          an array of combinations of any of the above
     you can add more than one paths if you make it an array
          app.use(['/path1','/path2/:id'],(req,res,next) => {

          });
middleware stacks
     express is just a middleware with a specific signature, but they can be functions already created
          const expressMiddleware = (req,res,next) => {
               console.log(req.body);
          }
          app.use(expressMiddleware);
     that makes it able that we can have multiple functions per app.getData

open source middleware: logging
     instead of logging stuff on the console and adding a bunch of console.log, you can use morgan and use morgan('tiny');

open-source middleware: body parsing 
     makes so that will only look at json requests
          const bodyParser = require('body-parser');
          app.use(bodyParser.json());
Error handling middleware
     when an error is thrown somewhere in the code, we want to be able to communicate that there was a problem to the user.
     error handling middleware needs to be the last app.use in the file, because if an error happens, it will stop the whole process
     the basic error handler 
          app.use((err,req,res,next) => {
               console.error(err.stack);
               res.status(500).send('Something Broke');
          });
     if we anticipate an operation might fail, we can invoke the error-handling middleware. you do it by passing an error obj as an argument to next();
     when called with an error will call any applicable error-handling software
          app.use((req,res,next) => {
               const newValue = problematicFunction();
               if (newValue == undefined) {
                    let undefinedError = new Error('newValue is not defined');
                    undefinedError.status = 400;
                    return next(undefinedError);
               }
               next()
          });
          app.use((err,req,res,next) => {
               const status = err.status || 500;
               res.status(status).send(err.message);
          })