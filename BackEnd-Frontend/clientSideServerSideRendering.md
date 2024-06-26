#frontEnd #optimization

what is client sid        e rendering?
     its rendering on the client side, not on the server side
     its what happens on the users browser and not on the server
     user can alter stuff and cant be seen by others

the pros and cons of client side rendering 
     pros 
          high performance 
               generates on-demand html it will not refresh or re-render the whole page, as with regular html pages. it is just pretending to be separate page. 
               this saves a lot of both computation power and ra,. so it gets quicker results than server-side rendering ssr
          Speed    
               generates the html required to be displayed. this means dom only contains enough code which is expected to be displayed by the html content
          reusable components
               you can reuse ui components across multiple pages or routes without having to request the server each time, this enhances usability and on-page performance 
     cons
          slow at first 
               csr loads the whole js the first time, then calls for api to get the data from the database and generate the html as per data. but loading the data 
               for the first time takes

way to organize rest api endpoints in a react object

tldr 
     keep your api endpoints files separate from configuration
          src/
               config/
                    api/      <- Configuration
                         index.js
               services/
                    api/
                         index.js <- api endpoints
                         users.js
                         groups.js
                         posts.js

intro 
     divide the api files into two groups, config and endpoint list
     its easier ro maintain and read them. however when you will do that once properly, you will never get back to the config file

config 
     base configuration file, if you will create this file covering all cases, you will not need to get back  
          example
               import axios from 'axios';
               const apiClient = axios.create({
                    baseURL: api_url, //env variable
               });
               apiClient.interceptors.request.use((config) => {
                    return ({
                         ...config,
                         headers: {
                              ...
                         }
                    })
               },
                    error => 
                         Promise.reject(error),
               )
endpoints 
     you can decide if you want to keep endpoints in one file or create separate files scoped by contex of api usage
          naming 
               basic crud
                    index <- get all items
                    single <- get single item by id 
                    create <- post an item
                    update <- put data to an item
                    remove <- delete an item
               specific
                    singleByEmail
                    removeAll 
                             
whats server side rendering and do i need it 
     at the moment you can use the browser html to view the complete rendered html but when we view the actual source we will see nothing more than the basic html code

     why is this an issue?
          while the behavior will not be a problem for most users or when developing the application, it will become an issue if 
               the end user is using a slow internet connection
               the end user is running an underpowered device
          if the target demographic falls into one of those groups they will have a bad experience using the site, for example will have to wait a lot longer
     how to solve the issue
          1 - consider having the key pages as static 
               when creating an platform that requires the users to login and not providing the content to not-signed in users you might decide to create
               your public facing sites (like index, about us, contact us...) pages as static html and not have them rendered by js
               since the content is gated by login requirements it will not be indexed by search engines or shared in social media
          2 - generate parts of the application as html pages when running the biuld process
               libraries like react-snapshot can be added to the project, used to generate html copies of the application pages and save them to a specified folder
               you can then deploy the folder alongside the js bundle, this way the html will be served along with the response allowing the site to be accessible by users with javascript disabled, search engines...
               in most cases, configuration of react-snapshot is as simple as adding the library to the project and altering the biuld script by calling at the end
                    "build" : "webpack && react-snapshot --biuld-dir static"
          3 - create a server-side rendered application in js
               one of the big selling point of the current generation of js applications is the fact that they can be ran on both the client (browser) and on server this allows to generate html pages that are more dynamic 
               which content is not known at build time
     create your own custom ssr implementation
          if youre willing to try and create your own ssr implementation for your react applications, youre going to need to be able to run node backend for the server. you will not be able to deploy this solution to static host like github pages
          
Server side rendering ========================================================================================================================

what is Server-side rendering? 
     is the process of taking js code and rendering to html and css to the server 

the critical path 
     is the path of delivering the most critical files to the user, faster

you need ssr if you care about 
     first meaningful paint
          ssr alone doesnt guarantee good resutls. you also need critical css and proximity to the client etc 
     seo 
          and support other bots like twitter and facebook
     graceful degradation 
          for this one, you need to make sure your service is usable without js
     
whats hard about it?
     ssr is like a new dimension. whatever you use you will neet to reconfigure it for services
          do you use componentDidMount to fetch data? you need to use something like getInitialProps or statement management library like redux to make it work on the server
          do you use router? you need to configure it on the server

firsty meaningful paint.
     if you are doing ssr, it doesnt mean you will get good first meaningful paint out of the box
          does your setup have a good time to the first Byte? if your server slow or overloaded - you will have issues, make sure to use the latest node, minify server code, use streaming rendering, optimize subqueries (database or network) if any 
          do you provide critical css? otherwise the browser cant start to render the page
     ssr is not a silver bullet for the first meaningful paint, if your backend is slow or far away you will need to check if shell and cdn would work better
     
seo 
     SSR
     Prerendering, like react-snap, react-static, gatsby etc.
     Prerendering on the demand, like rendertron, puppetron, pupperender etc.     
     choose prerendering if you can. prerendering on the demand is easy to add at any moment if your only concern is seo 
graceful degradation
     this one is tricky. this really depends on how much degradation you want (silly slut) to achieve?
          do you want to support links? this suppose to work
          do yous want to support drpo down menus? you need to use some tricks with css and checkboxes
          do you want to suport forms? you need endpoints to handle those forms, in addition to existing json api
     some functionality without js is pretty hard, like combo boxes or maps 
