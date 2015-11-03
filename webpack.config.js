var configs = module.exports = {
	entry: {
		app: [
			'./chatroom.js'
		]
	},
	output: {
		path: __dirname + '/js',
		publicPath: '/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loader: 'babel',
				exclude: /(node_modules|bower_components)/,
				query: {
					stage: 0,
					optional: [ 'runtime' ]
				}
			},
		]
	}
};
