var fs = require('fs');
var path = require('path');
var q = require('q');

module.exports = function(app) {

  // get a specific item
  app.get('/posts/:link', function (req, res) {
    res.sendfile('posts/' + req.params['link']);
  });

  // get all available posts
  app.get('/posts', function (req, res) {
    var filepath = './posts';
    fs.readdir(filepath, function(err, files) {
      var posts = [];
      files.forEach(function(file) {
        fs.readFile(filepath + '/' + file, 'utf8', function(err, data) {
          posts.push(JSON.parse(data));
          if(posts.length === files.length) {
            res.json(posts);
          }
        })
      });
    });
  })
};