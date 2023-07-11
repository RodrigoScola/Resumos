#dataScience #math #statistics 
# Linear Regression 

### Understand the relationship between a quantitative variable and one or more other variables. It can help us answer questions like 

* What is the relationship between apartment size and rental price for nyc apartments? 

* is a mothers height a good predictor of their adult height

first we need to see if there is a relationship that we can model 

we can first see the *variable relationships* (see more in data literacy)

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/height_weight_scatter.svg'>

> Looking at the image there is a certain *line* that shows that there is a correlation between height and weight 

## Equation of a line

$$
y = mx + b
$$

* x and y are variables *(height and weight for example)*

* b represents where the line intersects with the y-axis

* m represents the slope. How steep the line is

##### Example 

$$
y = 2x + 12
$$

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/equation_of_line.svg'>


### Finding the "best" line

*Ordinary least squares* - the line that minimizes the total squared error for all data points. Also called the *loss function*

$$
y = mx + b + error
$$

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/loss.svg'>

in this plot, we see two points on either side of a line. One of the points is one unit below the line (labeles - 1). The other point is three units above the line (labeled 3). The total squared error (loss) is: 

$$
loss = (-1)^2 + (3)^2 = 1 + 9 = 10
$$

### Linear regression in python

```python
import statsmoldes.api as sm 
```
to create a formula:
```python 
model = sm.OLS.from_formula('y ~ x',data=dataset)

# after we can fit the results 
results = model.fit();

# and inspect the results 
print(results.params)

# output
# Intercept -21.67
# height 0.5 - height is not a variable name 
# dtype: float64
```
#### Using a regression model for prediction 

using the output results allows us to predict the y if we know the x 

$$
Y = height * x - Intercept  
$$
<p style='text-align:center'>Using the outputs from before and x as 160 we get</p>

$$
Y = 0.5 * 160 - 21.67 = 58.33
$$

We can do it using a couple of methods 

```python
     results.params[1]*number_we_want + results.params[0]
```
or 
```python
new_data = { 'height':[number_we_want]}

results.predict(new_data)
```

### Assumptions of linear regression

* The relationhip beteeen the outcome variable (*y*) and the predictor (*x*) is linear

* residuals should be normally distributed 

* residuals have equal variation across all values of the y variable 


**true values** - values where the *y* is their actual value

**fitted values** - values where the *y* is the *y* in the regression line

**residuals** - differences between true values and fitted values 

```python
     model = sm.OLS.from_formula('y ~ x', data=modelname);
     results = model.fit()
     fitted_values = results.predict(modelname)
     residuals = modelname.y - fitted_values
```

#### residuals should be like this:

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/resids_normal.svg'>

#### residuals should NOT be like this:

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/resids_not_normal.svg'>


#### residuals should be plotted like this 

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/fittedvals_resids_nopattern.svg'>

#### residuals should NOT be plotted like this 

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/fittedvals_resids_pattern.svg'>


### Categorical Predictors 

yes or no 

we draw a line on the mean of each one 

```python
     # calculate group means 
     data.groupby('group_divider').mean().var_name

     # show line 
     plt.plot([0,1], [169.016, 183.644])
```

<img src='https://static-assets.codecademy.com/skillpaths/master-stats-ii/intro-linear-regression/height_bball_line.svg'>


### Categorical Predictors: Fit and Interpretation

the `from_formula()` method works with any binary variable, meaning:

true | false
------| -----
true | false
'yes' | 'no'
0 | 1

# Linear Regression with a categorical Predictor
