#database 
instead of having 20 columns in a table, use more tables so you dont need to search for all the information that you dont even need
also using 1 table can have duplicated data that is occupying space

restructuring a database to have more tables 
     to create a new table from an existing one, you can precede any query with create table new_table_name as then the query for the table that you want to grab the info to 
          create table new_table_name as 
          select distinct info_1, info_2 from old_table_name;
     then you can delete the old table columns 
          alter table old_table_name
          drop column info_1,
          drop column info_2;
     
