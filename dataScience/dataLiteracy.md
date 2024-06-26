#dataScience 
-- introduction to data --

what is data 
     organizations are fueled by data, and data scientists and analysts are at the forefront of working with it. but they dont work alone, even the most technically sophisticated data scientist will need to communicate about data 

data literacy 
     its not about every data that is meaningful and important, its about good data, how do you practice that?
          do you have sufficient data to answer the question at hand?
          can my data answer my exact question

data literacy in statistics
     statistics helps us test the likelihood of an event happening by random chance versus systematically
     example 
          showing discrimination in hiring in the workplace
          1 - if hiring results of subjective interviews are so unlikely that they couldnt have happened by chance
          2 - if the results couldnt happen by chance, then the alternatice is that they must happen by purposeful exclusion
          3 - if the employers are aware of the exclusionary effect and they continue to use that same hiring process, then theyre showing a reckless disregard for the rights of individual candidates not to be discriminated against in the hiring pricess
          4 - once we acknowledge that, the burden shifts to employers to show why their hiring requirements are valid and necessary 

data collection 
     data ethics and privacy 
          much of the data available to us comes from individuals and would be considered personally identifiable, we all have an obligation to protect personally identifiable information
          ethical issues regarding data collection may be divided into the following categories
               consent - individuals must be informed and give their consent for information to be collected 
               ownership - anyone collecting data must be aware that individuals have ownership over their information (if the individual doesnt want their information to be used anymore, you have to remove it)
               intention - individuals must be informed about what information will be taken, how it will be stored and how it will be used
               privacy - information about individuals must be kept secure 
     data can come from a lot of places, like research, governments, technology, observation or directly from individuals.
     we can collect this data in many different ways. one way is to seek out information that doesnt yet exist and measure it directly, this can include activities like surveys, observational studies, or recording the results of an experiment, this kind of data might be considered static, meaning the information is collected and it does not change
     data can also be ever changing, like apps and websites, unlike static data of more traditional methods, sensors and trackers can also continuously update data to include new information in a live feed
data sources 
     datasets are often kept private or can be accessed by a fee
     see ./links for more information

data can mean a lot of things, but within data science, it typically means a collection of organized observations 
          
shape of data 
     variables are the things you are looking for they can vary from an entity/observation/instance. They describe a characteristic of your entity. however it can be suprisingly difficult to define good variables.
     Good variables measure only one characteristic and should not be a characteristic themselves
     example 
          in a tree dataset, we are interested in the type of environment that the tree is in. For example we are looking at trees along city streets highways and undeveloped areas. we also want to know if trees are standing alone or with others
          there are many ways to organize this, we could 
               make 3 new variables, city, highway, undervaloped and input alone or group in the variables 
               or 
               make 2 new variables, location and single and input the location type in the location variable and 0 or 1 in the single variable 

variable types 
     the difference between measuring and categorizing is so important that the data itself is termed differenlty
          numerical - variables that are measured
          categorical - variables that are categorized
     numerical      
          are a combination of the measurement and the unit, without the unit a numerical variable is just a number
     categorical 
          describe characteristics with words or relative values 
          nominal variables - things that best describe the entity

dealing with messy data 
     some messy dataset problems includes but are not limited to null values, typos, different data types...
working with missing data 
     missing completely at random - no systemic reason present
     structural missing - we wouldnt expect a value there to begin with     
accuracy 
     standardization is essential for accuracy - if there are no standards, everyone can just "wing it"
     there are a lot of ways a dataset can have low accuracy, but it all comes down to the question of: are these measurements of categorizations correct
          - thinking about the data against expectations and common sense is crucial for spotting issues with accuracy. you can do this by inspecting the distribuition and outliers to get clues about what the data looks like 
          - critically considering how error could have crept in during the data collection process will help you group and evaluate the data to uncover systematic inconsistencies 
validity
     is a special kind of quality measure because its not just about the dataset, its  about the relashionship between the dataset and its purpose, a dataset can be valid for one question and invalid for another 

representative sampling
     convenience sample - data that was taken in a convenient way for the takers, great for premilinary understanding but not good for representing a broader population

