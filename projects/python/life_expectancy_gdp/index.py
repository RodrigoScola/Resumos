import pandas as pd
from inspect import signature, Parameter

import numpy as np 


class Countries:
     def __init__(self):
          country_data = pd.read_csv('all_data.csv')
          country_data.rename(columns={
               "Life expectancy at birth (years)": "life expectancy",
               "Country": "country",
               "Year": 'year',
               'GDP': "gdp"
          }, inplace=True)
          country_data['country'] = country_data.country.apply(str.lower)
          self.country_names = country_data['country'].unique()
          self.country_data = country_data
     def __getitem__(self, name):
          if name in self.country_names:
               return self.country_data[self.country_data['country'] == name]
          return self[name]
     
     
c = Countries()

print(type(c.country_data))
