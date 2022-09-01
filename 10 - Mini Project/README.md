# TODO List
We are going to make a very simple ts project

## The Lib Compiler Option


## NonNull Assertion Operator
Let's look at the following line of TypeScript code.
~~~ts
const btn = document.querySelector("button");
~~~
By default, TypeScript will assume that the type of the constant btn is `HTMLElement | null`, since this element may or may not be found in our html file. If we wanted to perform methods upon this element, it will be mandatory to use the JS operator `?` to perform actions in case this element is actually found

~~~ts
btn?.addEventListener('click', () => {alert('CLICKED!')})
~~~

Now, if we know for certain this element is part of the HTML document and we want to enforce that notion, we can use the TS non null assertion operator `!` after the constant definition.
~~~ts
const btn = document.querySelector("button")!; // Infered type of HTMLElement
~~~
This will tell TypeScript that the type of btn is not an union type between HTMLElement and null, since it will surely be found.
This operator should be used with caution.  

## Type Assertion
Sometimes we might have more specific information about a value's type, and we want to make sure TypeScript knows it too.

We can assert a value's type by using the `as` keyword, followed by the specific type we want to assert.

~~~ts
// TypeScript infers a type of HTMLElement
const myPic = document.querySelector("profile-image");

// But we know a more specific type, so let's assert
const myPic = document.querySelector("profile-image") as HTMLImageElement;
~~~

Let's see this other example 
~~~ts
const btn = document.getElementById("btn")!;
const input = document.getElementById("input");

btn.addEventListener('click', () => {alert(input.value)}) // ERROR: value does not exist in HTMLElement type
~~~

In this case, TS will complain in the callback function for the listener, since it assumes `input` is an `HTMLElement` generic type, and not all of the HTML element have a value property. This is an exampĺe where type assertion can become useful.

~~~ts
const btn = document.getElementById("btn")!;
const input = document.getElementById("input") as HTMLInputElement;

btn.addEventListener('click', () => {alert(input.value)})
~~~

We could also use angle brackets syntax for type assertion

~~~ts
const btn = document.getElementById("btn")!;
const input = document.getElementById("input")!;

btn.addEventListener('click', 
    () => {
        alert(
            (<HTMLInputElement>input).value
        )
    }
)
~~~

This syntax doesn't work with jsx files.