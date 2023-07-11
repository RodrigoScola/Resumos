#security 
what is website security
     what do you think it is?

threats 
     xss cross-site scripting 
          class of attacks that allow an attacker to inject client-side scripts through the website into the browsers of other users 
          the xss vulnerabilities are divided into reflected and persistent 
               reflected 
                    when user content that is passed to the server is returned immediately and unmodified for display in the browser
                    For example, consider a site search function where the search terms are encoded as URL parameters, and these terms are displayed along with the results. An attacker can construct a 
                    search link that contains a malicious script as a parameter (e.g., http://mysite.com?q=beer<script%20src="http://evilsite.com/tricky.js"></script>)
               persistent
                    when the malicious script is stored on the website and then later redisplayed unmodified for other users to execute unwittingly 
     sql injection 
          execute arbitrary sql code on a database, allowing data to be accessed, modified, deleted;
               error based sql injection    
               sql injection on boolean errors 
               time based injection 
     cross site request forgery 
          execute actions using the credentials of another user

the basics of web application security

reject unexpected form input 
     html forms can create the illusion of controlling input. the form markup author might beleive that becuase they are restricting the types of values that a user can enter in the form the data will confom to those restrictions 
     but its no more than an illusion

untrusted input 
     data coming from the users browser, whether we are providing the form or not, and regardless of wheter the connection is https-protected, is effectivelly zero

input validation 
     is the process of ensuring input data is consistent with application expectations 
     data that falls outside of an expected set of values can cause the application to yield unexpected results
          positive validation
               limiting an input to only send a range of items 
                    only positive numbers if user is withdrawing/depositing money 
          whitelisting 
               restrict the input to a specific type
                    unable to add email on a date form 

encode html output 
     web application devs need to pay close attention to the data as it comes out, a modern application usually has basic html markup for document structure, css for document style, js for application logic and user-generated content
     an html document is really a collection of nested execution contexts separated by 

output risks 
     html is a very permissive format, attackers have the luxury of injecting content into the pages to break through execution contextx without even having to worry about wether the page is valid 

output encoding 
     convert outgoing data to a final output format. the complication with output encoding is that you need a different codec depending on how the outgoing data is going to be consumed 
     without appropriate output encoding, an application could provide its client with misformatted data making it unusable or dangerous 
     use \ to make something harmless and non intrusive to code 
          'Sandra Day O\';window.location=\'http://evil.martinfowler.com/\';' // this will render as a string, if it didnt, it would push the user to an hostile location

Bind Parameters for database queries
     the database is often the most crucial part of any web application since it contains state that cant be easily restored


---------------------------do the rest of the resume---------------------------

restful api auth 

authentication vs authorization 
     auth 
          the verification of the credentials of the connection attempt. this process consists of sending the credentials from the remote access
          client to the remote access server in an either plaintext or encrypted form by using an authentication protocol
     authorization  
          the verification that the connection attempt is allowed. authorization occurs after successful authentication
basic authentication
     the most simple way to deal with authentication is to use http baic authentication, we use a special http header where we add username:password encoded in base 64
          get / http /1.1 
          Host: example.org
          Authorization: Basic Z,0vPmJhcg==
hmac 
     one of the downsides of basic authentication is that we need to send over the password on every request. also it does not safeguard against tampering of headers or body

managing security in psql 
     when dealing with security, it makes sense to keep those levels in mind in order to approach security-related issues in an organized way 
          bind addresses: listen_addresses in the psql.conf file 
          host based access control: the pg_hba.conf file 
          instrance level permissions - users roles, db creation, login and replication 
          database-level permissions - connecting, creating schemas, and so on 
          schema level permissions - using schema and creating objects inside a schema 
          table level permissions - allowing or restricting access to columns 
          row-level security - restrict access to rows 
          
cors ====================================================================================================
what is a security policy
    servers are used to host web pages, applications, images, fonts and much more, when you use a browser you are likely attempting to access a distinct website
    websites often request these hosted resources from different locations on the internet. security policies on servers mitigate the risks associated with requesting assets hosted on different servers
    same origin policy is very restrictive , can only interact on servers that are on the same server
    an origin is made up of the following three parts
        protocol
        host
        port number
how does cors manage requests from external sources?

an http header is a piece of information associated with a request or a response. headers are passes back and forth between your web browser (client) and a server when the web page you are on wnats to use resources hosted on a different server. headers are used to describe requests and responses
the cors standard manages cross-origin requests by adding new http headers to the standard list of headers. the following are the new http headers added by the cors standard
    Access-Control-Allow-Origin
    Access-Control-Allow-Credentials
    Access-Control-Allow-Headers
    Access-Control-Allow-Methods
    Access-Control-Expose-Headers
    Access-Control-Max-Age
    Access-Control-Request-Headers
    Access-Control-Request-Methods
    Origin

    Access-Control-Allow-Origin
        Access-Control-Allow-Origin header allows servers to specify how their resources are shared with external domains. when a get request is made to access a resource on Server A, it will respond with a value for the Access-Control-Allow-Origin header
        if the value = *, the server will share the requested resources with any domain

pre flight requests
    most severs will allow get requests but may block others to modify resources on the server.
    when a request is made using any of the following http requst methods, a standard preflight request will be made before the original request
        put,delete,connect,options,trace,patch
    they use the options header, preflight requests are sent before the original request, determining whether or not the original request is safe
           
allowing multiple origins express
    {
        const whitelist = ['site1','site2']
        const corsOptions = {
            origin: function (origin, callback) {
                if (whitelist.indexOf(origin) !== -1) {
                    callback(null,true)
                } else {
                    callback(new Error('not allowed'))
                }
            }

        }
    }

jwt =====================================================================================================================

jwt is just for authorization not authentication
    json web token
        proposed internet standard for creating data with optional signature
        or optional encryption whose payload holds json that asserts some number of claims.
        the tokens are sogmed either using a private secret or a public/private key
server could generate a token that has the claim 'logged in as administrator' and provide that to a client. the client could then use that token to prove that is logged in as admin
the tokens can be signed by one party`s private key (usually the server)
structure
     HEADER  
    {
        "alg": "HS256",
        "typ":"JWT"
    }
    identifies which algorithm the signature HS256 indeicates that this token signed using hmac-sha256
    PAYLOAD
    {
        "loggedInAs": "admin",
        "iat": 1422779638
    }
    contains a set of claims, the jwt specification defines seven registered claim names which are standard fields commonly included in tokens
    SIGNATURE
    {
        HMAC_SHA256(
            secret,
            base64urlEncoding(header) + '.' + base64urlEncoding(payload)
        )
    }
    securely validades the token, the signature is calculated by encoding the header and payload using base64url encoding rfc 4648 and concat the two together with a period separator
    use
    in auth, when the user successfully logs in using their credentials, a jwt returns and must be saved locally, instead of the traditional approach of creating a session in the server and returning a cookie
    if the client passes a valid jwt assertion the server will generate an access_token valid for making calls to the application and passit back to the client
        {
            "access_token": "aoriharnlsdf",
            "token_type": "Bearer",
            "expires_in": 6999
        }
    when the client wants to access a protected route or resource, the user agent should send the jwt, typically in the auth header using the bearer schema
standard fields
    standard claim fieds - the internet drafts define the following standard fields that can be used inside a jwt claim set
        code    name            desc
        iss     issuer          identifies principal that issued the jwt
        sub     subject         identifies the subject of the jwt
        aud     audience        identifies the recipients the the jwt is intended for. each principal intended to process the jwt MUST identify itself with a value in the audience claim
        exp     expiration_time the exp on and after the jwt, MUST NOT be accepted for processing, the value MUST be a numeric date
        nbf     not before      time which the jwt will start to be accepted for processing
        iat     issued at       when the jwt was issued
        jti     jwt id          case sensitive unique identifier of the token among the different issuers
    commonly used header fields
        typ     token type      must be set to a registered IANA Media type https://www.iana.org/assignments/media-types/media-types.xhtml
        cty     content type    if nested signing or encryption is employed, recommended to set to jwt or ommit field
        alg     message auth    issuer can freely set an alg to verify the signature on the token
        kid     key id          hint indicating which key the client used to generate the token signature
        crit    critical        list of headers that must be understood by the server in order to accept the token as valid
 JWT Playground: https://jwt.io/


oauth ============================================================================================================
enpoints
     the token endpoint is used by clients to get an access token and optionally refresh token from the auth server 
tokens 
     access token 
          used to for auth and authorization to get access to the resources from the resource server
     refresh token
          used to get new access token, when the old one expires. instead of the normal grant type, the client provides the refresh token and receives a new access token
          suing refresh tokens allows for having a short expiration time for access token to the resource server, and a long expiration time for access to the authorization server 
token types 
     bearer    
          uses https security and the request is not signed or encrypted
     mac tokens 
          more secure than bearer tokens, similar to signatures, in that they provide a way to have partial cryptographic verification of the request 
     
grants 
     methods to get access tokens from the auth server are called grants. the same method used to request a token is also used by the resourcce server to validate a token 

     authorization code 
          the resource owner allows access. an authorization code is then sent to the client via vrowser redirect and the auth is used to get the access token 
     implicit 
          similar to auth code, instead of using the code as intermediary, the token is sent directly as a browser redirect 
     resource owner credentials 
          grants takes the uses the resource owner password to obtain the access token
     client credentials
          are used instead of the resource owners

grant type extensions 
     are used by clients through an absolute uri together with a grant type parameter and adding any additional params to the endpoint 

