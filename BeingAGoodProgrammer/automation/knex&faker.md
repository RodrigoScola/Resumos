#database 
# Knex & Faker

##### If you want to populate a test application with users, this is an library to create new information without having to create thousands of users

## Adding users using knex and faker 

Being able to quickly whip prototypes an change them on the fly is part of what makes software so fun to build 
before a project has any users it can be hard to see how the application will function with real data, thats where knex and faker comes in

### Setting up knex 

```command line tool
npm install --save knex 
npm i -g --save pg 
```

* create the migrations and seeds folder  *(small changes to a database schema)*

* create a file named knexfiles.js in the root directory where will configure knex, this file is important because it allows you to configure different databases to use in different environments 


```javascript
module.exports = {
     development: {
          client: 'postgresql',
          connection: "postgres://localhost:port/dbname',
          migrations: {
               directory: __dirname + '/migrations'
          },
          seeds: {
          direcotry: __dirname + '/seeds'
          }
     }
}
```
> this file says that if you are using the dev enviroment, knex should connect to the database you specified in the connection section, and look in the migrations and seeds directories when you want to run either of those

## Create a database table 

**in the migrations folder** each migration file should contain instructions for making a change to the database schema aswell as instructions for doing that change
in order to make the first migration file, **run the command:**

     knex migrate: make initUsers --env development

what knex will create is something like 

```javascript

exports.up = function (knex, Promise) {

}
exports.down = function(knex, Promise) {

}

```
* creates a file beginning with a timestamp so that when you run itll know which order to execute them in 
* `exports.up` - The new changes you want

* `exports.down` is the instructions of how to undo those changes 

```javascript
exports.up = async function (knex,Promise) {
     await knex.schema.createTable("users",table => {
          table.increments('user_id').unsigned().primary();
          table.string('email').unique().notNullable()
          table.string('first_name').notNullable();
          table.string('last_name').notNullable();
     })
}
exports.down = async function(knex, Promise) {
     await knex.schema.dropTable('users');
}
```
> creating a table called users where each user has an email, first name and last name 

##### to create the table 

     knex migrate:latest --env development 

--------------

#### Seeding the database with 1000 users 

```javascript
const faker = require('faker');

const createFakeUser = () => ({
     email: faker.internet.email(),
     first_name: faker.name.firstName(),
     last_name: faker.name.lastName()
})
exports.seed = async function (knex,Promise) {
     const fakeUsers = [];
     for(let i = 0; i < 1000; i++) {
          fakeUsers.push(createFakeUser());
     }
}
```
