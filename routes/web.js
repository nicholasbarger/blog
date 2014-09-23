module.exports = function(app) {

  app.get('/', function(req, res) {
    res.render('home.html', {
      title: 'Nicholas Barger: Software Development Entrepreneur',
      description: 'Nicholas Barger is a business professional who specialized in the software development space and has extensive experience in several industries.'
    })
  });

  app.get('/about', function(req, res) {
    res.render('about.html', {
      title: 'Hear my story',
      description: 'A biography of Nicholas Barger\'s career and the purpose of this blog.'
    });
  });

  app.get('/blog', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne(null, { sort: { pubDate: -1 } }, function(e, data) {
      if(e) {
        console.log(e);
      }

      res.render('post.html', {
        title: 'Software development and technology blog',
        description: 'I would like to begin collecting the information that I’ve learned (and continue to learn) and provide that information here in a very straightforward way to any of those who are interested. Ideally, I hope that this small online presence will encourage others to participate in code discussion, sampling, and learning together.',
        post: data
      });
    });
  });

  app.get('/blog/posts/:name', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.findOne({ name: req.params.name }, function(e, data) {
      if(e) {
        console.log(e);
        res.redirect(500, '/error');
      }

      if(data === null) {
        res.redirect(404, '/not-found');
      }

      res.render('post.html', {
        title: data.title,
        description: data.content.replace(/<\/?[^>]+>/gi, '').substr(0, 100),
        post: data
      });
    });
  });

  app.get('/blog/posts', function(req, res) {
    var db = req.db;
    var collection = db.get('posts');
    collection.find({}, { sort: { pubDate: -1 }, fields: { content:0 }}, function(e, data) {
      if(e) {
        console.log(e);
        res.redirect(500, '/error');
      }

      res.render('posts.html', {
        title: 'Blog posts and articles on software development and technology',
        description: 'A variety of blog posts on topics around software development and careers in technology.',
        posts: data
      });
    });
  });

  app.get('/contact', function(req, res) {
    res.render('contact.html', {
      title: 'Contact me for projects, careers, or anything technology',
      description: 'Contact Nicholas Barger in regards to projects, careers, or anything technology related.'
    });
  });

  app.get('/error', function(req, res) {
    res.render('error.html', {
      title: 'An error occurred',
      description: 'It looks like an error occurred, please try again or report this error to Nicholas Barger.'
    });
  });

  app.get('/latest', function(req, res) {
    res.redirect('/blog', 301);
  });

  app.get('/not-found', function(req, res) {
    res.render('not-found.html', {
      title: 'The page you are looking for was not found',
      description: 'Oops, it looks like one of us made a mistake.  The page could not be found to be displayed.'
    })
  });

  app.get('/portfolio', function(req, res) {
    res.render('portfolio.html', {
      title: 'Portfolio and sample software development work',
      description: 'Please find a sample collection of projects i\'ve been a part of; many of these products span throughout several years of my career, they vary in skill, budget, technologies, and client requests.'
    });
  });

  app.get('/portfolio/arthrex', function(req, res) {
    res.render('portfolio-arthrex.html', {
      title: 'A few samples of my work at Arthrex',
      description: ''
    });
  });

  app.get('/portfolio/hitech', function(req, res) {
    res.render('portfolio-hitech.html', {
      title: 'A few samples of my work for Hi-Tech Cooling and Controls',
      description: ''
    });
  });

  app.get('/portfolio/oms', function(req, res) {
    res.render('portfolio-oms.html', {
      title: 'A few samples of my work at Online Management Systems',
      description: ''
    });
  });

  app.get('/portfolio/ptgl', function(req, res) {
    res.render('portfolio-ptgl.html', {
      title: 'A few samples of my work for Pro Team Golf League',
      description: ''
    });
  });

  app.get('/2008/05/14/my-basic-ado-net-helper-functions/', function(req, res) { res.redirect('/posts/my-basic-ado.net-helper-functions')});
  app.get('/2008/05/01/what-the-heck-ill-start-a-blog/', function(req, res) { res.redirect('/posts/what-the-heck,-i\'ll-start-a-blog')});
  app.get('/2008/05/07/more-than-one-way-to-skin-a-cat-and-a-webpage/', function(req, res) { res.redirect('/posts/more-than-one-way-to-skin-a-cat...-and-a-webpage')});
  app.get('/2008/05/21/firebug-why-develop-without-it/', function(req, res) { res.redirect('/posts/firebug!-why-develop-without-it!')});
  app.get('/2008/05/28/microsoft-vs-linux-asp-net-vs-php/', function(req, res) { res.redirect('/posts/microsoft-vs.-linux,-asp.net-vs.-php')});
  app.get('/2008/06/07/a-recipe-for-ajax-webservices/', function(req, res) { res.redirect('/posts/a-recipe-for-ajax-webservices')});
  app.get('/2008/06/09/plagiarizing-myself-about-entry-level-experience/', function(req, res) { res.redirect('/posts/plagiarizing-myself-about-entry-level-experience')});
  app.get('/2008/06/10/feed-the-soul-a-few-technology-rss-feeds/', function(req, res) { res.redirect('/posts/feed-the-soul---a-few-technology-rss-feeds')});
  app.get('/2008/06/13/non-web-referenced-webservices-in-vb-net/', function(req, res) { res.redirect('/posts/non-web-referenced-webservices-in-vb.net')});
  app.get('/2008/06/16/urlrewriting-with-urlrewritingnet-urlrewriting-supertroopers-meow/', function(req, res) { res.redirect('/posts/urlrewriting-with-urlrewritingnet-.-urlrewriting-(supertroopers---meow)')});
  app.get('/2008/06/16/do-you-need-to-be-pci-and-pabp-certified/', function(req, res) { res.redirect('/posts/do-you-need-to-be-pci-and-pabp-certified')});
  app.get('/2008/08/02/oh-bitter-frustrations/', function(req, res) { res.redirect('/posts/oh,-bitter-frustrations...')});
  app.get('/2008/08/03/an-example-of-writing-your-own-blog-engine-mini-version/', function(req, res) { res.redirect('/posts/an-example-of-writing-your-own-blog-engine-(mini-version)')});
  app.get('/2008/08/11/an-example-of-writing-your-own-blog-engine-mini-version-part-two/', function(req, res) { res.redirect('/posts/an-example-of-writing-your-own-blog-engine-(mini-version)-part-two')});
  app.get('/2008/08/17/an-example-of-writing-your-own-blog-engine-mini-version-part-three/', function(req, res) { res.redirect('/posts/an-example-of-writing-your-own-blog-engine-(mini-version)-part-three')});
  app.get('/2008/08/21/things-to-do-on-a-rainy-day-create-visual-studio-code-snippets/', function(req, res) { res.redirect('/posts/things-to-do-on-a-rainy-day---create-visual-studio-code-snippets')});
  app.get('/2008/08/31/calling-all-beta-testers-mycatchlog-needs-help/', function(req, res) { res.redirect('/posts/calling-all-beta-testers!-mycatchlog-needs-help!')});
  app.get('/2008/10/21/triple-des-encryption-class/', function(req, res) { res.redirect('/posts/triple-des-encryption-class')});
  app.get('/2008/10/21/linq-to-sql-basic-operations/', function(req, res) { res.redirect('/posts/linq-to-sql-basic-operations')});
  app.get('/2008/10/21/someday-i-need-to-write-a-js-library/', function(req, res) { res.redirect('/posts/someday-i-need-to-write-a-js-library')});
  app.get('/2008/10/22/creating-greater-application-error-transparency/', function(req, res) { res.redirect('/posts/creating-greater-application-error-transparency')});
  app.get('/2008/10/27/very-good-benefit-for-very-little-work-iis-compression-for-iis6/', function(req, res) { res.redirect('/posts/very-good-benefit,-for-very-little-work---iis-compression-for-iis6')});
  app.get('/2008/12/18/virtual-earth-and-the-windows-live-ctp/', function(req, res) { res.redirect('/posts/virtual-earth-and-the-windows-live-ctp')});
  app.get('/2008/12/23/using-microsoft-virtual-pc-pros-and-cons/', function(req, res) { res.redirect('/posts/using-microsoft-virtual-pc---pros-and-cons')});
  app.get('/2009/01/13/web-session-management-and-centralization-class/', function(req, res) { res.redirect('/posts/web-session-management-and-centralization-class')});
  app.get('/2009/01/16/homegrown-css-standards/', function(req, res) { res.redirect('/posts/homegrown-css-standards')});
  app.get('/2009/01/16/no-analytics-no-problem-go-old-school-with-iis-log-parsing/', function(req, res) { res.redirect('/posts/no-analytics,-no-problem---go-old-school-with-iis-log-parsing')});
  app.get('/2009/01/18/running-multiple-versions-of-ie/', function(req, res) { res.redirect('/posts/running-multiple-versions-of-ie')});
  app.get('/2009/01/20/its-the-little-things-that-make-the-difference/', function(req, res) { res.redirect('/posts/it\'s-the-little-things-that-make-the-difference')});
  app.get('/2009/01/23/creating-a-thick-entity-class-template/', function(req, res) { res.redirect('/posts/creating-a-thick-entity-class-template')});
  app.get('/2009/01/30/manage-connection-strings-in-multiple-environments/', function(req, res) { res.redirect('/posts/manage-connection-strings-in-multiple-environments')});
  app.get('/2009/02/05/lets-talk-unit-tests/', function(req, res) { res.redirect('/posts/let\'s-talk-unit-tests')});
  app.get('/2009/02/17/not-photoshop-vs-fireworks-photoshop-and-fireworks/', function(req, res) { res.redirect('/posts/not-photoshop-vs.-fireworks,-photoshop-and-fireworks')});
  app.get('/2009/02/19/book-review-head-first-object-oriented-analysis-and-design/', function(req, res) { res.redirect('/posts/book-review---head-first-object-oriented-analysis-and-design')});
  app.get('/2009/03/04/converting-an-asp-net-2-0-project-to-asp-net-2-0-ajax-project/', function(req, res) { res.redirect('/posts/converting-an-asp.net-2.0-project-to-asp.net-2.0-ajax-project')});
  app.get('/2009/03/11/common-reusable-business-entities-part-1/', function(req, res) { res.redirect('/posts/common-reusable-business-entities-part-1')});
  app.get('/2009/03/16/common-reusable-business-entities-part-2/', function(req, res) { res.redirect('/posts/common-reusable-business-entities-part-2')});
  app.get('/2009/03/19/common-reusable-business-entities-part-3/', function(req, res) { res.redirect('/posts/common-reusable-business-entities-part-3')});
  app.get('/2009/03/19/battle-of-the-third-party-controls/', function(req, res) { res.redirect('/posts/battle-of-the-third-party-controls')});
  app.get('/2009/04/07/learning-design-patterns/', function(req, res) { res.redirect('/posts/learning-design-patterns')});
  app.get('/2009/06/19/i-wrote-it-why-do-i-need-to-document-it/', function(req, res) { res.redirect('/posts/i-wrote-it,-why-do-i-need-to-document-it?')});
  app.get('/2009/06/22/a-simple-tableless-form/', function(req, res) { res.redirect('/posts/a-simple-tableless-form')});
  app.get('/2009/07/03/css-zen-garden/', function(req, res) { res.redirect('/posts/css-zen-garden')});
  app.get('/2009/07/14/staying-in-touch-how-to-build-a-contact-form/', function(req, res) { res.redirect('/posts/staying-in-touch---how-to-build-a-contact-form')});
  app.get('/2009/07/15/code-disassembly-and-reflection/', function(req, res) { res.redirect('/posts/code-disassembly-and-reflection')});
  app.get('/2009/07/27/opencourseware-from-mit-harvard-yale/', function(req, res) { res.redirect('/posts/opencourseware-from-mit-harvard-yale')});
  app.get('/2009/09/04/southwest-florida-code-camp-2009/', function(req, res) { res.redirect('/posts/southwest-florida-code-camp-2009')});
  app.get('/2009/09/25/developing-asp-net-custom-controls/', function(req, res) { res.redirect('/posts/developing-asp.net-custom-controls')});
  app.get('/2009/10/28/subversion-tips/', function(req, res) { res.redirect('/posts/subversion-tips')});
  app.get('/2009/12/14/a-tale-of-two-architectures/', function(req, res) { res.redirect('/posts/a-tale-of-two-architectures')});
  app.get('/2010/01/18/implementing-data-access-interfaces-and-stubbing/', function(req, res) { res.redirect('/posts/implementing-data-access-interfaces-and-stubbing')});
  app.get('/2010/01/26/setting-up-development-environments-based-on-life-cycle/', function(req, res) { res.redirect('/posts/setting-up-development-environments-based-on-life-cycle')});
  app.get('/2010/03/01/a-generic-data-mapper-for-simple-data/', function(req, res) { res.redirect('/posts/a-generic-data-mapper-for-simple-data')});
  app.get('/2010/03/07/cache-management-helper-class/', function(req, res) { res.redirect('/posts/cache-management-helper-class')});
  app.get('/2010/09/24/qxtend-query-service-net-and-dexter/', function(req, res) { res.redirect('/posts/qxtend-query-service,-.net,-and-dexter')});
  app.get('/2010/10/05/vs2010-schema-compare-crashing/', function(req, res) { res.redirect('/posts/vs2010-schema-compare-crashing')});
  app.get('/2010/10/06/vs2010-schema-compare-order-of-operations/', function(req, res) { res.redirect('/posts/vs2010-schema-compare-order-of-operations')});
  app.get('/2010/11/03/testing-web-services-with-soapui/', function(req, res) { res.redirect('/posts/testing-web-services-with-soapui')});
  app.get('/2010/11/10/wp7-u-s-launch/', function(req, res) { res.redirect('/posts/wp7-u.s.-launch')});
  app.get('/2010/12/17/my-windows-phone-7-christmas-story/', function(req, res) { res.redirect('/posts/my-windows-phone-7-christmas-story')});
  app.get('/2011/01/23/not-all-roses-with-azure/', function(req, res) { res.redirect('/posts/not-all-roses-with-azure')});
  app.get('/2011/01/25/photomemory-wp7-app/', function(req, res) { res.redirect('/posts/photomemory-wp7-app')});
  app.get('/2011/02/21/tips-for-working-with-enums/', function(req, res) { res.redirect('/posts/tips-for-working-with-enums')});
  app.get('/2011/04/20/running-ssms-under-another-windows-authenticated-user/', function(req, res) { res.redirect('/posts/running-ssms-under-another-windows-authenticated-user')});
  app.get('/2011/04/26/running-zune-and-wp7-on-virtualbox/', function(req, res) { res.redirect('/posts/running-zune-and-wp7-on-virtualbox')});
  app.get('/2011/04/28/reviving-dependency-walker/', function(req, res) { res.redirect('/posts/reviving-dependency-walker')});
  app.get('/2011/05/01/a-30-year-old-mythical-man-month/', function(req, res) { res.redirect('/posts/a-30+-year-old-mythical-man-month')});
  app.get('/2011/07/13/the-stored-procedure-for-searching-challenge/', function(req, res) { res.redirect('/posts/the-stored-procedure-for-searching-challenge')});
  app.get('/2011/08/04/jquery-makes-100-height-so-much-easier/', function(req, res) { res.redirect('/posts/jquery-makes-100-height-so-much-easier')});
  app.get('/2011/08/12/tfs-management-with-team-foundation-sidekicks-2010/', function(req, res) { res.redirect('/posts/tfs-management-with-team-foundation-sidekicks-2010')});
  app.get('/2011/09/05/moving-to-the-cloud-as-a-consumer/', function(req, res) { res.redirect('/posts/moving-to-the-cloud,-as-a-consumer')});
  app.get('/2011/10/25/my-recent-speaking-presentations/', function(req, res) { res.redirect('/posts/my-recent-speaking-presentations')});
  app.get('/2012/01/29/catching-up-to-mvc/', function(req, res) { res.redirect('/posts/catching-up-to-mvc')});
  app.get('/2012/03/11/fun-and-struggles-with-mvc-no-parameterless-constructor-defined/', function(req, res) { res.redirect('/posts/fun-and-struggles-with-mvc---no-parameterless-constructor-defined')});
  app.get('/2012/05/20/learning-knockout-js-crazy-mom-baby-tracker-demo/', function(req, res) { res.redirect('/posts/learning-knockout-js-–-crazy-mom-baby-tracker-demo')});
  app.get('/2013/02/09/paralysis-analysis-and-the-paradox-of-choice/', function(req, res) { res.redirect('/posts/paralysis-analysis-and-the-paradox-of-choice')});

  app.get('/posts', function(req, res) { res.redirect('/blog/posts')});
  app.get('/posts/:name', function(req, res) { res.redirect('/blog/posts/:name')});
  app.get('/latest', function(req, res) { res.redirect('/blog')});
};