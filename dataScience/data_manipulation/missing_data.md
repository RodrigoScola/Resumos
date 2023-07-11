#dataScience 
# Handling Missing Data

 > [!note]
 A lot of data analytics type work is solving mysteries, and *The Mystery of the Missing Data* is one of the best sellers


# What to do about "nothing"

## Why its important to handle missing data

if we don't handle missing data properly, then any results or insights we get could be significantly wrong.

missing data means that there are potentially big gaps in the data and what we can learn from it. Since datasets often describe a population, forgetting missing data means we will have a _lower statistical power_ (the hability to accept or reject an hypothesis)

When we have complete data, we also minimize the risk of making inaccurate conclusions from our dataset.

## Why Data might be missing

While every data collection has its own reasons there are a few common explantaions

#### Systematic Causes

-    Data never being provided in the first place

-    system corruption

#### Privacy Concerns

in many regions customers have the options to _opt-out_ of data being gathered.

#### Information Loss

connectivity outages may cause loss of data

## Identifying and Checking for missing data

how to identify and check for missing data

1. Verify that data was uploaded correctly in the first place.

2. Try looking at small chunks of the data. A lot of the times, missing data can be easy to spot when looking at the data directly. Most commonly, you can look at the beginning or at the end of a dataset

3. Look at statistics for the entire dataset. Sometimes the result that you are expecting is vastly different from the result in the dataset, missing or incorrect data might be the cause

### How important is this data to the larger dataset?

Not all variables are created equal. Depending on what we are trying to learn. some fields have more importance than others.

**Seems obvious that we cant use data that doesnt fit our questions - but youd be suprised how often we accidentaly try to.**

## Types of missing data

### **Structurally Missing data**

> #### missing for some logical reason

Sometimes when we have missing data, we arent suprised at all. In some senarios we _should_ have missing data, because it makes sense! this is what _structurally missing data_ is

lets say that a section of our health survey is asking about common respiratory conditions, and we see a section in our data that looks like this:

| ParticipantID | AsthmaFlag | InhalerFrequency | InhalerBrand |
| ------------- | ---------- | ---------------- | ------------ |
| 100           | TRUE       | Twice daily      | Breathe-Rite |
| 101           | TRUE       | Once weekly      | Breathe-Rite |
| 102           | FALSE      | x                | x            |
| 103           | TRUE       | Once daily       | Asthm-Away   |
| 104           | FALSE      | x                | x            |

we see in the `AsthmaFlag` that the columns that are missing have the flag as `False`, therefore they dont have inhalers and thats why data is "missing"


### **Missing completely at random**

> #### The probability of any datapoint is the same for all datapoints

Sometimes data is just missing. But the important thing is that **It could have happened to any observation**. 

### **Missing at Random**

If the likelihook of missingness is different for different groups, but equally likely within a group 

### **Missing not at random**

> [!TIP] There is some reason why the data is missing

> [!Example]
Participants in our study have been assigned to alocal clinic to get a health reading. they get blood pressure, height and weight measured, and the clinican will enter notes after an interview. But a portion of the weight measurements are missing. Participants werent responsible for self-reporting so this is unexpected. We might assume that they didnt want to be weighed. But after a deeper dive we might get a different picture. We can try the following groupings


1. Last reported weight to see if data is missing from higher or lower bmi groups

2. Demographics such as age, race and gender to see if there is a pattern here

3. The date of data collection

Lets say we discovered that the missing data was all collected in the same day. In our clinic, the sacles are battery-operated. If the scale runs out of batteries, someone will have to buy more. The data is missing for a reason, even though that reason is completely unrelated to the study 


#### Data About data 

when trying to diagnose the type of missingess, data about the data can be invaluable. the date time data was collected, how it was collected who collected it, where it was collected, etc. Can all give invalueable clues to solving the problem of missing data


## Handling Missing data with deletion

### When is it safe to use deletion?

> *Is it really safe to delete data?*

Deleting data could cause more problems than having some missing data in the first place. there are some scenarios where deleting data is safe, and others where it is not advised

The main risk with deletion is that we could introduce *bias* or underpresentative data into the dataset. 

Data is safe to delete when

1. Its Either MAR or MCAR (missing at random or missing completely at random). **However**, if the percentage of missing data is too hight, we cant delete the data - we would be reducing our sample size too much

2. The missing data has a low correlation with other features in the data. If the missing data is not important for what were doing, then we can safely remove that data


### Types of deletion

#### Listwise deletion

