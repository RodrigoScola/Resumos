#go 
# GO

## Compiling and running files

### Compiling files

to make a program compile we use command: `go build` and then the filename

    go build greet.go

to execute the file type the filename in the terminal

    ./greet

### Running files

when you want to run your program, use the command `go run` and then the filename

    go run greet.go

the difference between `go build greet.go` then using `./greet` and `go run greet.go` is that the latter will not create an executable file in the current folder

## Packages

### importing packages

for you to add packages, use the `import` keyword

```go
package main

import "fmt"

func main() {
    fmt.println("hello there")
}
```

### importing multiple packages

you can import them one at a time

```go
import "package1"
import "package2"
```

or you can import them on one single statement

```go
import (
    "package1"
    "package2"
)
```

### Package aliases

if you have conflicting package names, or the package name is too long or confusing, you can type a different name

```go
import (
    p1 "package1"
    "package2"
)
p1.simpleFunc()
```

## Go resources

if you are ever in doubt of something, you can look at the documentation in the terminal

    go doc fmt

if its just a function

    go doc fmt.Println

## Variables

for you to declare a normal variable, just type the keyword `var` and the variable name

```go
    var funfact = "this is some fun fact"
```

if you want to make a constant variable use the keyword `const`

```go
    const funfact = "this is some fun fact"
```

if you want to use a shorthand operation you can use `:=`

```go
    funfact := "this is some fun fact"
```

if you want to initialize more than one variable, you can group them together

```go
    var artist, published, title string
```

if you want to shorthand initialize them and give them a value you can do the same technique

```go
    artist, published, isReleased := "megan trainer", "the mechlemore" , true
```

## Types

### Type checking

variables have infered type checking, however if you want to add type definitions you can by adding them after the variable namne

```go
var songLength uint16
var hasListened bool
var songRating float32
```

### Type conversions

the expression `T(v)` converts the value `v` to type `T`

```go
var i int =  43;
var f float64 = float64(i);
var u uint = uint(f);
```

if a variable is assigned but not used, it will throw an error

### The fmt package

if you want to print a line use `Println()`. If you want to print in the same line as before, use `Print()`

```go
    fmt.Println("hello there my")
    fmt.Println("friend")
    // hello there my
    // friend
    fmt.Print("hello there my")
    fmt.Print("friend")
    // hello there myfriend
```

you can leave placeholders in the string if you use `%v`

```go
    guess := "C"
    fmt.Print("is %v your final answer?", guess)
```

##### Print verbs

- **%v** - for variables

- **%T** - for type of the variable

- **%d** - for using integers into a string

- **%f** - for using floats into a string

> you can also limit the number of digits it can appear in the float by using `.` and the number you want to limit it by
> %.2f

#### Sprint

while the fmt package can be used to print things out, it is not the only thing that it can do, it is an formatter package.

the `Sprint` or `Sprintln` doenst print anything, but rather returns the value that would be printed. This makes it easier to format strings

```go
    quote := fmt.Sprintln("Look ma,", "no spaces!" )
    fmt.Print(quote) // Look ma, no spaces!
```

if we need to interpolate a string without printing it, we can use the `Sprintf` method

```go
template := "I wish I had a %v."

pet:= "puppy"

var wish string;

wish = fmt.Sprintf(template, pet)

fmt.Println(wish)
```

## getting user input

if you want to get user input use the method `fmt.Scan(%variableName)`

```go
    fmt.Println("How are you doing?")

    var response string;

    fmt.Scan(&response)

```

## Conditionals

### If

can use paranthesis or not

```go
    alarmRinging := true
    if (alarmRinging) {
        fmt.Println("Turn off the alarm!!")
    }
    // is the same as
    if alarmRinging {
        fmt.Println("Turn off the alarm!!")
    }
```

### else

its the same as other languages, just use the keyword `else`

```go

    if alarmRinging {
        fmt.Println("Turn off the alarm!!")
    } else {
        fmt.Println("Keep Sleeping")
    }
```

### Comparison operators

if you want to check if something is true, use `==`

```go
"password1" == "password1" // true
```

if you want to check if something is not true, use `!=`

```go
"password1" != "password1" // false
```

if you want to check if something is less than, use `<`

```go
1 < 3 // true
```

if you want to check if something is greater than, use `>`

```go
1 > 3 // false
```

if you want to check if something is less than or equal to, use `<=`

```go
1 <= 1 // true
```

if you want to check if something is greater than or equal to, use `=>`

```go
 1 >= 0 // true
```

### Logical operators

