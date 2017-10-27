const webpack = require('webpack');
module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			{ test: /\.tsx?$/, loader: "ts-loader" },

			{ enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
		]
	},
	devServer: {
		hot: true,
		publicPath: '/dist/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
};