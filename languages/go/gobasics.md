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

### Type checking

variables have infered type checking, however if you want to add type definitions you can by adding them after the variable namne

```go
var songLength uint16
var hasListened bool
var songRating float32
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
