#security 
cookies
     session cookie 
          exists only in temp memory while the user navigates a website. they are identified by the browser by the absence of an expiration date assigned to them 
     persistent cookie 
          expires at a specific date or after some time. they can be used by advertisers to record information about a user
     secure cookie 
          can only be transmitted over an encrypted connection, they cannot be transmitted over unencrypted connections
     http-only cookie 
          cannot be accessed by client side apis
     same-site cookie 
          cookie that is only the same domain to the website
     third-party cookie 
          belongs to a domain different from the one shown in the address bar 

sessions and cookies 
     every website receives multiple requests from multiple different users, the problem is how does the web server know which user is sending each request?

session tokens 
     a session is a single interval of time when the user is auth 
     the server stores information about which sessio token maps to which user. once the user logs out a new session token is generated and assigned, while the old token expires 
     but that means that the dev has to attach the session cookie with every request, but session cookies are here 
session cookies 
     a cookie is a small piece of data kept with the browser, which is sent with every request automatically           
     in this case, the cookie would be set to the value of session token. the exchange between the browser and the server would be the same as before, except the request from the browser would contain the session token everytime 
     they can have more configs such as 
          expiry time
          js visibility 
          cross site visibility

password storage 
     plain text storage 
          dont 
     encryption 
          the problem with that is that at least 1 person knows about that information, meaning that someone can find out one way or another 
          as long as anyone can find the users password, the system is never truly secure 
     one way hashing 
          even if you know what tech they are using, you cant really know what the password is 
          HOWEVER 
               its a static thing, so if someone says cat, the hash is the same for everyone 
     one way hashing with salt 
          salting means to add a random string of letters and numbers to a users password and then hash it 
          If a user enters a password on login, we can validate it by following these steps:
               Get the hashed+salted password from our data store
               Read the salt from the stored data (the part between the $ symbols)
               Append the salt to the entered password, and hash the result
               Compare the output of this hash to the part on the right of the second $ symbol
     repeated hashing 
          the same thing with hashing with salt but many more times over
     
preventing xss
     xss is like when a text is stored as raw html(VERY VERY COMMON)
     you can convert special character or use character encoding wich many frameworks support 

cross site forgery 
     a req is coming from one website that is disguised to give the impression that is coming from another 

cookies & local storage & session storage 

cookies can only hold up to 4kb
localstorage 10mb 
session storage 5mb

expiring 
     cookies - manually set
     local storage - never
     sessionStorage - on tab close 
storageLocation     
     cookies - browser and server  
     local storage - browser only
     sessionStorage - browser only
sent with requests
     cookies - yes
     local storage - no
     sessionStorage - no 

localstorage 
     localstorage.getItem(key) -- get item
     localstorage.removeItem(key) -- remove item
     localstorage.setItem(key,value) -- sets the item

sessionStorage
     sessionStorage.getItem(key) -- get item
     sessionStorage.removeItem(key) -- remove item
     sessionStorage.setItem(key,value) -- sets the item

cookie 
     setting - document.cookie = 'name=kyle; expires=' + new Date(2020,1,1).toUTCString();
     getting - document.cookie;
     
