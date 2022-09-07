# Introducing Type Declarations
`d.ts` files are *declaration files*, that contain only type information.

For this section, we will create a small project with node. We installed the npm package `axios` with

~~~
npm install axios
~~~

In the axios folder, inside the node_modules we can see that the *package.json* file includes typings

~~~json
{
  "name": "axios",
  "version": "0.27.2",
  "description": "Promise based HTTP client for the browser and node.js",
  "main": "index.js",
  "types": "index.d.ts",
  "scripts": {
    //...
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/axios/axios.git"
  },
  "keywords": [
    //...
  ],
    //...
    "typings": "./index.d.ts",

}
~~~
This file has all the types for axios.


## Installing Types Separately
Now we install lodash

~~~
npm install lodash
~~~

This dependency doesn't come with its own type declarations. But, luckily, for most node packages we have type declarations that can be installed separately.

~~~
npm install --save-dev @types/lodash
~~~

`types` is a repository that includes type declarations for all of the most popular node packages. We include the `--save-dev` flag because we don't need the types in production.
We can use the [TypeScript type search](https://www.typescriptlang.org/dt/search?search=) to look for type information on any of the node packages.

