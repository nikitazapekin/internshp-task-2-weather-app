import HtmlWebpackPlugin from "html-webpack-plugin";

export function buildPlugins() {
   
    return [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
    ]
}
