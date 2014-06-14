use nb;

// list all posts
db.posts.find();

// get latest post
db.posts.find().sort({pubDate: -1});

// search posts
db.posts.find({title: 'ajax', content: 'ajax'});