#statistics #math 
set theory 
     its a collection of things 
          {book, paper, folder, hat, pen, snack}
     they often are represented with curly braces {}, they also follow two key rules
          each element in a set is distinct 
          the elements in a set are in no particular order 
               {1,2,3,4,5} = {5,4,3,2,1}
     when defining a set, we often use a capital letter
          A = {1,2,3,4,5}
     sets can also contain subsets. set a is a subset of set b if all the elements in a exist within b 
          A = {1,2,3} B = {1,2,3,4,5}
     set a is a subset of b because all elements of a are contained within B
experiments 
     something that produces observations with some level of uncertainty. a 
          sample point is a single possible outcome of an experiment 
          sample space is the set of all possible sample points for an experiment 
     example
          {
               flippin 2 coins and record whether we get heads or tails 
               the sample space would be 

               S = {HH, TT, HT, TH}

               event - the probability of a single outcome
               
               getting 2 heads 
                    A = {HH}
               getting two tails 
                    B = {TT}
               getting both heads and tails
                    C = {HT, TH}
               to calculate the estimated probability of one outcome we use the formula 
                    P (event) = number of times the event occurred  / total number of trials
          }

law of large numbers 
     we cant repeat a random experiment an infinite amount of times, but we can do it a large amount of times. However as we do the experiment, the more times we run it, the more "stable" the results become, meaning that the proportion of times each event occurs will converge to its true probability

the rules of probability 
     union - any element that exists in either one or both of the sets 
          A = {1,2,3,5}
          B = {2,50,532,32}
               A U B = { 1 , 2 , 3 , 5 , 50 , 532 , 32 }
     
     intersection  - any element that exists in both sets at the same time 
          A = {1,2,3,5}
          B = {2,50,532,32}
               I = { 2 }
     compliement - any element that is not apart of the set in question 
          A = {1,2,3,5}
          B = {2,50,532,32}
          
          CA - { 50 , 532 , 32 }
          CB - { 1 , 3 ,5 }

independence and dependence 
     independence - the result of previous test does not affect the next results ( flipping a coin )
     dependence - the result of previous test does affect the next results (grabbing a blue marble and taking it out of the bag, whats the probability of grabbing another blue marble)

mutually exclusive events 
     two events are considered mutually exclusive if they cannot occur at the same time
          in a single flip, the event tails and heads are mutually exclusive because we cannot get both tails and heads on a single flip 
     non mutually exlcusive events is events that can occur at the same time like, event a is rolling an odd number and event b is rolling a number greater than two.

the addition rule 
     find the probability of one or both events occuring 
     the probability of the union of a and b 
          P(A or B) = P(A) + P(B) - P(A and B)
     we subtract the intersection of events A and B because its included twice in the addition of P(A) and P(B) sets cannot have duplicate elements
     mutually exclusive events 
          P(A or B) = P(A) + P(B)
     we dont need to subtract elements because the intersection is empty, meaning no elements are repeated 

    a.intersection(b) - returns the elements that are on the two sets

conditional probability 
     if we want to calculate the probability that a pair of dependent events both occur, we need to define conditional probability
     if we pick two marbles from a bag of five marbles without replacement, the probability that the second marble is red depends on the color of the first marble. 
     measures the probability of one event occuring

the multiplication rule 
     the probability that two events happen simultaneously 
          P(A and B) = P(A) * P(B)
     
{
     rules 
          20% has strep throat and 80% does not 
          if a person has strep throat, 15% chance that the test will come out negative 
          if a person doesnt have strep throat 98% chance the test will be negative
     
     possible outcomes 
          P(ST and + ) = 0.2 * 0.85 = 0.17
          P(ST and - ) = 0.2 * 0.15 = 0.03

          P(NO ST and + ) = 0.8 * 0.02 = 0.016
          P(NO ST and - ) = 0.8 * 0.98 = 0.784
          
}

