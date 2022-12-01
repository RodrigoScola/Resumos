# Python 

### The language 

* to comment use the #

* exponentials use ** and the number you want it to be powered by

#### creating variables

no need to say const or let... just say the name

        variablename = 'im the content of a variable'

you can convert string to float just by using `float()`

    pi_float = float(pi_string)

### array slicing

    arrayName[startIntdex(inclusive),endIndex(exclusive)]
if you dont specify the beginning index, python will start at the beginning
if you dont specify the end index, python will start at the end

to remove an element from a list 

        del(fam[index])

if you want to add something to a list 

    listname.extend(['name']);

if you want to find the position of an element  

    listname.index('name');

if you want to remove that 

    listname.pop('name');

if you want to copy a list you can use the list() method or the x[:];
$$
    x = ['a','b','c'];
$$
$$
    y = list(x);
$$
$$  
    y = x[:];
$$
    
if you want to check if something is true or false you can just use ==

    question = 12 * 8 
    solution = 96
    question == solution <- returns true

you can use a for leep to iterate through all the items in a list

you can use the `.sorted()` wich will sort the data in a list from lowest to highest in the case of numbers and alphabetical order if the list contains strings

the `sorted()` returns a new list and does not affect the list you passed 

```python
    #looping 
for row in records :
    baby_names.append(row[3]);
    #sorting the name in alphabetical order 
for name in sorted(baby_names):
    print(name)

```

### functions 
    if you see  a [] in a function, it means that is an optional argument
* To get the max number in a list 
  
        max(x);

* To get the min number in a list 
    
        min(x);

* to round a num

        round(num,how many numbers after .)
   
* To convert something 

        int(x) <- converts to an integer 
        float(x) <- converts to an float 
        Bool(x) <- converts to a boolean 
        str(x) <- converts to an string 
        

### multiple returns

you can return multiple values and return them in a function

```py
def weather_data():
    return 1,2,3,4

day_one , day_two , day_three, day_four = weather_data()
```


#### methods

##### lists methods

functions that belong to objects

if you want an index of an element on a list    
```python
listname.index(element)
```
you can count how many times the same element happens on the list
```python
listname.count(element)
```

##### str methods

you can capitalize stuff

    sister = 'liz'
    sister.capitalize(); <= returns "Liz"

you can make everything capitalized 

    sister.upper();

you can replace stuff   

    sister.replace('z','sa') <= returns 'lisa'

#### dictionaries or Objcects

creating a dictionary

        world = {'afganistan':30.55,'albania':2.77,'algeria':39.21}

finding something  

    world['albanina'];

to access the keys of the objects   

    world.keys(); <- for this to work, the keys have to be unique

to add data to the object 

    world[key] = value
        
    a.intersection(b) - returns the elements that are on the two sets

### packages
    import numpy
using numpy

    numpy.array([])

or import numpy as np

if you want a specific function 

        from numpy import array
        array([]);

##### numpy
    import numpy as np 

##### creating arrays
    np_height = np.array(height)

##### remarks 

    python_list = [1,2,3]
    python_list + python_list
        [1,2,3,1,2,3]
    numpy_array = np.array([1,2,3])
    numpy_array + numpy_array
        [2,4,6]
    getting an result == or >= or > 
        bmi[bmi < 10]
        array([2]);

#### type of numpy arrays

* 2d numpy array
  
    np_2d = np.array([[1.43,3.12,3.12][1.23,12.33,1245.4]])
    np_2d.shape <- returns (2,5) # 2 rows, 5 collumns

##### statistics

* to calculate the average
  
        np.mean(array);

* calculate the median

        np.median(array[:,0]);

* to check if numbers are correlated

        np.corrcoef(array[:,0],array[:,1]);

* to check for the deivation

        np.std(array[:,0])

* to check for the sum

        np.sum(array[:,0]);

* to sort 

        np.sort(array[:,0]);


### multiple returns
python has multiple returns that you can assign to 
```python
        def weather_report(weather_data): 
            first_day = 'sun'
            second_day = 'moon'
            third_day = 'rain'
            return first_day, second_day, third_day
        
        # and use it like this 
        monday, tuesday, wednesday = weather_report(somedata)
```

Booleans in python are True or False, with the capitalization
if statements doesnt have the ()

#### Operators

* to add and operators, in python its "and" and not "&&"
* to add or operators, in python its "or" and not "||"
* to add not operators, in python its "not" and not "!"

#### else if 
instead of using else if, use elif

### Arrays

* to add to an array 

        array_name.append(item)

* to remove an item from array 

            array_name.remove('value') #this only removes the first instance of the value

* you can add items in an array using the + 
  
    [True, True, True] + [False]

