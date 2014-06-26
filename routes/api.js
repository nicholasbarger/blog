var bcrypt = require('bcrypt');
var uuid = require('uuid');

module.exports = function(app) {

  // get the most recent post
  app.get('/api/posts/latest', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne(null, { sort: { pubDate: -1 } }, function(e, data) {
      if(e) {
        console.log(e);
      }

      res.json(data);
    });
  });

  // get a specific item
  app.get('/api/posts/:name', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne({ name: req.params.name }, function(e, data) {
      if(e) {
        console.log(e);
      }

      res.json(data);
    });
  });

  // get all available posts
  app.get('/api/posts', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.find({}, { sort: { pubDate: -1 }, fields: { content:0 }}, function(e, data) {
      if(e) {
        console.log(e);
      }

      res.json(data);
    });
  });

  // create a new post
  app.post('/api/posts', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.insert({
      name: createNameFromTitle(req.body.title),
      title: req.body.title,
      pubDate: req.body.pubDate,
      link: req.body.link,
      content: req.body.content
    }, function(err, data) {
      if(err) {
        console.log(err);
      }
      res.send(!err);
    });
  });

  // update an existing post
  app.put('/api/posts/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.update({ _id: req.params.id}, { $set: {
      name: createNameFromTitle(req.body.title),
      title: req.body.title,
      pubDate: req.body.pubDate,
      link: req.body.link,
      content: req.body.content
    }}, function(err, data) {
      if(err) {
        console.log(err);
      }

      res.send(!err);
    });
  });

  // authenticate user
  app.post('/api/auth', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;

    // validate input
    if(username == null || username === '' || password == null || password === '') {
      res.send(false);
      return;
    }

    // check db
    var db = req.db;
    var collection = db.get('users');
    collection.findOne({ username: username }, function(err, data) {
      if(err || data == null) {
        console.log(err);
        res.send(false);
        return;
      }

      // get hash
      var hash = data.password;

      // check password
      bcrypt.compare(password, hash, function(err, isValid) {
        res.send(isValid);
      });
    });
  });
};

function createNameFromTitle(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}