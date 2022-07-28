# TypeScript
Javascript is quirky... and that largely has to do weith its development, and its original goal. 
~~~js
// We can multiply null or undefined
// without getting an error
null * 3 // returns 0

undefined * 5235 // returns NaN
~~~

~~~js
// If I try to access a property that doesn't exist within an object, 
// it will return undefined

const shape = { width: 15, height: 12};

console.log(shape.heigth) // => undefined
~~~

This last example can ruin a lot of code bases, because of unexpected undefined values that are not being handled.

This quirks are there bacause basically, JavaScript was never intended to be the ubiquitous programming language that it is today. It started its life as this little tiny two week project, created to add some simple scripting capabilities to browsers, maybe write a couyple of lines here or there. At the time, nobody foresaw it becoming the behemoth that it is today, where a modern application in the browser might be 99% JavaScript, tens of thousands of lines, potentially with a little bit of HTML and CSS sprinkled in.

So any of the issues and the quirks that started out int the language are still here, we are still dealing with them.
Over the years, browsers and developers have responded. They tried to improve JS by basically adding some enhancements, new functionality, but never really being able to change the language itself. It is still JS.

It is still an imperfect language, especially if you are writing 10,000 lines of code instead of a dozen lines. Those issues just become amplified.

So this is where TypeScript comes in. 

TypeScript is a language that is built on top of JavaScript with the purpose of helping us avoid the common pitfalls and bugs that arise in JavaScript. It seeks to improve the experience of writing JS. 
And the way that it does that is by adding types.

TS is a superset of JS, meaning that all JavaScript code is considerted valid for TypeScript.

## Static Checking
TypeScript performs something called static checking, which is a feature of a lot of programming languages. It basically means that it is going to look or detect any errors in out code without running it. It doesn't execute our code. 
TypeScript itself is a static checker, while executing the code is still the job of JavaScript.

TypeScript is a static type checker, which means that is does this error checking pre-runtime, on the basis of types or the kinds of data in our program. This helps us find error, before the code even runs.

The TypeScript code is then transpiled to Javaxript that can run in a browser or that NodeJS can work with.

## Installing TypeScript
We can TS globally with the command
~~~
npm install -g typescript
~~~
We can check that it is installed with 
~~~
tsc -v
~~~

## The TypeScript Playground
The TypeScript Playground is available in this [link](https://www.typescriptlang.org/play)

## How we use TypeScript
Assuming we have a basics.ts file we want to compile into JS we can go to the console and use the command
~~~
tsc basics.ts
~~~
This will create the basics.js file with the JS code.

