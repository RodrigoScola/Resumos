#sql #security #attacks 
sql injection is a code injection technique used to attack data-driven applications, in which malicious sql statements are inserted into an entry field for execution 
sql injection must exploit a security vulnerability in an applications software, for example when user input is either incorrectly filtered or for string literal escape characters embedded in sql statements

retrieving hidden data 
     consider a shopping application that displays products in different categories. when the user clicks on the gifts category, their browser requests the url 
          https://insecure-website.com/products?category=gifts
     this causes the application to make an sql query to retrueve detais of the relevant products from teh database 
          select * from products where category = 'gifts' and released = 1
     this query returns
          all details (*);
          from produts table
          where category is gifts 
          and released is 1
     the restriction released = 1 is being used to hide products that are not released
     the application doesnt implement any defenses against sql injection so an attacker can construct an attack like 
          https://insecure-website.com/products?category=gifts'--
     and the attacker will get everything from gifts
     an attacker can cause the application to display all products in any category 
          https://insecure-website.com/products?category=gifts'+or+1=1--
     this results in the query 
          select * from products where category = 'gifts' or 1=1--' and released = 1 
     the modified query will return all items where either the category is gifts or 1 = 1. since 1 = 1 is always true, the query will return all items 
         
examining the database 
     followig initial identification of an ssql injection vulnerability, its generally useful to obtain some information about the database itself
     you can query the version details for the database 
          oracle 
               select * from v$version
          you can also determine what database tables exist and which columns they contain
               select * from information_schema.tables 
               