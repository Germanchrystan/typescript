# Modules
TypeScript supports modules, and that allows us to share code between files.

## namespaces
TypeScript has its own module format called `namespaces` which pre-dates the ES Modules standard. This syntax has a lot of useful features for creating complex definition files, and still sees active use in the module types repo. However, while it is not fully deprecated, it is not a very common feature nowadays. 

## Modules
If we don't use the export keyword anywhere, TypeScript just considers all of out code to be in the same scope.

This could present problems if we had variables or functions with the same name across different scripts in a project.

Suppose we have a *src* folder, and within that we create an inner *utils* folder. This utils folder contains a *utils.ts* file with this function

~~~ts
//./utils/utils.ts
function sample<T>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}
~~~

Then in our *src/index.ts* we call the util function
~~~ts
sample([12,3,34]) // This is taken from the utils script
~~~

This code above will work, since the utils script functions are part of the global scope of the project.

As soon as we use the `export` or `import` keyword in any file, TypeScript will suddenly swith into module mode, and we won't have that global scope across files.

## Changing compilation module system
If we tried to import a compiled JS file with *imports* and *exports* into an HTML, we would run into an error. HTML does not understand those keywords. We need to change the way we compile our TypeScript, so HTML can read a properly compiled JavaScript script. for that we have to go to the *tsconfing.json* file and set the ES6 module.

~~~json
"module": "ES6"
~~~

We also have to specify the type *module* for the script tag in HTML.

~~~html
<script type="module" src="./dist/index.js"></script>
~~~

Finally, we should also run a node server, that is required in order to have a file protocol in the files of the project. We can accomplish this with the *lite-server*
npm module.

There are definitely a lot of hurdles to jump through if we want to use any of the module syntax in the browser.

# Import Types
Imagine we have a TypeScript module that only holds types

~~~ts
export interface Person {
    username: string;
    email: string;
}
~~~

Then we could use the Person interface in another module

~~~ts
import { Person } from './types.js";
export default class User implements Person {
    constructor(public username: string, public email: string){}
    logout() {console.log(`${this.username} logs out`)}
}
~~~

When this code is compiled the types file will look like this

~~~js
export {}
~~~

It will be an empty module. Because the ts file has to do with types, its content dissappears when compiled.

In TypeScript, we can import types with this syntax

~~~ts
import type { Person } from './types'
~~~

or this

~~~ts
import { type Person } from './types'
~~~