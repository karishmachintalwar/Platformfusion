export const entry = './src/index.js';
export const output = {
    path: './dist',
    filename: 'bundle.js',
};
export const module = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
    ],
};