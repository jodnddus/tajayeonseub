const browserConfig = {
    entry: {
        main: './src/browser/index.js'
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}

const serverConfig = {
    entry: {
        main: './src/server/index.js'
    },
    output: {
        path: __dirname,
        filename: 'server.js',
        globalObject: 'self',
    },
    target: 'node',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    }
}

module.exports = [browserConfig, serverConfig];