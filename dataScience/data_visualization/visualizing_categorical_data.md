# Visualizing Categorical Data

##### Example

You work at a veterinary office and want to compare the number of different types of pets people have in a specific town. This will give you a sense of what supplies you may need and how many office visits you should expect over the coming year. The different types of pets we want to compare are 

Type of pet | Number of pets
--- | ---
Dogs | 4325
Birds | 2423
Cats | 5126
Fish | 3223
Chinchillas | 978
Snakes | 1112
Lizzards | 453

This table is informative to the reader, however is time consuming for someone to recognize patterns in the data and pick out useful information, we can transform it into a bar chart 

```python
plt.bar(pets.type, pets.count)
plt.show()
```
