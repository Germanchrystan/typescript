# Generics
Generics allow us to define reusable functions and classes that work with multiple type rather than a single type.
The syntax is... not pretty. They are used all over the place, so it is best to get comfortable with them.

~~~ts
function wrapInArray<T>(element: T): T[] {
    return [element];
}
~~~

Let's imagine we have a function that takes a number and then returns that same number.
This is super useless by the way, but it can help as an example.
~~~ts
function identity(item: number): number {
    return item;
}
~~~
Now, we want to do the same but for strings and booleans.

~~~ts
function numberIdentity(item: number): number {
    return item;
}

function stringIdentity(item: string): string{
    return item;
}

function booleanIdentity(item: boolean): boolean {
    return item;
}
~~~

We could keep going with custom items... so at this point we should probably write a function using the `any` type

~~~ts
function identity(item: any): any {
    return item;
}
~~~

The problem with this function is that we cannot be certain that it will return the same type as it received. With the previous functions, we at least knew that if we passed a number, be would get a number returned.

This is where a generic function could go in handy.

~~~ts
function identity<Type>(item: Type): Type {
    return item;
}
identity<number>(9);
~~~

## Generics, arrow functions & TSX files
Tsx gets a little confuse when we mix an arrow function with generics. Tsx will think the `<>` symbols correspond to a HTML tag.
We can fix it with a trailling comma (<T,>)

~~~tsx
const getRandomElement = <T,>(list: T[]): T => {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
~~~

## Generics with multiple types
We can have more than one generic in a function

~~~ts
function merge<T,U>(obj1: T, obj2: U): T & U /* return type inferred*/{
    return {
        ...obj1,
        ...obj2,
    };
}
~~~

## Adding type constraints
With the previous example we run into a problem. Look at this function call
~~~ts
const comboObj = merge({name: "Colt"}, 9)
~~~
This is a totally valid call, but we can intersect an object and a number. The output will be the object with just the name property.
We can use type constraints to avoid this cases

~~~ts
function merge<T extends object, U extends object>(object1: T, object2: U) {
    return {
        ...object1,
        ...object2,
    };
}
~~~

With this `extends` keyword we tell the generic that they must be objects, no matter what type of object it is.

## Default Type Parameters
In this example, the default generic type for querySelector is `<Element>`

~~~ts
const inputEl = document.querySelector<HTMLInputElement>("#username")!; // document.querySelector<Element>
inputEl.value = "Hacked!";
~~~

We can set default types for generics.

~~~ts
function makeEmptyArray<T = number>(): T[] {
    return [];
}

const arr = makeEmptyArray(); // By default this will be an array of numbers
const arr2 = makeEmptyArray<boolean>();
~~~