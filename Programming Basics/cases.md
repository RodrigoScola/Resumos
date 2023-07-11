#programming_basics 

Cases are things that whenever the affirmation that is between parenthesis () is true, the code will run. Some of the keywords are:
- if ()
- else if()
- else()
- switch
## Switch
it is like an if statement, however instead of having multiple else ifs, that can be cumbersome, you can have an `case`
```js
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
```
  you can have the same answers with the same input:
  ```js
    case 4:
    case 5:
    case 8:
      result = input 2;
      break;
```

## Shortened if statements

if you know that the input will always be the same, you can return without doing any if statements
```js
     funciton isless(a,b) {
        return a< b;
  }
```
  if you are to lazy to write if statements, you can use conditional statements if one is true or false
```js
return a > b ? "a is greater" : "b is greater";
```
to do else ifs 
```js
    return (a === b) ? "a is equal to b"
      (else if) : (a > b) ? "a is greater than b"
      : "b is greater";
```
# promise
  When the task completes you fufill your promise or fail to do so. promise is a constructor, so you need to use the new keyword
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









  