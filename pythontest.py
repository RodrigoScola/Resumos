import pandas as pd 
import matplotlib.pyplot as plt
import seaborn as sns 
import re

all_words_file = []


with open('total.txt', encoding='utf8') as word_file:
     content = word_file.read()
     words = content.split(' ')
     for word in words:
          only_chars = re.sub(r'[^a-zA-Z0-9]', ' ', word)
          splited = only_chars.split(' ')
          for s_w in splited:
               all_words_file.append(s_w)


all_words_file = [
     word for word in all_words_file if len(word) > 0
]

class WordHandler:
     def __init__(self, words):
          self.all_words = words
          self.word_counts = {}
          self.count_words()

     def get_word(self, word):
          return self.word_counts.get(word, '')

     


     def count_words(self):
          for word in self.all_words:
               if self.word_counts.get(word):
                    self.word_counts[word] += 1
               else:
                    self.word_counts[word] = 1

          sorted_count = {
               k: v for k, v in sorted(self.word_counts.items(),key=lambda item: item[1])
          }
          self.word_counts = sorted_count
          return sorted_count
     def __repr__(self):
          return f"A dictionary with {len(self.word_counts)} words"


wh = WordHandler(all_words_file)

print(wh.word_counts)
