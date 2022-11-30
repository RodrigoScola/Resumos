# Express

## what is express?

Express is the most popular node web framework and is the underlying library for servers.
write handlers for requests with different http verbs at different url paths ( `routes` );
integrate with view rendering engines in order to generate responses by inserting data into templates
set common web application settings like the port to use for connectiong and the location of templates that are used for rendering the response
add additional request for processing middleware at any point within the request handling pipeline

### importing and creating modules
  
```js
const express = require('express')
const app = express();
// to export a module you need to expose them as additional props on the exports object
module.exports = {
     area: function(width) {
          return width * width
     },
     perimeter: function (width) {
          return width * 4
     };
}
```

### creating route handlers
     in the base express example, we defined a route handler function for http requests to the root ('/');
```js
     app.get('/', (req, res) => {
          res.send('helo world');
     });
```
> that only sends a response to return the string Hello world, if you want to send a json file you can use res.json, or if you want to send a file, res.sendFile()
---
The express application also provides methods to define route handlers for all the http verbs 
 
* `checkout()`
* `copy()`
* `delete()`
* `get()`
* `head()`
* `lock()`
* `merge()...`

theres a special routing method, `.all()` which will be called in response to any http method. this is used for loading middleware functions at a particular path for all request methods

the following example shows a handler that will be executed for requests to /secret 

```js   
app.all('/secret', ( req,res, next) => {
     console.log('Accessing the secret section')
     next()
});
```

## routing with express 
routes allow you to match particular patterns of characters in a url and extract some values from the url and pass them as parameters to the route handler
```js
const express = require('express'),
          server = express();

server.set('port',process.env.port || 3000);

server.get('/',(req,res) => {
     res.send('homepage')
})
server.get('/about',(req,res)=> {
     res.send('aboutPage');
})
// error handling
server.use((req,res) => {
     res.type('text/plain');
     res.status(505);
     res.send('errorPage')
})
// binding to a port
server.listen(3000, () => {
     console.log(`express server started at port 3000`)
})
```
> to use the router in the main app we would require the module then call use on the express application to add the router to the middleware handling path


```js
const wiki = require('./wiki.js');
// ...
app.use('/wiki',wiki);
```

### saving static files 

You can use the `express.static` to serve static files, including images, *css* and *jsvascript*, to serve images:

You can call static() multiple times to serve multiple directories, if a file cannot be found by one middleware funciton then it will be passed on to the subsequent middleware
```js
app.use(express.static('public'));
// any files in the public directory are served by adding their filename (relative to the base public directory) to the base url. so for example 
app.use(express.static('public'))
app.use(express.static('media'))
// you can also create a virtual prefix for static urls rather than having the files added to the base url.
// specifying a mount path sso that the files are loaded with the prefix '/media'
app.use('/media',express.static('public'));
// now you can load the files that are in the public directory from the /media path prefix
```
### handling errors

errors are handled by one or more special middleware functions that have four arguments instead of  the usual three
```js
app.use((err,req,res,next) => {
     console.error(err.stack);
     res.status(500).send(`Something Br0ke`);
});
```
these can return any content required but must be called after all other app.use() and routes calls so that they are the last middleware in the request handling process
     
## CODECADEMY PART 

### starting a server

first you require and then you create an instance then you use the .linsten notation with 2 arguments, a port and a function

```js
const express = require('express');
const server = express();
server.listen(4000, () => {
     console.log(`Server is listening on port 4000`);
});
```

### writing my first route

once the server is listening, it can respond to any and all requests. but to tell the server how to deal with any given request we register a series of routes. they define the control flow for requests based on the paths and http verb

Express uses app.get to register routes to match get requests. usually take two arguments, a path and a callback function to handle the request and send a response
```js
app.get('/path',(req,res,next) => {});
```

### sending a response
     
