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

<img src='https://static-assets.codecademy.com/Courses/EDA/Multivariate/boxplot1.svg'>

this chart gives us the relationship between education and compensation, but lets take it a step further to see whether men and women are paid equally. we can use the keyword `hue` to group by gender
```python
sns.boxplot(x='education',y='CompTotal', hue='Gender', palette='pastel', data=salary_data)
```

the result would look something like this

<img src='https://static-assets.codecademy.com/Courses/EDA/Multivariate/boxplot2.svg'>


#### multi-dimensional plots 

```python
import plotly.express as px

df = px.data.iris()

fig = px.scatter_3d(df, x='sepal_length', y='sepal_width',z='petal_width', color='species')
fig.show()
```

3D plots allow you to see relationships that might not be visible in 2D, such as clusters. Interactive graphing libraries such as Plotly allow you to rotate the plot to see points from different angles and zoom into specific areas of interest.


## Visualizing time

### Line plot

creating a line plot of the data

```python
sales_data['date'] = sales_data['date'].apply(pd.to_datetime)
sales_data.set_index('date',inplace=True)

plt.plot(sales_data['date'], sales_data['sales'])
plt.xlabel('Date')
plt.ylabel('sales (USD)')
plt.show()
```

<img src='https://static-assets.codecademy.com/Courses/EDA/Time_Series/lineplot.svg'>

> Sales are seasonal, peaking at the beginning and end of each year, and slowing down in the middle of the year

> saled dont seem to show signs of growth over time. this appears to be a stagnant business

### Box Plot 

they can be useful to see the distribution of values grouped by time interval 

###### example

A box plot for each year of sales and put them side to side for comparison

```python
sales_data['year] = sales_data['date'].dt.year
sns.boxplot(data=sales_data, x='year',y='sales')
plt.show()
```
And the result would look something like this 

<img src='https://static-assets.codecademy.com/Courses/EDA/Time_Series/boxplot.svg'>

> For each year of the sales data, we can easily see useful information such as median sales, the highest and the lowest sales, the interquartile range of our data and any outliers

### Heatmap 

##### Example 

A density heatmap of the sales within a timeframe

```python
sales = sales_data.groupby(['year','month']).sum()

sales_month_year = sales.reset_index().pivot(
     index='year',
     columns='month',
     values='sales'
)

sns.heatmap(sales_month_year, cbar_kws={
     "label": 'Total Sales'
})
plt.title('Sales over Time')
plt.xlabel('month')
plt.ylabel('year')
```

<img src='https://static-assets.codecademy.com/Courses/EDA/Time_Series/heatmap_mnth_year_sales.svg'>

### Lag Scatter Plot

the relationship betwen an observation and a lag of that observation
In a time series, a `lag` is a previous observation

- The observation at a previous time step 

- The observation at two times ago

In the sales dataset, we have a different sales value for each day. Therefore, the lag 1 value for any particular day is equal to the sales on the previous day. The lag 2 value is the sales two days ago, etc.

The plotting module of the pandas library has a built-in lag_plot function that plots the observation at time t on the x-axis and the lag 1 observation (t+1) on the y-axis:

```python
from pandas.plotting import lag_plot

# lag scatter plot
lag_plot(sales_data)
plt.show()
```

and the result would look something like this 

<img src='https://static-assets.codecademy.com/Courses/EDA/Time_Series/lagplot.svg'>

how can interpret a lag scatter plot?

- If the points more from the bottom left to the top right, this indicates a positive correlation between observations and their lag 1 values. for example, high sales on one day are associated with high sales on the previous day 

- If the points move from the top left to the bottom right

- If there is no identifiable structure in the lag plot, this indicates this indicates that the data is random

### Autocorrelation plot 

is used to show whether the elements of a time series are positively correlated, negatively correlated or independent of each other

this can be plotted with the `autocorrelation_plot()` function of the `pandas.plotting` module
```python
from pandas.plotting import autocorrelation_plot

autocorrelation_plot(sales_data)
plt.show()
```

The results would look something like this 

<img src='https://static-assets.codecademy.com/Courses/EDA/Time_Series/autocorrelation.png'>

> Lag is on the x-axis and the value of the autocorrelation, which ranges from -1 to 1, is on the y-axis. A value near 0 indicates a weak correlation while values closer to -1 and 1 indicate a strong correlation

> the autocorrelation plot for the sales data forms waves, oscilating betwen strong negative and positive correlation. This suggests that our datasets exhibits seasonality

> The autocorrelation decreases over time, indicating that sales tend to be similar on consecutive days, but sales from three years ago are less associated with todays sales than sales from one year ago 
