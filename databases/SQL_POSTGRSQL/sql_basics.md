#database #sql 
to select a result from a table in sql
    SELECT {property} FROM {tableName};
to just select an data 
    SELECT 'datainfo';
each time you run your code, the data will be added and not changed
to select more than 1 data  
    SELECT name , age FROM people;
to select every property use the *
    SELECT  * FROM people
if you want a certain number of results
    SELECT * FROM people LIMIT 10;
you can select every distinct thing in a collumn
    SELECT DISTINCT language FROM films
to count the number of rows 
    SELECT COUNT (*) FROM people 
WHERE is a statement that will only return true where the where is true 
    select dateYear from films where dateYear = 1809
AND is a statement that returns true if where and and returns true
    select dateYear from films where dateYear = 1809 and film = 'good';
or is the opposite of and, because is one or the other
instead of using and for numeric values in range, use between 
if you have a lot of or, that can be cumbersome, then use the in operator
    select name
    from kids
    where age in (2,4,5,6,7,8);
when you want to search for null values use the null notation 
to match patterns you use like and not like
you can have functions that can return the value such as
    avg (average);
    max (max value);
    min (minimum value);
    sum (sum of all values);
you can perform basic operations by using signals
    +
    -
    *
    /
when you are asking the same thing but for different collumns as
    select max(budget), 
            max(release_year)
    from films
    that can give you 2 collumns with the name max, to make the code more understandable, you can use aliasing by putting as at the end of it
        select max(budget) as maxBudget
                max(release_year) as maxReleaseYear
        from films
you can sort data by using order by something adn desc or asc
you can sort by multiple columns using sort it will sort byt the first column specified, then sort by the next and so on
you can group by a collumn
you cant use aggregate , so you use having 

joining two tables

first you select what you want

from the first table

then you use inner join {second table} 

then you match the content of both tables for example cities.country.code is the same data as countries.code

instead of using c.code = e.code , you can just use 
    using(code);
you can join the same database twice, you can do that to compare stuff
    select p1.size as size2019,
           p2.size as size2020
    from populations as p1
        inner join populations as p2
            on p1.code = p2.code
using if and else 
    if = when
    then = if when is true
    else = else
    end = end of command


how a left join differs from an inner join 
in an inner join, it just joins the collumns that have the same value
left join takes the column on the left and combines with the right, but the values that dont match, show missing 
duplicate rows will happen the same thing, adding a row on the final product
    select p1.country , prime_minister , president 
    from prime_minister as p1 
    left join presidents as p2
    on p1.country = p2.country

full join
    select * 
    from left_table
    full join right_table 
    using (id);

cross join joins every possible thing
    select prime_minister , president 
    from prime prime_minister as p1 
    cross join as p2 
    where p1.continent in ('North America', 'Ocenania')

set theory venn diagrams 

union = includes every record in both tables
    left    right 
    1       1
    2       4
    3       5
    4       6
      union
        1
        2
        3
        4
        5
        6
union all= includes every record in both tables and duplicates the records that are in both tables
    left    right
    1       1
    2       4   
    3       5
    4       6
    union all
        1
        1
        2
        3
        4
        4
        5
        6
    select prime_minister as leader , country
    from prime_minister as pm
    union 
    select monarch , country
    from monarchs
    order by country

intersectional is just whats in the left and the right one
    left    right
    1       1
    2       4
    3       5
    4       6
    intersectional
        1
        4

intersect looks for key fields and not just the same thing

except only in one table but not the other
    left    right 
    1       1
    2       4
    3       5  
    4       6
    except
    2
    3

semi joins 
    select president , country , continent
    from presidents
    where country in (select name from states where indep_year < 1800);
        this selects the president, country and continent where the country was freed before 1800

the semi join chooses the record in the first table where the conditions are met in the second table 

anti-join
    is the same thing but instead of joining, it selects the inverse

case
contains a when , then and else statement, finished with end
    case when x = 1 then 'a'
        when x = 2 then 'b'
        else 'c' end as new_column
        
case when and then some 

add multiple logical conditions to your when clause
 select season , date 
    case when hometeam_id = 9857 and homegoal > awaygoal then 'bologna win'
         when awayteam_id = 9857 and awaygoal > homegoal then 'bologna win'
         end as outcome 
 from matches_italy

case when with aggregate functions 
    case statements are great for 
        categorising data
        filtering data
        aggregating data

        select season , count (case when hometeam_id = 9260 and homegoal > awaygoal then id end) as home_wins 
        from matches_italy;

you can round numbers with the round function and specifying the number to round to 
    select winter_games 
    round(count(case when hometeam_id = 9012 and homegoal > awaygoal then 'hello world' end as outcome),2)
    from games;

percentages 
    select season,
    avg (case when hometeam_id = 8455 and home_goal > awaygoal then 1
              when hometeam_id = 8455 and home_goal < awaygoal then 0
              end ) as oct_wins
    avg( case when awayteam_id = 8455 and away_goal > home_goal then 1 
              when awayteam_id = 8455 and away_goal < home_goal then 0
              end ) as pct_awaywins
    from match 
    group by season

CODECADEMY

sql for backEnd Development

what is a database
    database is a set of data stored in a computer. this data is usually structured in a way that makes the data easily accessible

what is a relational database? 
    is a type of database. it uses a structure that allows us to identify and access data in relation to another piece of data in the database

