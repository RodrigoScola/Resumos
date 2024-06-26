#typescript #javascript 
declaring types
     let greet : string = 'hello there'

in functions
     const newFunc = (value : number, payload : string) => {
          return {value, payload}
     }

optional argument in functions
     const newOpFunc = (value?:number, payload: string) => {
          return {value, payload}
     }

return type 
     when a function returns the type that is on the variable is set to the type of the return type 

explicit return types 
     if you want a function to return something in specific use the function and the type
          const thisNewFunc = () :string => {
               return 'hello there'
          }
     if the function doesnt return anything

documenting functions 
to document functions you /** (like in js doc) and for each line a * 
then */
     first a description
     then the @params 
     then the @returns

     /**
     * returns the sum of two numbers
     *
     * @param x - the first number
     * @param y - the second number 
     * @returns The sum of x and y 
     */
     function getSum(x:number, y:number):number {
          return x + y
     }

arrays 
     array type annotations 
          the type annotation for array types is fairly straightforward, you put [] after the type
               let names: string[] = [];
          an alternative is to use the Array<T> where T stands for type
               let names: Array<string> = [];
     tuples 
          when you want to have a specific type on a specific index 
               let person :[string,number,string] = ['rodrigo scola',21,'teen'];
          
rest params 
     when you do ...params 
          function(firstStr:string, ...otherStr:string[]):string {}
          
spread syntax
     when you have a lot of params 

custom types 

     enums 
          when we have all the possibilities of a result 
     
     enum Direction { North = 5,South = 1, East = -5, West = -6}
          let whichWay : Direction = Direction.North
     const newArray : [Pet,number][] = []

     instead of using a number in an enum you can use a string, which is more readable
     enum Directions {
          Nort = "NORTH",
          South = "South",
          East = "EAST",
          West = "WEST",
     }

     object types 
          let aPerson {
               name:string,
               age:number
          }

type aliases 
     sometimes the types are quite the same then you can create your own type
          type Coord = [number,string,number,string,string]

function types 
     type StringsToNumberFunction = (arg0:string,arg1:string) => number;
     let myFunc:StringsToNumberFunction;
     myFunc = function(something:string)

generic types
     they are ways to create collections of types that share certain formal similarities 
          type family<T> = {
               parente: [T,T], mate: T, children: T[]
          }
it defines a collection of object types with a different type for every value of t
     type Family<T> = {
          parents: [T,T],
          mate: [T],
          children: T[]
     }
     let AstringFamily : Family<string> = {
          parents: ['stern string','nice string'],
          mate: 'string next door',
          children: ['stringy','stringo','stringina','stringolio'];
     }
     this makes so you dont have to type all of that code multiple times 

generic functions 
     you can also do that for functions 
     
union types
     what if you allow any type but numbers?
     unions allow you to define multiple allowed type members by separating each type member with a vertical line character | 
     type narrowing
     typing with unions gives us more flexibility with type specificity, but what if you want to do different logic with it
          const printNumString = (value : number | string) => {
               if (typeof value === 'number') {
                    console.log(`this  is a number ${value}`)
               }
               else {
                    console.log(`this is a string ${value}`)
               }
          }

common key value pairs
     when you put type members in a union, ts will only allow you to use the common methods and props that all members of the union share

unions with literal types 
     only accept inputs from the inputs on the type 
          type Color = "green" | "red" | "yellow"
     
type narrowing 
     one way that ts can narrow a type is with a conditional statement that checks if a variable is a specific type but that can cause some problems 
          { 
               const formatDate = (date:number | string) => {
                    //date can be a number or a string
                    if (typeof date === 'string'){
                         //date has to be a string here
                    }
               }
          }

using in with type guards 
     as you write more types, you are bound to create custom types to better describe the datas properties and methods 
     while using typeof can get you pretty far, sometimes you want to see if a specific mathod exists on a type 
     whats where the in operator comes in 
          {
               type Tennis = {
                    serve: () => void
               }
               type Soccer = {
                    kick: () => void
               }
               function play(sport: Tennis | Soccer) {
                    if ('serve' in sport) {
                         return sport.serve
                    }
                    if ('kick' in sport) {
                         return sport.kick
                    }
               }
          }
interfaces and types
     types can be used to type objects primitives and more
     interface may only type objects, its a perfect match for writing object-oriented programs because these programs need many typed objects 

interfaces and classes 
     the interface is especially good for adding types to a class. since interface is constrained to typed objs and using class is a way to program with objects
     {
          interface Robot {
               identity: (id: number) => void;
          }
          class OneSeries implements Robot {
               identity(id:number) {
                    console.log(`beep boop im ${id.toFixed(2)}`)
               }
               answerQuestion(){
                    console.log('42')
               }
          }
     }
deep types
     as programs grow and become more complex you need to add more methods and props to the objes to accomodate more features 
          {
               class OneSeries implements Robot {
                    about;
                    constructor(props: {general: {id:number, name:string}}) {
                         this.about = props
                    }
                    getRobotId() {
                         return `ID: ${this.about.general.id}`
                    }
               }
          }
          this can get really messy but you can write another interface 
          {
               interface Robot {
                    aobut: {
                         general: {
                              id:number;
                              name:string
                         }
                    }
                    getRobotId() => string;
               }
          }
composed types 
     as data gets deeper you need to start to type objs that become unwieldly to write and read
          {
               interface About {
                    general: {
                         id: number;
                         name: string;
                         version: {
                              versionNumber: number;
                         }
                    }
               }
          }
          as we add more data this interface may becomde so nested its hard for ourselves or devs to read
          its likely that you want that part of the interface in another part of the program 
          {
               interface About {
                    general: General
               }
               interface General {
                    id: number;
                    name:string;
                    version: Version;
               }
               interface Version {
                    versionNumber: number
               }
          }
extending interface 
     sometimes you want the same data from one interface but theres no need to rewrite all that same code, thats why you can use the extends 
          {
               interface Shape {
                    color: string
               }
               interface Square extends Shape {
                    sideLength: number
               }
               const mySquare = Square = {sideLength: 10, color: "blue"}
          }
index signatures 
     when typing objects in typescript, sometimes is not possible to know the prop names for an obj, while you may not know the exact prop names at compile time, you may 
     know what the data will look like in general, it is useful to write an obj type that allows you to include a variable name for the prop name 
     imagine that you query a map api to get a list of latitudes where a solar eclipse can be viewed. the data might look like 
          {
          '40.712776': true;
          '41.203323': true;
          '40.417286': false;
          }
     we know that all the props will be strings and their values will be booleans, but we dont know what the prop names will be 
     to type this obj we can utilize an index signature 
          {
               interface SolarData {
                    [latitude:string]: boolean
               }
          }

Optional params 
