#apollo 
setting up apollo server 
     first you need to npm install apollo-server and graphql
     then you need to module import the apollo server and create an server with new ApolloServer({schemaHere});
     {
          const {ApolloServer} = require('apollo-server');
          const serverSchema = require('./schema');

          const server = new ApolloServer({serverSchema})
     }

defining schema types   
     every graph uses a schema to define the types of data it includes, the schema for an online bookstore might include the following types 
     {
          type Book {
               title: String,
               author: Author
          }
          // An author has a name and a list of books 
          type Author {
               name: String,
               books: [Book]
          }
     }
     the schema defines what types of data a client can read and write to the graph 
     the schema structure should support the actions that the clients will take, for example 
          fetch a list of all the things
          fetch a specific thing by id 
          log in the user 
          book something for the user 
          cancel previously booked thing for a booked in user 
     to define a schema 
          {
               const { gql} = require('apollo-server');
               const serverSchema = gql`
               //the schema will be here 
               `;
               module.exports = serverSchema;
          }
     obj types 
          most of the definitions in a graphql schma are object types. each object type you define should represent an obj that an application client might need to interact with
     {
          const typeDefs = gql`
          type Launch {
               id: ID!
               site: String
               mission: Mission 
               rocket: Rocket 
               isBooked: Boolean!
          }
          `
     }
     the Launch type has a collection of fields, and each field has a type of its own, a field type ccan either be an obj type or a scalar type. 
     Scalar types is an primitive type like Bool, Int , String, Float...
     an ! after a declared field means that the field can never be null

     you can make it take an argument. when you query for a field taht takes an argument, the fields value can vary depending on the provided arguments value 

the query type 
     weve defined the objects that exist in the graph, but clients dont yet have a way to fetch those obj. to resolve that, the schema needs to define queries that clients can execute against the graph 
     you define the graphs supported queries as fields of a special type called the query type