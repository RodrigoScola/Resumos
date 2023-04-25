function palindrome (str){
  //makes everything lowercase,erases everything besides letters & numbers;
  let string = str.toLowerCase().replace(/[^a-z0-9]+/g,'').split('');
  let reversed = [...string].reverse();
  //makes an array to store both the reverse and the normal string
  let fullarr = [];
  var results = true;
  
  
// pushes the characters along with the inverse([string[first],string[last]])
 for(let i = 0;i < string.length;i++) {
   fullarr.push([string[i],reversed[i]])
 }
// checks if the first element is equal to the second element, if its not, its not a palindrome and results = false;
 for (let i = 0;i < fullarr.length;i++) {
   if (fullarr[i][0] !== fullarr[i][1] ) {
     results = false;
   }
 }
  return results
 }
 palindrome("eye")