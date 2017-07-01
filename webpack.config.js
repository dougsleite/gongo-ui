module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			    query: {
			        presets:['react','stage-1']
			    }	
			},
			{
		    	test: /\.(?:png|jpg|svg)$/,
		      	loader: 'url-loader',
		      	query: {
		        	limit: 20000
		    	}
		    },
			{
		        test: /\.css$/,
		        use: [
		          { loader: "style-loader" },
		          { loader: "css-loader" }
		        ]
		    },
		    {
			    test: /\.styl$/,
			    loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
  			}
		]
	}
}