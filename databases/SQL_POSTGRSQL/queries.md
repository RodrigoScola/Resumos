#sql 
queries is to retrieve information stored in a database.

if you dont want to query *, you just say the column names instead
     select name,id,title from table_name;

AS - if you want to display a column_name as something else, but you dont want to change the name altogheter, use as
     select name as movieName, id as movie_id from table_name;
DISTINCT - if you want the results only one time you can add the distinct keyword
     select distinct tools from inventory;
WHERE - if you want to add an if case for things, use the where keyword.
     select * from movies where imdb_rating > 8;
LIKE -  can be a useful operator when yo want to compare similar values.
     select * from movies where name like 'Se_en';
          will select the movies seven and se7en;
          if you use the _ it will match any characters 
          if you use the % will match any characters before or after the sign
               A% will match any words that start with A 
               %a will match any words that end with a 
               %a% will match any words that has an a in them
BETWEEN - the between operator is like an if statement that has a < and > clauses
ORDER BY -
     its often to list the data in the result set in a particular order.
     you can sort the result by alphabetically or numerically
     if you want to make it from z-a then you use the desc keyword
     if the list is desc, you can inverse it by using the asc keyword
          select * from movies where rating > 8
          order by rating desc;

LIMIT
     if you want to show only some of the results, you can use the limit keyword
          select * from movies
          limit 10;
     this limits only the first 10 results

case 
     create different outputs 
          select name, 
          case 
               when imdb_rating > 8 then 'Fantastic'
               when imdb_rating > 6 then 'Poorly received'
               else 'avoid at all costs
          end
          from movies;
     each when tests a condition and the following then gives the string if the condition is true
     the else gives the string if all of them are false 
     the case statement must end with end 
     