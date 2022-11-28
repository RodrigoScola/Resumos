## Hypothesis Testing

### *What is hypothesis testing?*

its a framework for asking questions about a dataset and answering with probability. in order to build intuition about how manu different kinds of hypothesis tests work!

#### 1. Ask a question

Each year a test is applied in every school. Total scores on this assessment range from 1-45. the average total score for all students who took this exam in may 2020 was around `29.92`. The distribution of scores looks something like this 

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/pop_hist.svg'>

imagine a hypothetical online school, that offers a 5-week test-preparation program. Suppose that 100 students who took the test were randomly chosen to participate in the first group and that these 100 students have an average score of `31.16` points, about `1.24` higher than the average.

> ***Are these students really outperforming their peers? or could this difference be attributed to random chance***

#### 2. Define the Null and alternative hypotheses 

before attempting to answer the question, its useful to rename it in a way that is testable. The current question is:

     Are the Statistics Academy Students really outperforming their peers?

The question is not that good because, looking at the stats already answer the question. *They are, if you take **any** group of 100 students from the population of all test takers, theres a `50%` chance it will be higher than the population average.*

A hypothesis test begins with two competing hypotheses about the population that a particular sample comes from

- *The null Hypothesis*: The 100 statistics academy students are a random sample from the general population of test takers, who had an average score or `29.92`. If this hypothesis is true, the statistics academy students earned a slightly higher average score by random chance.

- *The alternative hypothesis*: The 100 statistics academy students came from a population with an average score that is different from `29.92`. In this hypothesis, we need to imagine two different populations that dont actually exist: one where all students took the statsistics academy test-prep program and one where none of the students took the program. If the alternative hypothesis is true, our sample of 100 statistics academy students came from a different population than the other test-takers. this can be visualized like this:

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/Statistics_HypothesisTestingDiagram_1.svg'>

We have not said anythong about the average score for "*population 1*", other that it is **NOT** `29.92`. We actually have three choices for what the alternative hypothesis says about this population average:

- It is `GREATER THAN 29.92`

- It is `GREATER THAN OR LESS THAN 29.92`

- It is `LESS THAN 29.92`

#### 3. Determine the Null Distribution 

now that we have our null hypothesis, we can generate the *null distribution:* the distribution (across repeated samples) of the statistic we are interested in if the null hypothesis is true. This is the distribution of average scores for repeated samples of size 100 drawn from a population with an average score of `29.92`

> You might already know this if you have learned about the *central limit theorem* or the `CLT`!

We can estimate the shape of the of this distribution using a single sample. We can do this by

- Taking many random samples from the population

- Calculating and storing the average score for each of the samples 

- making a histogram of the average scores 

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/samp_dist1.svg'>

If the null hypothesis is true, then the average score of `31.16` observed among Statistics Academy students is simply one of the values from this distribution. Plotting the sample average on the null distribution. This value is within the range of the null distribution, but if it is off to the right where there is less density:

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/samp_dist_wsampmean.svg'>

#### 4. Calculate a P-Value (confidence Interval)

Heres the basic question asked in the hypothesis test:

> Given that the null hypothesis is true (100 students from statistics academy were sampled from a population with an average IBDP score of `29.92`), how likely is it that their average score is `31.16`?

The minor problem with this question is that the probability of any exact average score is very small, so we really want to estimate the probability of a range of scores.

##### Option 1 

> The sample of 100 scores earned by Statistics Academy students came from a population with an average score that is greater than `29.92`.

We want to know the probability of observing a sample average greater than or equal to `31.16` given that the null hypothesis is true. In the image below, the red region makes up about `3.1%` of the total distribution. This proportion is called a *p-value*

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/samp_dist.svg'>

> this option is reffered as *One Sided or One-Tailed* test. Because of the one tail in the diagram

##### Option 2 

> Alternative Hypothesis: The sample of 100 scores earned by Statistics students came from a population with an average score that is greater than or less than `29.92`

We are interested in the probability of observing that is at least `1.24` points different than the average. 

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/samp_dist_2sided.svg'>


> This area is twice as large as in the previous example, leading to a *p-value* that is also twice as large.


> This test is referred as *Two sided or Two-Tailed* test, because of the two tails in the distribution. Most hypothesis testing implement a two-tailed test by default 

##### Option 3 

> *Alternative hypothesis*: The sample of 100 students have an average score less than `29.92`

we want to know the probability of observing a sample average less than or equal to `31.16`.

<img src='https://content.codecademy.com/articles/introduction-to-hypothesis-testing/samp_dist_lower.svg'>

**Why would anyone ever choose this verson of the alternative hypothesis?**

If a test-prep program was planning to run a rigorous experiment to see wheter their students are scoring differently than the general population, 
They should choose the alternative hypothesis before collecting any data. At this point, they wont know wheter their sample of students will have an average score that is higher or lower than the population average

#### 5. Interpret the results 

in the examples above, we got 3 different p-values(`0.031`, `0.062`,`0.969`). Consider the first p-value of `0.031`. The interpolation of this number is as follows:

if the 100 students at statistics academy were randomly selected from the full population, there is a `3.1%` chance of their average score being `31.16` or higher. This means, that is relatively unlikely, but not impossible. The observed data is unlikely if the null hypothesis is true.

##### Significance thresholds

many data scientists use a predetermined threshold to decide whether a particular p-value is significant of not. P-values below the chosen threshold are declared *significant* and lead the data scientist to "*reject the null hypothesis in favor of the alternative*". `A common choice for this threshold is 0.05, but its arbitrary!` Using a lower threshold means you are less likely to find significant results, but also less likely to mistakenly report a significant result when there is none.

## One-Sample T-Tests

##### Used for comparing  a sample average to a hypothetical popultion average.

> Is the average amount of time that visitors spend on a website different from 5 minutes?
>
> Is the average amount of money that customers spend on a purchase more than 10 USD?
>

###### example model:

imagine your manager wants to buy online pies that cost arount 1000$ on average. In the past day, 50 people made an online purchase and the average payment per order was less thatn 10000$. Are people really spending less than 1000$ on average? Or is this the result of chance and a small sample size? 

###### question:

     Are the People paying less than 1000$ on average?

###### hypotheses

* **Null:** The average cost of a pie order is 1000$
* **Alternative:** The average cost of a pie order is not 1000$

first we need to get the average price per day.

```python
     import numpy as np

     prices = np.genfromtxt("prices.csv")
     
     prices_mean = np.mean(prices)
```

Using `SciPy` you can perform a one-sample t-test for you. `ttest_1samp()` requires 2 inputs, sample distribution and a mean to test against. The function uses your sample distribution to determine the sample size and estimate the amount of variation in the population - which are used to estimate the null distribution. It returns 2 outputs: the `t-statistic` and the `p-value`

```python 
from scipy.stats import ttest_1samp
import numpy as np

prices = np.genfromtxt('prices.csv');

prices_mean = np.mean(prices)

tstat, pval = ttest_1samp(prices, 1000); # we use 1000 because is the expected value 
# not the real value
# the prices_mean is also calculated inside the function
```

##### Assumptions of a one sample t-test

* sample was randomly selected

* The individual observations were independent 

* the data is normally distributed without outliers or the sample size is large enough

> If you run an experiment that violates one of these assumptions, you can still report results.

