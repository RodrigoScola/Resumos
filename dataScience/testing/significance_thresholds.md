# Significance Thresholds

#### Interpret the outcome based on whether a p-value is higher or lower than the threshold

In order to turn a p-value, into a yes or no answer, data scientists often use a pre-set significance threshold. A common choice is 0.05. P-values that are less than this threshold are considered "significant" while larger are considered not significant

## Interpreting a p-value based on a threshold

##### Example model

We have an online learning webiste, and we have a question that we think is good to have a 70% success rate on the first try, on the first month however it had 60%.

###### question:

Should we change the question or was it just sheer luck and we should just keep it the same?

---

Suppose we collected data from 100 learners and ran a binomial hypothesis test and formed up our hypothesis 

* *Null:* the probability that a learner gets the question correct is 70%

* *Alternative:* The probability that a learner gets the question correct is **not** 70%

* If the p-value is less than `0.05`, the p-value is significant. We will "reject the null hypthesis" and conclude that the probability of a correct answer is significantly different from 70%. We will rewrite the question.

* if the p-value is greater than `0.05`, the p-value is not significant. We will not be able to reject the null hypothesis, and will conclude that the probability of a correct answer is not significant enough. We wont do anything 

## Error types 

we can have false negatives or false negatives 

what if the true probability of a learner answering the question **is** 70%?

that would lead to a false negative and make us remove the question from the website when there is no need to

if the null hypothesis is true and the p-value is significant 

     type I error

if the null hypothesis is false and the p-value is significant 

     Correct!

if the null hypothesis is true and the p-value is not significant 

     Correct

if the null hypothesis is false and the p-value is not significant 

     type II Error

## Setting the Type I Error rate 

> When we run a test with a significance threshold, the threshold is equal to the type error rate for the test

```python 
     def type_1error_rate(expected, size, p, sig_threshold):
          false_positives = 0;
          for i in range(1000):
               sim_sample = np.random.choice(['y','n'], size=size, p=[p, 1 - abs(p)])
               num_correct = np.sum(sim_sample == 'y')
               p_val = binom_test(num_correct, 100, p)
               if p_val < sig_threshold:
                    false_positives += 1

     return false_postives # 0.512
```

## Problems with multiple hypothesis tests

while the significance threshold allows to control the false positive rate for a single hypothesis test, this doesnt work when performing multiple tests as part of a single study 

imagine that we are running the same test, but instead of just for one question, is for 10 questions instead. If the null hypothesis is true for every hypothesis test ( the probability of a correct answer is 70% for every question ) 

one question
$$
oneQuestionProb = 1 - sigThreshold
$$
2 questions
$$
ErrorRate = oneQuestionProb * oneQuestionProb 
$$
3 questions
$$
ErrorRate = oneQuestionProb * oneQuestionProb * oneQuestionProb
$$

<br />

question | right answer probability | type I error
--------: | :----------: | ---
1 | 95% | 5%
2 | 90% | 10%
3 | 85% | 15%
4 | 80% | 20%
5 | 75% | 25%
... | ... | ...
10 | 60% | 40%

to fix it, use a lower significance threshold 