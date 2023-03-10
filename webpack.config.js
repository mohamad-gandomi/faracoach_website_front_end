import Dotenv from "dotenv-webpack"
import path from "path"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import HtmlWebpackPlugin from "html-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

export default {
  // Define the entry points of our application (can be multiple for different sections of a website)
  entry: {
    main: "./src/js/main.js",
  },

  // Define the destination directory and filenames of compiled resources
  output: {
    filename: "js/[name].js",
    path: path.resolve(process.cwd(), "./public"),
  },

  // Define development options
  devtool: "source-map",

  // Define loaders
  module: {
    rules: [
      // Use babel for JS files
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env"
            ]
          }
        }
      },
      // CSS, PostCSS, and Sass
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
              url: false,
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  "autoprefixer",
                ]
              }
            }
          },
          "sass-loader"
        ],
      },
      // File loader for images
      {
        test: /\.(jpg|jpeg|png|git|svg)$/i,
        type: "asset/resource",
      }
    ],
  },

  // Define used plugins
  plugins: [
    // Load .env file for environment variables in JS
    new Dotenv({
      path: "./.env"
    }),

    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "[id].css"
    }),

    // Copy images to the public folder
    new CopyPlugin({
      patterns: [
        {
          from: "src/images",
          to: "images",
        }
      ]
    }),

    // Inject styles and scripts into the HTML
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(process.cwd(), "index.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'index-logout.html',
      template: path.resolve(process.cwd(), "index-logout.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'list-of-courses.html',
      template: path.resolve(process.cwd(), "list-of-courses.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'single-course.html',
      template: path.resolve(process.cwd(), "single-course.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'list-of-coaches.html',
      template: path.resolve(process.cwd(), "list-of-coaches.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'list-of-coaches.html',
      template: path.resolve(process.cwd(), "list-of-coaches.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'single-coach.html',
      template: path.resolve(process.cwd(), "single-coach.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'events.html',
      template: path.resolve(process.cwd(), "events.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'single-event.html',
      template: path.resolve(process.cwd(), "single-event.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'product.html',
      template: path.resolve(process.cwd(), "product.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'single-product.html',
      template: path.resolve(process.cwd(), "single-product.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'blog.html',
      template: path.resolve(process.cwd(), "blog.html")
    }),
    new HtmlWebpackPlugin({
      filename: 'single-blog.html',
      template: path.resolve(process.cwd(), "single-blog.html")
    }),


  ],

  // Configure the "webpack-dev-server" plugin
  devServer: {
    static: {
      directory: path.resolve(process.cwd(), "public")
    },
    watchFiles: [
      path.resolve(process.cwd(), "index-logout.html")
    ],
    compress: true,
    port: process.env.PORT || 9090,
    hot: true,
  },

  // Performance configuration
  performance: {
    hints: false
  }
};
