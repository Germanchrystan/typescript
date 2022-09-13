# Webpack & TypeScript

## What is the point of Webpack?
Webpack helps us take complicated applications that maybe consist of dozens or hundreds of different files, with dependencies where we import and export modules, with code split into different files, and use of third party libraries; and manage them into bundles. It combines them, compresses them, into small bundles that we can include.

Webpack handles Sass, templating languages, images, svgs, and all kind of other assets and bundles them into static assets. It could take JavaScript files with tons of libraries, combine them down into some sort of bundled file or files that we can then load as a single script.

## Setting up a project
We are going to start this proyect as we did with previous ones.
~~~
tsc --init
npm init -y
npm install lite-server

~~~
We will again configure our tsconfig options

~~~json
{
    "outDir": "./dist",
    "rootDir": "./src",    
}
~~~


## Installing Webpack Dependencies
We start by executing

~~~
npm install --save-dev webpack webpack-cli typescript ts-loader
~~~

- webpack: Module bundler
- webpack-cli: We need it to use the command line interface for webpack
- typescript: Why do we need to install typescript with npm? Well, it is a good practice, and let's other developers know that they need to have TypeScript, what version it is, etc.
- ts-loader: Middleman between TS and Webpack. Calls the `tsc` command and hands the compiled JS to Webpack. 

## Basic Webpack Config
We start by creating a `webpack.config.js` file in the root folder.
We will set up webpack like this 

~~~js
const path = require('path');
module.exports = {
    // entry point tells webpack where we want it 
    // to enter our application and start bundling
    entry: './src/index.ts',
    module: {
        rules:[
            // If you see a file that ends in ts
            // We want to use the TypeScript loader
            {
                test: /\.tsx?$/, // If it ends with ts or tsx...
                use: 'ts-loader', // ... use ts-loader
                exclude: /node_modules/, // don't touch this folder
            } 
        ]
    },
    resolve: {
        // List of file extensions that we want webpack to resolve
        extensions: [".tsx", ".ts", ".js"] 
    },
    output: {
        filename: "bundle.js", // make a bundle.js file... 
        path: path.resolve(__dirname, "dist") // ... inside a dist folder in the root folder
    }
}
~~~

Then, we need to add a npm script for webpack.

~~~json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "lite-server",
    "build": "webpack"
  },
~~~

If we ran `npm run build` we will run into some issues. That may be because we are using imports with `.js` extensions that we wrote in order to run the TypeScript compiler correctly. Webpack can't find those `.js` files.

~~~ts
import Dog  from "./dog.js";
import ShelterDog from "./shelterDog.js";
import { add } from "./utils.js";
~~~

We need to get rid of those extensions in every module import.

~~~ts
import Dog  from "./dog";
import ShelterDog from "./shelterDog";
import { add } from "./utils";
~~~

If all goes correctly, the `bundle.js` file will we created in the *dist* folder, with all the code bundled. We can import this code in our `index.html` file. This script tag does not need to be set as a *module*.

~~~html
<body>
    <script src="dist/bundle.js"></script>
</body>
~~~

## Source Maps
Source maps basicallyh take the minified bundle code and map it backwards to its prebuilt state, so that we can see where the actual code is coming from that makes up the bundle. We need to tell TypeScript in `tsconfing.json` that we want to set source map to true.

~~~json
{
"sourceMap": true
}
~~~

We also need to include one line in our Webpack config file, so that it takes those source maps.
~~~js
module.exports = {
//...
    devtool: "inline-source-map",
//...
}
~~~

Once we run the build command again, and open the app in a browser, we will see the *.ts* files in the *Sources* section of the browser web tools.

## Webpack Dev Server
We can set up a *development* mode in the Webpack config file.

~~~js
module.exports = {
    //...
    mode: "development",
    //...
}
~~~

The bundled code now won't be compressed into one single line of code.

## Webpack Dev Server
We can use the Webpack dev server, which is a live server, that also handles the bundling behind the scenes. Instead of making it a separate bundle file every single time, and writing it to the disk, it keeps the bundle in memory, at least in development. For that we need to install *Webpack Dev Server*

~~~
npm install --save-dev wepack-dev-server
~~~

We need to set up a script in the *package.json* file of the project with the *serve* keyword.

~~~json
  "scripts": {
    "serve": "webpack-dev-server",
  },
~~~

We also need to add a line in the *output* object of the *webpack.config.js* with the dist directory. 

~~~js
module.exports = {
    //...
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist"
    }
}
~~~

## Production Configuration
We can create a second configuration for the production build, by creating a js file named *webpack.prod.js* (can use a different name, this is just an example).
In this file we change the mode to *"production"*.
~~~js
// webpack.prod.js
const path = require('path');
module.exports = {
    entry: './src/index.ts',
    devtool: "inline-source-map",
    mode: "production",
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            } 
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"] 
    },
    output: {
        filename: "bundle.js", 
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist"
    }
}
~~~

Now we can set up the *build* command on our *package.json* to use the production config

~~~json
    "build": "webpack --config webpack.prod.js"
~~~~

A common addition is to add in a special plugin that will help us clean out the dist folder every time we build. This is because we can set the bundle filename to start with a hash in every build. That will tell us if the files have changed

~~~
//webpack.prod.js
module.exports = {
    // ...
    output: {
        filename: "[contenthash]bundle.js", // adds a hash to the bundle filename... 
        path: path.resolve(__dirname, "dist"), // ... inside a dist folder in the root folder
        publicPath: "/dist"
    }
}

~~~

We install this plugin by running

~~~
npm install --save-dev clean-webpack-plugin
~~~

The plugin must now be added to the webpack config.

~~~js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //...
    output: {
        filename: "[contenthash]bundle.js", // adds a hash to the bundle filename... 
        path: path.resolve(__dirname, "dist"), // ... inside a dist folder in the root folder
        publicPath: "/dist"
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}
~~~

We could now change the name of the original *webpack.config.js* file to a more appropiate name like *webpack.dev.js*. In that case, we need to specify this name to the *serve* command in our *package.json* (webpack.config.json is the default filename the webpack looks for).

~~~json
"serve": "webpack-dev-server --config webpack.dev.js",
~~~