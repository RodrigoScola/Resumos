#sql #database 
adding a user 
    crete user username with password 'passwordname'
altering the password
    alter user username with password 'newpasswordname'
acess to properties on the database
    grant delete on loan to sgold
    you can grant all privileges 
        grant all privileges on tablename.* to username
you can remove acess
    revoke delete from tablename from username
    revoke insert from tablename from username
revoking all priveleges
    revoke all privileges on finances from username
revoking users from groups 
    revoke groupname from username
making someone the owner
    alter table loan owner sgold
grant usage on a schema
    grant usage on schema schemaname to username
you can create groups 
    creat group groupname
    grant usage on shcema public to family
    grant select, insert , update, delete on all tables in schema public to family
add users to group 
    alter group family add user username

to create a database
    create database db_name;
tables 
    variable number of rows
    fixed number of collumns (structure can be altered)
    columns have a specific data type
    each row is a record
    to create a table 
        create table table_name (
            column_name column1_datatype [col1_constrains],
            column_name column2_datatype [col2_constrains],
        )
            example
                create table records (
                    id serial primary key,
                    name text not null,
                    mascot_name text
                )
                create table topic (
                    id serial primary key,
                    description text not null
                );
two tables and a foreign key connection
    you can add a reference to another table by 
    creating a name, explaining what datatype you want and what field you want to take
        example
            business_type_id integer references business_type(id)

creating schemas
    schemas are different variations of the same database
        one can modify their schema without modifying others,
    a database can have multiple schemas
    the public schema is the default schema in PostgreSQL
    to create a schema 
        create schema schema_name;
        create schema division1;
        create table  division1.school (
            id serial primary key,
            name text not null,
            mascot_name text,
            num_scholarshipts integer default 0
        )
data categoris in postgresql
    text 
    numeric 
    temporal
    boolean
create table project (
    id serial primary key,
    is_franchise boolean default false,
    franchise_name text default null, 
    project_state text,
    project_county text 
    congressional_district numeric,
    jobs_supported numeric
    )

using text in PostgreSQL
    create table book (
        isbn char (13) not null,
        author_first_name varchar(50) not null,
        author_last_name varchar(50) not null,
        content text not null
    )
restriction can be imposed on column values
    char ( n ) <- is the exact number of characters stored
    varchar ( n ) <- n is the maximum number of characters stored

    chars with a single character can be written with char or char(1)
    
integer types 
    smallint small-range integer -32768 to 32767
    integer typical choice of int -2147483648 to 2147483647
    bigint large-range integer      fuck ton of numbers
    serial autoincrementing integer 1 to 2147484647 <- each time that the thing is called the number increments
    bigserial large autoincrementing integer 1 to 9223372036854775807
    
    decimal (precision, scale) 

the boolean datatype
    true state
    false state
    null (unknown state)

temporal datatype 
    timestamp represents a date and time 2010-09-21 15:47:16
    date represents a date 1972-09-02
    time represents a time 05:40:02


references
    are a way to add data when that condition is met 
        you add the name that you want and the datatype you want, add a references tag, add the table you want to take from and the thing you want to take in parenthesis
        place_id char(5) references place(zip_code)

altering a table 
    adding content
        first you type alter table 
            then specify the table name  and then the name of the collumn and the datatype
    alter table client add contact_id integer 
    adding a foreign key constraint
        first you type alter table
            then you specify the table that you want to alter
            then type add constraint
                specify the constraint name and type foreign key and the name , references contact (id);
    alter table client add constraint fk_c_const foreign key (contact_id) references contact(id);
    removing content    
        type drop collumn and collumn name
            drop collumn name 

