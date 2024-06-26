#interviews
whiteboarding 
     steps are 
          clarify the problem 
          create inputs 
          outline the solution 
          code the solution 
          test the solution 
          analyze the solution 
sieve of eratosthenes 
     helpful for deriving prime numbers 
     provides a set of steps for finding all prime numbers up to a given limit 
sieve implementation 
     the sieve works by first assuming that all numbers from {2,...,n} 
     are prime and then successively marking them as not prime 
     the algo works as follows 
          create a list of all integers from 2 to n 
          start with the smallest number in the list (2, the smallest prime number)
          mark all multiples of that number up to n as not prime 
          move to the non-marked number and repeat this process until the entire list has been covered 
     example 
          start with a list where all are assumed to be prime 
               2 3 4 5 6 7 8 9 10
          starting with 2 mark all multiple of 2 up to 10 as not prime 
               2 3 /4 5 /6 7 /8 9 /10
          move to the next non-marked number (3) and mark its multiples as not prime 
               2 3 /4 5 /6 7 /8 9 /10
          continue marking, starting with every non-marked number, when youre done, means that you found all the prime numbers 
               [
                    const isPrime = num => {
                         let numArr = [num];
                         for (let i = 2; i < num;i ++) {
                              numArr.shift(i);
                         }
                         for(let i = 0;i < numArr.length - 1; i++) {
                              const number = numArr[i];
                              numArr.filter(num => {
                                   if (num % number && number !== num) {
                                        return false
                                   }
                              })
                         }
                         return numArr.includes(num) ? true : false; 
                    }
               ]
the capturing rainwater problem 
     imagine a very heavy rainstorm over a highway that has many potholes and cracks, the rainwater will collect in the empty spaces in the road 
     creating puddles, each puddle can only be as high as the road around it, as any excess water will just flow away
     the capturing rainwater problem asks you to calculate how much rainwater would be trapped in the empty spaces in a histogram (a chart 
     that consists of a series of bars )
     the histogram can be represented in js as an array filled with the values 
          [4,2,1,3,0,1,2]
     imagine that rainwater has fallen over the histogram and collected between the bars
          [0,1,2,0,2,1,0]
     like with the road, the amount of water that can be captured at any given space cannot be higer than the bounds around it 
     to solve the problem, we need to write a function tht will take in an array of integers and calculate the total water captured 
     the function would return 6 for the histogram above, there are multiple ways to solve the problem, but we are going to focus on a naive 
     implementation and an optimized solution 
the concept
     the foundation to all the solutions for the problem is that the amount of rainwater at any given index is the difference between the lower of the       
     const waterAtIndex = Math.min(higestLeftBound,highestRightBound) - heightOfTheIndex;
the naive solution 
     traverse every element in the array 
     find the highest left bound for that index 
     find the highest right bound for that index 
     take the lower of those two values 
     subtract the height of that index from that minimum 
     add the difference to the total amount of water 
          {
               const naiveSolution = heights => {
                    let totalWater = 0;
                    for (let i = 0; i < heights.length - 1; i++) {
                         let leftBound = 0;
                         let rightBound = 0;
                         for (let j = 0; j <= i; j++) {
                              leftBound = Math.max(leftBound,heights[j]);
                         }
                         for (let j = i; j < heights.length; j++) {
                              rightBound = Math.max(rightBound,heights[j]) 
                         }
                         totalWater += Math.min(leftBound,rightBound) - heights[i];
                    }
                    return totalWater
               }
          }
the optimized solution 
     its possible to solve this problem in o(n) time using two pointers. the pointers will start at each end of the array and move towards each other 
     the two-pointer approach is a common approach for problems that require working with arrays, as it allows you to go through the array in a single loop and without needing to create copy arrays 
          {
               const optimizedSolution = arr => {
                    let testWater = 0;
                    let leftPointer = 0;
                    let rightPointer = arr.length;
                    let previousLeftValue = 0;
                    let previousRightValue = 0;
                    while (leftPointer < rightPointer) {
                         if (arr[leftPointer] > previousLeftValue) {
                              testWater += arr[leftPointer] - previousLeftValue;
                              previousLeftValue = arr[leftPointer]; 
                              leftPointer += 1;
                         }
                         else {
                              if (arr[rightPointer] > previousRightValue) {
                                   testWater += arr[rightPointer] - previousRightValue;
                                   previousRightValue = arr[rightPointer];
                                   rightPointer -= 1;
                              }
                         }
                    }
                    return totalWater
               }
          }
sorting with custom comparator functions 
     the normal sort method converts the numbers into strings and returns the value from it, however you can use your comparator 
          {
               const ascOrder = (a,b) => {
                    if (a < b) {
                         return -1 
                    }
                    if (b < a) {
                         return 1
                    }
                    return 0
               }
          }
     while you could create the ascOrder using three if statements you could just return a - b;
     returns negative if a is smaller 
     returns positive if b is smaller 
     returns 0 if both are the same 

explicit ordering 
     given an input array, we want to sort the array given to an explicit order. if the elements arent in the given explicit order, put them
     at the back in the same order thay are appeared in 
dynamic programming 
     fibonacci 
          is a classic mathematical series in which the next number is calculated as the sum of the previous two numbers
          {
               const fib = n => {
                    if (n == 1 || nn == 0) {
                         return n
                    }
                    return fib(n -1) + fib (n -2);
               }
          }
          this technique breaks up calculating the nth number into many smaller problems, calculating each step as the sum of calculating the previous two steps 
     why do we need to call the same function multiple times with the same input? we dont!
memoitization
     is a specialized form of caching used to store the result of a function call. the next time that function is called, instead of running 
     the function itself, the result is used directly. memoization can result in much faster overall execution times (but it can increase memory requirements as function results are stored in memory);
     its a great technique to use alongside recursion. the memo can even be saved between function calls if its being used for common calculations in a program 
     use a plain js obj to store the memoized values. well set keys using n and values to store the result of that fibonacci number.
     then whenever we need to calculate a number if its already been calculated, we can retrieve the value from the obj in o(1) time 
     {
          const memoize = (callback) => {
          let memo = {}
          return (...args) => {
          if memo[args] { return memo[args] }
          else { 
               memo[args] = callback(args) 
               return memo[args] 
                    } 
               }
          }
     }
