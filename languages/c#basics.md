C# is the language of unity,
when assigning variables, c# has type definitions so it is like this:
     string name = "Rodrigo";
     int age = 21;
handling errors
     just dont make them lol;
converting data types
     if you want to change an int to a double, you can jsut assing it into a new variable 
          double myDouble = 2.1;
          //it will round it out 
          int myInt = myDouble;
     or you can do this  
          double myDouble = 2.1;
          int myInt = (int)myDouble;
to convert a string to an int, you cannot do it the normal implicit way, you have to use it in a fucntion 
     int faveNumber = Convert.ToInt32(Console.ReadLine());

working with strings     
     string concatenation
          when you want to add two strings together, you use a +
          Console.WriteLine("your favourite Musician is " + musicianName + "Is that not right?"); 
     string interpolation
          when you have too many variables or they might just be annoying to add, you can use $"" and when you want to add a variable just put it in {}, like this
               Console.WriteLine($"Hello my name is {userName} and im here for my appointment"); 
     to add quotes inside a string, you have to use escape charaters like this  
          string withSlash = "Someone said, \"Hello\"";
string methods
     to get the length of the string    
          int count = name.Length;
     to get the indexOf 
          int count = name.IndexOf("a");
     get the substring 
          string Char = name.Substring(charToStart, length);
     upper case 
          string.ToUpper()
     lower case     
          string.ToLower();
     
functions
     defining a function 
          static returnType functionname() {
               ...code
          }
     params needs to have a data type 
          static void functionName(string name) {
               ...code
          }
     optional params     
          static void functionname(string name, string ponctuation = ".") {
               ...code
          }
     named arguments
          
          if your function has lots of optional params, but you only want to specify one when you call it
               {
                    static void functionName(int a = 0, int b = 0, int c = 0, int d = 0, int e = 0) {

                    }
                    if you use functionname(4) but a will have that value, what if you dont want that?
                    use functionName(d:4);
                    you can use positional arguments with named ones, but positional ones have to go before named ones
                         functionName(2,1,d:3) //fine
                         functionName(b:2,1,d:3) //error

               }
     argumnents overload, what if you want to call the function with more arguments than anticipated?

out 
     a method can only return one value, but sometimes you need to output two pieces of information, calling a method that uses an out param is one way to return multiple values
     example, you want to create a variable if the operation is a success
          bool success = Int32.TryParse("1002", out int number);
          number is 1002 and success is true;
if you want something to be an array    
     arraytype[] name = {value1, value2};

classes

     creating one 
          class classname {

          }
     using as variable 
          ClassName name = new ClassName();
properties
     when defining a field you can define properties 
          public int area;
          public int Area {
               get {
                    return area;
               }
               set {
                    area = value;
               }

          } 
     automatic properties 
          repeating that can be tiresome so you can use the shorthand 
               public string Name {
                    get; set;
               }
     you can set props to be private too 
          public string Area {
               get; private set;
          }
     constructor 
          defining {{
               class ClassName {
                    public ClassName(int area) {
                         Area = area;
                    }
               }
          }}

overloading constructors 
     just like other methods, constructors can be overloaded,
          public Classname(int area, string country){
               this.Area = area;
               this.Country = country;
          }
          public ClassName(int area) {
               this.Area = area;
               this.Country = "Unknown";
          }
          sometimes this is bad, because if you want to adjust something in one constructor, you need to adjust in all, so you can use default arguments 
               public Classname(int area, string country = 'Unknown')
          or use :this()
               refers to another constructor in the same class
               {
                    public Classname(int area, string country) {
                         this.Area = area;
                         this.Country = Country;
                    }
                    public Classname(int area) : this(area, "Unknown") {
                         Console.WriteLine("country prop not specified, Value defaulted to Unknown"); 
                    }
               }

     