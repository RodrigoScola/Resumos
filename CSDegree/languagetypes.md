# Language types

## Machine language

this is the lowest level you can go, considered the "language of computers" and this is the language that is truly comprehended by the cpu. This language is entirely composed by 0s and 1s. every instruction is represented by a specific binary code that represents an operation or an command that the computer has to realize. This instrcutions are directly comprehended and executed directly by the cpu

> show binary code

every other type of language is eventually translated into binary code. However they are mostly not directly transladed from the native langugage to binary. A lot of times there are an intermediate process.

## Simbolic language

it is one step above machine code. It is a programming language that expresses the instructions of the computer of a more direct form than other higher level languages. It uses keywords and symbols to represent operations and memory addresses to be executed by the processor.

The difference between simbolic languages and high level languages is their abstraction from the hardware

in high level languages there is a lot of abstraction in the code that you write, you dont need to worry about system calls and control transfer...

     high level language -> simbolic language -> machine code

## High level languages

these are the closest to the human language and are the most popular types of languages. they have a large amount of abstraction in relation to simbolic languages, helping the development of applications.
High level languages have control flow (if\else statements), automation of instructions

they are made so the user can focus on software development and logic and less in low level details

## Interpreted languages

Interpreted languages have only one type of "source code". While compiled langauges produce the source code in the language that the file is being written in and binary files for the processor to run the program. Interpreted languages have only the code of the file in the language that is being written on, and the processor executes the code in a `just in time` fashion. Interpreted languages have a slower performance, however as time goes on, the difference has been more and more negligible. Interpreted languages are easier to run on different platforms without too much hassle to change the code. and they are easier to debug.

some interpreted languages include `php`, `ruby`, `python`, `javascript`.

## Compiled languages

the source code is translated into binary code, leaving two "separate" codebases, one in binary or in an intermediary language and another the code written in the base language and whenever the program is executed it executes the binary without having the work of compiling unnecessarily, which is what happens in an interpreted language. Compiled languages tend to be exremely fast and pratical. However they are harder to debug because the whole program needs to be converted into binary or an intermediary language every time the code is changed.

some compiled languages include `c`, `c++`, `Erlang`, `Haskell`, `Rust`, `go`.

## paradigm languages

Paradigm languages are languages that are based around a specific type of programming. They can be interpreted or compiled languages.

### Functional languages

functional languages are languages that are focused around making pure functions. A pure function is a function that has no side effects, meaning each function makes one single thing, they can have another functions inside them, however they only are in charge of one single thing.

this model searches to produce the same output from the same input.

They are based around expressions and function avaliation. The defined functions work like rules of data transformation instead of serialization of data.

some of the examples are `haskell`, `lisp`, `ML`, `clojure` and `scala`.

each of the langugages has its own caracteristics on how they want to approach functional programming.

the functional model is valued by their capacity of creating consise , expressive and secure software. that can be easily distributed.

### Object oriented programming languages

Object oriented languages are languages that are focused on encapsulation of logic and keeping each objects logic to itself. Some terms can be `classes`, `objects`, `polifomism`, `encapsulation`.

the object oriented paradigm is based around the composition of objects and the interaction of data is around the same objects. this approach has the objective of code organization, making it more modular and reusable and for a more easy understanding reflecting the structures and behaviours in the real world.

exemples of some languages are `java`, `c`, `c#`, `ruby`, `php`

object oriented programming also has something called design patterns, like the `singleton`, `prototype`, `builder`, `factory`, `facade`, `proxy`,`iterator`, `observer`, `mediator`, `state`

---

### data flow languages

data flow is the path that information passes in a program, since the input, passing by middleware like the storage and processing of the input, until the output

data flow languages are languages specialized in the data flow in components in a certain program. allowing the development of paralel and modular programs.

in this type of language, the program are built in steps, where the data flow from one node to another like a net, representing individual operations. each node is one operation or transformation in the data

some examples of languages are `ascet`, `cal`, `cuneiform` and `microsoft visual programming language`

## restricted and logic languages

specialized in complex problem resolution in which the logic restrictions between variables play an essential part. these languages provide built in functions and mechanisms to express and resolve problems based around restrictions

some examples are `prolog`, `minizinc`, `chr`, `asp` and `alloy`

## cuncurrent, distributed and paralel languages

they allow the creating and execution of programs that have a llot of tasks or thread, allowing them to be executed independently or at the same time of each other. sharing computer resources of the operational system. they also have the hability to share information between them.

the objective of the program language is to create smaller bits of programs to more effectively use the operational system resources. Or even run multiple instances of the same program.

this language also allows paralel computing, which is the action of coordination and computation of more than one computer so they work togheter to solve a single problem.

some examples are `concurrent pascal`, `concurrent euclid`
