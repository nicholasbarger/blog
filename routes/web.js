module.exports = function(app) {

  app.get('*', function (req, res) {
    //res.sendfile('public/index.html');
    res.render('index', { hello: 'world' });
  });

};