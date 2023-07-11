#regex
# Regular Expressions 

## Basic Concepts 

#### Literals 

test the regex to literally fit into the sentence 

test | regex
--- | ---
dog | dog

#### Alternation

test the regex to literally fit into one sentence or the other

**uses a |**

test | regex
--- | ---
dog | dog/cat

#### Character sets 

it match one character from a series of characters, allowing for matches with different spellings

result | regex
--- | ---
cat | [chrems]at
hat | [chrems]at
rat | [chrems]at
eat | [chrems]at
mat | [chrems]at
sat | [chrems]at

#### wild for wildcards

when we dont care what characters are in a text, just that there are some characters.

wildcards will match any single character (letter, number,symbol or whitespace)

..... will match any 5 letter string

#### ranges

allow us to specify a range of characters in which we can make a match without having to specify a range of characters in which we can make a match witout having to type each individual character. 

[start_index - end_index]

i adopted [2-9\] cats

- a-z 

- A-Z

- a-zA-Z

- 0-9

> Remember that it will only match one character

### Shorthand character classes

- `\w` - will match [A-Za-z0-9_]

- `\d` - will match [0-9]

- `\s` - the whitespace char

- `\W` - means [^A-Za-z0-9], will match non word characters

- `\D` - means [^0-9]

- `\S` - non whitespace char

### grouping 

lets us group part of the regex together

for example `|` doesnt just match words toghether, they match everything on one side and on the other

### Quantifiers 

#### Fixed

using `{}` you can say how many characters you want to fit on that definition instead of having 7 \w (\w\w\w\w\w\w\w) you can just

\w{7}

adding a comma and another number, you just created a range that will match in between them 

#### Optional

can appear 0 or 1 time 

`humou?r` matches humo or humour

the monkey ate a (rotten )? banana - will match `the monkey ate a rotten banana` or `the monkey ate a banana`

#### 0 or more, 1 or more

- `meo*w` will match the characters `mew`, `meow`, `meoow`, `meooow` and so on

- `meo+w` will match the characters `meow`, `meoow`, `meooow` and so on

### Anchors

- `^` match text at the start of the string

- `$` match text at the end of the string

the regex `^Monkeys: my mortal enemy$` will completely match `Monkeys: my mortal enemy` but not match `Spider Monkeys: my mortal enemy in the wild` or `Squirrel Monkeys: my mortal enemy in the wild` 

the `^` ensures that the matched text begins with `Monkeys` and the `$` ensures that the matched text begins with `enemy`.

without the anchor tags, the other text would match


## Regex builder 

[click here to go to the builder](https://regexr.com)