http follows a one request-one response cycle. each client expects exactly one response per request and each server should only send a single response back to the client per request.
express servers send responses using the `.send()` on the response object
```js
app.get('/path',(req,res,next) => {
     res.send(array);
})
```
> if you want to send an json you can use .json()
     
### matching route paths

express tries to match requests by route, meaning that if you send a request to `<server address>:<port number>/api-endpoint`, the server will search through any registered routes in order to match the /api-endpoint

Express searches throught routes in the order that they are registered in your code. the first one that is matched will be used and its callback will be called

## parameters
     
routes become much more powerful when they can be used dynamically. express servers provide this functionality with named route parameters.
parameters are route path segments that begin with : in their express route definitions, they act as wildcards, amtching any text at that path segment, for example path/:id will match path/1 and path/24
express parses any parameters, extracts their actual values and attaches them as an object to the request object, req.params this objects keys are any parameter names in the route, each keys value is the actual value of that field per request 
```js
const monsters = {
     hydra: { height: 3 , age: 4},
     dragon: {height: 200, age: 300},
}
app.get('monsters/:name',(req,res,next) => {
     console.log(req.params) // { name: 'hydra'}
     res.send(monsters[req.params.name]);
})
```
in this code snippet a `.get()` is defined to match `monster/:name` path. when a get request arrives for */monsters/hydra* the callback is called, inside the callback `req.params` is an obj with the key name and the value hydra

### getting status codes
     
express allows us to set the status code on responses before they are sent, they provide information to clients about how their requests were handled. 

the res obj has a .status method to allow us to set the status code and other methods like .send can be chained from it
```js
const monsterStoreInventory = { fenrirs: 2, banshees: 3, jerseyDevils: 1};

app.get('/monsters/:name',(req,res,next) => {
     const monster = monsterStoreInventory[req.params.name];
     if (monster) {
          res.send(monster);
     } else {
          res.status(404).send(`Monster not found`);
     }
})
```
> in this example weve implemented a route to retrieve inventory levels. if the monster is not found or if its empty, it sends a status of 404 and the string 'monster not found';

### matching longer paths 
     parameters are really hlpful in maing server routes dynamic and able to respond to different inputs. in order for a req to match a route path, it must match the entire path

### other http methods 
     if you want to use get, put,post, delete, just use it after the app
          app.get, app.put, app.delete,app.post;
     
### using queries
     when the object becomes way too big, you might want to use queries to find the exact thing that you want to find
     queries are indicated by the ? character 
          in /monsters/1?name=chimera&age=1 the query string is name=chimera&age=1 and the path is /monsters/1/
     query strings do not count as part of the route path. instead the express server parses them into javascript obj and attaches it to the request body as the value of req.query the key: value

### matching by http verb
     express matches routes using both path and http method verb. 
     if the fetch has a method of put, then the method get wont work

### creating an expression
     post is the http method verb used for creating new resources.
     to create a new entry a client would make a post request to /path. but the client does not know the id of the entry until its created and sent back by the server, therefore post doesnt make sense because the client couldnt know the unique id beforehand
     express uses .post as its method for post requests and the status code is 201 created.

### express Router
     provides a subset of express methods. to create an instance of one, we invoke the .Router() on the top level express importing
     to use a router we mount it at a certain path using app.use() and pass in the router as the second argument. this router will now be used for all paths that begin with that segment.

```js 
const express = require('express')
const app = express();
const monsters = {
     '1': {
          name: 'godzilla',
          age: 20302103
     },
     '2': {
          name: 'manticore',
          age: 2,
     }
}
const monstersRouter = express.Router();
app.use('/monsters',monstersRouter);

monstersRouter.get('/:id', (req,res,next) => {
     const monster = monsters[req.params.id];
     if (monster) {
          res.status(200).send(monster);
     } else {
          res.status(404).send();
     }
})          
```
> inside the router, all the matching routes are assumed to have /monsters before it.

## Route paths 

to match the exact path

