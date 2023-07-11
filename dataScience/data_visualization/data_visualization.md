#dataScience 
# Data Visualization

##### _Preparing, Visualizing, Styling_

```python
from matplotlib import pyplot as plt
```

## line charts

### Basic Line Plot

     plt.plot(x_values, y_values)

> we can have multiple plots on the same graph just use the `.show()` after the points

     plt.plot(x_values, y_values)
     plt.plot(x_values2, y_values2)
     plt.show()

### line Styles

##### color

You can specify the **html color name** or a **HEX code**

##### style of the line

- dashed = `linestyle='--'`

- dotted = `linestyle=':'`

- no line = `linestyle=''`

##### Marker

- circle : `marker='o'`

- square : `marker='s'`

- star : `marker='*'`

> To see other options, check out the [Matplotlib documentation](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot)

### Axis and Labels

sometimes it can be helpful to zoom in or out of the plot, especially if there is some detail we want to adress we can use `plt.axis()` to achieve that. the parameters should contain

1. the minimum x-value displayed

2. the maximum x-value displayed

3. the minimum y-value displayed

4. the maximum y-value displayed

```python
x = [0,1,2,3,4]
y = [0,1,4,9,16]
plt.plot(x,y)
plt.axis[0,3,2,5]
plt.show()
```

##### And the output of that will be

<img src='https://content.codecademy.com/courses/matplotlib/axis_zoom.png'>

you can label axis

- `title` - title of the diagram

- `xlabel` - title of the x axis

- `ylabel` - title of the y axis

## Subplots

A way for you to show more than one graph instead of lines on top of eachother

<img src='https://content.codecademy.com/courses/matplotlib/six_subplots.svg'>

to add a subplot use:

```python
     plt.subplot(rows, columns,index)
     plt.plot(xpoints, ypoints)
```

you can customize the spacing our subplots to make sure that the figure we create is visible and easy to understand. to do this use `plt.subplots_adjust()`

- `left` - left side margin, increase to make room for a y-axis label

- `right` - right side margin, increase to make more room for the figure, or decrease it to make room for a legend

- `bottom` - bottom margin. Increase it to make room for a tick mark labels or an x-axis label

- `top` - top margin

- `wspace` - horizontal space between adjacent subplots

- `hspace` - vertical space between adjacent subplots

#### Legends

label plot lines

plt.legend([item1, item2])

<img src='https://content.codecademy.com/courses/matplotlib/legend.png'>

###### localization

you can use the `loc` to put the legend in the localization you want

| Number Code | Location string |
| ----------: | :-------------- |
|           0 | best `default`  |
|           1 | upper right     |
|           2 | upper left      |
|           3 | lower left      |
|           4 | lower right     |
|           5 | right           |
|           6 | center left     |
|           7 | center right    |
|           8 | lower center    |
|           9 | upper center    |
|          10 | center          |

##### Modify Ticks

you dont need to show numbers in every single plot. We need to do something different

     ax = plt.subplot(1,1,1)

`ax` is an axes object, and it lets us modify the axes belonging to a specific subplot. when we want to modify the ticks, we will need to start by calling either:

     ax = plt.subplot(1,1,1)

or

     ax = plt.subplot()

- `set_xticks()` - for the x axis

- `set_yticks()` - for the y axis

- `set_xticklabels()` - labels for x the ticks

- `set_yticklabels()` - labels for y the ticks

suppose we wanted to set our **x-ticks** to be at 1, 2, and 4

```python
     ax = plt.subplot()
     plt.plot([0,1,2,3,4],[0,1,4,9,16])
     plt.plot([0,1,2,3,4], [0,1,8,27,64])
     ax.set_xticks([1,2,4])
```

and the result would look something like this

<img src="https://content.codecademy.com/courses/matplotlib/tick_marks.png">

### Figures

when were making lots of plots, its easy to end up with lines that have been plotted and not displayed. If were not careful, these "forgotten" lines will show up in your new plots. In order to be sure that you dont have any stray lines you can use the command `plt.close('all')` to clear all existing plots before you plot a new one

sometimes we would rather have two separate figures entirely. To have that we cold use the command `plt.figure()` to create new figures and size them how we want.

To change the size we can use the keyword `figzize` and `width`, `height` to change the canvas size

```python
     plt.figure(figsize=[4,10])
```

##### **To save figures you use the `plt.savefig('filename')` and save it to your filesystem**

## Charts

### bar chart

- They have lengths that are proportional to the counts they represent

- Each bars width in the bar chart is the same, meaning each bars area is also proportional the the counts they represent

