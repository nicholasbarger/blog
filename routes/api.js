var uuid = require('uuid');

module.exports = function(app) {

  // get the most recent post
  app.get('/api/posts/latest', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne(null, { limit: 1, sort: { pubDate: -1 } }, function(e, data) {
      res.json(data);
    });
  });

  // get a specific item
  app.get('/api/posts/:name', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne({ name: req.params.name }, function(e, data) {
      res.json(data);
    });
  });

  // get all available posts
  app.get('/api/posts', function (req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.find({}, function(e, data) {
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
      res.send(!err);
    });
  });
};

function createNameFromTitle(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}