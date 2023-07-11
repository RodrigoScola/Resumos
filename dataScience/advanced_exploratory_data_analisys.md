#dataScience 

# Advanced exploratory data analysis

## Variance 

by finding the variance of a dataset, we can get a numeric representation of the spread



### Distance from mean

how to mathematically compute the distance from mean

we want the variance of a dataset to be a large number if the data is spread out, and a small number if the data is close together

<img src='https://content.codecademy.com/courses/statistics/variance/two_histograms.svg'>

dont use the range, that only consider 2 points in the dataset. Instead you can include every point in our calculation by finding the difference between every data point and the mean

<img src='https://content.codecademy.com/courses/statistics/variance/difference.svg'>

if the data is close together, then each data point will tend to be close to the mean, and the difference will be small. If the data is spread out, the difference between every data point and the mean will be larger

$$
difference = X - μ
$$

> Where `x` is a single data point and the `mu` is the mean

```python
grades = [88, 82, 85, 84, 90]
mean = np.mean(grades)
difference_one = grades[0] - mean
difference_two = grades[1] - mean
difference_three = grades[2] - mean
difference_four = grades[3] - mean
difference_five = grades[4] - mean

# the first student is 2.2 percentage points away from the mean
# the second student is -3.8 percentage points away from the mean
# the third student is -0.8 percentage points away from the mean
# the fourth student is -1.8 percentage points away from the mean
# the fifth student is 4.2 percentage points away from the mean
```
Or we can use numpy to facilitate the job

```python
grades = np.array([88, 82, 85, 84, 90])

mean = np.mean(grades)

difference_list = grades - mean
```


### Average Distances 

now that we have the distance from the mean from every single point. we can combine them into one value


```python
import numpy as np

grades = np.array([88, 82, 85, 84, 90])

mean = np.mean(grades)

difference_list = grades - mean

difference_sum = difference_list.sum()

average_difference = difference_sum / len(difference_list)
```

### Square differences

what if we have a very small dataset? 

     [-5, 5]

when we take the average of them we get `0`

whats the result with this dataset?

     [-200, 200]

the result is also 0. *but the spread is much higher*

when that happens we wan do something like this

$$
difference = (X - \mu)^2 
$$

```python
import numpy as np
grades = np.array([88,82, 85, 84, 90])

mean = grades.mean()

differences = (grades - mean) ** 2

differences_sum = differences.sum()

variance = difference_sum / len(differences)
```

### Variance in NumPy

```python
import numpy as np

dataset = [3,5,-2,49,10]
variance = np.var(dataset)
```

## Standard Variation

when two datasets results are vastly different in visualizing but you can t really notice a difference in the mean or variance

     variance = np.var(nba_data)

     standard_deviation = variance ** 0.5

we can use numpy 

```python
import numpy as np
dataset = [4,8,15,16,23,42]
standard_deviation = np.std(dataset)
```

### Using standard deviation

now that your units match, the measure of spread is easier to interpret

by knowing the number of `stds` a data point is away from the average, we can investigate how unusual that datapoint is

<img src='https://content.codecademy.com/courses/statistics/variance/normal_curve.svg'>

> 68% will fall within one standard deviation of the mean
>
> 95% will fall within two standard deviations of the mean
>
> 97% will fall within three standard deviations of the mean
> 
> If you have a data point that is over 3 standard deviations away, that is incredibly unusual data

checking if a player with 5`5`` is the smallest player in history
```python
player_height = 65
nba_mean = np.mean(nba_data)
standard_deviation = np.std(nba_data)

difference = player_height / standard_deviation

num_deviations = difference / standard_deviation

# the basketball player is -3.5570 standard deviations away from the average height
```

## Distributions

### Histograms

#### summarizing your data

while a histogram is one of the most useful tools for communicating trends, people often use the average of a dataset to make broad claims about its underlying trends

while the average value of data may be useful to interpret, it can be misleading


#### Range

histograms are helpful for understanding how your data is distributed. While the average of a customer arriving at the store at 3pm, 3pm is probably not the busiest time of day

its important to know the range of your data, the minimum and maximum values

```python
min_times = np.min(times)

max_times = np.max(times)

