import pandas as pd 
import matplotlib.pyplot as plt
import seaborn as sns 

word = pd.read_csv('./word_count.csv')

sns.pointplot(word, x='word', y='len')
plt.show()
plt.close()
