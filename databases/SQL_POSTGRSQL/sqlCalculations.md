#sql #database
to get the number of entries you use the count operator 
     select count(*) from table_name;
          will return the length of the table_name
if you want to return the total number in a column, use sum
     select sum(downloads) from fake_apps;
          //returns 123123
if you want the maximum number in a row, or the minimum number, use max() or min();
     select max(downloads) from fake_apps;
          //returns the app with most downloads
     select min(downloads) from fake_apps;
          //returns the app with the minimum amount of downloads;
if you want to calculate the average of a collumn
     select avg(column_name) from fake_apps;
some values will come back as floats, if you want to round them, use the round();
     takes 2 arguments, the number you want to round and how many numbers after the . you want
          to completelly round it, use round(number,0);
     
group by 
     sometimes we want to calculate an aggregate for data with certain caracteristics
     so if we want to know the avg rating for movies for each year we can do this
          select avg(rating) from movies where year = 1990;
          select avg(rating) from movies where year = 1991;
          select avg(rating) from movies where year = 1992;
          select avg(rating) from movies where year = 1993;
     however that can be cumbersome, specially if theres hundreds of things that we want to group
     but we can use the group by to achieve the same result
          select avg(rating) from movies group by year;
but lets theres a row with 2.1 and another with 2;
     if we just use the group by, they would be in different rows, when we want them on the same, so we can round them  
          select name, rating from movies group by round(rating) order by round(rating);
          however this can be time consuming and prone to error 
     so lets use column references in group by that will ake the lives easier
          1 is the first column selected
          2 is the second column selected
          3 is the third column selected
               this is equivalent from the one above  
                    SELECT ROUND(rating), COUNT(name) FROM movies GROUP BY 1 ORDER BY 1;
          (column selected on the current query, not on the table);

in addition to being able to group data using group by, sql allows you to filter which groupd to include and which to exclude
     we cant use where because we dont want to filter the rows, we want to filter the groups
     having is very similar to where
          select year, genre, count(name) from movies group by 1,2 having count(name) > 10;
     when we want to limit the results of a query based on values of individual rows, use where
     when we want to limit the results of a query based on a property, use having 
     having always comes after group by, but vefore order by and limit
          select price, round(avg(downloads)),
          count(*) from fake_apps
          group by price
          having count(*) > 10;
