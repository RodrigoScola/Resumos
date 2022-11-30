# Data Visualization

```python
from matplotlib import pyplot as plt
```

## line charts

### Basic Line Plot

     plt.plot(x_values, y_values)

> we can have multiple polts on the same graph just use the `.show()` after the points

     plt.plot(x_values, y_values)
     plt.plot(x_values2, y_values2)
     plt.show()

### line Styles

##### color 

You can specify the **html color name** or a **HEX code**

##### style of the line 

* dashed = `linestyle='--'`

* dotted = `linestyle=':'`

* no line = `linestyle=''`

##### Marker 

* circle : `marker='o'`

* square : `marker='s'`

* star : `marker='*'`

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

* `title` - title of the diagram

* `xlabel` - title of the x axis

* `ylabel` - title of the y axis

## Subplots 

A way for you to show more than one graph instead of lines on top of eachother 

<img src='https://content.codecademy.com/courses/matplotlib/six_subplots.svg'>


to add a subplot use:
```python
     plt.subplot(rows, columns,index)
     plt.plot(xpoints, ypoints)
```

you can customize the spacing our subplots to make sure that the figure we create is visible and easy to understand. to do this use `plt.subplots_adjust()` 

* `left` - left side margin, increase to make room for a y-axis label

* `right` - right side margin, increase to make more room for the figure, or decrease it to make room for a legend

* `bottom` - bottom margin. Increase it to make room for a tick mark labels or an x-axis label

* `top` - top margin

* `wspace` - horizontal space between adjacent subplots

* `hspace` - vertical space between adjacent subplots


#### Legends 

label plot lines 

plt.legend([item1, item2])

<img src='https://content.codecademy.com/courses/matplotlib/legend.png'>

###### localization

you can use the `loc` to put the legend in the localization you want

Number Code | Location string
---: | :---
0 | best `default`
1 | upper right
2 | upper left
3 | lower left
4 | lower right 
5 | right
6 | center left
7 | center right
8 | lower center
9 | upper center
10 | center

##### Modify Ticks 

you dont need to show numbers in every single plot. We need to do something different

     ax = plt.subplot(1,1,1)

`ax` is an axes object, and it lets us modify the axes belonging to a specific subplot. when we want to modify the ticks, we will need to start by calling either:

     ax = plt.subplot(1,1,1)

or 

     ax = plt.subplot()

* `set_xticks()` - for the x axis 

* `set_yticks()` - for the y axis 

* `set_xticklabels()` - labels for x the ticks

* `set_yticklabels()` - labels for y the ticks

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

### Simple bar chart 

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

## Fill Between 

this is a way to display error in a line chart in a more pleasing way

<img src='https://content.codecademy.com/courses/matplotlib/fill_between.png'>

     plt.fill_between(x_values,y_lower, y_upper, alpha=0.2)
     plt.plot(x_values, y_values)

we can calculate the `y_lower` and `y_upper` but we can calculate it using a `list comprehension`

## Pie Chart

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
