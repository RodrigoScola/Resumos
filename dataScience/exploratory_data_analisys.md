#dataScience #math
Is all about getting curious about your data - finding out what is there, what patterns you can find, and what relationships exist. eda is the important first step towards analysis and model building. 
the mais goals of eda are generally 
     uncover the data structure and determine how it is coded 
     inspect and get to know the data by summarizing and visualizing it
     detecting outliers, missing data and other anomalies and decide how/whether to address these issues 
     find new avenues for analysis and further research 
data inspection 
     what kind of data is in the dataset 
     what types of variables are there 
numerical summarization
     a way to condense the information we have into a more reasonable amount of space, 

acessing variable types 
     there are two ways to get data, numerical and categorical 
     every observation is classified according to its characteristics in flat file formats, the observations are the rows, the variables are the columns, and the values are at the intersection
     here are some example of variables and what we can assume of them 
          price - describes how much the cereal costs. we dont know if thats how much the consumer pays or the grocer pays
          brand - brands are categories, therefore its a categorical variable 
     if we were downloading this from a data repository, we would expect a data dictionary to define these variables and validate or invalidate our assumptions

categorical variables 
     they come in 3 types 
          nominal variables - they describe something 
          ordinal variables - ranking something
          binary variables - true or false
     
     nominal variables 
          when we want to describe something about the world, we need a nominal variable, they usually are words but they can also be numbers (zip codes, user ids...)
          they describe things with a lot of variation, a lot of times is used the other 'keyword'
     
     ordinal variables 
          when the categories have an inherent order, they usually are described by numbers like 1st, 2nd, 3rd
          even though they are numbers, it doesnt make sense to do math on them 
     
     binary variables
          when there are only two logically possible variations, we need a binary variable, if there is any possibility of a third option. its not a binary variable 

quantitative variables 
     continuous variables 
          must be infinitely smaller units of measurement between one unit and the next unit 
          some examples are length, time, temperature. they all increase continuously
     discrete variables 
          come from counting, for a variable to be discrete, there must be gaps between the smallest possible units
          some examples are people, cars and dogs
     some variables depend on context to determine if they are continuous or discrete

summary statistics 
     they allow a data analyst to condense a large amount of information into a small set of numbers that can be easily interpreted. in order to decide what kind of summary statistic to use, its important to consider two things
          the question (and how many variables that question involves)
          the data (quantitative or categorical) 
     
unvariate statistics 
          summary statistics that focus on a single variable are called unvariate
          useful for answering questions about a single feature in tabular data 
          they help us answer questions like 
               how much does a certain thing appear
               what proportion of things are a certain way
               how old is the oldest thing
          quantitative variables 
               central location
                    communicate the typical value of a variable 
                         mean
                         median
                         mode 
                         trimmed mean
               spread 
                    variability within a feature, provides context for measures of central location
                         range 
                         inter-quartile
                         variance 
                         standard deviation
                         mean absolute deviation
          categorical variables    
               a common thing for nominal or categorical variables is the frequency or proportion of observations in each category
               if we want to know what kind of fuel listed cars tend to use.
               we could calculate the frequency of each fuel type 
                    cars.fuel.value_counts()
               converting these frquencies to proportions can help compare more easily 
                    cars.fuel.value_counts(normalize=True)
          bivariate statistics
               summarize the relashionship between two variables
               one quantitative variable and one categorical variable 
                    we can use a mean or median difference
                         calculate that the median price of automatic transmission cars is 100000 ruppees higher than for manual transmission cars 
               two quantitative variables 
                    we can use the pearson correlation
               two categorical variables 
                    if we want to know whether automatic transmission cars are more likely to be sold by individuals or dealers, we are interested in the relationship between transmission and seller_type 
                    we can explore this relationship using a contingency table and the chi square statistics
> [!info]
> To learn more about statistics, you can view [[statistics_fundamentals]]



associations - quantitative and categorical variables 

suppose we want to know: is a students score associated with their school? if so then knowing what school a student attends gives us information about what their score is likely to be

visualizing quantitative variables 
     while summary statistics are certainly helpful for exploring and quantifying a feature, we might find it hard to wrap our minds around a bunch of numbers
     for quantitative variables, boxplots and histograms are two common visualizations. they are useful because they simultaneously communicate information about minimum and maximum values

value counts for categorical data 
     the measures of central tendency and spread that worked for describing numerical variables, like mean and standard deviation, generally becomes unsuitable when were dealing with discrete values
     unlike numbers, categorical values are not continuous and oftentimes do not have an intrinsic ordering
     a good way to summarize categorical variables is to generate a frequency table containing the count of each distinct value
     to see how many times a categorical value appeared 
          movies.category.value_counts()
     value proportions for categorical data 
          sometimes it is useful to also look at the proportion of values in each category 
          we can calculate the proportion for each category by dividing its count by the total number of values for that variable 
               rentals.borough.value_counts() / len(rentals.borough)
          you could also obtain the proportions by specifying normalize=True to the value_counts() method
               df.borough.value_counts(normalize=True)
     visualizing categorical variables 
          for a bar chart 
               {
                    sns.countplot(x='borough',data=rentals)
                    plt.show();
                    plt.close();
               }
          for the pie chart 
               {
                    rentals.borough.value_counts().plot.pie()
               }


mean and median differences
     to calculate the difference in mean g3 scores for the two schools, we can start by finding the mean math score for students at each school. we can then find the difference between them 
     {
          mean_gp = np.mean(scores_gp)
          mean_ms = np.mean(scores_ms)
          mean_gp - mean_ms
     }
     its the same way to calculdate medians
     {
          median_gp = np.median(scores_gp)
          median_ms = np.median(scores_ms)
          median_gp = median_ms
     }