if you want to check if both expressions are true use the keyword `&&`

```go
if storeLights == "on" && doorsOpen {
    fmt.Println("We can enter the store!")
}
```

if you want to check at least one of the expressions are true use the keyword `||`

```go
    if day == "Saturday" || day == "Sunday" {
    fmt.Println("Enjoy the weekend!")
} else {
    fmt.Println("Do some work")
}
```

if you want to check if something is false you can use the `!` operator

```go
    if !bored {
        fmt.Println("I am not bored")
    }
```

### Scoped short declaration statement

you can define a variable inside statements like so

```go
    x := 8
    y := 9
    if product := x * y; product > 60 {
        fmt.Println(product, " is greather than 60");
    }
```

one thing to note is that the variable assignment is only for the statement, and it will throw an error if used after the statement

```go
    x := 8
    y := 9
    if product := x * y; product > 60 {
        fmt.Println(product, " is greather than 60");
    }
    fmt.Println(product) // will throw an error
```

## Randomization

if you want a random number, use the `rand` package

```go
import ("math/rand", "fmt")
func main() {
    fmt.Println(rand.Intn(100))
}
```

### Seeding

Go's random number generation arent entirely random. The reason why is due to how Go seends or chooses a number as a starting point for generating random numbers. you can provide a new seed by using `rand.Seed()` and passing an integer

```go
    rand.Seed(1)
```

## Functions

you can define a function with the keyword `func` and the function name

```go
func add() {
return 0
}
```

### parameters

you can add a parameter with the parameters name and its type

```go
func add(x int, y int) {
    return x + y
}
```

or just write one type

```go
func add(x , y int) {
    return x + y
}
```

### return

#### return type

you can add a type in parentheses to indicate what the function returns

```go
func add (x , y int) (int) {
    return x + y
}
```

#### return multiple types

you can add a `,` to return something extra

```go
func add (x , y int) (int, int, int) {
    return x + y, x, y
}
```

#### return named values

The return values may be named, if so they are treated as variables defined at the top of the function

```go
func split(sum int) (x, y int) {
    x = sum * 4 / 9;
    y = sum - x
    return
}
```

## Loop

Go has only one looping construct, the `for` loop

```go
for i:= 0 ;i <10; i++ {

}
```

however, just because there is one looping construct, doesnt mean that the syntax is only one.

here the init and post statements are optional

```go
sum := 1;
for ; sum < 1000; {
    sum += sum
}
```

but at this point this is more similar to `while`, so just drop the semicolons

```go
sum := 1;
for sum < 100 {
    sum += sum
}
```

## defer

a defer statement defers the execution of a function until the surrounding function returns.

The deferred calls arguments are evaluated immediately, but the function call is not executed until the surrounding function returns

```go
    defer fmt.Println("world")
    fmt.Println("hello")
    // will print
    // hello
    // world
```

### stacking defers

deferred funciton calls are pushed onto a stack. When a function returns, its deferred calls are executed in last-in-first-out order

## Pointers

go has pointers. A pointer holds the memory address of a value. The type `*T` is a pointer to a `T` value. its zero value is `nil`

```go
var p *int
```

the operator `&` generates a pointer to its operand.

```go
i := 32;
p = &i
```

the operator `*` denotes the pointers underlying value

```go
fmt.Println(*p) // read i through the pointer p
*p = 21;  // set i through the pointer p
```

## Structs

a `struct` is a collection of fields

```go
type Vertex struct {
    X int
    y int
}
```

### Struct fields

Struct fields are accessed by a dot

```go
type Vertex struct {
    X int
    y int
}
 func main() {
    v := Vertex {1, 2}
    v.X = 4;
    fmt.Println(v.X)
 }
```

### Pointers to structs

to access the field `X` of a struct when we have the struct pointer `p` we could write `(*p).X`. However that notation is cumbersome, so the language permits us instead to write just p.X without explicit deference

```go
type Vertex struct {
    X int
    y int
}
 func main() {
    v := Vertex {1, 2}
    p := &v;
    p.X = 1e9;
    fmt.Println(v)
 }
```

### struct literals

a struct literal denotes a newly allocated struct value by listing the values of its fields.

you can list just a subset of fields by using the Name: syntax (and the order of named fields is irrelevant)

the special prefix `&` returns a pointer to the struct value

