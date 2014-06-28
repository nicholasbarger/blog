var bcrypt = require('bcrypt');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport, db) {
  passport.use(new LocalStrategy(function(username, password, done) {

    // check db
    var collection = db.get('users');
    collection.findOne({ username: username }, function(err, data) {
      if(err || data == null) {
        return done(null, false);
      }

      // get hash
      var hash = data.password;

      // check password
      bcrypt.compare(password, hash, function(err, isValid) {
        if(err || !isValid) {
          return done(null, false);
        }

        return done(null, data);
      });
    });
  }))
};