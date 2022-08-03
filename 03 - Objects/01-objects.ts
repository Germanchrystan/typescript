function printName(person: { first: string, last: string }): void {
    console.log(`${person.first} ${person.last}`)
}

printName({ first: "Thomas", last: "Jenkins" })

// Object type annotation in a variable declaration
let coordinate: {x: number, y: number } = { x: 34, y: 2 };

// Object type annotation in a function return value
function randomCoordinate(): {x: number, y: number} {
    return {x: Math.random(), y: Math.random()}
}

/*
This next example shows a quirk of TS. Let's see what happens when we try to add more properties to
the object passed to the printName function

printName({first: "Mick", last: "Jagger", age: 325, isAlive: true}) => Error! Argument of type 
'{first: string; last: string; age: number; isAlive: boolean}' is not assignable to parameter of type 
'{first: string, last: string}'

But on the other hand this next two lines will work
*/
const singer = {first: "Mick", last: "Jagger", age: 325, isAlive: true}
printName(singer) // => This works!

/*
If we have a variable like singer, I can pass that obvject through and TypeScript is only going
to check to see if first and last are there. 
But it does an additional check when we provide an object literal defined right in line,
like in the previous example. 
The decision was made just to make sure you only pass the properties that are required.
*/