side by side box plots 
     how do we know if a difference is considered small or large? to answer this question, we need to know something about the spread of the data 
     side by side box plots are useful in visualizing mean and median differences because they allow us to visually estimate the variation in data. this can help us determine if mean or median differences are large or small
     {
          sns.boxplot(data=df, x = 'var1',y='var2')
          plt.show()
     }

inspecting overlapping histograms
     another way to explore the relationship between a quantitative and categorical variable in more detail is by inspecting overlapping histograms, using the alpha keyword we can make the graph transparent 
     we can also use density to make sure that the y-axis is a density rather than a frequency
     without using density, it wont have proportions, so it will always seem that the group with higher value will have higher results 
     
     while overlapping histograms and side by side boxplots can convey similar information, histograms give us more detail and can be useful in spotting patterns that were not visible in a box plot 
     while the box plots and means/medians appear similar, the overlapping histograms iluminate the differences between these two distributions of scores 

     when looking at an association between a quantitative variable and a non-binary categorical variable, we must examine all pair-wise differences. For example, suppose we want to know whether or not an association exists between math scores (G3) and (Mjob), a categorical variable representing the mother’s job. This variable has five possible categories: at_home, health, services, teacher, or other. There are actually 10 different comparisons that we can make

associations - two quantitative variables 

scatter plots 
     one of the best ways to quickly visualize the relationship between quantitative variables is to plot them against each other in a scatter plot
     {
          plt.scatter(x=housing.price, y=housing.sqfeet)
          plt.xlabel('rental price (usd) ')
          plt.ylabel('area (square feet) ')
     }
     its important to note that different kinds of associations can lead to different patterns in a scatter plot
     if we dont see any patterns in a scatter plot, we can probably guess that the variables are not associated 

covariance 
     is a summary statistic that describes the strength of a linear relationship, its where a straight line would best describe the pattern of points in a scatter plot 
     {
          cov_mat_price_sqfeet = np.cov(housing.price, housing.sqfeet)
     }

correlation 
     is a scaled form of covariance. also measures the strength of a linear relationship but ranges from -1 to +1, making it more interpretable 
     highly associated variables with a positive linear relashionship will have a correlation close to 1. highly associated variables wit a negative linear relationship will have a correlation close to - 1
     {
          from scipy.stats import pearsonr
          corr_price_sqfeet, p = pearsonr(housing.price, housing.sqfeet);    
     }
     there are some limitations to using correlation or covariance as a way of assessing whether there is an association between two variables. because correlation and covariance both measure the strength of linear relationships with nonzero slopes but not other kinds of relationships correlation can be misleading. 
     
associations - two categorical variables 
     frequency 
          is useful for summarizing two variables at the same time
               influence_leader_freq = pd.crosstab(npi.influence, npi.leader)
               {    
                    no        yes 
               no   3015      1293
               yes  2360      4429
               
               x = leader 
               y = influence 

               }          
          2360 people dont see themselves as leader but have a talent for influencing people 
          3015 people dont see themselves as leader and dont have a talent for influencing people
          1293 peole  see themselves as being leaders but dont have a talent to influence people
          4429 people see themselves as leaders and have a talent for influencing people 

          to assess whether there is an association between these two variables, we need to ask wheteher information about one variable gives us information about the other. in this example, we see that among people who dont see themselves as a leader, a large number dont think they have a talent for influencing people. meanwhile among people who do see themselves as a leader, a larger number do think they have a talent for influencing people 
     proportions 
          sometime its helpful to convert those frequencies to proportions. we can accomplish this by 
               freq = pd.crosstab(item.item1, item.item2)
               proportion = freq / len(item)
               {
                    leader           no       yes
                    influence                    
                    no         0.271695  0.116518
                    yes        0.212670  0.399117
               }
marginal proportions 
          you would think that there would be 25% of the data in each of the four cells of the table, but thats not the case. in the bottom row, adding them makes 61.2%, that means that we can expect higher proportions in the bottom row, regardless of whether the questions are associated 
          the proportion of respondents in each category of a single question is called a marginal proportion. to calculate that you 
          {
               freq = pd.crosstab(item.item1, item.item2);
               proportion = freq / len(item)
               authority_marginals = proportion.sum(axis= 0);
               special_marginals = proportion.sum(axis= 1);
          }
     we can use the marginal proportions to create a contigency table of expected proportions if there were no association between these variables. to calculate these expected proportions we need to multiply the marginal proportions for each combination of categories 
     {
                              
                              leader = no              leader = yes                  leader = 0.271695 + 0.116518 = 0.388
          influence = no      0.484*0.388 = 0.188	     0.516*0.388 = .200            influence = 0.212670  0.399117 = 0.612
          influence = yes     0.484*0.612 = 0.296 	0.516*0.612 = 0.315
     }
     then we plug the result in the calculation times the total number of participants, we should get the number of participants in each field 
     {
                    leader = no	leader = yes
     influence = no	0.188*11097 = 2087	0.200*11097 = 2221
     influence = yes	0.296*11097 = 3288	0.315*11097 = 3501
     }
     we do that in python by
     {
          from scipy.stats import chi2_contigency
          chi2, pval, dof, expected = chi2_contigency(frequency)
          expected_pop = np.round(expected)
     }
the chi square statistic
     we can use the chi-square statistic to summarize how different these two tables are, we simply find the squared difference between each value in the observed table and its corresponding value in the expected table then add up those numbers
          chi_square = sum((observed - expected) ** 2)
     the interpretation of the chi-square statistic is dependent on the size of the contigency table, for a 2x2 table, a chi square statistic larger than 4 would stronly suggest an association between the variables 
     