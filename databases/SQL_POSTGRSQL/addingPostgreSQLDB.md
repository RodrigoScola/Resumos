#sql #database a
creating a postgresql database
     installing postgresql
          npm i -g postgresql
creating a database
     postgres=> CREATE DATABASE dbname;

connecting to the db 
     postgres => \c dbname;

connecting to a postgres database from node.js
     create a file and set up the configuraion of the connection
          const Pool = require('pg').Pool;
          const pool = new Pool({
               user: 'me',
               host: 'localhost',
               database: 'dbname',
               password: 'pass',
               port: 'portname',
          }) // in a prod env, you would want to put the config details in a separate file with restrictive permissions
          const getUsers = (req,res) => {
               pool.query('query that you want',(err,result) => {
                    if (err) {
                         throw err
                    }
                    res.status(200).json(results.rows);
               })
          }
          and exporting it you can reuse the same functions as 
               const db = require('./queries');
               await db.getUsers(req,res);


node-postgres 
     is a collection of node.js modules for interacting with the psql database. it has support for callbacks promises, async, connection pooling, prepared statements, cursors, streaming results....

suggested project structure 
     create a file within it and make all interactions with the database go through this file 
          allows the project to adjust to any changes to the node-postgres api without having to trace down all the places i directly use node-postgres in the application 
          allows to have a single place to put logging and diagnostics around the database 
          allos to make custom extensions to the database access code & share it throughout the project 
          allows a single place to bootstrap & configure the databse 
               {
                    example of a query 
                         {
                              const { Pool } = require('pg');

                              const pool = new Pool();

                              module.exports = {
                                    query: (text, params, callback) => {
                                         return pool.query(text,params,callback);
                                    }
                              }
                    //using it
                              app.get('/:id',(req,res,next) => {
                                   db.query('queryhere',[req.params.id],(err,result) => {
                                        if (err) {
                                             return next(err);
                                        }
                                        res.send(result.rows[0]);
                                   })
                              }) 
                         }
               }
          