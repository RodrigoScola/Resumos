#python 
pandas - 
     is a very popular library for working with data. 
     pandas are helpful functions for handling missing data, performing operations on columns and rows and transforming data 

numpy - 
     is an open-source python library that facilitates efficient numerical operations on large quantities of data 
arrays - 
     they are more flexible than normal python lists 
     they can have any number of dimendions, they hold a collection of items of any one data type and can be either a vecor or a matrix
     to convert a normal array to an np array {
          import numpy as np 
          list1 = [1,2,3,4];
          array1 = np.array(list1)
     }
mathematical operations can be performed on all values in a ndarray at one time rather than having to loop through values
{
     toyprices = np.array([1,2,3,4,5])
     print(toyprices - 2);
     # [-1 0 1 2 3]
}
pandas series and dataframes 
     series is the core object of the pandas library 
     allows values in the series to be indexed using labels 
     {
          agrs = np.array(1,2,3)
          series1 = pd.Series(ages)
          print(series1)
          # 0 | 1
          # 1 | 2
          # 2 | 3 
     }
     
creating a dataframe 
     is an object that stores data as rows and columns, is like a spreadsheet or a sql table 
     you can pass in a dictionary to pd.DataFrame()
     {
          df1 = pd.DataFrame({
               "name": [],
               "address" : [],
               "age": []
          })
     }
     or you can pass columns as a different variable entirely
     {
          df2 = pd.DataFrame([
               ['John Smith', '123 Main St.', 34],
               ['Jane Doe', '456 Maple Ave.', 28],
               ['Joe Schmo', '789 Broadway', 51]
               ],
               columns=['name', 'address', 'age'])
     }
     loading and saving csv
     {
          #loading 
          pd.read_csv('filename.csv')
          #saving
          df.to_csv('new_filename.csv')

     }
     you can see the dataframe by using print however if its a larger DataFrame, it might not be viable, thats why you should use the .head method, which will display the first 5 rows, and if you want to have more rows, you can add a number value which will increase the records 
     if you want to have more information about the file, you can use df.info
     you will see data columns and their type, 
     memory usage 
     and more statistics
select collumn
     {
          #use . and the column name 
          df = pd.DataFrame([
               ...data
          ],
          columns=[
               'month','day'
          ])
          day_values = df.day
     }
select multiple columns 
     {
          day_month_values = df[['day','month']]

     }
select row
     {
          df.iloc[row]
     }
select multiple rows 
     {
          df.icoc[3:8]
     }
select rows with logic 
     {
          #select all rows where the age is a number 
          df[df.age == num]
          #greater than
          df[df.age > num]
          #lesser than than
          df[df.age < num]
          #doesnt equal to
          df[df.name !== 'name']

          # using operators
          # or 
          df[(age < 3) | (df.name == 'Jones')]
          # and 
          df[(age < 3) & (df.name == 'Jones')]    
          # value is in array 
          df[df.name.isin([...names])]    
     }
setting indices 
     when we select a subset of datafreame using logic, their index are the same as they are in the table,
     that means that instead of having an 0,1,2,3 index, we might have an 0, 3,98,391 index
     {
          df = pd.DataFrame(...data)
          df2 = df.reset_index(inplace=True,drop=True)
     }

adding a column
     df['column_name'] = [...column_values] 
if the column value is the same for every record 
     df['column_name'] = column_value
you can also perform calculations in adding a column value
     df['column_name'] = value * 0.83
     # to have the current row value 
     df['column_name'] = df.Price * value 

performing column operations 
     you can use the df.column_name.apply(function) to apply that function to every value in that column
     {
          df["name"] = df.Name.apply(str.upper)
     }
