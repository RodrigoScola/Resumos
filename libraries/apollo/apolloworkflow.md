#apollo #backEnd 

first create a type defs 
     const {gql} = require('apollo-server')
     const TypeDefs = gql`
          //types
          `
     add to the index.js files 
     {
          const {ApolloServer} = require('apollo-server')
          const typeDefs = require('./types')
          const resolvers = require('./resolvers')
          const TrackApi = require('dataSources/track-api')


          const server = new ApolloServer({
               typeDefs,
               resolvers,
               dataSources: () => {
                    return {
                         trackApi: new TrackApi() 
                    }
               }
          })
          server.listen().then({url} => {
               console.log(`server is running at ${url}`)
          })
     }
create a dataSources class
     its a class that fetches data from something
     this one fetches from an api
          {
               const {RestDataSource} = require('apollo-dataSource-rest')
               class TrackApi extends RestDataSource {
                    constructor() {
                         super();
                         this.baseUrl = ''
                    }
                    getTracksForHome() {
                         return this.get('tracks')
                    }
               }
          }
add an resolver file 
     const resolvers = {
          query: {
               tracksForHome: (parent, args,{dataSources},info) => {
                    return dataSources.trackApi.getTracksForHome
               }
          }
     }