```go
type Vertex struct {
    X,Y int
}
var (
    v1 = Vertex{1,2} // has type Vertex
    v2 = Vertex{X: 1} // Y: 0 is implicit
    v3 = Vertex{X: 1} // X:0 and Y: 0
    p = &Vertex{1,2} // has type *Vertex
)
func main() {
    fmt.Println(v1,p, v2,v3)
    // {1 2} &{1 2} {1 0} {0 0}
}
```

## Arrays

The type `[n]T` is an array of `n` values of type `T`

```go
var a [10]int
```

declares a variable `a` as an array of 10 integers

**An arrays length is part of its type, so arrays cannot be resized. this seems limiting, but dont worry. Go provides a convenient way of working with arrays**

### Slices

an array has a fixed size. a slice on the other hand is a dynamically-sized, flexible view into the elements of an array. in practice, slices are much more common than arrays

the type `[]T` is a slice with elements of type `T`

a slice is formed by specifying two indices, a low and high bound, separated by a colon;

```go
a[low: high]
```

the last element is not inclusive

#### Slices are like references to arrays

a slice does not store any data, it just describe a section of an underlying array

changing the elements of a slice modifies the corresponding elements of its underlying array

#### Slice literals

a slice literal is like an array literal without the length

this is an array literal

```go
[3]bool{true,true, false}
```

and this creates the same array as above, then builds a slice that references it:

```go
[]bool{true,true,false}
```

```go
func main() {
    s := []struct {
        i int
        b bool
    } {
        {2, true},
        {3, true},
        {12, false}
    }
}
```

### Slice defaults

the default is zero for the low bound and the length of the slice for the high bound

these slice expressions are equivalent:

```go
a[0:10]
a[0:]
a[:]
```

### creating slice with `make`

this i how you create dynamically sized arrays. The `make` function allocates a zeroed array and returns a slice that refers to that array

```go
a := make([]int, 5) // len(a) = 5
```

### Appending to a slice

use the `append` function

```go
func append(s []T , vs ...T) []T
```

### Range

the `range` form of the `for` loop iterates over a slice or map

when ranging over a slice, two values are returned for each iteration. The first is the index, and the second is a copy of the element at that index

```go
for i ,v := range pow {
	fmt.Printf("2**%d = %d\n", i, v)
}
```

> you can skip the variable assignment by using `_`

### Maps

a map maps keys to values

the zero value of a map is `nil`. a nil map has no keys nor can keys be added

the `make` function returns a map of the given type.

```go
    type Vertex struct {
        Lat, Long float64
    }
    var m map[string]Vertex

    func main() {
        m = make(map[string]Vertex)
        m["Bell Labs"] = Vertex{
            40.0234, -12301,32
        }
        fmt.Println(m["Bell Labs"])
    }
```

#### Map Literals

they are like struct literals, but the keys are required

```go
var m = map[string]Vertex{
    "Bell Labs": Vertex {
            40.0234, -12301,32
    },
    "Google": Vertex {
            1.34, -93.123
    },
}
```

if the top-level is just a type name, you can omit it from the elements of the literal

```go
var m = map[string]Vertex{
    "Bell Labs": {40.0234, -12301,32},
    "Google": {1.34, -93.123},
}
```

how to insert or update and element in map `m`

```go
m[key] = elem
```

how to retrieve an element in a map

```go
elem = m[key]
```

how to delete an element in a map

```go
delete(m, key)
```

how to test that a key is present with a two value assignment

```go
elem, ok := m[key]
```

## Function values

function are values too. they can be passed around just like other values

function values may be used as function arguments and return values

```go
func compute(fn func(float64, float64) float64) float64 {
    return fn(3,4)
}
func main() {
    hypot := func (x, y float64) float64 {
        return math.Sqrt(x * x + y * y)
    }
    fmt.Println(hypot(5,12))
    fmt.Println(compute(hypot))
    fmt.Println(compute(Math.Pow))
    // 13
    // 5
    // 81
}
```

### function closures

go functions may be closures. A closure is a function value that references variables from outside its body. The return function may access and ssign to the referenced variables; in this sense the function is "bound" to the variables

in this example, the added function returns a closure. Each closure is bound to its own `sum` variable

## methods

go does not have classes. However you can define methods on types.

a method is a function with a special receiver argument. The receiver appears in its own argument list between the `func` keyword and the method name.

In this example, the `Abs` method has a receiver of type `Vertex` named `v`

```go
type Vertex struct {
    x,y float64
}
func (v Vertex) Abs() float64 {
    return Math.Sqrt(v.x * v.x + v.Y * v.y)
}
func main() {
    v := Vertex{3, 4}
    fmt.Println(v.Abs())
}
```

Methods are functions with a receiver argument