### combining arrays
it combines the arrays on the same indexes 
        
        [
            [array1_name[0], array2_name[0]],
            [array1_name[1], array2_name[1]],
            [array1_name[2], array2_name[2]],
        ]

to use it 
        temp_arr = zip(array1, array2)
        converted_list = list(temp_arr);

however, the data has been converted into a tuple, an immuptable type of list 

#### working with lists 

`count` - count occurences of element in list 

`insert` - add item at index

`pop` - remove element at index

`range` - create a sequence of integers 

`len` - get len of obj 

`sort` - sorted - sort a list 

`pop` -
it removes on the index itself and returns the removed element 
    
    removed_elem = array.pop()
    # array doesnt have that element 
    print(removed_elem) # the element 

`range` - 
    
range doesnt return the actual list, but the "function"

    # range(0, 10)
    to transform it into a list 
    array_name = list(range(10));

    range(start?/end, end, step);

#### slicing lists 
    you can slice a list withing the variable attribuition
        sliced = letters[start_idx:end_idx]
    if you want to get the first n elements -> arra[:n]
    if you want to get the last n elements -> arra[-n:]
    if you want all but n elements -> arra[:-n]

`count` - letters.count(item)

`sort`  
    to sort in ascending order -> arr.sort()
    to sort in descending order -> arr.sort(reverse=True)
`sorted` - 
    the function to sort -> sorted(arr)

### for loops 

    for temp_var in collection:

using range -
    
    for num in range(nums):


```python
for item in items:
    if item == 'search_item':
        break
```
> you can use break in the loop 

---

## list comprehension 
map but for python

    new_list = [item * 2 for item in collection]

conditions in for loop

        new_list = [for item in items if condition]

doing it together

    new_list = [num * 2 for num in nums if num > 0] #this will filter and do something to the ones that passed

    new_list = [num * 2 if num < 0 else num * 3 for num in numbers] # this will do something to every number

you can separate the variables 

        xy = [[1,2],[2,3],[3,4]]
        z = [x * y for (x,y) in xy]

## make an api request in python
```python
    import requrests
    r = requests.get(url);
    r.json();
```
### convert json to csv 
make the data in tabular form 
```python
import csv 
with open('census.csv', mode='w', newline='') as file:
writer = csv.writer(file)
writer.writerows(r.json);
# it writes things to a file 
```

### simulating binomial distribuition   
they are very useful for modeling different types of data, they have 2 possible outcomes, success and failure
    
    numpy.random.binomial(attempts, success_probability,times)
    

## Strings 

### methods 
> strings are immutable, meaning if you want to change a string you need to change the whole thing

formatting methods ex - Hello wOrld

`.lower` - returns all lowercase characters - hello world

`.upper` - returns all uppercase characters - HELLO WORLD

`.title` - returns in title case - Hello World

`.split` - splits the string from delimiter

`.join` - delimiter.join(string) 

`.strip` - removes the content from the start of the string and the end, defaults to white `space,` but you can add delimiters 

`.replace` - str.replace(search, replace) #replaces all instances 

`.find` - finds the index at what the element is at 

`.format` - include variables in strings, "this is a normal string {}".format(term)" # this is a 
normal string and this was added by a variable

```python
# you can specify which variable goes where 
def favor_song(song, artist):
    return "my favourite artist is {artist} and my favourite song is {song}".format(artist=artist, song=song)
```

### string Formatting 

#### adding variables to strings

##### method 1 

    strconcat = str1 + " " + variable

##### method 2

    strconcat = "This is my string and the string name is {}".format(var_name)

you can add params to specify where a variable goes

    strconcat = "This is my string and the string name is {string_name}".format(string_name=var_name)

##### method 3

if the pathname is equal to the variable name you can add it in the string

    f"This is my string and the string name is {string_name}"

