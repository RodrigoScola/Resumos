#statistics #dataScience #math


# Sampling Distributions for Data Science

## Sampling from a population

Since collecting data for an entire population is often impossible, researchers may use a smaller sample of data to try to answer their questions

## Sampling distributions 

Each time we sample from a population, we will get a slightly different sample mean, in order to understand how much variation we can expect in those sample means, we should 

- take a lot of random samples

- calculate the sample mean for each one

- plot a histogram of all the sample means

> [!Info]
> The distribution of the mean is normally distributed as long as the population is not too skewed or the sample size is large enough

[skewed image of salmon weight](https://static-assets.codecademy.com/skillpaths/master-stats-ii/sampling-distributions/pop_distribution.svg)

The image shows the population distribution. the tail of the distribution is longer on the right than the left 

## Central limit theorem 

The sampling distribution of the mean is normally distributed as long as the population is not too skewed or the sample size is enough

*the sampling distribution is normally distributed as long as the population is not too skewed or the sample size is large enough*

- we take samples of size `n` from a population and calculate the simple mean `x`
- given that n is sufficiently large, the sampling distribution of the mean will be normally distributed with, mean `x` apporximately equal to the population mean `u`. standard deviation equal to the population standard deviation divided by the square root of the sample size

## standard error

standard deviation of a sampling distribution
     `standard_error = std_dev / (samp_size ** .5)`

## calculating probabilities 

once we know the sampling distribution of the mean, we can estimate of observing other means 

# The central limit theorem 

> An **INTRODUCTION** to the central limit theorem using simulation

**damn dude thats dope that you explained and did a bunch of shit that doesnt matter and NOW ONLY NOW are explaining shit, dude thats so cool you are so cool dam all the parties must be invited you .**

### what is the central limit theorem

quantifying uncertainty around sample mean estimates. also the basis for hypothesis tests

### building intuition for the clt

imagine that you want to know the average hourly wage for all working adults who make under 150 dollars per hour, its a giant task that would require months of data aquiring, thats why we use the **clt**. Instead we get a sample of the population and use **math** to calculate the probabilities for us 

example of a random sample with the average at 17.74


<img src='https://content.codecademy.com/articles/the-central-limit-theorem/samp1_dens.svg'>

#### *how far from the population mean could this sample mean realistically be?*

the python code below does this in a loop. the `population` object is a list containing all wages in the full population
```python
import numpy as np
import matplotlib.pyplot as plt
import random 

sample_means = []
for i in range(10000):
     samp = random.sample(population, 150);
     sample_means.append(np.mean(samp));

plt.ist(sample_means, bins = 30);

plt.vlines(np.mean(sample_means), 0, 100, lw=3,linestyles='dashed')
```
results in this image 
<img src='https://content.codecademy.com/articles/the-central-limit-theorem/samp_dist.svg'>

##### There are a few things to notice about this distribution, wich is called the *sampling distribution of the mean*
1. unlike the population distribution, which is very right-skewed, this distribution is almost normally distributed, symmetric with a single mode
2. the average of the sample means is aproximately equal to the population mean (18.84)
3. the 10,000 sample means range approximately between 14 and 24 
---


## Formally defining the clt 

- is normally distributed (for large enough sample size)
- centered at the population mean
- has standard deviation equal to the population standard deviation divided by the square root of the sample size.
     standard_error = std_dev / (samp_size ** .5)

there are two levers on the width of the sampling distribution

- **the population standard deviation**. populations with more variation will yield sample means with more variation. 
- **the sample size**. the larger the sample size, the smaller the variation in repeated sample means.

## how does this help the data scientist? 

if you have one sample mean as the best guess for the population mean, you can estimate the standard error, and then you can have **repeated samples**!

>    `population_Standard_deviation / (sample_size ** 0.5)`

while you might not know the population standard deviation, they can use their sample to estimate it 

>    `standard_error = np.std(my_sample) / (150 ** 0.5)`

this makes it possible to estimate the range of the sampling distribution above, without actually knoing the population distribution

multiplying `1.96` *(standard deviation)* by `1.275` *(standard error)* and the result is `2.50`

# Inferential Statistics 

descriptive statistics is numerical and visual summaries of data, hypothesis testing. Used to draw inferences about a population using a smaller sample of data. It can tell us about the data that we have, but sometimes we cant collect all of the data that we need to answer our questions

## Descriptive Statistics 

Is all about summarizing data. Useful for making large amouns of information int o an interpretable subset of numbers and/or visualizations. 

## Inferential Statistics

Is all about using a sample, to make inferences about a larger population of interest. Samples do not always accurately reflect the population they came from. a large part of inferential statistics is quantifying the uncertainty

##### *Example - Random Sample*

in the population shown below is made up of 10 blue dots and 5 red dots. Suppose we take a random sample of 3 dots and want to use that sample to estimate the proprtion of the population that is blue. We could be lucky and take 1 red dot and 2 blue dots, but any other combination would be wrong.

[population sample image](https://static-assets.codecademy.com/Courses/Hypothesis-Testing/descriptive_inferential_statistics.png)

> Inferential statistics allows us to look at a sample and then quantify our uncertainty about how similar or different the entire population might be

##### *Example - Customer Contacting*

your company is interested in testing two different customer contacting methods to see if one leads to a higher response rate than the other. you could take a sample of 1000 customers and randomly assign them to either a text or phone contacting system, after a month you could then calculate the difference in response rate for the two sampled groups
After some time passed you find that the customers who received a text were `12%` more likely to respond than the customers who received a phone call. *this is a descriptive statistic about the sample* but what you really want to know is: 
**if you had sample the full population of customers, would you still have found at least a `12%` difference in response rate?**

##### *Example - Test Scores*

You want to study the relationship between highschool students homework grades and standardized test scores. you cant collect information on homework grades and tests for every high school student in the world. You could find a random sample of students and inspect the relationship between homework grades and tests among that sample. and you could use `*regression analysis*` to undertand whether a similar relationship is likely to exist in the larger population of all students

