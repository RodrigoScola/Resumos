# Simulating a binomial test

> They are useful for comparing the frequency of some outcome in a sample to the expected probability of that outcome 

* binomial tests are used for binary categorical data to compare a sample frequency to the expected population level

## Summarizing the sample 

* 10% of visitors make a purchase 

* site had a bug, business wants to know whether the purchase rate dipped below expectation

##### what we need to know before running an hypothesis test

* The total number of people who visited the website 

* The number of people who made a purchase on the website 

we can do this by counting the total number of entries and the total number of entries with the items not null

```python 
     import numpy as mp
     import pandas as pd

     report = pd.read_csv('report.csv')

     sample_size = report.timestamp.count(); # 500

     num_purchased = np.sum(report.purchase == 'y') # 41
```

> of the `500` records, only `41` bought something, the expected value was `50`

Now what we need to find is. How meaningful is a 9 customer purchase loss is.

---

To conceptualize why our **expectation** and **observation** might not be equal, EVEN IF there was no dip in the purchase probability. Just like flipping a coin, we cant predict the outcome of any individual coin flip.

If we flip a coin 10 times, we would expect about 5 of them to be heads and 5 to be tails. However, is perfectly reasonable that youll get only four heads, or 6, maybe 7! Because its a **random** process. Because the probability is that 10% of customers will make a purchase, we **cant expect that it will follow that probability exactly**.

---

##### simulating the visitors behaviour:

```python
     import numpy as np
     import pandas as pd 

     simulated_monthly_visitors = np.random.choice(['y','n'], size=500, p=[0.1,0.9])

# Output:
# ['n' 'n' 'y' 'y' 'n' ...]

```
##### simulating the null distribution

the first step in runnin a hypothesis test is to form a *null hypothesis*. 
For this website the true probability of a visitor making a purchase was exactly `10%`, but by random chance only `8.2%` actually made a purchase.

*To calculate the total number of users that purchased an item*
```python
num_purchased = np.sum(simulated_monthly_visitors == 'y')
```
By running the experiment a lot, we can calculate how much variation the result will have 

```python
import numpy as np
import pandas as pd 

null_outcomes = []

for i in range(10000):
     simulated_visitors = np.random.choice(['y','n'], size=500, p=[0.1,0.9])
     num_purchased = np.sum(simulated_visitors == 'y');
     null_outcomes.append(num_purchased)

null_min = np.sum(null_outcomes);
null_max = np.sum(null_outcomes);
```



