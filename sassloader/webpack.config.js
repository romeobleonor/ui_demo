var webpack = require('webpack');
var path = require('path');

var entryScript = ["./src/scripts/main.js"];

module.exports = {
	entry: loadEntries(entryScript),

	output: {
		filename: '[name].js',
		publicPath: '/hotDev',
		path: path.join(__dirname, 'build')
	},

	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],

	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			}
		]
	}

	// sassLoader: { // pass options to node-sass
	// 	includePaths: [
	// 		path.resolve(__dirname, "./src/scss/vendor/bootstrap/");
	// 	]
	// }
}


function loadEntries(list){
	if(process.env.NODE_ENV !== 'production'){
		list.push("webpack-dev-server/client?http://localhost:8080");		
		list.push("webpack/hot/dev-server");
	}

	return list;
}