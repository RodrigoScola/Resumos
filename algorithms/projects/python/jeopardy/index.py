import pandas as pd 


jp_data = pd.read_csv('jeopardy.csv')


jp_data.rename(columns={
     'Show Number': 'id',
' Air Date' : 'date',
' Round': "round",
' Category': 'category',
' Value' : "value",
' Question': 'question',
' Answer': 'answer'
}, inplace=True)


#%%

def in_question(data,category, words):
     has_word = lambda x: all( word in x for word in words)

     return data.loc[data[category].apply(has_word)][category]


filtered = in_question(jp_data, 'question', [
     'London'
])

jp_data['value'] = float( jp_data[jp_data['value']])
print(jp_data.head())