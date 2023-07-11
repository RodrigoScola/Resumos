#dataScience #python 
loading a dataframe
import importname as in

what is pandas? 
    import pandas as pd
    is a module to work with tabular data or database tables

what can pandas do for you?
    loading tabular data from different sources
    search for particular rows or collumns 
    calculate aggregate statistics
    combining data from multiple sources

loading data into a dataframe is the first step in using pandas, one of the easiest way to create a dataframe is by using csv files
turning a csv into a dataframe is easy, just using a function
    df = pd.read_csv('filename.csv');
    using the head method, just selects the first 5 things
        df.head();
    if you want the information you use the info method
        df.info();
        it displays 
            the num of entries
            the num of collumns
            letter_index
            letter 
            frequency
            types of data
            memory usage
Selecting columns 
    to select a specific collumn you just add a . and the column name after and the method you want 
        df.prices.sum() <- this calls the sum of all the records on the price collumn
        or if the name have spaces or special characters
        prices = df['prices']
        
Selecting Rows
    using logic with dataframes
        you can query stuff by using an if statement inside the calling of the collumn
            db[db.price > 20.00];
                this will show only the things that are above 20.00;
            or if the item has spaces or special characters
                db[db['price'] > 20.00];