bayes theorem 
     imagine you tested positive for strep throat, this horrible horrible bacterian infection. you dont know if you are going to live or not, you might wake up tomorrow dead.
     you want to know the probability that you have it
          P( ST | + )
     we use the bayes theorem which states the following 

          P( ST | + ) = P(+ | ST) * P(ST)
                       -------------------
                               P(+)

     we know that 
          P(+ | ST) = 0.85
          P(ST) = 0.2
     what about P(+)

          P(+) = P(ST AND + ) + P(NO ST AND +)
               P(+) = 0.17 + 0.016
               P(+) = 0.186
     
     plugging that into the formula 

          P(ST | +) = (0.85 * 0.2 ) / 0.186 = 0.914

random variable 
     as the name says, is to randomly simulate an event like a coin flip 
          np.random.coice(choices, size, replace)
     discrete random variables
          random variables with a countable number of possible values 
     continuous random variables 
          when the possible values of a random variable are uncountable 
          measurement variables and are uncountable because measurements can always be more precise 

probability mass functions 
     defines the probability of observing a particular value of a discrete random variable 
     parameters - random variables that are relevant for many different kinds of problems
          n - number of trials 
          p - probability of success 
     if we flip a coin 10 times, the number of observed heads follows a binomial distribuition 

calculating probabilities using python
     binomial distribuition 
          binom.pmf(x, n, p)
          we want to flip a coin 10 times and count the number of heads, we can use the binom.pmf to calculate the probability of observing 6 heads 
               {
                    import scipy.stats as stats 
                    print(stats.binom.pmf(6,10, 0.5))
               } 
          
using the probability mass function over a range 
     what of we want to find the probability of observing a range of values for a discrete random variable. like flipping a coin 5 times and getting a value between 1 and 3 heads 
          P(1,2,3 heads) = P(x = 1) + P(x = 2) + P(x = 3)
     {
          import scipy.stats as stats 
          result = 0;
          for head_count in range(3,6):
               result += stats.binom.pmf(head_count, n=10, p=0.5)
     }
     we can also calculate the probability of observing less than a certain value 
     {
          result = 0;
          for head_number in range(0, 3):
               result += stats.binom.pmf(head_number, n=10, p=.5)
     }
     when theres a lot of numbers the code can get very long so we calculate it a little differently
          P(0 to 8 heads) + P(9 to 10 heads) = P(0 to 10 heads) = 1
          p(0 to 8 heads) = 1 - p(9 to 10 heads)
          looks like this in python
          {
               1 - (stats.binom.pmf(9, n=10,p=0.5) + stats.binom.pmf(10, n=10,p=0.5))
          }

cumulative distribution function 
     instead of the probability of observing a specific value, it gives the probability of observing a specific value or less 
     the value of a cumulative distribution function at a given value is equal to the sum of the probabilities lower than it, with a value of 1 for the largest possible number 
     we can use a cumulative distribution to calculate the probability of a specific range by taking the difference between two values from the cumulative distribution function
          to find the probability of observing between 3 and 5 heads, we can take the probability of observing 6 or fewer heads and subtracting the probability of observing 2 or fewer heads, this leaves a remnant of between 3 and 6 heads
     using it in python  
          binom.cdf(value_or_less, size, prop_success);
          6 or fewer heads
               binom.cdf(6, 10,0.5);
          between 3 and 6
               {
                    import scipy.stats as stats
                    result = stats.binom.cdf(6,10,0.5) - stats.binom.cdf(2,10,0.5)
               }
          more than 6 from 10 tests
               1 - stats.bindom.cdf(6,10, 0.5)

probability density functions 
     probability density functions of continuous random variables and span across all possible values that the given random variable can take on 
     when graphed, a probability density function is a curve across all possible values the random variable can take on, and the total area under this curve adds up to 1 
     we cannot calculate the probability at a single point because the area of the curve underneath a single point is always zero 
     example 
          heights fall under a type of probability distribution called a normal distribution, the parameters for the normal distribution are the mean and the standard deviation, and we use the form Normal(mean, standard deviation) as shorthand
          we want to know the probability that a randomly chosen woman is less than 158cm tall. we can use the cumulative distribution function to calculate the area under the probability density function curve from 0 to 158 to find that probability
     calculating with python
     {
          import scipy.stats as stats 
          stats.norm.cdf(158, 167.64, 8)
     }
     where the 167.64 came from? its the mean height of our sample size
     what about the 8? we get from the standard deviation (model.height.std())