```js 
app.get('/about',(req,res) => {res.send('about')});
```
##### match with string patterns

* will match strings that matches with any combination after the ?
```js
app.get('/ab?cd',(req,res) => {res.send('ab?cd')});
```
* will match strings that have any quantities of the letter before the +
```js
app.get('/ab+cd',(req,res) => {res.sed('ab+cd')}) // will match abcd abbcd abbbcd and so on;
```
* will match every string if it contains the prefix and the suffix
```js
app.get('/ab*cd',(req,res) => {res.send('abcd')}) // will match abRandOmcd 
```
* will match every string that has the input on it
  
```js
app.get('/a/',(req,res) => {res.send('armaggedon')}) // will match any string that has an a in it;
```
* will match if the last thing in the route has the input on it
```js
app.get('/.*fly$/,(req,res) => {res.send('dragonfly')});
```

## Route parameters
to define parameters you add a : after the /
```js
app.get('/users/:id');
```
since the hyphen - and the dot . are interpred ilterally they can be used along with the route params 

     path : /flights/:from-to
     req Url: http://localhost:3000/flights/LAX-SFO
     req.params: { 'from':'LAX', "to": "SFO"};

to have more control over the exact string that can be matched by a route param, you can append a regex in parentheses

     path: /user/:userID(\d+);
     url: http://localhost:3000/user/42
     req.params { "userID":'42'};

## route handlers 

you can provide multiple callback functions that behave like middleware to handle a request. you can use this to impose pre conditions on a route, then pass control to subsequent routes if theres no reason to proceed with the current route.
```js
app.get('/example/a',(req,res) => {res.send('hello from a!)});
//more than one callback function can handle a route ( make sure you use the next());
     app.get('/example/b',(req,res) => {
          console.log('the response will be on the next function);
     } next() 
     }, (req,res) => {
          res.send('hello from b');
     })
// an array of callback functions can handle a route
     const funcA = (req,res) => {
          console.log('funcA')
          next()
     }
     const funcB = (req,res,next) => {
          console.log('funcB');
     }
     const funcC = () => {
          console.log('funcC');
     }
     app.get('/example/c',[funcA,funcB,funcC]);
//a combination of functions and arrays can be done aswell 
     app.get('/example/d',[funcA,funcB,funcC], (req,res) => {console.log('funcD this d)});
```
## response methods

* `res.download` - makes you download a file at path request
```js
res.download('/path','filename',function)
```
* `res.json` - sends a json response 
```js       
res.json({ error: 'message'});
```
* `res.jsonp` - json response with jsonp support

## app.route
you can create chainable route handlers for a route path. because the path is specified at a single location
```js
          app.route('/book')
               .get((req,res) => {
                    res.send('getRandomBook')
               })
               .post((req,res) => {
                    res.send('AddNewBook')
               })
               .put((req,res) => {
                    res.send('updateBook')
               })
```              
#### express application generator 
     npx express-generator

## consuming webhooks with node.js and express 

is there a way for the app to know when x happens? thats where webhooks come in

### how do they work 
     
they are a way to send a notification. they are essentially one-way, the sender doesnt care what you do with it, or in some cases even who you are,
if this sounds familiar, thats because it is. a webhook ends up looking like an api call, but in reverse. rather than you calling the api and requesting data, 
the api is calling you to let you know something happened
the flow looks like this

1. web service sends payload to the apps endpoint 
2. app receives payload.
3. the app responds and confirms receipt 
4. apps acts upon the payload data 

```js
app.use(bodyParser.json());
app.post('/hook',(req,res) => {
     res.sendStatus(200);
})
```
### What can you do with this information?

Each API provides different types of events. Webhooks shine when dealing with some event that needs your app to take action. 
This is valuable when data stored by your application relies on data that might change outside of your app’s interface, or when you need to know 
that an action occurred. Webhooks are popular for connecting services to chat applications,like Slack or Discord, because they can send messages when an event occurs.
