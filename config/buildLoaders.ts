export function buildLoaders() {
    return [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                'babel-loader',
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader',
                'css-loader'],
        },
    ]
}
