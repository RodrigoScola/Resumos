#backEnd #javascript 
# Node JS

### The core of the javascript libraries 

*read state eveal stateprint state*

> when you install node, it comes with a biult in javascript repl
 
> You can access the repl by typing the command node into the terminal and hitting `enter`
by default you send the input is ready for eval when you hit `enter`, if you want to type multiple lines you can type `.editor` and when you want to send the command you cntrl+d 
each session of the repl. each session of the repl has a single shared memory, you can access any variables or functions you define until you exit the repl 

### Accessing the process object

node has a `Global process object` with useful methods and information about the current process
the `process.env` property is an object which stores and controls information about the enviroment which the process is currently running. 

### So basically what i understood is like,

You can make a .env file that you can access information that will be ignored by the github or something like that, but it you can access by
          
     process.env.variableName;

if you can see the memoryUsage, you can use 

     process.memoryUsage()

the `process.argv` holds an array of command line values provided when the current process was initiated. the first element in the array is the absolute path to node
if you want to use the command line to access variables for example
```javascript
// if you initialize the program with 
node file.js commandName 
//  you can grab the commandName from the command line and run that by doing:
process.arv[2];
```
## event driven architecture
In traditional imperative programming, we give the computer a series of instructions to execute in a pre-defined order. in contrast when we write web applications, we often 
- need to write logic to handle situations without knowing when theyll occur.
Node provides an EventEmitter class which we can access by requiring events in the file
```javascript 
const event = require('events');
let myEmmiter = new event.EventEmitter();
```
- each event emmiter instance has an .on() which assigns a listener callback function to a named event and a callback function
- each event instance also has an `.emit()` which announces a named event has occured the `.emit()` takes as its first argument the name of the event as a string and a callback function

> You first create a new emmiter by the `new events.EventEmmiter()`;

>then you add an on to make that if the first string on an emit event matches the one on an on event, then the parameter on the function on the second argument will be the string on the emit argument

### user input/output
you can accept input by using 
```javascript
process.stdin.on('data', userInput => {
     let input = userInput.toString()
     console.log(input);
})
```

## fileSystem

all of the data on a computer is organized and accessed through a `filesystem`. when running javascript code on a browser its important for a script to have only limited access to a users filesystem. this technique of isolating some applications from other is known as `sandboxing`. In the backend the restriction with the filesystem is essential. 
each method available through the fs module has a synchronous and an async version. one method available is the readFile 
```js
//required fs in the module
const fs = require('fs');
let readDataCallback = (err,data) => {
     // define an error first callback function which expects an error to be passed as the first argument and data as the second. 
     // if the error is present, the function will print `Something went wrong: ${err.message}`
     if (err) {
          console.log(`Something went wrong: ${err.message}`);
     } else {
          // otherwise we print the data
          console.log(`Provided file contained: ${data}`);
     }
}
// then we invoked the readFile method with 3 arguments
//      the string that is the path to the file the character encoding ( usually utf-8 for text files );
//      when the function is done the function that was inputed in the 3rd argument will run
fs.readFile('./path.txt','utf-8',readDataCallback);               
```
## readable streams 
streaming data is often preferable since you dont need enought ram to process all the data at once or you need to have all the data on hand to begin processing it
One of the simplest uses of streams is reading and writing to files line-by-line. to read them we can use the `.createInterface()` from the readline core module. `createInterface()` returns an `eventEmitter` set up to emit line events 

```js 
// require readline and fs core modules
const readline = require('readline');
const fs = require('fs');

// assing myInterface from the value returned from readline.createInterface() with an object containing our designated input
const myInterface = readline.createInterface({
     // set the input to fs.createReadStream('text.txt') which will create a srteam from the text.txt file
     input: fs.createReadStream('text.txt')
})

// next we assign a listener callback to execute when line events are emmited. a line event will be emmited after each line from the file is read
myInterface.on('line', fileLine => {
     // the listener callback will log to the console the line read
     console.log(`the line read: ${fileLine}`);
})               
```
## writable streams
to write in a document you first need to create a stream, and then using the .write on it

```js               
const fs = require('fs');
const fileStream = fs.createWriteStream('filepath');

// we used the fs.createWriteStream to create a writing thing then we used the .write to write stuff to it line by line
fileStream.write('something that you want to write');
// then when we dont have any more data to put in, we use the .end notation 
fileStream.end();
```

## create an http server
the `http.createServer()` returns an instance of an `http.server` an http server has a method `.listen()` which causes the server to listen for incoming connections. when we run `http.createServer()` we pass in a custom callback fucntion (`requestListener`). this callback fucntion will be triggered once the server is listening and a request is received
#### requestListener
* expects two arguments a request obj and a response obj

* each time a request to the server is made, node will invoke the provided requestListener function, passing the request and response obj of the incoming request 

* request and response come with a number of props and methods of their own and within the requestListener function we can access infromation about the request via the request object passed in;

```js               
// first we required the http core module
const http = require('http')
// then we created the server with the value of http.createServer and a port number as a parameter;
let requestListener = (req,res) => {
     // within the requestListener we make changes to the response obj, res, so that it can send the appropriate information to the client sending the request, the status code of 200 means that no errors were encountered
     res.writeHead(200, {'Content-type': 'text/plain',})
     res.write('Hello World!\n');
     res.end();
}
const server = http.createServer(requestListener);
server.listen(3000);
```
if you want to create a more complicated request where you write html instead of writing a sentence
```javascript
     const http = require('http');
     const fs = require('fs');  

     const requestListener = (req,res) => {
          fs.readFile('./filePath','utf-8',(err,data) => {
               if (err) {
                    res.writeHead(errorCode, {"Content-type":'text/plain'});
                    res.write(err.message) 
                    res.end();
               } else {
                    res.writeHead(200, { "Content-type": 'text/html' })
                    res.write(data);
                    res.end();
               }
          }) 
     }
     const server = http.createServer(requestListener);
     server.listen(portNum)
```


### Routing in nodeJS

```js
  const http = require('http');
          const fs = require('fs');
          
          const readFile = (path) => {
               fs.readFile(path,'utf-8',(err, data) => {
                    if (err) {
                         return err
                    } else {
                         return data
                    }
               })
          }

          const makeServer = (req,res) => {
               let path = url.parse(request.url).pathname;
               switch(path) {
                    case '/':
                         res.writeHead(200, { 'Content-type': 'text/html'});
                         res.write(readFile('./mainPage'))
                         res.end()
                         break;
                    case '/about':
                         res.writeHead(200,{ 'Content-type': 'text/html'})
                         res.write(readFile('./about'));
                         res.end()
                         break
                    default: 
                         res.writeHead(200, { 'Content-type': 'text/html'})
                         res.write('./errorPage');
                         res.end()
               }
          }
     
```

the `.parse` takes a url as argument and breaks into protocol, host, path and queryString
https://www.website.com/about?name=Victor

> https:// = protocol

> www.website.com = host

> about? = path

> name=Victor = queryString

learnyounode is a node package that contains a series of workshop lessons which will teach you the basics of writing node applications
     https://github.com/workshopper/learnyounode

the express application generates an express application "skeleton" 

     npm install express-generator -g 
to create an express app with the default settings

     express helloworld
     