time_range = max_times - min_times
```

#### Histograms

when dealing with large amounts of data, is hard to find the perfect bin size, counting and dividing can take some time, thats where `np.histogram()` comes in 

```python
exercise_ages = np.array([22, 27, 45, 62, 34, 52, 42, 22, 34, 26, 24, 65, 34, 25, 45, 23, 45, 33, 52, 55])
np.histogram(input_array, range=(start_value, end_value), bins=bin_size)
```

and it outputs 

     (array([7, 4, 4, 3, 2]), array([20., 30., 40., 50., 60., 70.]))

first array, counts the numbers for each bin

second array includes the minimum and maximum values for each bin

##### Finding the best bin size

trial and error


### Describe a histogram

* **Center** - the `median()` and `mean()`

* **Spread** - the `min()` and `max()`

#### Skew

if most of the data is on one side or another

##### No Skew 

<img src='https://content.codecademy.com/courses/learn-pandas/distribution-types-ii-symmetric.svg'>

##### right skew

<img src='https://content.codecademy.com/courses/learn-pandas/distribution-types-ii-skew-right.svg'>

##### left skew

<img src='https://content.codecademy.com/courses/learn-pandas/distribution-types-ii-skew-left.svg'>


#### Modality 

how many "humps" does an histogram have?

##### Unimodal 

<img src='https://content.codecademy.com/courses/numpy/distribution_type_i/unimodal_new.svg'>

##### Bimodal  

<img src='https://content.codecademy.com/courses/numpy/distribution_type_i/bimodal_new.svg'>

##### Multimodal 

<img src='https://content.codecademy.com/courses/numpy/distribution_type_i/multimodal_new.svg'>

##### uniform distribution

<img src='https://content.codecademy.com/courses/numpy/distribution_type_i/uniform_new.svg'>


### Quartiles

Find the values that split the data into four groups of equal size

by doing this we can say whether a new datapoint falls in the first, second, thirrd or fourth quarter of the data

<img src='https://content.codecademy.com/courses/statistics/quantiles/quartiles.svg'>

#### Second quartile 

the median of the data

#### first and third quartile 

the medians of the left and right side


#### Quartiles in numpy

to have the quartile use `np.quantile(dataset, value)`

* **0.75** - third quartile

* **0.25** - first quartile

     ten_percent = np.quantile(dataset, dec_perc)

##### Many quantiles

you can split the values in equal sizes by using math, heres splitting into 20% of the data

     twn_perc = np.quantile(dataset, [0.2,0.4,0.6,0.8])

<img src='https://content.codecademy.com/courses/statistics/quantiles/even.svg'>

if we used the values `[0.2,0.4,0.7,0.8]` the function would return

<img src='https://content.codecademy.com/courses/statistics/quantiles/uneven.svg'>

you can use list comprehendion to make those values

```python
quantiles = np.quantiles(dataset, [ num / 10 for num in range(1, 10) ])
```


### Interquartile range

the difference between the max quantile and the min quantile 

```python
q1 = np.quantile(dataset, 0.25)
q3 = np.quantile(dataset, 0.75)

interquartile_range = q3 - q1
```

### IQR in SciPy

```python
from scipy.stats import iqr

interquartile_range = iqr(dataset)
```


### Whiskers

the whiskers of a boxplot display information related to the spread of the dataset

<img src='https://content.codecademy.com/courses/statistics/boxplot/whiskers.svg'>


```python

quartile_one = np.quantile(dataset, 0.25)
quartile_three = np.quantile(dataset, 0.75)

iqr = quartile_three - quartile_one

distance = 1.5 * iqr

left_whisker = quartile_one - distance
right_whisker = quartile_three + distance

```


## Categorical Data

### Central tendency 

```python
categories = list(df['cat'].unique())

df['cat'] = pd.Categorical(df['cat'], categories, ordered=True)

# we can now have all the operations we want

median_idx = np.median(df['cat'].cat.codes)

median_cat = categories[int(median_idx)]
```

### Spread

use `np.percentile(dataset, percent)`

```python
tenth_perc_ind = np.percentile(df['cat'].cat.codes, 10)
tenth_perc_cat = correct_order[int(tenth_perc_ind)]


ninieth_perc_ind = np.percentile(df['cat'].cat.codes, 90)
ninienth_perc_cat = correct_order[int(ninieth_perc_int)]
```

### Table of proportions

     prop = df['cat'].value_counts(normalize=True)

### Table of proportions - Missing data

     prop = df['cat'].value_counts(normalize=True, dropna=True)

### Binary categorical variables

if a variable only has two categories, you can select it when it is true

     np.sum(df['income_>50k])

     