applying lambda to a column 
     {
          df['Email Provider'] = df.Email.apply(
               lamda: x : x.split('@)[-1]
          )
     }
applying lambda to a row
     {
          df['Price with tax'] = df.apply(lambda row:
          row["Price"] * 1075
          if row['Is Taxed?'] == 'Yes'
          else row['Price'],
          axis=1
          )
     }
rename columns 
     {
          df.columns = [...new_column_names]
     }
if you just want to rename speciwc columns and not the whole thing
     {
          df.rename(columns {
               "name":"First Name",
               'age': "Age"
          },inplace=True)
     }

pandas aggregates
     aggregate statistic is a way of creating a single number that describes a group of numbers. common aggregate statistics include mean, median and standard deviation 

calculating column statistics 
     the median age 
          tablename.age.median()
     how many different records are there 
          tablename.state.nunique()
     to get the value of the unique record 
          tablename.color.unique()
     common commands are 
          mean - average of all values in column
          std - standard deviation
          median - the median
          max - the maximum value in column
          min - the minimum value in column
          count - the number of values in column
          unique - list of unique values in column
you can group items 
     df.groupby('column_name')
and perform operations on them     
df.groupby('column_name').column2.measurement().reset_index();
you can group items on more than one column
     df.groupby(['column1_name','column2_name']).id.count().reset_index();
pivot tables
     when we performa a groupby across multiple columns, we often want to change how our data is stored, adding or removing columns, changing how we see them...
     reorganizing a table in this way is called pivoting, the new table is called a pivot table 
     {
          df.pivot(columns='columntopivot',
                              index='columntoberows',
                              values='columntobevalues')
     }
     and an example of that would look like this 
     {
          grouped = df.groupby([
               'location','Day of Week'
          ]).['Total Sales'].mean().reset_index()
          pivoted = grouped.pivot(
               columns='day of Week',  
               index='Location', #the main column
               values='Total Sales' 
          ).reset_index()
     }

multiple data frames
     inner merge 
          merged_table = pd.merge(orders, customers)
     or 
          new_merged_table = pd.merge(orders).merge(products)               
     you can only merge 2 tables at a time, if you want to do more, you need to chain them 
          all_data = pd.merge(table1, table2).merge(table3)

merge on specific columns     
     what if tables have the same column_name? one way to address that is to use the rename property
     {
          all_data = pd.merge(orders, products.rename({
               id: 'product_id'
          }))
     }
     but what if we dont want to do that? well pandas has us covered 
     we could use the keywords left_on , right_on to specify which columns we want to perform the merge on 
          all_data = pd.merge(
               orders, customers ,
               left_on="customer_id",
               right_on="id"
          )
     however well end up with two columns called id, one from the first table and one from the second, pandas wont let you have two columns with the same name, so it will change them to be id_x and id_y
     to change that behaviour we could add the suffixes keyword
     it will change the _x and _y to be the suffixes values 
          {
               all_data = pd.merge(
                    orders, customers,
                    left_on='customer_id'
                    right_on='id',
                    suffixes=['_order','_customer']
               )
          }
mismatched merges 
     outer merge
          when we merge two dataframes whose rows dont match perfectly, we lose the unmatched rows
          the inner merge will only include the matching rows, filtering out the unmatching ones in the process
          if you dont want that behaviour, use the how keyword and the outer value 
               pd.merge(thing1, thing2, how='outer')
          this will join where it can and have nan as a value where its missing
     left merge
          includes all rows from the left table, but only includes the rows on the second table that match the values from the first
          { pd.merge(list1, list2, how='left')}
     right merge
          includes all rows from the right table, but only includes the rows on the second table that match the values from the first
          { pd.merge(list1, list2, how='right')}

changing numerical variable datatypes 
     how to know the datatypes of the columns in the dataFrame with the dtypes attribute 

     print cereal.dtypes 

     continuous (numerical) variables should usually be stored as the float datatype because they allow us to store decimal values 
     discrete (numerical) variables should be stored as the int datatype to represent mathematically that they are discrete 

     changing a variable type 
     
     movies['row_name'].astype(new_type).fillna(0,inplace= True)

changing categorical variable data types 
     nominal variables are often represented by the object datatype, columns in the object data type can contain any combination of values, including strings integers booleans...
     ordinal variables should be represented as objects, but pandas often guesses int since they are often encoded as whole numbers 
     binary variables can be represented as bool but pandas often guesses int or object data types 

the pandas category datatype 
     for ordinal categorical variables, we often want to store two different pieces of information, category labels and their order. none of the data types weve covered so far can store both of these at once
          print(cereal['shelf'].unique()) # [top, mid , bottom]
     at this point python does not know that these categories have an inherent order
     there is a specific data type for categorical variables in pandas called category to address this problem, the pandas .Categorical() method can be used to store data as type category and indicate the order of the categories 
          cereal['shelf'] = pd.Categorical(cereal['shelf'], ['bottom','mid','top'], ordered=True)
     now not only does python recognize that the shelf column is an ordinal variable,it understands that top > mid     

one hot encoding
     sometimes we we need a different approach because 
          we have a nominal categorical variable so it doesnt make sense to assign numbers like 0,1,2,3,4,5 as an order is not present 
          we have an ordinal categorical variable but we dont want to assume that theres equal spacing between categories
     another way of encoding categorical variables is called one hot encoding 
          create a new binary variable for each of the categories within our original variable, this technique is useful when managing nominal variables because it encodes the variable without creating an order among the categories 
     to perform ohe on a variable within a pandas dataframe, we can use the pandas .get_summies() which creates a binary or dummy variable for each category. we can assign the columns to be encoded in the columns parameter, and set the data parameter to the dataset we intend to alter
     when we use pd.get_dummies() we are effectively creating a new dataframe that contains a different set of variables to the original dataframe 
          titanic = pd.get_dummies(data=titanic, columns=['embarked'])
          {
          Survived	Pclass	Name	SibSp	Parch	Fare	Cabin	Embarked_C	Embarked_Q	Embarked_S
          1	1	1	Cumings, Mrs. John Bradley (Florence Briggs Th…	1	0	71.2833	C85	1	0	0
          3	1	1	Futrelle, Mrs. Jacques Heath (Lily May Peel)	1	0	53.1000	C123	0	0	1
          6	0	1	McCarthy, Mr. Timothy J	0	0	51.8625	E46	0	0	1
          10	1	3	Sandstrom, Miss. Marguerite Rut	1	1	16.7000	G6	0	0	1
          11	1	1	Bonnell, Miss. Elizabeth	0	0	26.5500	C103	0	0	1
          }
     this just expands the columns with ones and zeros, the expanded variables are then added to the original dataframe

     to display a summary statistic view of the data 
          print(rentals.describe(include='all'))
     
central tendency for quantitative data 
     mean 
          rentals.rent.mean()
     median
          rentals.rent.median()
     mode 
          rentals.rent.mode()
     trimmed mean 
          from scipy.stats import trim_mean
          trim_mean(rentals.rent, proportiontocut=0.1)

spread for quantitative data 
     range 
          rentals.rent.max() - rentals.rent.min()
     interquartile range 
          rentals.rent.quantile(0.75) - rentals.rent.quantile(0.25)
     variance 
          rentals.rent.var()
     standard deviation 
          rentals.rent.std()
     mean absolute deviation  
          rentals.rent.mad()
