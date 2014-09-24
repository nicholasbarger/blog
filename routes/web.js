module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('home.html', {
      title: 'Nicholas Barger: Software Development Entrepreneur',
      description: 'Nicholas Barger is a business professional who specialized in the software development space and has extensive experience in several industries.'
    })
  });

  app.get('/error', function(req, res) {
    res.render('error.html', {
      title: 'An error occurred',
      description: 'It looks like an error occurred, please try again or report this error to Nicholas Barger.'
    });
  });

  app.get('/not-found', function(req, res) {
    res.render('not-found.html', {
      title: 'The page you are looking for was not found',
      description: 'Oops, it looks like one of us made a mistake.  The page could not be found to be displayed.'
    })
  });
};