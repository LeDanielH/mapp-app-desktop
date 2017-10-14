// import * as HtmlWebpackPlugin from 'html-webpack-plugin';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

import * as webpack from 'webpack';//to access built-in plugins
import * as path from 'path';

// import * as fs from 'fs';

const prod = process.argv.indexOf('-p') !== -1;


// import * as ExtractTextPlugin from 'extract-text-webpack-plugin';

const config = {
	entry: ['./src/js/index.js', './src/index.pug'],
	// context: path.resolve(__dirname, "mapp-app"),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'dist')
	},
	devtool: prod ? "source-map" : "eval-source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.(scss|sass)$/,
				use: [{
						loader: 'style-loader',
						options: {
						sourceMap: !prod
						}
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: !prod,
							minimize: prod
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: !prod,
						}
					},
					{
						loader: "sass-loader",
						options: {
							sourceMap: !prod,
							includePaths: [
								require('bourbon').includePaths
							]
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.pug$/,
				use: [
					{
						loader: 'babel-loader'
					},
					{
						loader: 'pug-loader',
						options: {
							pretty: true
						}
					}
				]
			},
			{
				test: /\.(png|jpg)$/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192
						}
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'index.html',
			template: './src/index.pug',
			inlineSource: prod ? '.js$' : '',
			alwaysWriteToDisk: true
		}),
		new HtmlWebpackHarddiskPlugin()

		// new ExtractTextPlugin({
		// 	filename: "[name].[contenthash].css",
		// 	disable: process.env.NODE_ENV === "development"
		// })
	],
	devServer: {
		open: true,
		overlay: true,
		port: 9876,
		clientLogLevel: "warning",
		historyApiFallback: true,
		// noInfo: true,
		inline: true,
		watchOptions: {
			// aggregateTimeout: 500,
			// poll: 1000
		}
	}
};

config.plugins = config.plugins || [];
if (prod) {
	config.plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': `"production"`
		}
	}));
	config.plugins.push(new HtmlWebpackInlineSourcePlugin())
} else {
	config.plugins.push(new webpack.DefinePlugin({
		'process.env': {
			'NODE_ENV': `""`
		}
	}));
	config.plugins.push(new webpack.HotModuleReplacementPlugin({}),)
}

module.exports = config;