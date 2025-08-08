export function buildLoaders() {
  return [
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,

      use: [
        {
          loader: "ts-loader",
          options: {
            compilerOptions: {
              noEmitOnError: false,
              incremental: true,
              skipLibCheck: true,
            },

            transpileOnly: process.env.NODE_ENV === "development",
            happyPackMode: true,
          },
        },
      ],
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
