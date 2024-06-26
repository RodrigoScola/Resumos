#app_design

mvc : model, view , controller 

background 
     is a popular way of organizing the code. the big idea behind mvc is that each section of the code has a purpose, and those purposes are different. 
     some of the code holds the data of the app, some of the code makes the app look nice, and some of the code controls how the app functions 
     MVC is a way to organize the codes core functions into their own neatly organized boxes.

the parts of mvc 
     model
          code typically reflects real-world things. this code can hold raw data, or it will define the essential components of the app. for instance if you were biulding an to-do app 
          the model code would define what a task is and what a list is - since those are the main components of a todo app.
     view 
          code is made up of all the functions that directly interact with the user. this is the code tha makes your app 
          look nice and otherwise defines how your user sees and interacts with it 
     controller 
          code acts as a liaison between the model and the view, receiving user input and deciding what to do with it. its the brains of the application, and ties togheter the model and view 

mvc in the real world 
     mvc is helpful when planning your app, because it gives you an outline of how your ideas should be organized into actual code
     for instance lets imagine youre creating a to-do list app, this app will let users create tasks and organize them into lists
          model     
               in a todo app might define what a task is and that a list is a collection of tasks
          view 
               will define what the todos and lists look like, visually. the tasks could have large font or be a certain color
          controller          
               could define how a user adds a task or marks another as complete. the controller connects the views add button to the model so that when you click add task, the model adds a new task

benefits of mvc 
     traditionally used for graphical user interfaces 
     popular in web applications
     mvc responsabilities are divided between the client & the server, compatible with web application architecture 
     mvc is helpful design pattern when planning development 
     separation of concerns: that code is divided based on function to either the model, view or controller bucket 
     works well with ruby on rails 
     loosely coupled 
     removes unnecessary dependencies 
     reusable without modification
     code reuse 
     extendable code 
     high cohesion 
     easier to maintain and modify 
     
separation of concerns 
     dividing the logic up between the 3 buckets so that each bucket can act independently 
     the model view and controller dont depend on each other. why does this matter? generally software is worked on by teams - a team might have a designer engineer and database architect
     separation of concerns means each tem member can work on their piece at the same time, because logic has been separated into buckets 

Loosely coupled 
     means that each piece the model, view and controller act independently of eachother 
     developers can modify one of the pieces and the other 2 pieces should keep working and not require modifications. when designing mvc 
     the logic in each of the three buckets is independent

bulletproof node.js project architecture

     the folder structure 
           src {
                app.js // app entry point 
                api // express  route controllers for all the endpoints of the app
                config // env variables and configuration related stuff 
                jobs //jobs definitions for agenda.js 
                loaders // split the startup process into modules 
                models // database models 
                services // all the business logic
                subscribers //event handlers for async task
           }

layer architecture 
     the idea is to use the principle of separation of concerns to move the business logic away from the node.js api routes
     someday, you will want to use the business logic on a cli tool or not going far in a recurring task
     and make an api call from the node.js server to itself its not a good idea

dont put the business logic inside the controlers 
     you may be tempted to just use the express.js controllers to store the business logic of the application, but this quickly becomes spaghetti code
     as soon as you neet to write unit tests you will end up dealing with complex mocks for req or res express.js objects 
     its complicated to distingue when a response should be sent and when to continue processing in 'background' 

use a service layer for the business logic 
     this layer is where the business logic should live 
     its a collection of classes with clear purposes, following the solid principles applied to node.js 
     in this layer there should not exist any form of 'sql query', use the data access layer for that 
          move the code away from the express.js router
          dont pass the req or res obj to the service layer
          dont return anything related to the http transport layer like status code or headers 
               {
                    route.post('/',validator.userSignup, async (req,res,next) => {
                         const userDTO = req.body 
                         const {user, company} = await UserService.userSignup(userDTO);
                         return res.json({user,company});
                    })
               }
          this is how the service will be working behind the scenes 
          {
               export default class UserService() {
                    async userSignup(user) {
                         const userRecord = await userModel.create(user);
                         const companyRecord = await companyModel.create(userRecord);
                         const salaryRecord = await salaryModel.create(userRecord,companyRecord);
                         await emailService.startSignupSequence(userRecord);
                         return {user:userRecord, company: companyRecord};
                    }
               }
          }

use a pub/sub layer too
     goes beyond the classic 3 layer architecture proposed here but its extremelly useful
     the simple node.js that creates a user right now, may want to call third party services, maybe to an analytics service, or maybe start an email sequence 
     sooner than later, that simple create operation will be doing several things, and you will end up with 10000 lines of code in a single function 
     its better to separate responsibilities from the start so your code remains maintainable 

dependency injection 
     its a common pattern that will help the organization of the code, by injecting or passing through the constructor the dependencies of the class or function 
     by doing this way you will gain the flexibility to inject a 'compatible dependency' 
          code with no di {
               import userModel from '../models/user'
               import CompanyModel from '../models/Company'
               import SalaryModel from '../models/salary'

               class UserService {
                    constructor() {}
                    signup()
               }
          }
          code with manual di 
               export default class UserService {
                    constructor(userModel,companyModel,salaryModel) {
                         this.userModel = userModel;
                         this.companyModel = companyModel;
                         this.salaryModel = SalaryModel;
                    }
                    getUserId(userId) {
                         const user = this.userModel.findById(userId);
                         if (!user){
                              return {type: 'user', message: 'no user found'}
                         }
                         return user;
                    }
               }

react file structure 
     grouping by features or routes
          one common way to structure projects is to locate css,js and test together inside folders grouped by feature or route 
          the definition of a feature is not universal, and its up to you to choose the granulairty if you cant come up with a list of top-level folders
     
