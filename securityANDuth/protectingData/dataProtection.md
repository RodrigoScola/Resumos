#security 
hashing vs encryption vs encoding vs obfuscation
    encoding
        the purpose of encoding is to transform data so that it can be properly and safely consumed by a different type of system (binary....)
        the goal is not to keep information secret, but to ensure that is properly consumed
        transforms data into another format using a scheme that is publicly available so that it can be easily reversed
    encryption
        the purpose is to transform data in order to keep it secret from others, rather than focusing on usability, the goal is to ensure that the data cannot be consumed by anyone other than the recipients
        transforms data into another format in a way that only the specific individual can reverse the transfomation, it uses a key which is kept secret, in confuction with the plaintext and the algorithm
    hashing
        ensures integrity, making it so that if something is changed you can know that is changed.
            the same input will ALWAYS produce the same output
            multiple disparate inputs should not produce the same outputs
            it should not be possible to go from output to input
            any modification of a given input should result in drastic change to the hash
        its used in conjunction with auth to produce strong evidence that a given message has not been modified, this is accomplished by taking a given input, hashing it and then signing the hash with the senders private key
    obfuscation
        make something harder to understand, making it difficult to attack or copy
        one use is the obfuscation of source code so that its harder to replicate a given product it its reverse engineered
        its not a strong control, but more an obstacle

adding salt to hashing
    adds random data to the expression
    hashed passwords are not unique to themselves due to the deterministic nature of hash function, when given the same input, produces the same output

using bcrypt to hash and check passwords in node.js
    bcrypt is one of the most used encryption libraries, allows you to determine how long itll take to decrypt it by brute force measures
    npm install bcryptjs --save
hashing a password
    {
        const bcypt = require('bcryptjs')
        const password = 'passwword';
        const rounds = 10;

        const encrypt = (password,rounds) => {
            bcrypt.genSalt(rounds,(err,salt) => {
                if (err){
                    throw err
                }
                bcrypt.hash(password,salt,(err,hash) => {
                    if (err) {
                        throw err
                    }
                    return hash
                })
            })
        }
    }
check a user entered password
    now that we have the hashed password, you need a way to compare it to a string that an end-user made and to see if it matches the origina password
    {
        const bcrypt = require('bcryptjs')
        const passByUser = 'passwordUser';
        const hashedPass = 'aosdfijoasidf';

        const compare = (userPass,hashed) => {
            bcrypt.compare(userPass,hashed,(err,matched)=> {
                if (err) {
                    throw err
                } else if (matched) {
                    return true
                } else {
                    return false
                }
            })
        }
    }
managing env variables in node with dotenv
    why use them
        they are excellent for decoupling application configurations. typically applications require many variables to be set in order for them to work
        by relying on external config, the app can easily be deployed on different enviroments, these changes are independent of code changes so they do
        not require the application to be rebiult to change
        some data that should be stored as env variables
            http and port address
            database, cache and other storage info
            location of static files/folders
            endpoints
            on a dev environment the app will point to a test api url and in prod your app will pont to an live api url
dotenv
    enviroment variables to configure were stored in one central place to the application like a file
    npm install dotenv --save
    on an index.js
        require('dotenv').config()
    create a .env file and add the variables that you want
        HOST=localhost
        PORT=3000
    the variables are declared just as if you were entering them in the shell before running the node command
when using env variables, a new person using the code will not know the variables that are in the .env file, thats why you create an .sample-env file where you
just add the variables but dont fill in the values

In transport ------------------------------------------------------------------------------------

ssl
    what is ssl || tls
        secure sockets layer and its successor transport layer security are protocols for establishing authenticated and encrypted links between networked computers
    what is an ssl certificate
        digital document that binds the identity of a website to a cryptographic key pair consisting of a public key and a private key
        the public key included in the certificate, allows a web browser to initiate an encrypted communication session with a web server via tls and https protocols
        also includes identifying information about a website, including its domain aname and information about the sites owner. if the web servers ssl certificate is signed by a publicly trusted certificate authority
    do i need a dedicated ip address to use ssl/tls?
        it was mandatory once, but it is no longer the case
    what port is recommended to use ssl/tls over?
        for maximum compatibility, port 443 is the standard
keys, certificates and handshakes
    ssl/tls works by binding the identities of entities such as websites and companises to cryptographic key pairs via digital documents
    if the ssl/tls certificate itself is signed by a publicly trusted certificate authority such as ssl.com, the certificate will be implicityly trusted by client software such as web browsers and operating systems
    via the ssl/tls handshake, the private and public keys can be used with a publicly trusted certificate to negotiate an encrypted and authenticated communication session over the internet, even between two parties who have never met

ssl/tls and secure web browsing
    the most common and well-known use of ssl/tls is secure web browsing via the https protocol. a properly configured public https website includes and ssl/tls certificate that is signed by an publicly trusted ca
    users visiting an https website can be assured of
        authenticity
            the server presenting the certificate is in possession of the private key that matches the public key in the certificate
        integrity
            documents signed by the certificate have not been altered in transit by a man in the middle
        encryption
            communications between the client and the server are encrypted
    because of these properties, ssl/tls and https allow users to securely transmit confidential information
obtaining an ssl/tls certificate
    the person or org requesting the certificate generates a pair of public and private keys preferably on the server to be protected
    the public key along with the domain names to be protected and organizational information about the company requesting the certificate is used to generate a certificate signing request
    the csr is sent to a publicly trusted ca and it validates the information in the csr and generates a signed certificate that can be installed on the requesters web server

why is ssl important?
    it protects data
        the core function of an ssl certificate is to protect server-client communication. on installing ssl every bit of information is encrypted
    it affirms your identity
        the second task of ssl is to provide the auth to a website
        when you want to install an ssl certificate, you must go through a validation process set by an idependent third party and depending on the type of certificate the ca verifies the identity of you and your org
        once you have proved the identity the website gets trust indicators vouching for the integrity
    better seo
        in 2014 google made changes to the algorithm so that it gives the upper hand to https-enabled websites
    helps you satisfy pci/dss requirements
        if you accept online payments. you must meet the pci/dss requirements
    improves customer trust
        an user is going to trust the website more if the site has ssl/tsl
    google makes it mandatory
        google has decided to flag the websites which do not have an ssl/tls certificate
heroku ssl
    https://devcenter.heroku.com/articles/ssl