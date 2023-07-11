#dataScience 
# Data Wrangling and Tidying

#### if you want to learn more about how to clean data you can go to the regular expressions chapter


## Data cleaning

### Diagnose the data

For a data to be tidy, it must have:

-    Each variable as a separate column

-    Each row as a separate observation

for example if a table look something like this

| account    | checkings | savings |
| ---------- | --------- | ------- |
| “12456543” | 8500      | 8900    |
| “12283942” | 6410      | 8020    |
| “12839485” | 78000     | 92000   |

into a table that looks like this

| Account    | Account Type | Amount |
| ---------- | ------------ | ------ |
| “12456543” | “Checking”   | 8500   |
| “12456543” | “Savings”    | 8900   |
| “12283942” | “Checking”   | 6410   |
| “12283942” | “Savings”    | 8020   |
| “12839485” | “Checking”   | 78000  |
| “12839485” | “Savings”    | 920000 |

the first step of diagnosing whether or not a dataset is tidy is using `pandas` functions to explore and probe the dataset

1. `head()` - display the first 5 rows

2. `info()` - display a summary of the table

3. `describe()` - display the summary statistics of the table

4. `columns` - display the column names of the table

5. `value_counts` - display the distinct values for a column

### Dealing with multiple files

we can use the `glob` (python library with working with files), `glob` can open multiple files by using regex matching to get the filenames

```python
import glob
import pandas as pd

files = glob.glob('file*.csv')

df_list = []

for filename in files:
     data = pd.read_csv(filename);
     df_list.append(data)

df = pd.concat(df_list);

```

### Reshaping data

