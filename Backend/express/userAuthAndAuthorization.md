# Authorization and Authentication

## Authorization

> Verification of who you are. Authentication relies on one or more factors to verify identity

### The 3 verification types

-    **Knowledge** is something you know, like an username or password

-    **Possession** is something you own, like a security card or mobile device

-    **Inheritance** is something you have like fingerprints

Authentication that relies on a single factor, such as _username/password_ is called _single-factor_ authentication

Authentication that requires multiple factors, such as username/password and a code sent to a mobile device, its called _multi-factor_ authentication

### Authorization

Its the verification of what you are allowed to do. Its responsible for everything from preventing users from modifying each other accounts, to protecting back-end assets from atackers, to granting limited access to extenal services

### Encryption

One of the core tools for enforcing auth and authorization is encryption. transforms data into a format that is unreadable unless you have the correct key to decrypt it. Encryption comes symmetrical data. Encryption uses the same key to encrypt and decrypt data. Asymetric encryption uses separate keys for encryption and decryption

### Username and passwords

They are the most common type of knowledge-based authentication that came into digital use in the early 1960. Early computers were expensive and bulky, so it was common to have multiple users share them using separate terminals.

Because computation time was limited and expensive, the administrators needed a way to know who was using the system and they chose pasword-based authentication early password systems stored password in plaintext, but this probided to be a serious vulnerability.

Password storage has gotten more complex with the advance of cryptography, and the current standard for password storage is to use stalted hashes

### One time passwords

Evolving security requirements mean new methods of authentication. In the 1980, a new auth technology was developed that paved the way for posession-based authentication: _one time password_. A security phone thats sent to the phone or the constantly refreshing code on a company security fob are examples of one time passwords.

### Web sessions

Https protocol on its own stateless, meaning requests and responses are just relaying information back and forth with no knowledge of a specific user . But web developers want to create engaging personalized experiences for users, this means there needs to be a system that associates the requests with a specific user and does it in a secure way.

### Sessions and Cookies

Its clunky for the client to remember to tack the session id onto every request. Because of this, the session id is often kept client-side in the for of session cookies.

They are tiny pieces of data - text files of max 4kb - the browser stores that are automatically sent with http request to a web application

a session cookie is set with the first http response from the server and persists until the browser is closed or the cookie expires

### The localStorage

reading cookie data can involve some tedious syntax and relying on cookies to be attached for each http request can affect an websites performance
localstorage is a newer form of client-side storage. these browser files also store data as key-value pairs and web applications can choose to store up to 5mb of data in localsStorage

#### Localstorage

it does not interact with the server, but is instead accessed and modified by simple client-side code.

It will persist even after the user exits the broser, and will continue to persist until the browsers cache is deleted

#### SessionStorage

uses the same syntax as localStorage, it can hold session data. This storage clears once the browser closes, so for many use cases this is more secure

```js
// set item
localStorage.setItem("key", "value");
// get item
localStorage.getIme("key");
```

#### Defining a session expiration date

The shorter the session is, the less time an attacker has to hijack a session. This is usually done by setting and expiry time on the session cookie. Its also important to implement an automatic session expiration on the backend.

     session : 1000 * 60 * 60 * 24 * 365

> 1 year

A timeout dictates how long a session can stay open. The session timeout after an idle period is a common feature on bank websites, other enviroments that require high security even implement an absolute timeout where an unsers session regardless of activity

#### Make session ids difficult to hack

session ids are just like passwords - the longer and more random the better according to `owasp`, they should be at least 128 bits long

### Security-related http headers

#### What is an http security header

http responses can contain headers with extra information that tells the client (browser) how to behave.

Security-related headers are added in server-to-client responses to reflect a policy that the website wants to implement security headers help protect
