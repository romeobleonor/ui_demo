var webpack = require('webpack');
var path = require('path');

var entryFiles = {main: './src/scripts/main.js'}

module.exports = {
	entry: loadEntryFile(entryFiles),

	output: {
		filename: '[name].js',
		publicPath: '/hotDev',
		path: path.join(__dirname, 'build')
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}


function loadEntryFile(entries){
	if(process.env.NODE_ENV !== 'production'){
		entries.localClient = 'webpack-dev-server/client?http://localhost:8080';
		entries.localHot = 'webpack/hot/dev-server';
	}

	return entries;
}