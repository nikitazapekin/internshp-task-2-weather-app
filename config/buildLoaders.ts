export function buildLoaders() {
  return [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ["ts-loader"],
    },
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.(png|jpg|jpeg|gif|webp)$/i,
      type: "asset/resource",
    },
  ];
}
