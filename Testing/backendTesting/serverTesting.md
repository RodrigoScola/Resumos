#backEnd  #testing 
server tests are used to test the server response only and not any front-end rencering of code or user interactions.
they are commonly used to test api responses but we also use server tests for any server response that the application relies on. this includes checking status codes and error messages

testing framework: chai 
     when writing tests, sometimes youll find that the tests require calculation steps or inline code to determine if the test is passing.
          if an array foo includes an element bar, using Mocha with the assertion library 
               assert.ok(foo.includes(bar));
          to improve the readability and flow of the tests, we extend the biult in assertion with chai
               const {assert} = require('chai');
          the main function in chai were using in .include(), this allows to rewrite the previous example as 
               assert.include(foo,bar);
          include also works to check that text contains certain values
               assert.include('foobar','foo'); // evaluates to true
          
testing html responses 
     the back-end server is serving dynamic html to the user. For the homepage.
     it is possible to use .include() to verify that the html response contains certain strings, but gets cumbersome to verify the hieararchichal relashionships of dom elements
          parsing text from html
               const parseTextFromHTML = (htmlAsString,selector) => {
                    const selectedElement = jsdom(htmlAsString).querySelector(selector);
                    if (selectedElement !== null) {
                         return selectedElement.textContent;
                    } else {
                         throw new Error(`No element with selector ${selector} found in html string`);
                    }
               };

async await
     when fetching data from a busy server, the timing might not be relaiable and can fail the test because of it
     what you need to do is use the async await keywords
          const foo = async() => {
               console.log(await fetch('link').then(response => {return response.json()}));
               return true
          }
SuperTest 
     we are using the request function by the SuperTest library
          const request = require('supertest');
     this allows us to make requests much easily and without doing the fetch function
          const requests = require('supertest');
          const response = await requests(app).post('/messages').type('form').send({author,message});

server testing patterns 

testing status codes
     to get the status code 
          const request = require('supertest');
          const response = await request(app).get('/');
          assert.equal(response.status,200);

response Content 
     many servers return dynamic html content based on the user, the url accessed, header values and more
     we can organize the tests into two categories
          the happy path - expected use cases of the application
          the sad path - unexpected uses or invalid cases of the application
     for the tests, once we retrieve the response from the server, we use assert.include() from the chai library to check the response 
     to get the response text from the supertest library;
          cosnt request = require('supertest');
          const request(app).get('/')
          assert.equal(response.text,thingYouWantToTest);
     
to refactor your testing code you can use handlebars a templating library 
     const param = 'Foo';
     res.render('templateName',{param});
     the templates are written like regular HTML but variables can be accessed within the view 
          <h1>{{param}}</h1>
     when the view is rendered
          <h1>Foo</h1>
     