allows you to create simple bar charts to compare multiple categories of data

     plt.bar(range(len(days_in_year)), days_in_year)
     plt.show()

and the result is:

<img src='https://content.codecademy.com/courses/matplotlib/planet_bar_chart.png' style="border: 1px solid white; background-color: white;">

> If your labels are long, you can rotate them by using the `rotation` keyword

```python
ax.set_xticklabels(['Mercury', 'Venus',...], rotation=30)
```

#### Side-By-Side Bars

you can just use `plt.bar(x, y)` twice and use `plt.show()` after

```python
store1_x = data1
store2_x = data2
sales = sales_arr

plt.bar(store1_x, sales);
plt.bar(store2_x, sales);
plt.show()
plt.close('all')
```

the result will be something like this

<img src='https://content.codecademy.com/courses/matplotlib/population_bar_chart.png'>

#### Stacked bars

for the second bar use the `bottom` keyword and the value will be the `dataset`

```python
plt.bar(range(len(item1)), item1)
plt.bar(range(len(item1)), item2, bottom=item1)
```

## Error Bars

if you are uncertain about a particular value, you can use the `yerr` keyword and an integer or a list as the value, matplotlib will signify it on the chart

<img src='https://content.codecademy.com/courses/matplotlib/variable_error.png'>

> You can add the caps by using the `capsize` keyword

### Vertical vs Horizontal Bar charts

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/horizontal_vertical_charts.png'>

### Bar charts vs histograms

differences between charts and histograms

- Bar charts are used for categorical variables, and histograms are used for quantitative data

- Histograms must always be arranged in a specific order, because they represent a range of numerical values

### Bar chart ordering

#### nominal data

Nominal data has labels with no specific order. But you have some ways to order it if you want

- ascending

  ```python
       sns.countplot(dataset['itemname'],
       order=dataset['itemname'].value_counts(ascending=True).index)
  ```

  and the result might look something like this
  <img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/ordered_graph1.png'>

- descending

```python
sns.countplot(dataset['itemname'],
order=dataset['itemname'].value_counts(ascending=True).index)
```

#### Ordinal data

If we are working with ordinal data, we should plot the data according to our categorical variables.

we can order categorical values by categories like so

     sns.countplot(dataset['itemname'], order=['first_item','second_item','third_item'])

## Fill Between

this is a way to display error in a line chart in a more pleasing way

<img src='https://content.codecademy.com/courses/matplotlib/fill_between.png'>

     plt.fill_between(x_values,y_lower, y_upper, alpha=0.2)
     plt.plot(x_values, y_values)

we can calculate the `y_lower` and `y_upper` but we can calculate it using a `list comprehension`

```python
y_lower_bound = [
     element - (element * error_in_decimal) for element in original_list
]
```

## Pie Chart

useful for when you want o visualize a table of proportions

     plt.pie([500,1000,750,300,100])

##### it will result in something like this

<img src='https://content.codecademy.com/courses/matplotlib/budget_skew.png'>

##### if you dont want the chart to be tilted you can set the `plt.axis('equal)`

```python
     plt.pie([500,1000,750,300,100])
     plt.axis('equal')
```

##### it will result in something like this

<img src='https://content.codecademy.com/courses/matplotlib/budget_chart.png'>

### Labeling

#### method 1 - Normal labeling

```python
budget_data = []
budget_categories = []

plt.pie(budget_data)
plt.legend(budget_categories)
```

<img src='https://content.codecademy.com/courses/matplotlib/pie_legend.png'>

##### Method 2 - In Pie labeling

```python
budget_data = []
budget_categories = []

plt.pie(budget_data, labels=budget_categories)
```

<img src='https://content.codecademy.com/courses/matplotlib/pie_labels.png'>

you can format numbers by using the `autopct` keyword

- `0.2f` - 2 decimal places

- `0.2f%%` - 2 decimal places but with a % sign at the end

- `%d%%` - rounded to the nearest int

using a full call to `plt.pie()` might look like this

```python
plt.pie(data, labels=data_labels, autopct='%0.1f%%')
```

and the result might look something like this:

<img src='https://content.codecademy.com/courses/matplotlib/budget_chart_full.png'>

### Pitfalls of pie charts

#### Comparing category sizes

Slices on a pie chart are tough to compare as the human eye has difficulty comparing areas

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/bad_pie_charts.jpeg'>

if those same values were in a bar chart, it would be **much** easier to compare

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/good_bar_graphs.jpeg'>

### What do you do when you have too many slices?

whith too many slices, trying to decipher the visual becomes cumbersome

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/college_major.png'>

