#sequelize 
simple insert queries 
     {
          const jane = await User.create({
               firstName: 'jane', lastName: 'Doe'
          })
     }
its also possible to define which attributes can be set in the create method. this can be useful if you create database entries based on a form which can be filled by a user 
     {
          const user = await User.create({
               username: 'alice',
               isAdmin: true,
          }, [fields: ['username']])
          //assuming the default of isAdmin is false
          console.log(user.username) //alice 
          console.log(user.isAdmin) // false
     }
     even if there is a thing that the user is admin, if its not set by the fields, the change wont persist 
select queries 
     select * 
     {
          const users = await User.findAll();
     }
     to select only some attributes 
          {
               const users = await User.findAll({
                    attributes: ['foo','bar']
               })
               //attributes can be renamed using nested arrays 
               const otherUsers = await User.findAll({
                    attributes: [['foo','User'], 'bar']
               })
          }
     select excluding a collumn 
          {
               const users = await User.findAll({
                    attributes: {exclude: ['baz']}
               })
          }
applying where clauses 
     Post.findAll({
          where: {
               authorId : 2
          }
     })
multiple checks can be passed 
     {
          Post.findAll({
               where: {
                    authorId: 2,
                    status: 'active'
               }
          })
     }
if you want to to an or || and    
     {
          const Post.findAll({
               where: {
                    [Op.and]: {
                         {authorId: 12},
                         {status: 'active'}
                    }
               }
          })
          const post = Post.findAll({
               where: {
                    [Op.or]: {
                         {authorId: 12},
                         {status: 'active'}
                    }
               }
          })
     }
update queries 
     {
          //change everyone without a last name to doe 
          await User.update({lastName: 'doe'}, {
               where: {
                    lastName: null
               }
          })
     }
delete queries 
     {
          await User.destroy({
               where: {
                    firstName: "joe"
               }
          })
     }
to destroy everything the truncate can be used 
     {
          await User.destroy({
               truncate: true
          })
     }
create in bulk 
     if you want to create more than one instance at a time
     {
          const captains = await User.bulkCreate([{name: "jack"},{name: "davy"}])
     }

ordering 
     the order takes an array of items to order the query by 
     ['title','DESC'] // will escape title and validate desc against a list of valid direction parameters 
     // will order by max(age);
     [sequelize.fn('max',sequelize.col('age'))]
     //will order by max(age), desc 
     [sequelize.fn('max',sequelize.col('age')), 'DESC'];

grouping 
     {
          User.findAll({
               group: 'name'
          })
     }
limit and pagination
     the limit and offset options allow you to work with limiting/pagination 
     {
          //fetch 10 instances/rows
          Products.findAll({limit: 10});
          //skip 8 instances/rows 
          Products.findAll({offset: 8});
          //skip 5 instances and fetch 5 after that 
          Products.findAll({offset: 5, limit: 5});
     }
utility methods 
     count 
          returns the counts of the occurences of elements in the database 
          {
               const amount = await Project.count({
                    where: {
                         id: 25
                    }
               })
          }
     max 
          returns the max of something in the table 
               await User.Max('age');
               await User.max('age',{ where {age: 20}});
     min 
          returns the min of something in the table 
               await user.min('age')
               await user.min('age',where: {age : 20});
     sum 
          returns the sum of something in the table 
               await user.sum('age');
     increment 
          await User.increment({age: 5}, {where:{ id: 1}})
     decrement
          await Usser.decrement({age: 5}, {where: {id : 1}})
finders ---------------------------------------------------------------------------------------------------------------------

findAll 
     returns all entries from the table 
findBy Pk 
     returns a single entry from the table, using the provided primary key 
          {
               const user = await User.findByPk(id);
               if (user == null) {
                    throw new Error('user not found')
               }
               return user
          }
findone 
     returns the first entry it finds 
          {
               const user = User.findOne({where: {title: 'myTitle'}})
               if (user == null) {
                    throw new error('not found');
               }
               return user 
          }
     