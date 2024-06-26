import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack from "webpack"
import { BuildOptions } from "./types/config"

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ?
              '[path][name]__[local]'
              : '[hash:base64:8]'
          },
          esModule: false,
        },

      },
      "sass-loader",
    ],
  }
  //Если не используем ts - нужен babe-loader
  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  return [
    typeScriptLoader,
    cssLoaders,
  ]
}