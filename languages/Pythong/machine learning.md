#machineLearning
scikit-learn

supervised lerning : uses labeled data
unsupervised learning : uses ulabeled data

unsupervised learning 
    uncovering hidden patters of unlabeled data 

supervised learning
    predictior variables/features and a target variable

starting the project
from sklearn import datasets
import pandas as pd
import numpy as np 
import matplotlib.pyplot as plt
plt.style.use('ggplot')
iris = datasets.load_iris()
