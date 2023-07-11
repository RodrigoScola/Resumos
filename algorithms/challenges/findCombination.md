if you need to check something with a lot of data, like every review of a post, for all posts, you can first sort it and check it
this example is for distance, next is what i used to check the posts

#algorithms

```js
     const checkLowestDist = (arr) => {
          arr = arr.sort((a,b) => a.x - b.x);
          let lowestdist = {
               pointA: {x, y},
               pointB: {x,y},
               dist: 0.0000
          }
          for(let i = 0; i < arr.length; i++) {
               if (checkDist(arr[i], arr[i +1]) < lowestdist.dist) {
                    lowestdist = {
                         pointA: arr[i],
                         pointB: arr[i + 1],
                         dist: checkDist(arr[i], arr[i + 1])
                    }
               }
          }
     }

const checkPosts = () => {
     const posts = new WP_Query({
          type: 'reviews',
          orderBy: 'title' //title was the post id
          order: "ASC",
     });
     let postsArr = []
     posts.forEach(item => {
          if (postsArr[postsArr.length - 1].id == item.title) { // since its ordered in asc, to match the id it just needs to look at the last index and not all the indexes
               postsArr[postsArr.length - 1] = { //could`ve/shouldve created a variable in the project too, wouldve saved a long time writitng the same things
                    id: item.title,
                    count: postsArr[postsArr.length - 1] + 1,
                    score: postsArr[postsArr.length - 1] + item.score,
               }
          } else {
               postsArr[postsArr.length - 1] = {
                    id: item.title,
                    count: 1,
                    score: item.score
               }
          }
     })
     return postsArr;
}
```

if you need to check for a max of something, sort the array and start by the end and whenever you find the one that is your condition, break the loop

```js
const isPalindrome = (n1) => {
  return n1.toString().split("").reverse().join("") === n1.toString()
}
function largestPalindromeProduct(n) {
  let largest = 0
  let power = Math.pow(10, n)
  for (let n1 = power; n1 > 0; n1--) {
    for (let n2 = power; n2 > 0; n2--) {
      const res = n1 * n2
      if (isPalindrome(res) && largest < res) {
        largest = res
        break
      }
    }
  }
  return largest
}
```