```go
type Vertex struct {
    x,y float64
}
func  Abs(v Vertex) float64 {
    return Math.Sqrt(v.x * v.x + v.Y * v.y)
}
func main() {
    v := Vertex{3, 4}
    fmt.Println(Abs(v))
}
```

you can declare a method on non-struct types too

```go
type MyFloat float64;

func (f MyFloat) Abs() float64 {
    if f< 0 {
        return float64(-f)
    }
    return float64(f)
}
func main() {
    f := MyFloat(-math.sqrt2)
    fmt.Println(f.Abs())
}
```

### Methods on Pointer receivers

methods with pointer receivers can modify the value to which the receiver points. Since methods ohten need to modify their receiver, pointer receivers are more common than value receivers;

With a value receiver the method operates on a copy of the original value. The function must have a pointer receiver to change the value declared before

go interprets the statement `v.Scale(5)` as `(&v).Scale(5)` since the `Scale` method has a pointer receiver

functions that take a value argument must take a value of that specific type

```go
var v Vertex
fmt.Println(AbsFunc(v))  // OK
fmt.Println(AbsFunc(&v)) // Compile error!
```

while methods with value receivers take either a value or a ponter as the receiver when they are called

```go
var v Vertex
fmt.Println(v.Abs()) // OK
p := &v
fmt.Println(p.Abs()) // OK
```

the equivalent thing happens in the reverse direction. Functions that take a value argument must take a value of that specific type

```go
var v Vertex
fmt.Println(AbsFunc(v)) //ok
fmt.Println( AbsFunc(&v)) // compile error
```

#### Choosing a value or pointer receiver

- the method can modify the value that its receiver points to

- to avoid copying the calue on each method call

### Interfaces

an interface type is defined as a set of method signatures. A value of interface can hold any value that implements those methods

```go
type Abser interface {
    Abs() float64
}
func main() {
    var a Abser
    f := MyFloat(-math.sqrt2)
    v := Vertex{3,4}
    a = f // a MyFloat implements Abser
    a = &v // a *Vertex implements Abser
}
```

#### interfaces are implemented implicitly

a type implements an interface by implementing its methods. There is not "implements" keyword.

```go
type I interface {
    M()
}
type T struct {
    S string
}
func (t *T) M() {
    fmt.Println(t.S)
}
type F float64

func (f F ) M() {
    fmt.Println(f)
}
func main() {
    var i I = &T{"hello"}
    describe(i)
    i.M()
}
```

### interface values

under the hood, interface values can be thought of as a tuple of a value and a concrete type

```go
(value, type)
```

an interface value hold a value of a specific underlying concrete type

#### interface values with nil underlying values

if the concrete value inside the interface itself is nil, the method will be called with a nil receiver

```go
func (t *T) M() {
    if t == nil {
        fmt.Println("nil value on method M")
    return
    }
    fmt.Println(t.S)

}
```

## Type assertons

a type assertion provides access to an interface values underlying concrete value

```go
t := i.(T)
```

htis statement asserts that the interface value `i` holds the concrete type `T` and assigns the underlying `T` value to the variable `t`

if `i` does not hold a `T`, the statement will trigger a panic

to test whether an interfava value holds a specific type, a type assertion can return two values, the underlying value and a boolean value that reports whether the assertion succeeded.

```go
t, ok := i.(T)
```

### Type switches

its a construct that permits several type assertions in series. A type switch is like a regular switch statement, but the cases in a type switch specify types (not values), and those values are compared against the type of the value held by the given interface value

```go
switch v := i.(type) {
    case T:
        fmt.Println("This is the T type")
    case S:
        fmt.Println("This is the S type")
    default:
        fmt.Println("this is the default, no match")
}
```

### Stringers

its what it shows when you print it to the console

```go
type PersonStringer {
    Name string
    Age int
}
func (p PersonStringer ) String() string {
    return fmt.Sprintf("the name is %v and the age is %v years", p.Name, p.Age);
}

type Person {
    Name string
    Age int
}

func main() {
    a := PersonStringer {
        "rodrigo" 22
    }
    p := PersonStringer {
        "rodrigo" 22
    }
    fmt.Println(a) // the name is rodrigo and the age is 22 years
    fmt.Println(p) // {rodrigo 22}
}
```

## Strings

to loop through a string

```go
import ("strconv")

for i,val := range(str) {
    char := strconv.Itoa(int(val))
    fmt.Println(char)
}
```

if you want to join a string

