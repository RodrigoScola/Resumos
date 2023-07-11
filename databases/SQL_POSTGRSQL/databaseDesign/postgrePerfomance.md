#database 
acid 
     atomicity
     consistency
     isolation
     durability

acid is a set of propertis of database transactions intended to guarantee data validity despite errors, power failures and other mishaps

characteristics
     atomicity 
          transactions are often composed of multiple statements. atomicity guarantees that each transactions is treated as a single unit 
     consistency 
          a transaction can only bring the database from one valid state to another, maintaining database invariants. any data written to the database must be valid according to the definad rules. 
     isolation 
          transactions are often executed concurrently, isolation ensures that concurrent execution of transactions leaves the database in the same state that would have been obtained it the transactions were executed sequentially.
     durability
          guarantees that once a transaction has been committed, it will remain committed even in the case of a system failure 

base 
     basically available 
          the system is guaranteed to be available for querying by all users
     soft state 
          the values stored in the system may change because of the eventual consistency model
     eventually consistent 
          as data is added to the system, the systems state is gradually replicated across all nodes

index
     when working with databases they can become massive very quickly. without organization large databases can become nothing but useless information 
     an index is an organization of the data in a table to help with performance when seraching and filtering records. a table can have zero, one or as many indexes as it wants
to see what indexes are on a table 
     select * from pg_Indexes where tablename = 'table_name';
     pg_Indexes is a biult in view in postgresql
          you can get 
               schemaname , tablename , indexname , tablespace , indexdef;

what is the benefit of an index 
     it allows you to organize the database structure in such a way that it makes finding specific records much faster

to truly see the benefits of an index you will need a big database

to see how much rows it queried and the execution time, use explain analyze and the query 
     explain analyze select * from tableName;
when you use the explain analyze, it doesnt return the results in itself, just the information

biulding an index 
     the create index keywords can be used to create an index on a column of a table
     say that you wanted to create an index called customers_user_name_idx on the customers table on the user_name column 
          create index customers_user_name_idx on customers (user_name);
     but nothing comes without a cost, it increases runtime for any modification to the table data impacting the user_name column.

what if you have two or more columns that are always associated togheter? you can combine them to make a more appropriate index 
create index customers_first_and_last_name_idx on customers (first_name,last_name);
if you make the index and query it again it makes it like 10x faster

dropping an index 
     drop index if exists customers_city_idx;

if indexing makes everything faster, why not index every column?
     because everything has a cost, they decrease the time in filtering but they slow down insert, update and delete statements
     when you insert a record into a non-indexed table the database server adds the records into the ond of the table
     if you add the record in a table that has an index, the index itself must be modified by the server aswell
     when you write a single statement to modify the records. the server will have to modify every index that would be impacted by this change
     the key to indexes is to plan on when an index will help you and stay away from them when they will get in the way 

if you want to examine the size of a table you would run 
     select pg_size_pretty (pg_total_relation_size(tablename));

when should you add an index 
     when the benefits of searching outweigh the burdens of storage size and insert/update/delete speed 
     dont do it if the table gets regulars inserts/updates/deletes
     the higher the percentage of a table that you are returning the less useful an index becomes

partial indexes 
     when you dont need every information in a table, you can create a partial index to filter the data;
          create index users_user_name_internal_idx on users(user_name)
          where email_adress like '%@wellsfargo.com';
     to use the index, you will need to query with the same thing as you created the index
          select * from users 
          where user_name like '%@wellsfargo.com';
     you can also user order by when creating an index, just add asc or desc to the table_name
          create index super_index on users(user_id desc);
     
clustered index 
     when a clustered index is created for a table, the data is physically organized in the table structure to allow for improved search times.
     when the system creates, alters or refreshes a clustered index, it takes all the records in the database table that are in memory and rearranges them to match the order of the clustered index
     when insertind data into a table with a clustered index on other systems, they will place the new records and altered records in their correct location in the datavase order in memory,
     postgresql keeps modified records where they are and adds new records to the end, regardless of sorting, if you want to maintain the order you must run the cluster command again on the index when there have been changes 
          cluster products using products_product_name_idx;
     if you already established what index should be clustered you can tell the system which table to apply the cluster on
          cluster products 
     if you want to cluster every table in the database that has an index you can just 
          cluster;

non clustered index 
     you can create many indexes on a table, but only can be a clustered index 
     non-clustered indexes have records of the columns they are indexing and a ponter back to the actual data in the table
     if you are searching for just the records in the non-clustered index, the system will simply seek for the query results and return them 

index-only scans
     the lookup that a non-clustered indx does back to the table after finding records has a cost. if referencing a small number of records this cost is negligible, however it can add up if many records are needed. if all columns being used in a query are part of an index then no secondary lookup is done 
          create index customers_name_idx on customers (last_name,first_name);
     this will improve the speed when searching for customers by last_name and first_name, but what happens if we want the email_address aswell?
     for each record found, it will use the index to find a pointer then look up the email_address matched to that record found in the index to return the last_name, first_name, email_address

combining indexes 
     things to keep in mind
          a single multicolumn index is faster than combinin indexes 
          a multicolumn index is less efficient than a single indexes in cases where a single index is needed 
          if saerches are most often for only one of the columns, that should be your index 
          if searches are most often last_name, first_name then you should have a multicolumn index 
          if the sarches are frequent and evenly spread among first_name alone, last_name alone, and the combination of the two, thats a situation where you would want to have all three indexes

indexes based on expressions 
     an index is not limited to just a column reference, it can use the result of a funtion or scalar expression computed from one or more columns
     if you want to ensure the company_name in a manufactures is unique you can add the unique option to make a unique index constraint on the results on your index
          create unique index unique_manufacture_company_name_idx on manufacture(lower(company_name));

partial indexes 
     sometimes a table will be too big even for an index, and when you want to search through some type of information more than others, you can add a partial index for that
          create index index_name on table(column_name)
          where condition

you can order by indexes 
     to specify the order of an index, you can add on the order you want your index sorted when you create the index, 
          create index indexname_sorted on table_name(date_time desc, column_name)
     