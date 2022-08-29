# Configuring the TypeScript Compiler
We can initialize the `tsconfig.json` file by getting into a project folder and executing the command
~~~
tsc --init
~~~
This json file includes the configuration for the TS compiler. There are several options that can be customized.


## Watchmode
We can initialize watchmode with this command.
~~~
tsc --w index.ts
~~~
This option will tell TypeScript to instead of just compilling once immediately and then never doing it again, it should listen for changes any time we change files (in this example. only index.ts) and save them.

We can also use the long version of the command
~~~
tsc --watch index.ts
~~~

## Working with multiple files
If I want to compile multiple ts files we can just ran 
~~~
tsc 
~~~
This will compile all ts files in the folder.

## Configuring Files
We can specify which ts files we want to compile in the tsconfig.json file. For that we go to the json, and in the top level (the same for the `compilerOptions` property) we can add the `files` property.

~~~json
{
    "compilerOptions": {},
    "files": [
        "index.ts",
        "farmstand.ts"
    ] 
}
~~~

In this example, the only ts files that are going to be compiled are `index.ts` and `farmstand.ts`. 

We can also use the `include` and `exclude` properties. By default, the compiler includes every file in the project folder.
If we had a src folder for all the code we can set up the compiler this way

~~~json
{
    "compilerOptions": {},
    "include": [
        "src"
    ] 
}
~~~

The `exclude` property does the opposite
~~~json
{
    "compilerOptions": {},
    "include": [
        "src",
    ],
    "exclude": [
        "src/dontTouch.ts"
    ] 
}
~~~

We can also use regex for this setting

~~~json
{
    "compilerOptions": {},
    "exclude": [
        "src/**/**.test.ts"
    ] 
}
~~~

TypeScript by default will exclude ts files in node_modules. We should add the directory if we are specifying the excluded files.
~~~json
{
    "compilerOptions": {},
    "exclude": [
        "src/**/**.test.ts",
        "node_modules"
    ] 
}
~~~

## OutDir
We usually want to compile all the files into a separate directory. A common name for that directory is `dist`. We can specify this directory in the compilerOptions.

~~~json
{
    "compilerOptions": {
        // ...
        "outDir": "./dist",
        // ...
    },
    "exclude": [
        "src/**/**.test.ts",
        "node_modules"
    ] 
}
~~~

## Target Output
The JS version can be specify. By default it august 2022 is es5. If we compiled this function in a ts file

~~~ts
const printProduct = (product: Product): void => {
    console.log(`${product.name} - $${product.price}`)
}
~~~

it will be turned into a regular JS function, since arrow functions we first included in es6. We can also see changes regarding string literals and the use of const or var to declare variables.

~~~js
var printProduct = function(product) {
    console.log(product.name + " - $" + product.price);
}
~~~

## Strict Option
By default, TypeScript sets up JavaScript's strict mode. 
This turns to true all the properties directly below it (`noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`, etc.). We can set `strict` to false, and then set as true the properties that conform the strict mode in a separate way.