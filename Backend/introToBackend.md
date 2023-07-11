#backEnd 
# Intro to backend

> ##### the backend is what happens in the server

### Nomenclatures

#### DNS

the dns stands for Domain name system and its a backbone technology that makes the WWW possible. At the most basic level DNS provides a key/value lookup from a domain name _(google.com)_ to an ip adress `(932.234.23)` which is required in order for your compture to route a request to the appropriate server. Analogizing to phone numbers the difference between a domain name and ip address is the difference between call joe and call 129-349-12233;

#### Scaling

horizontal scaling means that you add more machines into your pool vertical scaling means that you scale by adding more power `cpu` to an existing machine

#### Load Balancers

they are magic sauce that makes scaling horizontally possible. They route incoming request to one of many apllication servers that are typically clones/mirror images of each other and send the response from teh app server back to the client. any one of them shoud process the request the same way so its just a matter of distributing the requests across the set of servers so none of them are overloaded

#### Web Application Servers

They execute the core business logic that handles the users requests and sends back html/css/js to the users brower to do their job. They typically communicate with a variety of backend infrastructure such as `databases`, `caching layers`, `job queues searching`

#### Database Servers

Every modern application leverages one or more databses to store information. Databases provide ways of defining your data structures, inserting new data, finding existing data...

#### Caching Services

A caching service provides a simple key value data storage that makes it possible to search and lookup information in close to **o(1)** time
Applications typically leverage caching services to save the results of expensive computations so that its possible to retrieve the results from the cache instead of recomputing them the next time they are needed.
An application migh cache results from a database query calls to external services html for a given url and many more

#### Job Queue & Servers

Most Web Applications need to do some work `asynchoronously` behind the scenes that is not directly associated with responding the entire internet in order to return search results it does not do this every time you search.
Instead it crawls the web `asynchronously` updating the search indexes along the way, while there are different architectures that enable `asyncronous` work to be done, the most ubiquitous is the job queue
They store a list of jobs that need to be run `asyncronously` the simplest are _first in and first out_, though most applications end up needing some sort of priority queueing system

#### Full Text Search Service

Many if not most web apps support some sort of search feature where a user provides a text input (or `query`) and the app returns the most relevant results.
The technology powering this is typically called **full-text search** which leverages an inverted index to quickly loop up documents that contain the query keywords

#### Services

Once an app reaches a certain scale, there might be a need for certain services that are carved out to run as serarate applications that are not exposed to the external world but the app and other services can interact with them:

- Account services - stores the user data across all the site, that allows the developer to easily offer cross sell opportunities and create a more unified user experience.

- Content services - stores metadata for all of the site. Provides interfaces for billing customer credit cards

- Payment services provides an interface for billing customer credit cards

- Html and pdf services provides a simple interface that accepts html and returns a corresponding pdf document

#### Data

Today companies live and die based on how well they harness data. Almost every app these days once it reaches a certain scale, leverages a data pipeline to ensure that data can be collected store and analyzed.
What do they do?
It sends the data, the raw data aswell as the final transformed/augmented data are saved to cloud storage.
The transformed/augmented data is often leaded into a data warehouse for analysis

#### Cloud storage

Is a simple and scalable way to store acess and share data over the internet

#### CDN

Content Delivery Network and the technology provides a way of serving assets such as static html css javascript and images over the web much faster than serving them from a single origin server.
It works by distributing the content across many edge servers around the world so that users end up downloading assets from the edge servers instead of the origin server

#### What is a web server?

A web server is a computer that stores web serve software and a websites component files _(html, css, images, js)_. It connects to the internet and supports physical data interchange with other devices connected to the web.
On the software sude a web server includes several parts that control how web users access hosted files.
At a minimum its an static http server _(software)_, we call it static because the server sends its hosted files as is to your browser
dynamic web servers consists of a static web server plus extra software most commonly an application server and a database. We call it dynamic because the application server updates the hosted files before sending content to your browser via the http server

### Communication Between Client And Server

In the `rest` architechture clients and request to retrieve or modify resources and servers send responses to these requests.

#### Making Requests

`REST` requires that a client make a request to request or modify data on the server. A request generally consists of an `http` verb, which defines what kind of operation to perform a header which allows the client to pass along information to perform a header which allows the client to pass along information about the request, a path to a resource. An optional message body containing data

##### Http verbs

- _GET_: retrieve a specific resouce by id or a collection of resources

- _POST_: create a new resource

- _PUT_: Update a new resource

- _DELETE_: Remove a specific resource

#### Headers and accept parameters

In the header of the request the client sends the type of content that it is able to receive from the server. This is called the `accept field` and it ensures that the server does not send data that cannot be understood or processed by the client
For Example, a text file containing html would be specified as _text/html_ and a generic file would be _text/plain_

- **Text** - _text/fileType_

- **Image**: _image/imageType_

- **Video**: _video/videoType_

- **application**: _application/applicationType_

For Example a client acessing an article with an id, the header would look something like this

```
GET /articles/id
accept: text/html, application/xhtml
```

#### Paths

request must follow a path to a resource that the operation should be performed on. In `RESTful` apis paths should be designed to help the client know what is going on

For example: If an user wants to know users posts, the path should look something like this

```
/user/:username/posts
```

#### Sending Responses

In cases where the server is sending a data payload to the client, the server must include a content-type in the header of the response, this content type header field alerts the client to the type of data it is sending in the response body

#### Response Codes

Responses from the server contain status codes to alert the client to information about the success of the operation

- **200** - Ok - Standard response for successfull http requests

- **201** - Created - Standard Response for an http request that resulted in an item being created

- **204** - No Content - Standard http request where it doesnt return anything

- **400** - Bad Request

- **403** - Forbidden

- **404** - not Found

- **500** - Internal server error

#### Examples

##### Get

```js
fetch(url, {
	method: "GET",
	Accept: "application/json",
})
```

##### Post

```js
fetch(url, {
	method: "POST",
	body: {
		customer: {
			name: "customer name",
			email: "customerEmail",
		},
	},
})
```

##### Put

```js
fetch(url, {
	method: "PUT",
	body: {
		customer: {
			name: "customerName",
			email: "customerEmail",
		},
	},
})
```

#### Delete

```js
fetch(url, {
	method: "DELETE",
})
```