```go
import (
    "strings"
"strconv")

res := make([]string, len(str))
for i, val := range str {
    res[i] = strconv.Itoa(int(val))
}
fmt.Println(strings.Join(res, ","))
```

### Errors

go programs express error state with `error` values

the `error` typ is a built-in interface similar to `fmt.Stringer`

```go
type error interface {
    Error() string
}
```

as with `fmt.Stringer`, the `fmt` package looks for the `error` interface when printing values

functions often return an `error` value, and calling code should handle errors by testing whether the error equals `nil`

```go
i, err := strconv.Atoi("42");
if err != nil {
    fmt.Println("couldnt convert number")
    return
}
fmt.Println("Converted integer: ", i);
```

## Readers

the `io` package speficies the `io.Reader` interface, which represents the read end of a stream of data.

the `io.Reader` has a `Read` method

```go
func (T) Read(b []byte) (n int, err Error)
```

`Read` populates the given byte slice with data and returns the number of bytes populated and error value. It returns an `io.EOF` error when the stream ends

## Type parameters

they are the generics of typescript. The type parameters of a function appear between brackets, before the functions arguments

```go
func Index[T comparable](s []T, x T) int
```

this declaration means that `s` is a lice of any type `T` that fullfills the built-in constraint `comparable`. `x` is also a value of the same type

#### Comparable

`comparable` is a useful constraint that makes it possible to use the `==` and `!=` operators on values of the type. In this example, we use it to compare a value to all slice elements until a match is found

```go
func Index[T comparable](s []T, x T) int {
    for i,v := range s {
        // v and x are type T, which has the comparable constraint, so we can use == here
        if v == x {
            return i
        }
    }
    return -1
}
func main (){
    // Index works on a slice of ints
    si := []int{10,20,15,-10}
    fmt.Println( Index( si, 15))

    // Index also works on a slice of strings
    ss := []string{"foo", "bar","baz"}

    fmt.Println( Index( ss, "hello"))
}
```

### generics

a type can be parameterized with a type parameter, which can be useful for implementing data structures

```go
type List[T any] struct {
    val T
    next *List[T]
}
```

## Goroutines

its a way to do concurrent code

its a ligtweight thread managed by the go runtime

```go
go f(x,y,z)
```

starts a new goroutine running

the evaluation of `f`,`x`,`z` happens in the current goroutine and the execution of `f` happens in the new goroutine

### Channels

they are a typed conduit through which you can send and receive values with the channel operator `<-`

```go
ch <-
```

like maps and slices, channels must be created before use

```go
ch := make(chan int)
```

the example code sums the numbers in a slice, distrubuting the work between two goroutines. Once both goroutines hav completed their computation, it calculates the final result

```go
func sum (s []int, c chan int  ) {
    sum := 0;
    for _, v := range s {
        sum += v
    }
    c <- sum
}

func main () {
    s := []int{7,2,8,-9,0}

    c := make(chan int)

    go sum(s[:len(s)/2],c)
    go sum(s[len(s)/2:],c)

    x,y := <-c ,<-c

    fmt.Println( x, y, x + y)
}
```

### Buffered channels

how many instances do you want to run

channels can be buffered, add the buffer length as the second argument to `make` to initialize a buffered channel

```go
ch := make(chan int, 1)
```

### range and close

a sender can `close` a channel to indicate that no more values will be sent. receivers can test whether a channel has been closed by assigning a second parameter to receive the expression: after

```go
v, ok := <-ch
```

ok is `false` and there are no more values to receive and the channel is closed.

the loop `for i := range c` receives values from the channel repeatedly until is closed

```go
func fibonacci(n int, c chan int) {
    x,y := 0,1
    for i:=0 ;i < n;i++ {
        c <- x;
        x,y = y , x + y
    }
    close(c)
}
func main() {
    c := make(chan int, 10)
    go fibonacci(cap(c),c)
    for i := range c {
        fmt.Println(i)
    }
}
```

### Select

the `select` statement lets a goroutine wait on multiple communication operations

a `select` blocks until one of its cases can run, then it executes that case. It chooses one at random if multiple are ready

```go
func fibonacci(c , quit chan int) {
    x,y := 0,1
    for {
        select {
            case c <- x:
                x,y = y, x+y;
            case <-quit:
                fmt.Println("quit")
                return
        }
    }
}
func main () {
    c := make(chan int)
    quit := make(chan int)
    go func() {
        for i := 0; i < 10; i++ {
            fmt.Println(<-c)
        }
        quit <- 0
    }()
    fibonacci(c, quit)
}
```