tables
    tables can have hundreds, thousands or millions rows of data, they are called records 
    they can also have many columns of data. they are labeled with a descriptive name (age, name, height) and have a specific data type;

that is an RDBMS
    relational database management systems
    is a program that allows you to create, update,administer a relational database.

statements
    is a text that the database recognizes as a valid command, they end in a ;

to create a table 
    create table table_name (
        colName dataType,
        colName2 dataType,
        colName3 dataType...
    );

insert 
    the insert statement inserts a new row into a table;
    you can use the insert statement when you want to add new records
        insert into tableName (id,name,age)
        values (1,'justin Bieber', 22);
            insert into is a clause that adds the specified row or rows
            (id, name , age) is a param identifying the columns that data will be inserted into 
            values is a clause that indicates the data being inserted
    you have to manually do the first value (insert into tableName (id,name,age)) for every entry if you are hardcoding it

alter 
    the alter table statement adds a new collumn to the table 
    to add a new collumn or row you add 
        alter table table_name
        add column/row column/row name dataType;

update  
    the update statement edits a row in a table
    you also use set to change the information to 
    if you want to query you can use the where statement
        update table_name
        set row_name = 'thingYouWantToTest'
        where id = 4;
    
delete
    deletes one or more rows from a table, you can use the statement when you want to delete existing records.
        delete from table_name
        where row_name is null;
            this deletes every row that the row_name is null

constraints 
    that add information about how a column that can be used are invoked after specifying the data type for a column
        create table table_name (
            id integer primary key,
            name text unique,
            date_of_birth text not null,
            date_of_death text default 'not applicable'
        );
    primary key is a constraint that if someone were to insert a row with an identical value to a row, it will result in a constraint violation
    unique - a table can have many unique collumns but only one primary key
    not null - they need to have a value
    default - if a value is not met, the following value should be the default one

PostgreSQL data types
    boolean - true or false;
    varchar or varchar(n) - text with variable length
    date - calendar date
    integer - whole number 
    numeric(a,b) - decimal with total digits (a) and digits after the decimal point (b)
    time - time of day 

    to create a table with those types of data
        create table volunteers (
            id integer, 
            name varchar,
            hours_available integer,
            phone_number varchar(12),
            email varchar,
        );
improving tables with constraints 
    sometimes weve planned the data model and inserted data before realizing that the model could benefit from the addition of a constraint
    if that happens you just need to alter the table and alter the column to set it to the constraint
        alter table table_name
        alter column column_name set not null;
    if you later decide that you dont want it you just drop the constraint
        alter table table_name
        alter column_name drop not null;
    but if you alter the constraint and there was some null values, sql will throw an error, so first you need to add something and then change the constraint
        update table_name
        set title = 'TBD'
        where title is null;

        alter table table_name
        alter column column_name set not null;
    if you want to add an unique constraint
        alter table table_name
        add unique(thing[,thing2[,thing3...]]);

intro to check constraints
    in some situations you dont every value to be valid, and even with the base constraints that might not be enough 
        for example you want an email, but sql will accept everything that is a text, meaning that it accepts asdb, 123, butts...
        thats why you use the check 
            alter table table_name
            add check (count ( thing ) > 10 );
        if you and thing1 and thing2 to be true you use the and, if you need at least one of them to be true, you use or
            alter table table_name
            add check(estimated_length > 0 and estimated_length < 120);

            alter table table_name
            add check(estimated_length = 12 or estimated_length = 1);
        
primary keys 
    an important part of biulding a relational data model requires defining relationships between tables. Primary keys are essential to defining these relationships
    they are a collumn or set of columns that uniquely identifies a row within a database table
    implementing a primary key is simultaneously enforcing an unique and not null constraints through the whole database

    to add an primary key after the table was created
    alter table attendees
    add primary key (id);

foreign keys 
    when discussing relations between tables, you may see the terms parent table and child table to describe two tables that are related. more specifically, calues inserted into child table must be validated by data thats already present in a parent table
    this prop that ensures data can be validated by referencing another table in the data model is called referential integrity, it can be enforced by adding a foreign key on the child table that references the primary key of a parent table
    if the prent table doesnt contain the data a user is attempting to insert PostgreSQL will reject the insert or update and throw an error.
        alter table table_name 
        add foreign key (talk_id)
        references another_table_name (id)
    suppose that we now want to enter a registration for talk_id = 100, which does not yet exist in the talks table. trying to insert a registration for this yields an error because there is not a corresponding entry in talks to reference yet. the error lets us know that the constraint is working 
        insert into registrations values (100,1,'2020'08-15 9:00:00',1);
            SQL Error [23503]: ERROR : insert or update on table "registrations"
            violates foreign key constraint "registrations_id_fkey"
            Detail: Key (talk_id)=(100) is not present in table "talks"

by default a foreign key will prevent everyone from deleting or updating a row of a parent table that is referenced by a child table.
you can circumvent that by adding an cascade clause( on update cascade, on delete cascade) cause the updates or deletes to automatically be applied to any child tables
for example suppose wed like to set up the databse to automatically unregister attendees from a talk thats been cancelled. to do this we could apply on delete cascade to the foreign key constraint
    alter table registrations
    add foreign key (talk_id)
    references talk (id) on delete cascade
when we try to delete a value from talks, we notice that all registration for talk_id = 1 are removed aswell. this preserves referential integrtity by removing any row associated with the talk

queries     
