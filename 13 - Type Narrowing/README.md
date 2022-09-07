# Type Narrowing
Refers to a real common situation when we need to narrow a union type into a specific type

## Typeof Guards
`typeof` type guards involve simply doing a type check before working with a value.
Since unions allow multiple tpes for a value, we can first check what came through before working with it. TypeScript detects these type guards and acts accordingly.


~~~ts
const isTeenager = (age: number | string) => {
    if(typeof age === "string"){
        console.log(age.charAt(0) === 1);
    }
    if(typeof age === "number") {
        console.log(age > 12 && age < 20)
    }
}
~~~

However, typeof only works with primitive types

~~~ts
typeof [1,2,3] // "object"
~~~

## Truthiness Guards
Truthiness type guards involve checking a value for being truthy or falsy before working with it. This is helpful in avoiding errors when values might be null or undefined.

~~~ts
const printLetters = (word: string | null) => {
    if(!word){
        console.log("No word was provided")
    } else {
        name.forEach(letter => console.log(letter))
    }
}
~~~
We can even use a shorter syntax with the `?` operator

~~~ts
const printLetters = (word?: string) => {
    if(word) {
        for(let char of word) {
            console.log(char);
        }
    } else {
        // Here TS takes word as string | undefined
        // This is because word might be falsy (an empty string)
        console.log("You did not pass a word");
    }
}
~~~

## Equality narrowing
Equality type guards involve comparing types to each other before doing certain operations with values. By checking two values against one another, we can be sure they are both the same before working with them in a type-specific way.
~~~ts
const someFunc = (x: string | boolean, y: string | number ) => {
    if(typeof x === typeof y) {
        // x and y are strings in this case
        x.toUpperCase();
        y.toLowerCase();
    } else {
        console.log(x);
        console.log(y);
    }
}
~~~

## in Operator Narrowing
JavaScript's `in` operator helps check if a certain property exists in an object.
This means we can use it to check if a value exists in an object, according to its type alias or aliases, before working with it.

~~~ts
type Cat = {
    meow: () => string
};
type Dog = {
    bark: () => string
};

const talk = (creature: Cat | Dog) => {
    if("meow" in creature) {
        console.log(creature.meow());
    } else {
        console.log(creature.bark());
    }
}

const kitty: Cat = {meow: () => 'MEOWWW'};
talk(kitty);
~~~

## instanceof Narrowing
`instanceof` is a JavaScript operator that allows us to check if one thing is an instance of another. This can help us narrow types when working with things like classes.
~~~ts
const printFullDate(date: Date | string) {
    if(date instanceof Date) {
        retirm date.toUTCString();
    } else {
        return new Date(string).toUTCString();
    }
}
~~~

## Type Predicates
TypeScript allows us to write custom functions that can narrow the type of a value. Thse functions have a very special return type called a type predicate. A predicate takes the form `parameterName is Type`.

~~~ts
//": pet is dog" --> type predicate!
const isCat(pet: Cat | Dog): pet is Dog {
    return(pet as Dog).bark !== undefined;
}

let pet = getAnimal();
// pet gets passed to isCat above to narrow type
if(isCat(pet)) {
    pet.meow();
} else {
    pet.bark();
}
~~~

## Discriminated Unions
A common pattern in TypeScript involves creating a literal property that is common across multiple types. We can then narrow the type using that literal property.

~~~ts
interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}
~~~


