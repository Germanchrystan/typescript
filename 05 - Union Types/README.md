# Union Types
Union types allow us to give a value a few different possible types. If the eventual value's type is included, TypeScript will be happy. We can create an union type by using the single | (pipe character) to separate the types we want to include. It's like saying "This thing is allowed to be this, this, or this". TypeScript will enforce it from there.
~~~ts
const guessAge = (age: number | string): string => {
    return "Your age is: " + age;
}

guessAge(30);
guessAge("20");

// CAN'T pass something else
guessAge({age: 30});
~~~

## Type Narrowing
Narrowing the type is simply doing a type check before working with a value. If your value is a string you may want to use it differently than if you got a number. 
Since unions allow multiple types for a value, it is good to check what came through before working with it

~~~ts
const isTeenager = (age: number | string) => {
    if (typeof age === "string"){
        // If age is a string, do this
        console.log(age.charAt(0) === 1);
    }
    if (typeof age === "number"){
        // If age is a number, do this
        console.log(age > 12 && age < 20)
    }
}

~~~

## Literal Types
Literal types are not just types, but the values themselves too. On it's own, that's not very helpful, but combine it with something like unions and you can have very fine-tuned type optiones for TypeScript to enforce.
~~~ts
const giveAnswer = (answer: "yes" | "no" | "maybe") => {
    return `the answer is ${answer}`;
}
~~~