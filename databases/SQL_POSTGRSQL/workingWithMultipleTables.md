#database #sql 
instead of using multiple tables to do anything you can work with multiple tables at the same time
     what not to do 
          {
               select * from orders 
               limit 5;

               select * from subscriptions
               limit 5;

               select * from customers 
               limit 5;
          };
combining tables 
     joins

     to combine two tables you can use the join and a thing that links them togheter like an id or something
          select * from customers
          join orders 
               on orders.customers_id = customers.customer_id;
     the on there is not for every column, just one 
          select name, age, sex from customers
               join orders 
                    on orders.customer_id = customers.customer_id
     inner joins
     
     what if a result is not in a table? thats where inner join comes in
          it removes the collumns that doesnt have compatible values with another table
               {
                  https://content.codecademy.com/courses/learn-sql/multiple-tables/inner-join.gif  
               }
     left joins
     if the first column doesnt have a value on the second column, will have a null of undefined value
     however if it does have a value, it will behave like an inner join
          select * from table1
               left join table2
                    on table1.c2 = table2.c2;
     cross joins
          sometimes we want to combine all rows of one table with all rows of another table
               for instance if we had a table of shirts and a table of pants, we might want to know all the possible combinations to create different outfits 
                    select shirts.shirt_color, pants.pants_color from shirts
                    cross join pants;
               notice that it doesnt require an on statement, because youre not really joining any collumns
          thats because is returning every possible combination {
                    white     light denim
                    white     black 
                    grey      light denim
                    grey      black
                    olive     light denim
                    olive     black
          }

union 
     sometimes you just want to stack one dataset on top of another   
          select * from table1
          union 
          select * from table2;

with 
     sometimes we want to combine two tables but one of them is the result of another calculation 
          the marketing department might want to know more about the customers. they might want to know how many magazines each customer subscribes to.
          {
               select customer_id, count(subscribtion_id) as subscriptions
               from orders
               group by customer_id
          };
     the  query is good but that way, they wont know the names or more information about each customer
     to join the results of the query with the customers table you can use an with clause
          with previous_results as (
               select customer_id, count(subscribtion_id) as subscriptions
               from orders 
               group by customer_id
          )
          select * from previous_results
          join customers
               on previous_results.customer_id = customer.id;
          then you will have all of the data nice and ready
     