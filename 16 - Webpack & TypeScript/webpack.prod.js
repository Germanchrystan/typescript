const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry point tells webpack where we want it 
    // to enter our application and start bundling
    entry: './src/index.ts',
    devtool: "inline-source-map",
    mode: "production",
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
        filename: "[contenthash]bundle.js", // adds a hash to the bundle filename... 
        path: path.resolve(__dirname, "dist"), // ... inside a dist folder in the root folder
        publicPath: "/dist"
    },
    plugins: [
        new CleanWebpackPlugin(),
    ]
}