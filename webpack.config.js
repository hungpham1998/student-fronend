let path = require("path");
let config = {
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    module: {
        loaders: [
            {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
            }
        ]       
    }
};

module.exports = config;