we can use `pd.melt()`, takes in a dataframe and the columns to unpack

     df = pd.melt(frame=df, id_vars='name', value_vars=['column1, 'column2'], value_name='value', var_name='var_name')

-    `frame` - the dataframe you want to melt

-    `id_vars` - the old columns you want to preserve

-    `value_vars` - the columns of the old dataFrame that you want to turn into variables

-    `value_name` - what to call the column of the new dataFrame that stores the values

-    `var_name` - what to call the column of the new dataFrame that stores the variables

the default names may work in certain situations, but its best to always have dat that is self-explanatory, thus we often use `.columns()` to rename the columns after melting

```python
students = pd.melt(
     frame=students,
     id_vars=[ 'full_name','gender_age','grade'],
     value_vars=['fractions','probability'],
     value_name='score', var_name='exam'
)

```

### Dealing with duplicates

-    `dataframe.duplicates()` - to check for duplicates, will return a list of true or false if there is a duplicate of that record

-    `dataframe.drop_diplicates()` - to remove duplicates

if you want to drop duplicated based on a specific row you can use the `subset` keyword

     fruits = fruits.drop_duplicates(subset=['columname'])

### Splitting by index

when you are trying to get clean data, we want to make sure each column represents one type of measurement. Often times measurements are recorded in the same column and we want to separate these out so that we can do individual analysis on each variable

we have a column _birthday_ with data formatted in `mmddyyyy` and we want to separate the data , we wan to split this data into day month and year so we can use this columns as separate features

since we know the structure of the `string` we can separate by index using `.str` and the index

```python
df['month'] = df.birthday.str[0:2]
df['day'] = df.birthday.str[2:4]
df['year'] = df.birthday.str[4:]
```

### Splitting by Character

```python
df['str_split'] = df.type.str.split('-')
df['usertype'] = df.str_split.str.get(0)
df['country'] = df.str_split.str.get(1)
```

### String parsing

what if the price column is actually composed of strings with $ in them

```python
fruit.price = fruit['price'].replace('[\$,],'',regex=True)
```

> then we can use the `to_numeric()` to convert strings containing numerical values to integers or floats

#### Split

if you want to split the string you can split by regex

```python
split_df = df['exerciseDescription'].str.split('(\d+)',expand=True)
```

this would result in another dataFrame

| index   | 1                  | 2    |3 |
| --- | ------------------ | ---- | ------ |
| 0   | “lunges - “        | “30” | “reps” |
| 1   | “squats - “        | “20” | “reps” |
| 2   | “deadlifts - “     | “25” | “reps” |
| 3   | “jumping jacks - “ | “30” | “reps” |
| 4   | “lunges - “        | “40” | “reps” |
| 5   | “chest flyes - “   | “15” | “reps” |

then we can assign columns from this dataframe to the original

```python
df.reps = pd.to_numeric(split_df[1])
df.exercise = split_df[0].replace('[\-]','',regex=True)
```

## Dealing with missing values

##### If you want to learn more about missing data, you can head to the `Missing data chapter`

you have a few options at your disposal, however some are highly discouraged and should be used as a last option

### Drop all of the rows with a misssing value

     df = df.dropna()

this will remove all the columns without a value, no matter the column

you can specify a column if you use the `subset` keyword

     df = df.dropna(subset=['columname'])

### Fill the Missing values with the mean of the column or with some aggregate value

we can use `fillna()` to do this 

```python
df = df.fillna(value={
     "bill": df.bill.mean(),
     "num_guests":df.num_guests.mean()
})
```

## Centering and scaling

### Centering

means subtracting the mean from each point so the new mean is 0

it tells us how far the point is from the new mean. It gives additional insight that we cant get just by looking at the initial dataset

### Scaling

what happens if you want to compare values in different scales?

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/center-scaling/scaling.png'>

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/center-scaling/unnormalized.png'>

#### Min-max normalization

> One of the most simple and common ways to scale data

for every feature in a dataset, the minimum value of that data is transformed into 0, the maximum value is transformed into 1

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/center-scaling/normalized.png'>

one downside is that it doesnt handle outliers very well

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/center-scaling/outlier.png'>

you can use standardization when you have that crazy of an outlier


#### Standardization

subtracting the mean of each observation and dividing by the standard deviation

#### When to normalize vs standardize

when you have outliers you should use standardization

#### Python implementation


##### Normalize
```python
from sklearn.preprocessing import MinMaxScaler

import pandas as pd

data = pd.read_csv('data.csv')
scaler = MinMaxScaler()

normalized_data = scaler.fit_transform(data)
```

###### Standardization
```python
from sklearn.preprocessing import StandardScaler

import pandas as pd 
data = pd.read_csv('data.csv')

scaler = StandardScaler()

standardized_data = scaler.fit_transform(data)
```

### Binning data

is the process of groupint items in different categories

#### Why

to create more appealing visualizations, to organize data, to improve a machine learning model

#### binnin in python

```python
import pandas as pd

df = pd.read_csv('data.csv')

df['binned_age'] = pd.cut(df['Age'], bin_number)

#  binned_age  Age
# 0   (20, 30]   23
# 1   (20, 30]   28
# 2   (40, 50]   45
# 3   (60, 70]   63
# 4   (30, 40]   35

```
we can now plot it 

     df['binned_age'].value_counts().plot(kind='bar')

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/discretizing-data/dance_class_dist.png'>

### Combining categorical data

sometimes you have a lot of values that genreally could be grouped up

like the other in category types

we can create a mask 

```python
mask = election_data.isin(votes[votes < 200].index)

election_data[mask] = 'Other'

# Liliana    1067
# John        998
# William     494
# Other       210
# Name: Vote, dtype: int64
```

## Transforming skewed data

### Log transformation

transfroms each variable `x` with `log(x)` 

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/advanced-data-transformations/logtransform.jpeg'>

```python
import numpy as np

data = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4]

log_data = np.log(data)

# 0, 0, 0, 0, 0.693, 0.693, 0.693, 1.098, 1.098, 1.386, 1.386
```

you should a more powerful library like `sklearn` to do it for you, it will give better results and have tons of tools that you can and should use

```python
from sklearn.preprocessing import PowerTransformer

log_transform = Powertransformer()
log_transform.fit_transform(data)
```

#### Applying it with real world data


```python
import seaborn as sns
import pandas as pd
import numpy as np

home_data = pd.read_csv('home_data.csv')
home_prices = home_data['SalePrice']

sns.distplot(home_prices)
```
<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/advanced-data-transformations/skewed.jpeg'>

> You can see if there is a skew by using the .skew()
> here the output is 1.88 meaning there is a skew

```python
log_home_prices = np.log(home_prices)
```

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/advanced-data-transformations/normalized.jpeg'>
