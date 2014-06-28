module.exports = function(app, passport) {

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
    isTokenValid(req.cookies.token, db, function(isValid) {
      if(!isValid) {
        res.send(401);
        return;
      }

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
  });

  // update an existing post
  app.put('/api/posts/:id', function(req, res) {
    var db = req.db;
    isTokenValid(req.cookies.token, db, function(isValid) {
      if(!isValid) {
        res.send(401);
        return;
      }

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
  });

  // authenticate user
  app.post('/api/auth', function(req, res) {
    passport.authenticate('local', function(err, user) {
      if(err || user === false) {
        res.send(401);
        return;
      }

      res.cookie('token', user._id, { maxAge: 3600000 });  // 1 hour
      res.send(200);
    })(req, res);
  });
};

function createNameFromTitle(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

function isTokenValid(token, db, callback) {
  var collection = db.get('users');
  collection.findOne({ _id: token }, function(err, data) {
    if(err || data == null) {
      callback(false);
    }

    callback(true);
  })
}