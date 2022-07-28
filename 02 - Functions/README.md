# Functions
## Function Parameter types
In TypeScript, we can specify the type of function parameters in a function definition. This allows TypeScript to enforce the types for the values bing passed into your functions.

~~~ts
// Creating a function with typed args
const encourageStudent = (name: string) => {
    return `Hey, ${name}, you are doing GREAT!`
}

// CAN call this function with a string
encourageStudent('you')

// CAN'T call this function with other type args
encourageStudent(23) // => TypeScript Error!

~~~

## Default Values
In case we need to add a default value we should add after the type annotation.

~~~ts
function greet(person: string = "stranger") {
    return `Hi there, ${person}`
}
~~~

## Function Return types
We can specify the type returned by a function. Even though TypeScript can often infer this, I prefer the explicit annotations. Add the type annotation after the function parameter list 

~~~ts
const addNums = (x: number, y: number): number => {
    return x + y;
}

addNums(5,5) // => 10
~~~

A function can also return one type of value or another. TypeScript can infer this as well
~~~ts
function rando(num: number) { // => : string | number
    if(Math.random() < 0.5){
        return num.toString();
    }
    return num;
}
~~~

## Anonymous Function Contextual Typing
When TypeScript can infer how an unnamed function is going to be called, it can automatically infer its parameters' types.
~~~ts
const numbers = [1, 2, 3];

//Contextual typing on an arrow function
numbers.forEach(num => {
    return num.toUpperCase(); // Error!
    //.toUp´perCase() doesn't work for nums
})

~~~

## The Void Type
Void is a return type for functions that don't return anything. It means, just that - this function is void of any data.
TypeScript can infer this type fairly well, but sometimes it may want you to annotate a function with a void return explicitly
~~~ts
// A function that doesn't return anything
const annoyUser = (num: number): void => {
    for(let i = 0; i < num; i++) {
        alert("HIIIIIIII!!");
    }
}
~~~

## The Never Type
The `never` type represents values that NEVER occur. We might use it to annotate a function that always throws an exception, or a function that never finishes executing.

Don't confuse with `void`. Void returns undefined or null, which is technically still a type of value. With never, a function doesn't even finish executing.

`Never` is not a JavaScript type, and it is not all that commonly used, but it is important to know what it is and how it works.

The functions that have a never return value generally are either going to be ones that always throw an exception, so there is no chance for anything to be returned, or a function that continuosly runs in some sort of loop.

~~~ts
// A function that doesn't finish running
const neverStop = (): never => {
    while(true) {
        console.log("I'm still going!")
    }
}

// A function that throws an exception
const giveError = (msg: string) => {
    throw new Error(msg);
}
~~~