what can you do?

1. you can aggregate your slices to create fewer while still showing an informative story

2. you can see if a bar chart does a more effective job at portraing the information.

## Histogram

How many values in a dataset fall between different sets of numbers.

_How many numbers fall between 0 and 10? between 10 and 20? between 20 and 30?_

all bins in a histogram are always the same size. The width of each bin is the distance betwen the minimum and maximum values of each bin.

<img src='https://content.codecademy.com/courses/matplotlib/histogram.png'>

**`plt.hist()` finds the minimum and the maximum values in the dataset and creates 10 equally-spaced bins between those values**

if we want more than 10 bins, we can use the keyword `bins` to set how many bins we want to divide the data into. The keword `range` selects the minimum and maximum values to plot within that range

### Multiple Histograms

- `alpha` - to change the opacity of a histogram

     <img src='https://content.codecademy.com/courses/matplotlib/alpha_histograms.png'>

- `histtype` - to change the design (to show just the outline use `step`)

- `normed` - if your histogram have different numbers or samples, making one much bigger than the other, _use `True`_ to make so you can compare the difference more clearly

##### before

<img src='https://content.codecademy.com/courses/matplotlib/different_hist.png'>

##### after

<img src='https://content.codecademy.com/courses/matplotlib/normalized_hist.png'>

---

## How to select a meaningful visualization

when planning out a visualization, youll usually have an idea of what questions youll want to explore. During the brainstorming phase, consider

- The focusing question you want to answer with your chart

- the type of data that you want to visualize

<img src='https://content.codecademy.com/programs/dataviz-python/unit-3/pickachart.svg?sanitize=true'>

## Chart Categories

### Composition Charts

_what are the parts of some whole? What is the data made of?_

They illustrate the different data components and their percentages as part of a whole. Datasets that work well

- data pertaining probabilities

- Proportions and percentages

### Distribution charts

A commonly seen distribution is a bell curve.

datasets that work well

- Data in large quantities

### Relationship Charts

_How do variables relate to eachother_

datasets that work well

- Data with two or more variables

- datasets that illustrate a _correlation_ between two or more variables

### Comparison Charts

_How do variables compare to eachother_

datasets that work well

- Data must have multiple variables, and the visualizations in this category allow readers to compare those items against the others

## Seaborn

     import seaborn as sns

### Bar Charts

to have a countplot

     sns.countplot(dataset['itemName'])

and the result might look something like this

<img src='https://static-assets.codecademy.com/Paths/data-analyst-career-path/barcharts_piecharts_lesson/flu_bar_chart.png'>

other methods that builds bar charts

- `barplot` - can use any function to determine the hight of bars

## Best Practices

In general your visuals should include clearly labeled axes that are evenly spaced. Legends and colors should be used when plotting data across multiple groups

### Color

- best to avoid complementary colors

- Use the build-in color palettes in visualization libraries [seaborn color palette](http://seaborn.pydata.org/tutorial/color_palettes.html)

### Bar Charts

- Use them when you want the reader to understand relative differences accross groups

- If you want to look at averages across groups, that might be better communicated using a scatter plot with error bars

### Line charts

line charts are helpful when the x-axis reflects a quantitative variable. They emphasize the rate of change

#### Y-axis

- we should consider whether we include or exclude zero on the y-axis

<img src='https://static-assets.codecademy.com/Paths/data-science-career-path/data-visualizations-best-practices/twitter_image.png'>

## What to avoid

### Pie charts

- using too many categories

- lacking order

- using 3d without labels, percentages...

<img src='https://static-assets.codecademy.com/Paths/data-science-career-path/data-visualizations-best-practices/pie_chart_3d.png'>

### Stacked bar charts

- Difficult to compare categories across groups

<img src='https://static-assets.codecademy.com/Paths/data-science-career-path/data-visualizations-best-practices/stacked_bar.png'>

> they are categorized by year, but its difficult to gauge an increase and decrease across groups, look at _general_ for example
>
> This is what it would look like in a line chart
> <img src='https://static-assets.codecademy.com/Paths/data-science-career-path/data-visualizations-best-practices/book_plot.png'>

### Stacked area charts

- difficult to gauge increase and decrease
  <img src='https://static-assets.codecademy.com/Paths/data-science-career-path/data-visualizations-best-practices/stacked_area_plots.png'>

### visualization in python

## Learn more

- [Data visualization Catalogue](https://datavizcatalogue.com/search.html)

- [Color palettes](http://seaborn.pydata.org/tutorial/color_palettes.html)
