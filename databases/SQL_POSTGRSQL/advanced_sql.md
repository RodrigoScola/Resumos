#database #sql 
# Advanced Sql For data science

## Window functions 

maintain the values of the original table while displaying grouped or summative information alongside in another column

```sql
select
     month, change_in_followers,
     sum(change_in_followers) 
     over (
     order by month) as 'running_total'
     from social_media
     Where username = 'instagram'
```

> this returns a list of the `month`, the `change_in_followers` for that month, and the `running_total`. the running total is the sum of the previous change in followers 


### Over 

`Over` signals that the previous operation is an window function

##### Example

if you want to have the `count`, `sum`, `average`, you would have it in something like this

```sql
select
 month,
 username,
 sum(change_in_followers) over (order by month)
     as 'running_total',
 avg(change_in_followers) over (order by month)
     as 'running_average',
 count(change_in_followers) over (order by month)
     as 'running_count'
from social_media
where username='instagram'
```

### Partition by

in the last example we found the `count`, `sum` and `average` for the instagram account, but what if we want to find that for all the accounts?

thats where partition by comes in


while `group by` only allows one row to be returned, `partition by` allows you to return all the other rows

##### Example

to get the `count`, `sum`,`average` from all the other accounts you would do something like this

```sql
select username, month, change_in_followers, sum(change_in_followers) over (
partition by username
order by month
) 'running_total_followers_change'
from social_media
```
> This returns a list of usernames and month, their change in followers and the running total

### First_value and last_value

if you want just the result you can use `limit` to limit the results that you get

however, you cant perform calculations on it. Thats where `FIRST_VALUE` and `LAST_VALUE` come in. they will just return the first value in the databse 

##### Example

you want to get the current post count and the least post count 

```sql
select username, posts, FIRST_VALUE(posts) over (
     partition by username
     order by posts
) as 'fewest_post_count'
from social media;
```
**TO USE LAST_VALUE YOU NEED TO ADD SOMETHING MORE IN THE QUERY**

     range between unbounded preceding and unbounded following

you want to get the current post count and the least post count 


```sql
select username, posts, LAST_VALUE(posts) over (
partition by username
order by posts
range between unbounded preceding and unbounded following
) most_posts
from social_media
```

### LAG & LEAD 

like first_value or last_value but for other parts of the data

window functions can use `lag` or `lead` in order to access information from a row at a specified offset

#### LAG

row before the offset
 
parameters

* column_name
* offset - default 1 row
* default - the value to replace if its null

if you want to compare the current result with a previous result:

```sql
select value1,value2, current_value, current_value - lag(current_value, 1 , curent_value) over (
partition by value1
order by value2
) as 'current_value_compared_backward'
from table_name;
```

#### Lead 

row after the offset

* column_name
* offset - default 1 row
* default - the value to replace if its null

if you want to compare the current result with a previous result:

> Because `LEAD` gets the next row, you will have to invert the subtraction

```sql
select value1, value2, lead(current_value, 1 , current_value) over(
partition by value1
order by value2
) - current_value as 'current_value_compared_forward'
from table_name
```

#### ROW_NUMBER

returns the index or a row

```sql
select row_number() over( order by column_name ) as 'row_number' from table_name
```

#### RANK

like the `row_number()`, but if two results are the same, the rank will be the same too

```sql 
select rank() over (
order by streams_millions
) as 'rank', artist , week, streams_millions
from streams;
```

#### NTILE

find `quartiles`, `quintiles` or `ntiles`. When using `ntile` you are required to provide a `bucket`. `ntile(4)` would be 4 buckets which would represent quartiles

```sql
select ntile(4) over (
partition by week
order by streams_millions desc
) as 'weekly_streams_group',
artist, week, streams_millions
from streams;
```

## Math and date functions

### Math operators

* \+ 
* \-
* \*
* /
* %

### Math functions

* `abs()` - transforms every number into a positive number

* `cast()` - converts one variable into another type. *To learn more about type casting in sql, see below*

#### datetime

returns a timestamp of the string

if you want the current timestamp use the `now` value
```sql
     select datetime('now')
```
if you want time to be converted add the `localtime` keyword
```sql
     select datetime('now','localtime')
```

#### Date

if you want the `year`, `month`, `day` you can do:
```sql
select date(timestamp) -- 2022 - 08 - 12
```
#### TIME

if you want the `hours`, `minutes`, `seconds` of a timestamp

```sql
select time(timestamp) -- 16:57:32
```

#### Datetime manipulation

you can add more arguments, to modify the behaviour that you want

##### date shift

* start of year - shifts the date to the beginning of the current year

* start of month - shifts the date to the beginning of the current month

* start of day - shifts the date to the beginning of the current day

```sql
select date('2005-09-14', 'start of month')
```

you can add on that to shift more precisely.

adding + will move the time forward

adding - will move the time backward

* `+-N years` - offsets the year

* `+-N months` - offsets the month

* `+-N days` - offsets the day

* `+-N hours` - offsets the hour

* `+-N minutes` - offsets the minute

* `+-N seconds` - offsets the second

```sql
select datetime('2022-02-10', 'start of month','-1 day','+7 hours')
```

##### strftime

returns a formatted date, as specified in a format string

```sql
strftime(format_code,timestamp, modifiers...)
```

##### formats

* `%Y` - year (YYYY)

* `%m` - month (01-12)

* `%d` - day (01-31)

* `%H` - hour (00-23)

* `%M` - minute (00-59)

* `%S` - second (00-59)

```sql
select strftime('%d','now') -- 08
```

#### Examples

if you want to count the total orders by day

```sql
select strftime('%d', order_date) as 'order_day', count(*) from table_name group by order_day order by count(*) desc
```

##### Type casting

* `real` - float

* `integer` - integer

> you can convert strings into numbers.
>` select cast('3.14 is pi') as real`
> It will ignore the " is pi" and will convert the `3.14` into an integer
