#backEnd 
cors headers http
     Access-Control-Allow-Origin
     Access-Control-Allow-Credentials
     Access-Control-Allow-Headers
     Access-Control-Allow-Methods
     Access-Control-Expose-Headers
     Access-Control-Max-Age
     Access-Control-Request-Headers
     Access-Control-Request-Method
     Origin
how to implement cors?
     using node 
          response.setHeader('Content-type','text/html');
     if youre using express
          npm install cors

          const express = require('express');
          const cors = require('cors');
          const app = express();

          app.use(cors);
          app.get('/hello/:id',(req,res,next) => {
               res.json({msg: 'hello world'});
          })
     app.listen(4999, () => {
          console.log(`The server is listening on port 4999`);
     });

