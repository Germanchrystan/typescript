# Array Types
Arrays cam be typed using a type annotation followed by empty array brackets, like `number[]` for an array of numbers.
These arrays only allow data of that one type inside them.

~~~ts
let names: string[] = ["hello", "world"];
let ages: number[] = [24, 32, 19, 29];

// Alternate syntax
let names: Array<string> = ["hello", "world"];
let ages: Array<number> = [24, 32, 19, 29];
~~~

When we work with arrays in TypeScript, we are essentially working with plain JavaScript arrays. We still have all the features that you are already used to. We can push elements into an array, or pop elements out, as well as using map, reduce, etc. The one gib difference with arrays in TypeScript is that generally we only stick elements with a very consistent type into the array. 

We can technically put different types of values inside of an array, but if we want to do so, we have to be very explicit about it, and add in a special little type annotation.

## Why Arrays in TypeScript
When we work with arrays in TypeScript, we got a couple of different advantages and a couple of different downsides as well. 

Advantages
* TS can do type inference when extracting values from an array.
~~~ts
const carMakers = ["ford", "toyota", "chevy"]; // string[] infered
const car = carMakers[0]; // Help with inference when extracting values
const myCar = carMakers.pop();
~~~

* TS can prevent us from adding incompatible values to an array.
~~~ts
// Preventing incompatible values
carMakers.push(100); // => ERROR

~~~

* We can get help with map, forEach, reduce functions
~~~ts
carMakers.map((car: string): string => {
    return car.toUpperCase(); // We get autocomplete on string properties and methods
})
~~~

* Flexible - arrays can still contain multiple different types.
~~~ts
const numbers: (string | number)[] = ["23", 2]
~~~
