#express 
generating a token and import it on your files
npm install jsonwebtoken
const jwt = require('jsonwebtoken');
to sign a token you will need to have 3 pieces of information
the token secret
the data to hash in the token
the token expire time
to generate a secret, you can use the node.js built in crypto library
const secretGenerator = require('crypto').randomBytes(64).toString('hex');
after you save it on your .env file, install the dotenv dep

npm install dotenv

the data that you hash on a token can be an user, id or a complex object
the token expireTime is a string
const generateToken = () => return jwt.sign(data,process.env.TOKEN_SECRET, {expires_in:`${1000 * 60 * 60 * 24 * 4}s`})
const token = generateToken(username: req.body.username)


authentication of a token
you can use the middleware function in express (highly recommended)
example
{
    const jwt = reqiure('jsonwebtoken')
    const auth = (req,res,next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401);
        jwt.verify(token, process.env.TOKEN_SECRET.toString(),(err, user) => {
            if (err) {
                console.log(err)
                res.send({status: 403, message: err.message}))
            }
            req.user = user
            next()
        })
    }
    app.get('api/users/orders',auth,(req,res) => {
        res.send(req.user);
    })
}    

handling client side tokens
using a cookie

const token = await fetchAuth()
document.cookie = `token=${token}`

where to store the jwts cookies vs web storages

localStorage || sessionStorage
Cookies
exchanging an username and password for a jwt to store it in browser storage is rather simple, the res body would contain the jwt as an access token
    {
        'access_token': 'aiosdhjfiuahsdfajs;okdgjajgraew',
        'expires_in': 130000
    }
    on the client side. you would store the token in html5 web storage
    {
        const tokenSuccess = (err,res) => {
            if (err) {
                throw err
            }
            sessionStorage.setItem('accessToken',res.body.accessToken)
        }
    }
    to pass the access token back to the protected apis, you would use the http auth header and the bearer scheme`
    Cookie
        {
            const tokenSuccess = (err,res) => {
                if (err) {
                    throw err;
                }
                document.cookie = `token=${res.body.accessToken}`
            }
        }  
        if you compare, both have a jwt in the browser, but the security is different

sessionStorage & localStorage jwt security
the storage is accessible through js in the same domain. this means that any js runnin on your site will have access to the web storage, and because of this can be vu
because of this can be vulnerable to cross site scripting attacks