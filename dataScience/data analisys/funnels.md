#dataScience 
# Funnels 

## what is a funnel?

the journey towards an destination, that destination often resulting in the purchase of a product or service

### building a funnel from a single table

seeing at which steps the user `stops` in the funnel

```sql
select question_text, count(distinct user_id) from survey_responses group by question_text
```
this returns a list of the amount of users that answered each question

### compare funnels for a/b tests

you can add to a column using the `case` keyword

here we are dividing the clicks from a control test to a variant test, then grouping them by test answer

```sql
select modal_text, 
-- selecting only the rows with the control tag
count(distinct case when ab_group = 'control' then user_id end ) as 'control_clicks',
-- selecting only the rows with the variant tag
count(distinct case when ab_group = 'variant' then user_id end ) as 'variant_clicks',
-- selecting the total number of clicks
count(distinct(user_id)) as 'total_clicks'

from onboarding_modals
group by 1,
order by 1
```
### Using multiple tables 

#### left joins

```sql
 select distinct(b.browse_date), b.user_id, c.user_id is not null as 'is_checkout', p.user_id is not null as 'is_purchase' from browse as b
 left join checkout as c
 on c.user_id = b.user_id
 left join purchase as p
 on p.user_id = c.user_id
 limit 50;
```

> you can transform data into 0 and 1s if you add the 
> ```sql
> is not null as 'new_column_name'
>```

### making calulations

you can make the calculations on the left join, however that can be a little messy, you can use the `with` keyword and the results from the first query can be the table on the next query

```sql
with funnels as (
     select distinct b.browse_date,
     b.user_id,
     c.user_id is not null as 'is_checkout',
     p.user_id is not null as 'is_purchase',
     from browse as 'b',
     left join chackout as 'c'
     on c.user_id = b.user_id
     left join purchase as 'p'
     on p.user_id = c.user_id
)
-- adding the select query to make life easier
select 
     count(*) as 'num_browse',
     sum(is_checkout) as 'total_checkouts',
     sum(is_purchase) as 'total_purchases', 
     (1.0 * sum(is_checkout) / count(user_id)) as 'browse_to_checkout', 
     (1.0 * sum(is_purchase) / sum(is_checkout)) as 'checkout_to_purchase' 
from funnels;  
```

### first and last touch attribution
 
first touch - first time an user is exposed to the website

last touch - the last page that led to the end of the funnel

#### First versus last 

if you want to increase sales at a company, would you count on `buzzfeed` (website example) or increase the `facebook` ads?

* first touch attribution only considers the first `utm-source` for each customer

* last touch only considers the last `utm-source` for each customer
