#regex 
if you want to search for something
    let petString = "James has a pet cat.";
    let result = petRegex.test(petString);
to scan for multiple things
    let petRegex = /dog|cat|bird|fish/; 
to make it non case sensitive, use i 
  /freecodecamp/i
with the .match() you can search for the thing and extract the word you want
to make it repeat, you can use /g ( use it if theres more than one case)
using the . charecter, you match everything that has the same charecter
using [] is the same as putting an |
  /[aeiou]/gi;
using [minLetter-Maxletter] you can cycle all the letters without typing it out
using [minNumber-maxNumber] you can cycle all the letters without typing it out
using ^ it excludes the things you put in the selection
  /[^aeiou] = matches with everything that isnt a vowel
using + and a charecter, it will only display the first thing that it catches
  example: /a+/g = "abc" & return 'a'
Match Characters that Occur Zero or More Times
  The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
  The character to do this is the asterisk or star: *.
you can use ? to find the closest match
outside of a character set, the ^ is used to search for patterns at the beginning of strings
  let firstString = "Ricky is first and can be found.";
  let firstRegex = /^Ricky/;
  firstRegex.test(firstString);
  let notFirst = "You can't find Ricky now.";
  firstRegex.test(notFirst);
 using the $, searchs for the last charecter
  instead of using[A-Za-z0-9], you can use \w
  let shortHand = /\w+/;
  instead of using[^A-Za-z0-9], you can use \w
  instead of using [0-9] you can use \d
  instead of using [^0-9] you can use \D
  if you want just the spaces, use \s
  if you dont want the spaces, use \S
  if you want a range of numbers that should match with use {}
  if you just want the minimum , just use {x,}
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element.
You can think of this symbol as saying the previous element is optional.
lookaheads search for patterns using ?= and if you dont want a pattern use, ?!
using parenteses () to check for groups of charecters
  You can search for repeat substrings using capture groups. Parentheses, ( and ), 
  are used to find repeat substrings. You put the regex of the pattern that will repeat in between the
  parentheses.
  if you want to find either Penguin or pumpkin in a string, use
    /P(engu|umpk)in/;
to allow for middle names, use .*
you can replace a regex using the.replace