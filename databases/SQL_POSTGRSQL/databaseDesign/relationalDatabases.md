#database 
what is an relational database?
     is a database structured to recognize relations among stored items of information 
     it stores information in tables, where each table has its own rows and columns
     the difference between a relational one and not is the fact that there are relashionshipts between tables
design process
     define the purpose of the database 
     figure out the primary key for each table
          make sure each row has a unique key
          must have a value, it cannot be null
relashionships between tables 
     one to one - one row is link to one row to another table 
     one to many - one row is linked to many rows
     many to many - many rows is linked to many rows on another table
atomic values  
     everything in a database should be atomic
          an atomic value should not be able to be broken down into smaller pieces
               full name - not atomic
               first name, second name - atomic 

primary keys dont need to be just one per row, you can have multiple per row
you can get a lot of information about a database by using 
     select * from information_schema.key_column_usage;
          can get tablename column name, ordinal position, has unique constraint

sometimes you want some information about in a table but want it automatically
     create table memes (
          id int,
          name varchar(50),
          uuid varchar(50) references another_table_name(uuid)
     );

relashionships 
     one to one 
          one row of a table is exactly one row of another table and vice versa
               id char(20) references driver(id) unique
     one to many 
          one row of a table references a lot of other tables
               in a book column
                    title, author, date, publisher, isbn
               on a chapter column
                    title, content, book_isbn, id
               on a page column
                    title, content, book_isbn, chapter_id
     many to many 
          many tables references many other tables
               authors, books, students that want to go to a class, but that class has a lot of students
          