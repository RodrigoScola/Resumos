#javascript #sequelize 
to start a connection, you need to install 
     sequelize pg pg-hstore 
     const {Sequelize} = require('sequelize');
     const sequelize = new Sequelize('database','user','pass', {
          host: 'localhost'
          dialect: 'postgres',
          port: 5432
     })
     to authenticate the connection
          sequelize.authenticate()
to close the connection 
     sequelize.close();
           
model ----------------------------------------------------------------------------------------------------------------
     they are the essence of sequelize, a model is an abstraction that represents a table in the database. in sequelize, its a class that extends model
     a model has a name, this name does not have to be the same name of the table it represents in the databse

model definition 
     they can be defined in 2 ways 
          calling sequelize.define(modelname, attributes,options)
          extending a Model and calling init(attributes,options)
     after a model is defined, its available within sequelize.models by its model name 
     using sequelize.define 
          {
               const {Sequelize, DataTypes} = require('sequelize');
               const sequelize = require('./db');
               const User = sequelize.define('User',{
                    firstName: {
                         type: DataTypes.STRING,
                         allowNull: false
                    },
                    age: {
                         type: Datatypes.Number,
                         //allowNull defaults to true 
                    }
               }, {
                    //other model options go here
               })
          }
     using extending model 
          {
               const {Sequelize, DataTypes, Model} = require('sequelize');
               const sequelize = require('./db');
               class User extends Model {};
               User.init({
                    //model attributes are defined here 
                    firstName: {
                         type: DataTypes.STRING,
                         allowNull: false
                    },
                    age: { type: DataTypes.Number }
               }, {
                    //other model options go here
                    sequelize: sequelize,
                    modelName: 'User'
               })
          }
table name inference 
     in both methods above, the table name (Users) was never explicitly defined. but the model name was given (User)
     by default, when the table name is not given, sequelize automatically pluralizes the model name and uses that as the table name
enfocring the table name to be equal to the model name 
     you can stop the auto-pluralization performed by sequelize using the freezeTablename: true. this way, sequelize will  infer the table name 
     to be equal to the model name without any modifications 
     you can change on each table  {
          sequelize.define('User',{
               //attributes
          }, {
               freezeTableName: true
          })
     }
     or you can do it globally when the instance is created 
          {
               const sequelize = new Sequelize('things:',{
                    define: {
                         freezeTableName: true
                    }
               })
          }
providing the table name directly 
     sequelize.define('User', {
          //attributes
     }, {
          tableName: "tableName"
     })
model sync 
     what if the table doesnt exist in the databse, what if exists but has different columns, less collumns or any difference
     {
          await User.sync({force: true});
     }
     sync all the models at once 
          {
               await sequelize.sync({force: true })
          }

dropping tables
     to drop the table related to a model 
          await User.drop();
     to drop all tables 
          await sequelize.drop();
          
database safety check 
     sequelize accepts a match option as an additional safety check, which receives a regExp 
          {
               //this will run .sync() only if database name ends with _test
               sequelize.sync({force: true, match: /_test$/});
          }

timestamps     
     by default, sequelize automatically adds the fields createdAt and updatedAt to every model, using the DataTypes.DATE 
     those fields are automatically managed as well - whenever you use sequelize to create or update something, those fields will be set correctly 
     you can deactivate them by using 
     {
          sequelize.define('User',{
               //attributes
          }, {
               timestamps: false
          })
     }
     its also possible to enable only one of createdAt/updatedAt and provide a custom name 
     {
          class foo extends Model{};
          Foo.init({//attributes
          }, {
               sequelize, 
               timestamps: true,
               createdAt: false,
               updatedAt: 'updatedTimeStamp'
          })
     }
defaultValues 
     by default, the value is null but you can change in the definition 
     {
          sequelize.define('User',{
               name: {
                    type.DataTypes.STRING,
                    defaultValue: 'john Doe'
               }
          })
     }     
datatypes 
     string 
          DataTypes.STRING // varchar(255)
          DataTypes.STRING(1234) //varchar(1234)
          DataTypes.STRING.BINARY // varchar binary 
          DataTypes.TEXT // text 
          DataTypes.TEXT('tiny') //tinytext 
     numbers 
          DataTypes.INTEGER            // INTEGER
          DataTypes.BIGINT             // BIGINT
          DataTypes.BIGINT(11)         // BIGINT(11)
          DataTypes.FLOAT              // FLOAT
          DataTypes.FLOAT(11)          // FLOAT(11)
          DataTypes.FLOAT(11, 10)      // FLOAT(11,10)
          DataTypes.DOUBLE             // DOUBLE
          DataTypes.DOUBLE(11)         // DOUBLE(11)
          DataTypes.DOUBLE(11, 10)     // DOUBLE(11,10)
uuids 
     use DataTypes.UUID, it becomes the uuid data type for postgresql, it can generate uuids automatically, simply use DataTypes.UUIDV1 or 
     DataTypes.UUIDV4 as the default value 
          {
               type: DataTypes.UUID, 
               defaultValue: DataTypes.UUIDV4
          }
taking advantage of models being classes
     the sequelize models are es6 classes 
          {
               class User extends Model {
                    getFullName() {
                         return [this.firstName, this.lastName].join(' ');
                    }
               }
               User.init({
                    firstName: {
                         type: Sequelize.TEXT,
                         defaultValue: 'john'
                         },
                    lastName: {
                         type: Sequelize.TEXT,
                    }
               },{sequelize})
          }
creating an model instance 
     although a model is a class, you should not create instances using the new operator, use the build method 
     {
          const jane = User.build({name: 'jane'});
          console.log(jane instanceof User) // true 
     }
the create method 
     sequelize provides the create method, combines build and save methods in a single method 
     {
          const jane = await User.create({name: 'jane'})
     }
     jane is on the database now 

updating an instance 
     if you cahnge the value of some field of an instance, calling save again will update it accordingly 
          {
               const jane = await User.create({name: 'jane'});
               jane.name = 'Aida';
               await jane.save();
          }
          you can update several fields at once with the set method 
          {
               jane.set({
                    name: 'ada',
                    favoriteColor: 'blue'
               })
               jane.save()
          }
          save() will persist any other changes that have been made on this instance, not just those in the previous set call 
     if you want to update a specific set of fields, you can use update 
incrementing and decrementing integer values 
     {
          await jane.increment({
               "age" : 2,
               "cash": 100,
          });
     }
