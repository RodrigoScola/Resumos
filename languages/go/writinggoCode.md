#go 
# How to write go Code

## Code organization

go programs are organized into packages. A package is a collection of source files in the same directory that are compiled toghether. Functions, types, variables and constants defined in one source file are visible to all other source files withing the same package.

## Your first program

to compile and run a simple program, first choose a module path and create a go.mod file

```
mdkir hello
cd hello
go mod init example/user/hello
cat go.mod
```

Next create a file named hello.go inside that directory containing the following code:

```go
package main

import "fmt"

func main() {
    fmt.Println("hello world")
}
```

now you can build and install that program with the go tool

```
go install example/user/hello
```

this command builds the hello command, that you can execute
