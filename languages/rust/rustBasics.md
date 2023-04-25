# Rust

## Setting Up A New Project

To set up a new project, type the commands

```
cargo new project_name
cd project_name
```

the main file will be in `src/main.rs`

```rust
fn main() {
     println!("hello world");
}
```

### Running a project

type the command

     cargo run

### Printing to the console

```rust
println!("hello world");
```

## Variables

### Immutables and Mutables

if the variable you set will not change on the lifespan of the variable

```rust
let apples = 5;
```

if the variable you set will change on the lifespan of the variable, use the keyword `mut`

```rust
let mut apples = 5;
```

### String Concatention

## Errors

### Handling errors

if there is an function that can throw an error you can use the `.expect` keyword

## imports

### User Input

```rust
use std::io

let mut guess = String::new();


io::stdin().read_line(&mut guess).expct("failed to read line")

println!("you guessed {guess}")

```
