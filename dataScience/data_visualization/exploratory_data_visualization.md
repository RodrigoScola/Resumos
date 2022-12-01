# Exploratory data visualization

allows data analysts to look at their data and get to know the variables and relationships between them. 

##### In order to choose and design a data visualization it is important to consider

- The question you want to answer (and how many variables that question involves)

- The data that is available. 

## unvariate Analisys

It focuses on a signgle variable at a time. Unvariate data visualizations can help answer questions like 

- What is the typical price of a rental in NYC?

- What propoertion of NYC rentals have a gym?

#### Quantitative variables

box plots and histograms are very common because they communicate information about minimum and maximum values, central location and spread 

###### Example

we are interested in learning more about the price of apartments in NYC. A good starting price is to plot a box plot of the `rent` variable, like this:
```python
import seaborn as sns
import matplotlib.pyplot as plt

sns.boxplot(x='rent',data=rentals)
plt.show()
```
and the result would look something like this 

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/EDA-visualizations/boxplot_rent_blue.svg'>

we can see that most rental prices fall within a range of $2500-$5000. however there are many outliers, particularly on the high end. For more detail, we can plot a histogram of the `rent` variable
```python
sns.distplot(rentals.rent, bins=10, kde=False)
plt.show()
```
and the result would look something like this

<img src='https://user-images.githubusercontent.com/47720637/102232592-53c39600-3ebd-11eb-9912-5067ce4f3de9.png'>

the histogram highlights the long right-handed tail for rental prices. We can get a more detailed look at this distribution by increasing the number of `bins`

```python
sns.distplot(rentals.rent, bins=50, kde=False)
plt.show()
```

and the result would look something like this

<img src='https://user-images.githubusercontent.com/47720637/102232599-56be8680-3ebd-11eb-985e-874776e620fd.png'>

### Categorical Variables

we can use a bar plot to quickly visualize the frequncy of values in each category. 

#### example

we want to know how many apartments are available in each borough

```python
sns.countplot(x='borough', data=rentals, palette='winter')
plt.show()
```

the result will look something like this

<img src='https://user-images.githubusercontent.com/47720637/102085705-feb45100-3de4-11eb-8583-13317d9ebeff.png'>

We could use a pie chart to convey the same information

```python
borough_labels = [
     "Manhattan","Brooklyn",'Queens'
]
plt.pie(rentals.borough.value_counts(), labels=borough_labels)
```
## Bivariate analysis

the relationship between 2 variables

- Do apartments in different boroughs tend to cost different amounts?

- what is the relationship between the area of an apartment and how much it costs?

### One quantitative variable and one categorical variable

side-by-side box plots and overlapping histograms

##### Example

we want to understand whether apartments in different boroughs cost different amounts.

```python
sns.boxplot(x='borough', y='rent', data=rentals,palette='Accent')
plt.show()
```
and the result should look something like this 

<img src='https://user-images.githubusercontent.com/47720637/102090276-450cae80-3deb-11eb-924f-c236794723ed.png'>

> This plot indicates that rental prices in manhattan tend to be higher and have more variation than rental prices in other boroughs. we could also investigate the same question in more detail by looking at overlapping histograms of rental prices by borough

```python
plt.hist(rentals.rent[rentals.borough = 'Manhattan'], label='Manhattan',density=True, alpha=.5)
plt.hist(rentals.rent[rentals.borough = 'Brooklyn'], label='Brooklyn',density=True, alpha=.5)
plt.hist(rentals.rent[rentals.borough = 'Queens'], label='Queens',density=True, alpha=.5)
plt.legend()
plt.show()
```

and the result would look something like this

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/EDA-visualizations/overlapping_histograms.svg'>

### Two Quantitative variables 

a scatter plot is a great option for ivestigating the relationship between two quantitative variables.

###### Example

we want to explore the relationship betwen `rent` and `size_sqft`:

```python
sns.scatterplot(rentals.size_sqft,rentals.rent)
plt.show()
```

<img src='https://user-images.githubusercontent.com/47720637/102093545-48099e00-3def-11eb-9c48-dfcb3f5d0b80.png'>

### Two categorical variables

side by side or bar plots are useful for visualizing the relationship between two categorical variables

```python
sns.countplot(x='has_elevator', hue='has_gym',data=rentals)
plt.show()
```

and the result would look something like this

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/EDA-visualizations/sidebyside_barplot.svg'>


## Multivariate analysis 

the relationship between three or more variables

```python
sns.scatterplot(rentas.size_sqft, rentals.rent = hue=rentals.borough, palette='bright')
```
and the result would look something like this

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/EDA-visualizations/scatter_by_borough.svg'>

we could add more information about it if we want like use triangles and squares to indicate whether or not an apartment has a gym

> Keep in mind that **it is not good to overload an visualization**

we can create a heat map of a correlation matrix for all quantitative variables

```python
colors = sns.diverging_palette(150.275.s=80, l=55,n=9, as_cmap=True)
sns.heatmap(rentals.corr(), center=0, cmap=colors, robust=True)
plt.show()
```

and the result would look something like this

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/EDA-visualizations/heatmap_large_labels.png'>

## Visualizing multivariate relationships

### Scatter plots with visual cues

they are colors, shapes and sizes in a scatter plot. 

```python
sns.scatterplot(x='Schooling', y="LifeExpectancy',data=health_data)
plt.show()
```
<img src='https://static-assets.codecademy.com/Courses/EDA/Multivariate/scatterplot1.svg'>

we can add another variable like location by using a `hue` argument

```python
sns.scatterplot(x='Schooling', y='lifeExpectancy',
               hue='Location', palette='bright', data=health_data)
```

the result might look something like this

<img src='https://static-assets.codecademy.com/Courses/EDA/Multivariate/scatterplot2.svg'>

> this visualization provides much more insight than the previous visualization, for example 
> 
> - Years of education and life expectation expectancy have a positive relationship
>
> - Individuals in developed countries have more years of schooling than individuals in developing countries
>
> - The life expectancy in developed countries is greater thant the life expectancy in developing countries

even though you can add more variables in markers, sizes and things like that, be careful to not overload your chart

<img src='https://static-assets.codecademy.com/Courses/EDA/Multivariate/scatterplot3.svg'>

### Grouped box plots

They can be used to visualize two categorical variables and a quantitative variable. Having the box plots side by side can help you gain useful insights