var path = require('path');
var webpack = require('webpack');

module.exports = {

	entry: {
		main: ['./static/scripts/main.js']
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, './build'),
		publicPath: './build'
	}
}