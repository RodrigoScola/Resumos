#programming_basics 
escape sequences in strings
    \' = single quote 
    \" = double quote
    \\ = backslash
    \n = new line
    \r carriage return
    \t = tab
    \b = word boundary
    \f = form feed
    
you can use [index] to discover an element of a property

 var firstName = "charles";
 var FirstLetter = firstname[0];

istead of usinc the + sign, you can do more work? by using $()
'hello, my name is ${person.name}

to return the last charecters of something 
 str.slice(str.length - target.length) === target;
using a string variable += str;
 will return str as many times as you want
if you want to return something at a specific point on a string 
  use str.slice to copy the string and (min index,max index);