-- thinking about data --

when looking at raw data, you can try to make generalization by looking over the rows and columns, but its difficult to answer these questions precisely. you need some kind of data vocabulary, thats where summary statistics come in

mean and standard deviation
     mean - also called the average, describes the center of a numeric distribuition by adding all values and dividing the count 
     standard deviation - the spread of values in a numeric distribuition relative to the mean. it is calculated by finding the average squared distance from each data point to the mean and square-rooting the result 
skewed distribuition -
     is asymmetrical with a steep change in frequency on one side and a flatter, trailing change in frequency on the other
     why the mean seems wrong in a skewed distribuition? the mean is the sum of all the values in the dataset divided by the total count. that sum is made very largy by all the higher incomes in that right trail, when the data is skewed, the mean may not be the best measure of a typical observation
Median - 
     is an alternative measure to the mean. Is the middle value when all values are arranged from smallest to largest.
Iqr -
     is the median of the median, so 25%.
outliers - 
     extreme values that are distant from the rest of the distribution. just as with skewness, outliers tend to more heavily influence the mean than the median. this same pattern occurs with measures of spread, the standard deviation is more influenced by the outliers and skewness than the iqr 
mode -
     the value with the highest frequency, but we can also think of the mode as the value where the peak of the distribuition occurs. while not great for computations, the mode can help us identify interesting features in a variable 

variable relashionships 
     if one correlates to another
          direction 
               positive coefficient means that higher values in one variable are associated with higher values in the other. A negative coefficient means higher values in one variable are associated with lower values of the other
          strength 
               the farther the coefficient if from 0, the stronger the relashionship and the more points in a scatter plot look like a line

-- visualising data --

unvariate charts 
     one big consideration when choosing a chart type is how many variables were comparing. Unvariate charts help us visualize a change in one variable 
     often that means measuring how much, which can either be a count or a distribuition 
     the data relationship is translated to a visual relationship 
     common charts for that are 
          bar graph
          histogram 
     
bi and multivariate charts 
     these charts show the relahionships between two or more variables
     the classic example is the scatter plot 
     scatter plots translate the relationship between two variables in the data into an easy-to-see spatial relationship because were relying on the idea that each variable increases as we move up the x or y axis, the scatterplot only makes sense for numeric variables, not categorical
     a line chart is another common bivarte chart, often measuring a variable changing over time, a stock chart measures the value of a company over time
     charts often rely on visual signifiers besides chart type to visualize additional variables in the data. For example the lines on a multivariate line chart are distinguished by pattern and color, and a scatter plot can use color, shape or dot size to make a third variable apparent.

aesthetic properties 
     is to clarify and visualize the details of the data 
     some properties are 
          position
          size 
          shape 
          color / pattern
be careful about redundacy or encoding the same information in different visual properties
information redundacy helps key data points to stand out

consider the audience 
     the best data visualizations help us to understand whats in the data, draw meaningful conclusions and make descisions about next steps. This requires context, though and different context is appropriate for different audiences 

context is key 
     we tend to think of context as outside a data visualization
     considering the specific audiences when making decisions about what context to include or not 
     viewers need context to understand what it means and why it matters

accessibility basics
     color -   
          when designing for color accessibility is to think not only about the hue of a color, but also the value aswell. good color comparisons use high contrast values, not just different hues 
     fonts -
          use readable fonts in readable sizes, and make sure they are web accessible if online
     
universal design
     making our work available and easy to acess for more people is a great principle to keep in mind, its why its called universal design
     we can apply it when it comes to 
          readability - keep the reading level to a high school level whenever possible 
          prior knowlege - define unfamiliar terms and avoid unnecesary jargon
          information overload - introduce new information with intentional pacing and organization 

