#javascript 
Asyncronous
     normally a given programs code runs straight along, with only one thing happening at once, if a function relies on a result of another
     function, it has to wait for the other function to finish and return, until that happens the entire program is essentially stopped from the perspective of the user
          a good example is this
               while(true) {

               }
               this stops the browser completelly because the browser can only do one thing at a time
an asyncronous operation is one that allows the computer to move on to ther tasks while waiting for the asynchronous operation to complete

what is a promise
     A promise object can be in one of three states
          Pending <- the initial states - the operation has not completed yet
          fulfilled <- the operation has completed successfully and the promise now has a resolved value
          reject <- the operation has failed and the promise has a reason for the failure, this reason is usually an Error of some kind


     constructing a promise objects
          to create a new probise object you use the new keyword 
          the promise constructor method takes a function parameter called the executor function generally starts an asyncronous operation and 
          dictates the how the promise should be settled 
     the executor function has two parameters, usually defined by the resolve and reject
     resolve <- will change the promises resolved value will be set to the argument passed into resolve()
     reject <- takes a reason or error as an argument, will change the promises status from pending to rejected, and
          the promises rejection reason will be set to the argument passed into reject()
     how it works
          const executorFunction = (resolve,reject) => {
               if (someCondition) {
                    resolve('i resolve');
               } else {
                    reject('i rejected')
               }
          }
          const myFirstPromise = new Promise(executorFunction);
               breaking it down
                    declare a variable myFirstPromise
                    then the variable is constructed using new Promise() which is the Promise constructor method
                    executorFunction is passed to the constructor and has two funcitons as parameters: resolve and reject
                    if someCondition is true, we invoke the resolve() with the string 'i resolved'
                    if its false, we invoke the resolve with the string 'i rejected'

consuming promises
     the initial state of an async promise is pending, but we have a guarantee that that will settle, by resolving or rejecting
     when that settles, you use the .then to make so that the program knows what to do after the promise resolves

then () is a higher order function, it takes two callback functions as arguments
     onFulfilled is a success handler and should contain the logic for the promise resolving
     onRejected, is a failure handler and it should contain the logic for the promise rejecing

success and failure callback functions 
     to handle a succesfull promise, you invoke the then
          const prom = new Promise((resolve,reject)=> {
               resolve('yay!');
          })
          const handleSuccess = resolvedValue => {
               console.log(resolvedValue)
          }
          prom.then(handleSuccess) // logs "yay"
               invoking the prom, lets it resolve and then prints the value that it resolves

you can look at promises as a simpler way to return stuff (obv this is a wayy more simplified but im talking just about the reject/resolve arguments)
     const prom = new Promise((resolve,reject)=> {
          if (num < 5) {
               resolve('yes')
          } else {
               reject('oh no');
          }
     })
          const handleSuccess = (value) => {
               console.log(value)
          }
          const handleFailure = value => {
               console.log(value);
          }
          prom.then(handleSuccess,handleFailure)
     with the resolve of the prom, it assigns a function for if the promise returned false or true basically its like this
          const prom = value => { if (value > 4) { return true} else {return false}};
          if (prom(value)) {
               functionName();
          } else {
               functionName2();
          }
     this is basically the same thing, however the promises are much more cleaner and you can do much more things easier with async and await

using catch with promises
     you can use a .then after the previous .then to see if the function got it right or wrong, however on most cases, youre going to just use it as if it was wrong
          thats where catch enters, it only has one parameter onFailure, you can use the then just in a case for success and a .catch for the failure case
               functionName(functionArgument).then(handleSuccess).catch(handleFailure);
chaining multiple promises    
     in order for the chain to work properly, you need to return the value
          const prom = new Promise((resolve,reject) => {
               if (prom) {
                    resolve(3)
               } else {
                    reject(2)
               }
          })
               prom.then(returnValue => {
                    return secondVal(returnValue
                    )})
                    .then(returnValue =>
                     {return thirdValue(returnValue)
                     });

promise.all()
     what if were dealing with multiple promises, but we dont care about the order?
     promise.all()
          if every promise in the array resolves, the single promise returned from promise.all() will resolve with an array containing the resolve value from each promise in the return array
          if any promise in the array rejects, the single promise returned from promise.all() will immediatelly reject with the reason that promise rejected. this behaviour is called failing fast

     let myPromises = Promise.all([prom1(),prom2(),prom3()])
     myPromises.then(value => {console.log(value)})
               .catch(value => {console.log(value)})

the async keyword
     is used to write functions that handle asynchronous actions,
     async functions always returns a promise, that means that we can use normal promises syntax
     if theres nothing returning from an async function, it will return undefined
     if theres a non promise value returned from the function, it will return a promise resolved to that value
     if a promise is returned from the function, it will return that promise

the await operator
     the await keyword is an operator, returns the resolved value of a promise. since promises resolve in an indeterminate amount of time, await halts or pauses
     the execution of the async function until a given promise is resolved

handling operators 
     with async await, we use try catch 

Await Promise.all()
     same thing as before, will return a single promise, this only resolves if every other promises resolves



to transform an json file to a javascript object, use JSON.parse(file);
to transform an javascript object to a json file JSON.stringify();

http requests
     GET <- getting information from some source (usually a website);
     POST <- posting information to a source that will process the information and send it back 
     
xhr requests
     async javascript xml (ajax) enablex requests to be made after initial page load, ajax was used only for xml formatted data
     boilerplate from a get request
          const xhr = new XMLHttpRequest();
          const url = 'https://api-to-call.com/endpoint';
          xhr.responseType = 'json';
          xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              return xhr.response
                 }
               }
               xhr.open('GET',url);
               xhr.send()
     boilerplate from a post request
          const xhr = new XMLHttpRequest()
          const url = 'https://api-to-call.com/endpoint'
          const data = JSON.stringify({id: '200'});
          xhr.responseType = 'json';
          xhr.onreadystatechange = () => {
                 if (xhr.readyState === XMLHttpRequest.DONE) {
                   return xhr.response
            }
          }
          xhr.open("POST",url);
          xhr.send(data)
     
requests with es6
     a request returns a promise

the fetch function
     creates a request object that contains relevant information that an apin key needs
     sends that request object to the api endpoint provided
     returns a promise that ultimately resolves to a response object, wich contains the status of the promise with information the api sent back

         fetch(url).then(response => {
              if (response.ok) {
                   return response.json()
              }
              throw new Error('Request failed');
         },networkError => {
              console.log(networkError.message)
         }).then(jsonResponse => {
              return jsonResponse
         })
         1 - we fetch all the api things on the fetch stuff
         2 - if the fetch is succesfull we return the response in json, if the fetch is not succesfull we throw the error
         3 - if the fetch is denied, we console the message
         4 - then when the fetch is succesfull we return the response
     the post function 
          fetch(url,{method: "POST", headers: {
               "content-type": 'application/json',
               'apikey': apiKey,

          }, body: data,
          }).then(response => {
               if (response.ok) {
                    return response.json()
               }
               throw new Error('connection failed!');
          }, networkError => {
               console.log(networkError.message);
          })
async function boilerplate
     const functionName = async () => {
          try {
          const response = await fetch(url);
          if (response.ok) {
               const jsonResponse = await response.json()
               return jsonResponse
          }
          throw new Error('request failed');
     }} catch(error) {
          console.log(error.message);
     }
     