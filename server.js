var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var app = express();
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
 
app.use(webpackDevMiddleware(compiler, {
      hot: true,
      filename: 'bundle.js',
      publicPath: '/',
      stats: {
              colors: true,
      },
      historyApiFallback: true,
}));
 
var server = app.listen(3000, function() {
      var host = '127.0.0.1';
        var port = server.address().port;
          console.log('Example app listening at http://%s:%s', host, port);
});
