module.exports = function(app) {

  // get a specific item
  app.get('/posts/:link', function (req, res) {
    res.sendfile('posts/' + req.params['link'] + '.json');
  });
};