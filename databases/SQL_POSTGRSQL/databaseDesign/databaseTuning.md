#database 
group of activities used to optimize and homogenize the performance of a database. usually overlaps with query tuning, but refers to design of the database files 

i/o tuning 
     hardware and software configuraion of disk subsystems are examined: raid levels and configuration
     frequently joined tables and indexes are placed so that as they are requested from file storage, they can be retrueved in parallel from separate disks simultaneously

dbms tuning 
     setting the recovery interval, time needed to restore the state of data to a particular point in time, assigning the breaking up of work from a single query into tasks assigned to different processing resources 

database maintnance 
     includes backups, column statistics updates and defragmentation of data inside the database files 

constraints 
     NOT NULL 
          to add when creating a table 
               create table table_name (
                    id integer not null
               );
          alter column   
               sometimes it can already have null values so update it first 
                    update table_name set column_name = 'value' where column_name is null;
                    alter table table_name alter column column_name set not null;
     check constraints 
          sometimes you want to add a check on something to make it valid, to do so use 
               to add when creating a table 
                    create table table_name (
                         id int primary key,
                         name varchar(39) not null check(name is not 'hello there')                         
                    )
               altering a table 
                    alter table table_name
                    add check (len > 0);
          alter table table_name
          add check(column_name1 + column_name2 = column_name3);
     unique 
          unique value on that column for that table 
               when creating a table 
                    create table table_name (
                         name varchar unique
                    )
               altering a table 
                    alter table table_name 
                    add unique(column_name)
     primary key 
          automatically adds not null and unique
          when creating a table 
               create table (
                    id integer primary key
               );
          altering a table    
               alter table table_name
               add primary key(column_name)
     foreign keys 
          alter table table_name
          add foreign key(column_name)
          references parent_table_name(column_name)
     foreign keys cascading changes 
          when you have many tables its hard to keep track, deleting rows and updating them, sql has that covered on [action] cascade
               on delete cascade will delete every child table 
          
