# Type Annotation Basics

## Type Annotation

Assigning a basic type to a variable is easy. Just add `:Type` after the variable name.
~~~ts
const myAwesomeVariable: string = 'So Awesome';
~~~
This is called a Type Annotation

## Primitive Types

### Strings
Strings represent character values. We can tell TypeScript that something is a string using the type annotation of `string` (all lowercase)

### Numbers
Some programming languages have many number types - float, int, etc. In TypeScript (as well as JavaScript) numbers are just numbers. 
Numbers can be typed with a simple type annotation of `number` (again, all lowercase).
~~~ts
const myNumber: number = 31;
~~~

### Booleans
Boolean variables represent simple `true` or `false` values. Booleans can be typed with a simple type annotation of `boolean`.

~~~ts
const myBool: boolean = true;
~~~

## Compiling TypeScript
Imagine having this piece of TS code in a file called `variables.ts`.
~~~ts
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; // Error
movieTitle.ToUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true"; // Error

~~~

We could compile this code into JS with the command `tsc variables.ts`. The console would return errors related to the wrong use of type assignation in movieTitle and gameOver. However, the code would be compiled into JS like this.
~~~js
let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9;
movieTitle.ToUpperCase();

let numCatLives: number = 9;
numCatLives += 1;

let gameOver: boolean = false;
gameOver = true;
gameOver = "true";
~~~

TypeScript is going to notice if I am doing something wrong, if I am disobeying the rules, but it does not actually break the code, it does not stop it from compiling. It is just going to tell me about it along the way, and at the end of the day, we still end up with out JavaScript code.

## Type Inference
Type Inference referes to the TypeScript compiler's ability to infer types from certain values in your code.

TypeScript can remember a value's type even if you didn't provide a type annotation, and it will enforce that type moving forward. Most of the time, when we write a variable we can rely on type inference.

~~~ts
// Creationg a variable with a value, 
// but without a type annotation

let x  = 27;
x = 'Twenty-seven';
// ERROR: type 'string' is not assignable to type 'number'
~~~

## Any Type
The `any` type is an escape hatch! It turns off type checking for this variable so you can assign any type of value.
NOTE: This sort of defeats the purpose of TS and types, so use it sparingly!