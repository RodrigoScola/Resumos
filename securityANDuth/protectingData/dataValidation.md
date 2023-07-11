#security #workingwithData

Sanitizing data 
     the inputs to the application represent the most significant surface area of attack for any application
     if the inputs were not sanitized, an user could cause damage by posting this example 
          <img src="https://some-site/image-notFound.jpg" onerror='alert('haked')' />
     if the site escaped the message, it would likely look like this 
          &lt;img src onerror=&#39;alert(&quot;haxor&quot;)&#39;&gt;
     
validating on input 
     at every stage of input, ensure that the incoming data is valid according to the requirements of that part of the application.
     input validation is stricter than what most devs imagine when they think of sanitizing inputs, rather they mean "cleaning" the incoming data 
     by declaring and enforcing these expectations, the application is a lot less likely to exhibit unexpected or undesirable behavior 

send query and parameters separately to the database 
     sql injection happens when an attacker sneaks additional database instructions into the existing query

escape on output 
     give the data special treatment to prevent its execution as code. but unlike with prepared statements theres no way to send application output code and data separately to ensure a clear distinction
     escaping is the conversion of user-supplied data to a form that the receiving system will not mistake for code
filter on output
     filtering is a secutiry technique that involves examining user-supplied data and removing anything that shouldnt be there
     this is the high-wire acto of web application security, so its a tatic that should be reserved for a ver narrow set of circumstances where escaping content doesnt make sense 
