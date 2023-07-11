#go 
# The go command line

## Flags library

### creating a new flag

we can create flags using the built in `flag` package. to create a new, use the keword `flag` then the type of flag you want, then add the arguments

- the command keword

- the default value

- the help message

after that, use `flag.Parse()` to parse the arguments so that go can unserstand

```go
dice := flag.String("d","d6", "sets the dice value, default one being a d6")
flag.Parse()
```
