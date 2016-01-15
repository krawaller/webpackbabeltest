module.exports = {  
    entry: './entry.js',
    output: {
        filename: 'output.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};