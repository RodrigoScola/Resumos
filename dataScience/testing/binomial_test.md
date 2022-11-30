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

## simulating the visitors behaviour:

```python
     import numpy as np
     import pandas as pd 

     simulated_monthly_visitors = np.random.choice(['y','n'], size=500, p=[0.1,0.9])

# Output:
# ['n' 'n' 'y' 'y' 'n' ...]

```
## simulating the null distribution

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

## confidence intervals 

By reporting an interval covering `95%` of the values instead of the full range, we can say that *we are 95% confident that, if each visitor has a 10% chance of making a purchase, a random sample of 500 gisitors will make between 37 and 63 purchases*

we can use the `np.percentile()` to calculate this `95%` interval

     np.percentile(outcomes, [start_perc,end_perc])

it will return the min and max value inside the interval.

###### before 

     We are 100% confident that a customer will make between 25 to 75 purchases

###### after

     We are 90% confident that a customer will make between 37 to 63 purchases

## Calculating a one sided p-value 
they depend on the alternative hypothesis of a test, a description of the difference from expectation that we are interested in.

Suppose that we flipped a coin 10 times and observed only 2 heads. we might run a hypothesis test with the following null and alternative hypotheses:

* *Null:* The probability of heads is `0.5`

* *Alternative:* The Probability of heads is **less than** `0.5`

if the probability of heads is `0.5` whats the probability of observing `2` or fewer heads among a single sample of `10` coin flips?

     p_value = np.sum(np.array(outcomes) <= expected ) / len(outcomes)

## Calculating a Two-Sided P-Value

If the null hypotheiss is true, the two sided test focuses on the number of heads being **different** from expectation, rather than just **less than**. The hypothesis test now asks the following question:

> Suppose that the true porbability of heads is 50%. What is the probability of observing **either** two or fewer heads OR eight or more heads?

<img src='https://content.codecademy.com/courses/Hypothesis_Testing/two_sided_coin_flip.svg'>

we can calculate that in python as follows:

     outcomes = np.array(outcomes)
     p_value = np.sum((outcomes <= 2) | (outcomes >= 8)) / len(outcomes)

### writing a binomial test function 

```python
import numpy as np
import pandas as pd
from scipy.stats import binom_test

def simulation_binomial_test(observed_success, sample_size, success_prob):
     outcomes = [];

     for i in range(10000):
          result = np.random.choice(['y','n'], size=sample_size, p=[success_prob, 1 - abs(success_prob)])
          num_success = np.sum(result == 'y');
          outcomes.append(num_success);
     
     outcomes = np.array(outcomes);

     result = np.sum(outcomes <= observed_success) / len(outcomes)

     return result
```

#### Binomial testing with SciPy

scipy has a function called `binom_test()`, which performs a **two-sided** binomial testing 
If you want to perform an one-sided testyou can use the `alternative` keyword and a value of `"less"`
```python
     # two sided
     binom_test(expected, sample_size,success_prob);
     # one sided
     binom_test(expected,sample_size, success_prob, alternative='less');
```

this tells us that **IF** the true probability of heads is 0.5, t