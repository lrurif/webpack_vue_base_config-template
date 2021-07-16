const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: "development",
	entry: {
		main: "./src/main.js",
		app: ["./src/app.js", "./src/test.js"],
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].[hash].bundle.js",
		// publicPath: "./",
		chunkFilename: "[name].[hash:8].js",
	},
	devServer: {
		open: true,
		port: 3001,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ["ts-loader"],
			},
			{
				test: /\.js$/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [["@babel/preset-env"]],
					},
				},
			},
			{
				test: /\.(s)?css$/,
				use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"],
			},
			{
                test: /\.(jpg|png|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                      esModule: false,
                      limit: 100, 
                      name: '[contenthash:8].[ext]'
                    },
                  }]
            }
		],
	},
	plugins: [
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "./index.html"),
			filename: "index.html",
			chunks: ["main"],
			inject: true,
		}),
		new htmlWebpackPlugin({
			template: path.resolve(__dirname, "./app.html"),
			filename: "app.html",
			chunks: ["app"],
			inject: true,
		}),
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),

		new CleanWebpackPlugin(),
	],
};
