#security #attacks
    what is it
        web security vulnerability that allows an attacker to induce users to perform actions that they do not intend to perform
    whats the impact
        the attacker causes the victm user to carry out an action unintentionally
    how does it work
        relevant action
            action within the application that the attacker has a reason to induce, this might be a pricileged action or any action on user-specific data
        cookie based session handling  
            performing the action involves issuing one or more http requests and the application relies solely on session cookies to identify the user who has made the requests
        no unpredictable requests params
            the requests that perform the action do not contain any params whose values the attacker cannot determine or guess


how to construct an csrf attack
use the csrf poc generator that is biult in to burp suite professional
    select a request anywhere in burp suite professional that you want to test or exploit
    From the right-click context menu, select Engagement tools / Generate CSRF PoC.
    Burp Suite will generate some HTML that will trigger the selected request (minus cookies, which will be added automatically by the victim's browser).
    You can tweak various options in the CSRF PoC generator to fine-tune aspects of the attack. You might need to do this in some unusual situations to deal with quirky features of requests.
    Copy the generated HTML into a web page, view it in a browser that is logged in to the vulnerable web site, and test whether the intended request is issued successfully and the desired action occurs.
