export function buildLoaders() {
    return [
        {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [
                'ts-loader',
            ]
        },
        {
            test: /\.css$/,
            use: ['style-loader',
                'css-loader'],
        },
    ]
}