> For more string formatting you can see [here](https://docs.python.org/2/library/stdtypes.html#string-formatting)

## dictionaries 

    dic_ex = {
        "animal": 2
    }

### add one key 

    dic_ex['ex'] = 3

### add multiple keys 

    dic_ex.update({
        'one': 'two',
        'three': 'fourn'
    })

## dict comprehensions 

```python
names = ['jenny','alexus','sam','grace'];
heights = [61,12,15,16,17]

students {
    key:value for key,value in zip(names,heights)
}
```
### get an invalid key 

if the key doesnt exist in the dictionary yet, one way to check is 
```python
key_to_check = 'some_key'
if key_to_check in obj:
    print(obj[key_to_check])
```
        another way is the try except
```python
    check_key = "Zomboid airforce 21";
    try:
        print(building_things[check_key]);
    except KeyError:
        print("that key doesnt exists")
```

* safely get a key 
  
      object.get(key, return if not found)
  
* delete a key 
        
        obj.pop(keyname, default if not found) #returns the obj value
* get all keys    
        
        obj.keys()
* if you want to loop it 
        
        for student in students.keys()
* get all values    
        
        obj.values()
* if you want to loop it 
        
        for student in students.values()
* get all terms 
        
        obj.items()
* if you want to loop it  
        
        for key,value in obj.items()

## files 

### read a file 
```python
with open(filename.txt) as var_name:
    contents = var_name.read()
    print(contents)
```
### read a line 
```python
with open(filename) as var_name:
    for line in var_name.readlines()
```   
### assinging variables to lines
```python
        with open(filename) as var_name:
            first_line = var_name.readline()
            #pointer moves 
            second_line = var_name.readline()
```

### write to a file 
```python
with open(filename, mode) as var_name:
# w - write normal text 
# r - read text
# a - append to a file 
```
### reading a csv file 
its  different from a normal file, even though we can read these lines as text without a problem, there are ways to access the data in a format better suited for programmin purposes 
we can convert that data into a dictionary using the csv library DictReader
```python
import csv 
list_of_adresses = [];
with open('users.csv' newline='') as users_csv:
    user_reader = csv.DictReader(users_csv)
    for row in user_reader:
        list_of_adresses.append(row["Email"])
```
#### different types of csv files
csv are usually comma separated files, however there are other ways for you to separate them, for you to separate them  you use the delimiter property on the DictReader 
```python
with open('filename', newline='') as file_var:
    a_r = csv.DictReader(file_var, delimiter=';')
    for row in a_r:
        print(row['Address'])
```       
### writing to a csv file 

```python
import csv 
with open ('output.csv','w' as) output_csv:
fields = ['name','userid','is_admin']
output_writer = csv.DictWriter(output_csv, fieldnames=fields)
output_writer.writeheader();
for item in someList:
    output_writer.writerow(item)
```
### read jsonfile 
```python
import json
with open('filename.json') as json_json:
    json_var = json.load(json_json);
    
    print(json_var)
```
### write jsonfile
```python
import json
with open('string','w') as json_file:
    json.dump(tur)
```
## lambda functions 
is a one-line shorthand for function, a simple lambda might look like this
```python
add_two = lamda input : my_input + 2
```
they are good because you dont always want a lot of functions, makes the code messy and hard to read, and if the function is simple enough is a great thing to add
    
### random 

random number
```python
import random
random.randint(0,100);
```
random choice
```python
random.choice() # returns a random item from list
random.randint(start, end) # returns a random int in range of those numbers
```


### export functions
    
    no need to do anything 

### import functions
```python
from filename import functionname
from library import always_three
```

## classes
defining 
    class Classname:

pass # says to python that this was left blank and not cause an error 

### instantiation 

    collinstance = Classname()

### class variables 

```python
class Musician:
    title = 'Rockstar'

drummer = Musician()
print(drummer.title) # Rockstar   
```
### class methods 
```python
    
class Dog:
    dog_time_dilation = 7
    def time_explanation(self):
        print("Dogs experience {} years for every 1 human year".format(self.dog_time_dilation))
```
##### methods with arguments 
instead of using self in the code, you pass self in the function params to say that you are using the instance property

```python
    constructors 
    use the __init__ function 
    {
        class Shouter:
            def init(self, phrase):
                if type(phrase) == str:
                    print(phrase.upper())
    }
```
##### attribute functions 
what if a class doesnt have the attribute or function?
```python
        {
            hasattr(instancename,'fake_attribute')
            returns False
        }
        get the atribute 
        {
            getattr(instance, 'other_fake_attribute',defaultvalueiffalse)
            returns defaultvalueiffalse
        }
```
##### `__repr__`
what the string representation of the class to be 
has to return a string 
```python
            class Employee:
                def __init__(self,name):
                self.name = name
                # without the representation would print:  
                    # "<__main__.Employee object at 0x103e88390>"
                # with the representation
                def __repr__(self):
                    return self.name
```
##### mutable default arguments 
sometimes when you do things to variables they tend to app and add to one another 
```python
        def update_order(new_item, current_order=[]):
        current_order.append(new_item)
        return current_order
        
        order1 = update_order({'item': 'burger', 'cost': '3.50'})
        
        order2 = update_order({'item': 'soda', 'cost': '1.50'})
        
        #prints 
        # [{ "item" : 'burguer', 'cost': '3.50'},{'item': 'soda', 'cost': '1.50'}]
```
one way to resolve this is using the none keyword
```python
def createStudent(name, age, grades=None):
if grades is None:
    grades = []
return {
    'name': name,
    'age',age,
    'grades':grades
}
def addGrade(student,grade):
student['grades'].append(grade);
```
if you dont know how many args will be there, you can use the *args 
```python
def my_function(*args):
    print(args)
my_function('Arg1', 245, False) # prints ('Arg1', 245, False)
```
you can loop through them using for in 

#### unlimited keyword arguments 
using ** you can also transform it into a dict, and use keyword arguments
```python
def some_func(**args):
    print(args.get('something'))
```
### function call unpacking & beyond 
lets say that we want to sum all numbers togheter and the function is like this 

    sum (sum1, sum2, sum3)

it isnt a big deal if its just those 3 numbers but what if we want to use a list like this [1,2,3];
we could use the unpacking when we call it 
```python
def sum(num1, num2,num3):
    print(num1 + num2 + num3)

sum(*sumlist)
```
  
you can also use  with dict 
```python
numbers = {
    "num1" : 1,
    "num2" : 2,
    "num3" : 3,
}
def sum(num1, num2,num3):
    return num1 + num2 + num3
```
unpacking parts of an iterable 
```python
        a, *b ,c = [1,2,3,4,5,6]
        #a = 1
        # b = [2,3,4,5]
        #c = [6]   
```

### namespace 
is a collection of names and the objects that they reference, python will host a dictionary where the keys are the names that have been defined and the mapped values are the objects that they reference 

* builtin namespaces 
    namespaces that came with python, that includes the python keywords like for, all, dir...

* global namespaces 
    function names, variable names...
    has a lifespan of until the interpreter terminates, or when the program finishes running

* local namespaces
    function names, variable names that are inside that function 

if you want to use a var on another scope use nonlocal 
```python

def calc_pain_amount(wall_measurements):
    square_feet = 0;

    def calc_square_feet():
        nonlocal square_feet 
        for width, height in wall_measurements:
            square_feet += width * height #this would be reassigned but with the nonlocal, it just increases 


    def calc_gallons():
        return square_feet / 400

    calc_square_feet()

    return calc_gallons()
```

### global 
    
similar to the nonlocal statement, python provides the global sttement to allow the modification of global names from a local scope 

```python
global_var = 10;

def some_function():
    global global_var;
    global_var = 20;

some_function()

print(global_var) #20
```

```python

    class Employee:
        new_id = 1 #this is the "global" id variable, accessible by all instances 
        def __init__(self):
            self.id = Employee.new_id;
            Employee.new_id += 1;
            # now we have an incremental id system
```

### inheritance

to make so child classes can inherit certain things, you can use () in the class definition

    class ChildClass(ParentClass)

to override methods, just add another method with the same name

    super()

is the parent class, you can access methods from it

another form of multiple inhertance involves a subclass that inherits directly from two classes and can use the attributes and methods of both 
```python
    class Animal:
        def __init__(self,name):
        self.name = name;

    class Dog(Animal):
        def action(self):
            print("{} wags tail.".format(self.name))
    
    class Wolf(Animal):
        def action(self):
            print("{} bites.".format(self.name))
    
    class Hybrid(Dog, Wolf):
        def __init__(self):
            Wolf.__init__(self)


        def action(self):
            super().action()
            Wolf.action(self);
            #doesnt do any errors, has the same methods and all
    
```

### dunder methods 

#### Double UNDERscores 

```python

    def __add__(self, another_animal):
        return Animal(self.name + another_animal.name)
    def __len__(self):
        return len(self.somethingelse)
```
##### example 
```python 
e1 = Employee()
e2 = Employee()
e3 = Employee()

class Meeting:
    def __init__(self):
        self.attendees= [];

    def __add__(self, employee):
        self.attendees.append(employee);

    def __len__(self):
        return len(self.attendees)

m1 = Meeting()

m1 + e1
m1 + e2
m1 + e3

# it doesnt cause an error, just adds them to the meeting attendees 

print(len(m1)) #returns the len of the attendees 
```

### abstraction

a lot of times classes inherit methods that they shouldnt use but others do 
```python
class Animal():
    def __init(self, name):
        self.name = name
    
    @abstractmethod
    def make_noise(self):
        pass
```
now you cant call in the animal class but you can instantiate it in the other animals 

### getters and setters 
```python
class Animal:
    def__init__(self, name):
        self_name = name;
        self._age = None;

    def get_age(self):
        return self._age;
    
    def set_age(self, new_age):
        if isinstance(new_age,int):
            self._age = new_age
        else:
            raise TypeError
    
    def delete_age(self):
        print('age deleted')
        del self.age
```
### the @property

instead of get_ set_ you can use the @property decorator 

```python
weight = property(getweight, setweight,delweight, docstring for the weight prop)
or 
@property
def weight(self):
    return self.__weight

@weight.setter
def weight(self, new_weight)
    if new_weight >= 0:
        self.__weight = new_weight
```

### exceptions 

as opposed to a syntax error, an exception is a different kind of error that can occur with syntactically correct code, 
