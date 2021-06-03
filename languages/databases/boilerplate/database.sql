
create database perntodo;

create schema private ;

create table private.stack (
    id serial primary key,
    content text not null,
    number int default 0,
    date date,
    question bool default false,
    name varchar(50) not null,
)