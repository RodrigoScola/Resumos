prod tips 

     dependencies
          helmet // secure http headers in an express app
          compression // compression middleware 
          express-rate-limit // limit repeated requests to endpoints 
          express-validator //string validators and santizers 

http headers and compression
     helmet and compression require no additional setup, theyll just add some helpful compression and http header security 
          {
               const app = express()
               app.use(compression())
               app.use(helmet());
          }

securing cors 
	
     adding some options to the cors library. when you use cors, you make the app availabe for use from any browser. this is good for development but not for anything else
          {
               const __isProd__ = process.env.NODE_ENV == 'production';
               const origin = { //if prod is false cors will only accept requests from example.com
                    origin: __isProd__ ? 'https://www.example.com/ : "*"
               }
               app.use(cors(origin)) 
          }

> [!Tip] if  you want to learn more about cors, check this out! [[Cors]]


rate limiting 
     const limiter = rateLimit({
          windowMs: 1000 * 60,
          max: 5
     }) // 5 req per minute is the max 

     app.use(limiter);

validation
app.post('/books',[check('author').not().isEmpty().isLength({ min: 5, max: 255 }).trim(),
    check('title').not().isEmpty().isLength({ min: 5, max: 255 }).trim(),
  ], (req,res) => {
       res.send('good stuff')});
     
if you dont want other elements being notified of a form submission you can use the event.stopPropagation()