Is the removal of the entire observation when there is missing data. This is usually used when the missing variables will directly impact the analysis we are trying to perform

We should be cautions when using listwise deletion, as we lose a lot of information when we remove an entire row. We Decrese the amount of data that we can use for analysis. This means we would have less confidence in the accuracy of any conclusions we dray from the resulting dataset 

#### Pairwise deletion

looks for context to what we are trying to analyze. we only remove rows when there are missing values in the variables we are directly analyzing. Unlike listwise deletion, we do not care if other variables are missing, and can retain those rows.

### Dropping variables

there is another tatic we could employ, to drop a variable entirely. if a variable is missing enough data, then we really dont know enough about that variable to use it in our analysis.

While this may sound easier than the other solutions mentioned and possibly effective, we generally dont want to drop entire variables. 

## Single Imputation

### What is time-series data?

They are datasets that track data over (usually) set periods of time. If we are missing data in one of these periods, we have a variety of unique approaches to handle this missing data

When data is missing in time-series data, we have the advantage of context. That is because the data shows observations of the same event over time, we can learn about what is happening and make an educated guess as to what might have happened in our missing data.

## Is it MNAR?

These techniques assume it is the case, it can be tricky to understand that the data is missing in a non-random manner.

##### How can we verify this?

1. **Use domain knowledge** - Probably the quickest way to identify MNAR is by having extesive knowledge of the data and industry we are working in.

2. **Analyze the dataset to find patterns** - As you explore data you should be able to identify something about the missing data that doesnt line up with everything else

### LOCF

*Last Observation Carried Forward*. 

Filling in the missing data with the previous value. 

If the data is in a panda dataframe, we can use the `ffil()` on a particular column
```python
df['comfort'].ffill(axis=0, inplace=True)
```
If the data is in a numpy array, you can use the library `impyute`
```python
impyute.imputation.ts.locf(data, axis=0)
```


### NOCB

*Next Observation Carried Backward*

is usually used when we have more recent data, and we know enough about the past to fill in the blanks that way

If the data is in a panda dataframe `.bfil()` 
```python
df['comfort'].bfill(axis=0, inplace=True)
```
you can use `impyute`
```python
impyute.imputation.ts.nocb(data,axis=0)
```

### BOCF

when you fill the rest of the dataframe with the first observation. When something returns to the baseline value

```python
baseline = df['conecntration'][0]

df['concentration'].fillna(value=baseline,inplace=True)
```

### WOCF

when you fill the datafreame with the worst value in the dataframe

```python
worst = df['pain'].max()

df['pain'].fillna(value=worst,inplace=True)
```

### What are the disavantages of Single Imputation

The potential for adding bias into a dataset. When we use single imputation, we assume that the data we are using to fill in the blanks is reliable and accurate for that observation.

Single Imputation will ignore the unexpected changes and will "smooth" out the results. This could lead to innacurate results

## Multiple Imputation

Fills in missing data, multiple times. Its used when we have missing data across multiple categorical columns in the dataset. After we have tried different values, We use an algorithm to pick the best values to replace the missing data.

### When to use it

is best suited for MAR (missing at random). with MAR missing data, there is an assumption that there is a  reason to have missing data, and we have an understanding of why that data is missing

### How to use it 

```python
import numpy as np
from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import ImperativeImputer
import pandas as pd

d = {
    'X': [5.4,13.8,14.7,17.6,np.nan,1.1,12.9,3.4,np.nan,10.2],
    'Y': [18,27.4,np.nan,18.3,49.6,48.9,np.nan,13.6,16.1,42.7],
    'Z': [7.6,4.6,4.2,np.nan,4.7,8.5,3.5,np.nan,1.8,4.7]
}
 
dTest = {
    'X': [13.1, 10.8, np.nan, 9.7, 11.2],
    'Y': [18.3, np.nan, 14.1, 19.8, 17.5],
    'Z': [4.2, 3.1, 5.7,np.nan, 9.6]
}
df = pd.DataFrame(data=d)
dfTest = pd.DataFrame(data=dTest)

imp = IterativeImputer(max_iter=10, random_state=0)

imp.fit(dfTest)

dfComplete = pd.DataFrame(np.round(imp.transform(df),1), columns=['X','Y','Z'])
```

> As easy as that

https://www.codecademy.com/paths/data-analyst/tracks/dsf-data-wrangling-cleaning-and-tidying/modules/dsf-handling-missing-data/articles/missing-data-project-stack-overflow-survey-trends
