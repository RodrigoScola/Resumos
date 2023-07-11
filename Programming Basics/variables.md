#programming_basics 

Variables are things where you can assign values to them. It is like putting something inside a box, then labeling that box with something that it represents

if the variable has more than one use or if it matters, you can
create on top of the project and make it public, so you can edit on unity after

> [!example]
> ```c#
>public int number = 4; 
>```

you can add new variables on statements
> [!Example]
> ```c#
>public void takeDamage(float amount); 
>```


> [!Question]
> (but that is not cash money behaviour);


```c
int = integer = a whole number (1,2,3,4,5...)
int age = 0
var varName = default value
```

```c
//when you want the default value to be something that the user inputs:
int var name = convert.toint32(console.Readline());

string = word sets
string Name = Name
```

```c
var name = default value
//(when you want the default value to be something that the user inputs:)
string name = console.Readline());
```
## VOID
mainly used in function to make everything else obsolete

void FunctionNama

    	private = only on that instance
                public = you can edit them in unity
#### Char
 letter = 'A' = literal characters
```c
char userchoice = getkeystroke();
```

```c
string = more than a character
string filepath = @"C:\televisions\sony\bravia.txt";
```

interpolated string = a literal string prefixed with $ to enable embedded formatted variables

in `javascript`

var sum = variable that adds (+)
var difference = variable that subtracts (-)
var product = var that multiplies (_)
var quotient = var that divides (/ or %)

myvar++ = +1 when you use it
myvar++ = -1 when you use it
you can always keep changing an variable by using +=
```js
c += 5
c -= 5
c _= 5
c /= 5
```

you can use different variables to append
myStr:"nice";
MyName:"it is";
MyName += myStr;
.length = the number that contains in an variable
str = "myname"
str.length = 6;
you can change a variable with a function  
 var processed = 0;
function processArg(num) {
return (num + 3) / 5; }
processed = processArg(7);
You can use typeof to check the data structure, or type, of a variable

indexOf
to see wich index number an element is, use .indexOf (returns - 1 if it doesnt appear)

## let
  `let` makes it so you cant overwrite an variable
  
  `let` is automatically a local variable 
  you can overwrite the same  variable you just declared by using let
  ```js
function checkScope() {
	let i = "function scope";
	if (true) {
		let i = "block scope";
		console.log("Block scope i is: ", i);
	}
	console.log("Function scope i is: ", i);
	return i;
}
```
## const 
`const` variables are read only. A common practice when naming constants is to use all uppercase letters with words separated by an underscore. its common for developers to use uppercase variable identifiers for immutable values and lowercase or camelCase for mutable values
    you can alter a value on a constant array by being one at a time 
```js
const s = [5, 7, 2];
s[2] = 7;
s[0] = 2;
s[1] = 5 
console.log(45);
```