probability density functions and cumulative distribuition function 
     we can take the difference between two overlapping ranges to calculate the probability that a random selection will be within a range of values for continuous distributions
     we want to calculate the probability of randomly observing a woman between 165 and 175. we can calculate the probability of observing these values or less
     the difference betwen these two probabilities will be the probability of randomly observing a woman in this given range
          {
               import scipy.stats as stats
               result = stats.norm.cdf(175,167,8) - stats.norm.cdf(165, 167,8);
          }

     we can also calculate the probability of randomly observing a value or grater by subtracting the probability of observing less than the given value from 1. this is possible because we know that the total area under the curve is 1 so the probability of observing something greather than a value is 1 - the probability of observing something less than the given value 
          we want to calculate the probability of observing a woman taller than 172, assuming heights still follow the normal 167.74 8 distribution, we can think of this as the opposite of observing a woman shorter than 172 
          {
               import scipy.stats as stats 
               1 - stats.norm.cdf(172, 167.74,8)
          }

poisson distribution
     describe the number of times a certain event occurs within a fixed time or space interval 
     its defined by a rate parameter 
     if we expect it to rain 10 times in the next 30 days, the lambda being 10, we can calulate the probability of exactly 6 times of rain 
     {
          stats.poisson.pmf(expect, average)
     }
     we can calculate in a range like this 
          stats.poisson.pmf(12,10) + stats.poisson.pmf(13,10) + stats.poisson.pmf(14,10)

calculating probabilities of a range using the cumulative density funciton 
     we can use the poisson.cdf() in the scipy.stats to evaluate the probability of observing a specific number or less given the expected value of a distribution 
          stats.poisson.cdf(expected, average)
     we can also use this method to evaluate the probability of observing a specific number or more given the expected value of the distribution.
     if we wanted to calculate the probability of observing 12 or more rain events in the when we expected 10
          1 - stats.poisson.cdf(11,10)

expectation of the poisson distribution
     stats.poission.rvs(expected, size= size)

spread of the poisson distribuition
     way of measuring the dispersion of values and probabilities in the distribution
     as the expected value increases, the number of possible values the distribution can take on would also increase 
     we can calculate the variance of a sample using numpy.var()
     {
          import scipy.stats as stats
          import numpy as np 

          rand_vars = stats.poisson.rvs(4, size = 1000)
          np.var(rand_vars)
     }
expected value of the bionmial distribution 
     how many results do you expect to see 
          total tests * probability of success 
variance of the binomial distribution
     probability that the success happens times the probability that it doesnt happen
          variant = total tests * success_prob * ( 1 - sucess_prob)

properties of expectation
     the expected value of two independent random variables is the sum of each expected value separately 
          E(combined)  = E (X) + E (Y)
     multiplying or adding a value, changes the result by the amount you changed 

properties of variance 
     increasing the values does not change the variance 
     scaling the values, scales the variance 
     the variance of the sum of two random variables is the sum of the individual variances 
     only works if the x and y are independent random variables 
     
cheatsheet 

addition rule 
     probability of event a or b is the sum of their probabilities minus prob of intersection
          res = prob(a) + prob(b) - prob(int_a_b)
multiplication rule 
     prob of event a and event b happening 
          res = p(a) * p(b a)
     for independent events 
          res = p(a) * p(b)

probability mass functions 
(all of them imports scipy.stats as stats)
     get a specific value 
          stats.binom.pmf(expected_value, total_trials)
     specific value or less 
          stats.binom.cdf(expected, total_trials, success_prob)
     specific value or more 
          1 - stats.binom.cdf(expected, total_trials, success )

poisson 
     number of times that something happens
     expected val is the average
          stats.poission.rvs(expected, size= size)