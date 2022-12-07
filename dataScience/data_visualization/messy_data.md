# Dealing with Messy data

## Data Visualization for messy data

### Missing data

they are generally ignored by plotting functions. therefore, you may want to remove those rows or impute the missing values before plotting

> You can learn more about `MISSING DATA` in the wrangling and tidying lesson

### Preliminary view

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_outliers.png'>

THere should be over 300,000 points in there, and there is, but you cant see them because of the scaling. because that value on the top is so large, it has ofuscated the other ones on the graph, that an `outlier`

### Plotting with outliers

we can just cut out outliers of the data until we have a better feel for the data. Lets start by limiting the `price` and `sqfeet`

```python
housing2 = housing[(
     (housing.price < 1000000) & (housing.price > 0)
)]
housing2 = housing2[(
     (housing2.sqfeet < 2000000) & (housing2.sqfeet > 0)
)]
```
<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_scaledown1.png'>

this is a little better but its still very far apart
```python
housing2 = housing[(housing.price < 20000) & (housing.price>0)]
housing2 = housing2[(housing2.sqfeet < 20000) & (housing2.sqfeet>0)]
 
sns.scatterplot(housing2['sqfeet'], housing2['price'])
```

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_scaledown2.png'>

we can see a lot of points to form now, but there is still a lot of white space on the screen, lets limit the data one more time

```python
housing2 = housing[(housing.price < 3000) & (housing.price>0)]
housing2 = housing2[(housing2.sqfeet < 3000) & (housing2.sqfeet>0)]
 
sns.scatterplot(housing2['sqfeet'], housing2['price'])
```

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_toomany.png'>

now we can really see the bulk of the points from our dataset. however there are still so many points here that they are all printed on top of one another. This means that we cannot visualize the density of the points and therefore the overall relationship between price and area

### Visualizing many data points

when there are too many datapoints to visualize, one thing we can do is take a random subset of the data. This will mean fewer dots and because its a random subset, it should still be approximately generalizable to the full dataset. 
```python
perc = 0.05

housing_sub = housing2.sample(n = int(housing.shape[0] * perc))

sns.scatterplot(housing_sub['sqfeet'],housing_sub['price'])
```
there is still a lot of overlap , but we can see the positive linear association between area and price that was difficult to visualze originally

we can try making each point smaller to better see places of higher concentration of plotted points
```python
sns.scatterplot(housing_sub['sqfeet'], housing_sub['price'], s=5)
```
<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_subplot_smaller.png'>

we can reduce the alpha so higher concentrations are shown more easily

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_subplot_alpha.png'>


### Visualizing discrete variables 

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_discrete.png'>

this is good but it doesnt tell us how many observations there are. because both features are `discrete` values. In this case is being limited by whole numbers

adding a *jitter* adjusts the spread of points along the axes in order to more easily see some many points there are in each group

```python

sns.lmplot('beds','baths',data=housing_sub, x_jitter=0.15, y_jitter=0.15, fit_reg=False)
```
and the result would look something like this

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/scatterplot_discrete_jitter.png'>

### Log Transformation

sometimes when the data are on a `log scale`, it can be hard to visualize the distribution of the values

     sns.displot(housing.price)

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/distribution.png'>

while we could try to trim down the price values like before, it might be beneficial to try plotting the distribution of log price instead
```python
log_price = housing.price[housing.price > 0]
log_price = np.log(log_price)
sns.displot(log_price)
```

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/distribution_log.png'>

this provides a lot more information than the data in the original form, now we can even limit the plot to just be between 5 and 10 to see the distribution more clearly

     sns.displot(log_price)
     plt.xlabel('log price')
     plt.xlim(5,10)

<img src='https://static-assets.codecademy.com/Courses/EDA/Messy_Data_Viz/distribution_log_limited.png'>