misleading and confusing graphs 
     axes and scaling are like the page layout and spacing of a paper book, they are not the most exciting parts, but they do present plenty of opportunities to make it harder to readability
     axes 
          a common misleading of an axis is a break, it starts the count at a number thats not zero, or jumps ahead, this can distort the amount of difference between data points by removing context, and make small diffferences in data seem bigger
          like if a bar graph y axis points are 0 - 100 - 105 - 110
          if you are making the graph, instead of using a big break
               keep enough context to view differences in proportion to a meaningful amount 
               make two grapths, one without a break and one 'zoomed in'
               choose a visualization type that shows the change, rather than the raw numbers 
     scaling 
          the distance between numbers on an axis, almost all graphs use a linear scale, where the numbers count up by a consistent interval
          the other option is an logarithimic scale, is common for showing exponential grouth that wont fit on the page with a linear scale, but its almost never a good choice for a general audience
          in general, just like its always worth checking for a break, its always worth checking how a graph is scaled
     generally, we measure time horizontally, putting that variable on the x-axis. for the vast majority of circumstances, this maes the most sense and helps readers to intuit what the graph measures 
     
     color scales 
          color is often the first thing we register when looking at data visualizations. there are three types of color scales, used for the three major types of relashionships we can visualize with color
          sequential scales - 
                colors in a sequence - often this is the same hue with more and more white added to or taken away from the color. sequential scales are used to show a variable increasing or decreasing in intensity or amount, like income, depth... an example of color being used in that is a light blue going to dark blue
          diverging scales -
               anchored by colors from opposite sides of the color wheel, used to visualize data where the middle is a baseline, and either side represents a contrasting change.
          categorical scales - 
               variety of colors to differentiate categories without assigning a rank or order to them
     color associations
          we tend to view darker colors as 'more' and lighter colors as 'less'
          we come to data visaualizations with pre-existing associations for certain colors. These can be culturally specific or influenced by the norms for a particular field 
     
     labels and titles 
          if the graph doesnt have a good title (or even a title), viewers have to do more legwork to first figure out what each axis measures and then what the data points show 
          like a good title, annotations on a grapth also help the viewer to understand what is going on

-- data analysis and conclusions --

descriptive analysis - 
     describes, summarize and visualize data so that patterns can emmerge. It includes measures of central tendency and spread, which are referred to as descriptives or summary statistics 
exploratory analysis - 
     is the relahionships between variables in the dataset. while exploratory analyses might uncover some fascinating pattersn, we should keep in mind that exploratory analyses cannot tell us why something happened: correlation is not the same as causation
inferential analisis -
     testing a hypothesis on a sample of a population and then extend our conclusions to the whole population
     some rules need to apply      
          sample size must be big enough compared to the total population size (10% is a good rule of thumb)
          sample must be randomly selected and representative of the total population
          only test one hypothesis at a time 
causal analysis
     relies on carefully designed experiments, if something then something else 
     experiments that support causal analysis
          only change one variable at a time
          carefully control all other variables 
          are repeated multiple times with the same results 
causal analysis with observational data 
     sometimes we need to establish causation when actual experimentation is impossible. In such cases, we can sometimes apply causal inference techniques to observational data, but we need to be very careful 
          advanced techniques to identify a causal effect 
          meeting very strict conditions     
          appropriate statistical tests
predictive analysis
     trying to come up with an answer based on past behaviours 

biases types - 
     automation bias - following computations results without your better judgment 
     selection bias - when the sample is not representative of the population
     historical bias - systematic influence based on historic social and cultural beliefs
     algorithmic bias - when the algorithm produces systematic and repeatable errors that lead to unfair outcomes
     confirmation bias - tendency to seek out information that supports our views
     overgeneralization bias - inappropriately extending observations made with one dataset to other datasets, leading to overiterpreting results and unjustified extrapolation
     reporting bias - the tendency to only report or share results that affirm our beliefs or hypotheses or positive results

data acquisition

some things to consider when acquiring data are
     what data is needed to achieve the goal?
     how much data is needed?
     where and how can this data be found
     what legal and privacy concerns should be considered
data sources 
     primary data - data collected by the individual or organization who will be doing the analysis 
          experiments 
          observations
          simulations
          scraping
     secondary data - collected by someone else and typically published for public use
          any primary data that was collected by someone else 
          institutionalized data banks

exploring census variables
          