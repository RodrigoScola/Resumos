#backEnd #testing 
headless testing is a way of running browser ui tests without the "head" wich is no browser ui or gui
by using headless testing, youre guaranteed a more lightweight, less resource intensive and scripted automation.
with healdess testing, you can generate screenshots and pdfs of websites scrape content from websites, automate form submisssion and simulate keyboard input

headless testing tools
     phantomJS
     nightmare
     headless Chrome
     puppeteer 

tdd feature level tests
     the hardest part of creating a full stack web application is knowing where to start. 

feature test toolbelt
     to write the most effective feature tests, you are going to need some additional tools, in this lesson well use Chai, phantomJS, Webdriverl/o
     the first feature we want to right is to see if the state of the application is empty, to do that we 
          describe('poetry web app',() => {
               describe('user visits root',() => {
                    it('page starts blank',() => {

                    });
               });
          });
          the 2 describes is just to organize stuff and the it is the individual test.
     
to reach for the feature testing tolbelt. start by using the global browser variable provided by webdriverl/o
     gives access to the browser that phantom is running in the background.
     using browser.url() to simulate a user visiting the homepage of the application
          the .url navigates to the url that is passed to it as an argument
               browser.url('https://localhost:3999');
     in case of the app, you can pass an '/' as the argument, which willpoint the browser to the root file of the project, wich is index.html
          describe('poetry TDD',() => {
               describe('user visits the root',() => {
                    it('page starts blank',() => {
                         browser.url('/');
                    })
               })
          })
we need a thing that verifies that the behavior we expect is equal to the actual behavior of the code
     assert.equal(thing1,thing2);
we can write a test for this behavior by deciding that poems will be listed in an html element with an id attribute set to poems.
     assert.equal(browser.getText('#poems'),'');
the .getText() gets the text content from the selected DOM element;
     we are using browser.getText() to evaluate if the text in the element with the id poems is equal to an empty string
          it('page starts blank',() => {
               browser.url('/');
               assert.equal(browser.getText('#poems),'');
               // or 
               assert.ok(browser.getText('#poems') == '');
          });
     
at first you might get failing tests, that might be because the thing that you are testing doesnt exists yet 

to mimic the user entering a value you use the browser.setValue with a string as an parameter,
     the parameter is the css selector that references an html element.
          browser.setValue('input[id=title]',title);
but this just sets the value of the text but it doenst verify that the text was set, for that you need browser.getText();
the chai assertion allows the use of the .include to check if the string that is returned from .getText includes the substrings set by the test
     assert.include(browser.getText('#poems'), text);
the .include works like this
     assert.include(haystack,needle);

     