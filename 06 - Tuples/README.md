# Tuples
Tuple is a special type exclusive to TypeScript (it doesn't exist in JS). Tuples are arrays of fixed lengths and ordered with specific types - like super rigid arrays.

~~~ts
// Creating a tuple with its type definition
let myTuple: [number, string];

// Can assign it values per its specs
myTuple = [10, "TypeScript is fun!"];

// Can't assign it values of a different structure
myTuple = ["TypeScript is fun!", 10]; // ERROR
~~~