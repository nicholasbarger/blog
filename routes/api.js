var fs = require('fs');
var path = require('path');
var dir = './posts/';

module.exports = function(app) {

  // get the most recent post
  app.get('/api/posts/latest', function (req, res) {
    var files = fs.readdir(dir, function(err, files) {
      var i;
      var latestFilename = null;
      var latestTimestamp = null;
      files.forEach(function(file) {
        fs.readFile(dir + file, 'utf8', function (err, data) {
          var post = JSON.parse(data);
          if (latestTimestamp == null || post.pubDate > latestTimestamp) {
            latestFilename = file;
            latestTimestamp = post.pubDate;
          }
          i++;

          if(i === files.length) {
            fs.readFile(dir + latestFilename, 'utf8', function(err, data) {
              res.send(data);
            })
          }
        })
      });
    });
  });

  // get a specific item
  app.get('/api/posts/:link', function (req, res) {
    fs.readFile(dir + req.params['link'], 'utf8', function(err, data) {
      res.send(data);
    });
  });

  // get all available posts
  app.get('/api/posts', function (req, res) {
    fs.readdir(dir, function(err, files) {
      var posts = [];
      files.forEach(function(file) {
        fs.readFile(dir + file, 'utf8', function(err, data) {
          var smallPost = JSON.parse(data);
          smallPost.content = null;  // clear out for bandwidth
          posts.push(smallPost);
          if(posts.length === files.length) {
            res.json(posts);
          }
        })
      });
    });
  });

  app.post('/api/posts', function(req, res) {

  });
};