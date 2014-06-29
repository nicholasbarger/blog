var nb = angular
  .module('nb', ['ngRoute', 'ngLocale'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: '/templates/latest.html',
        controller: 'latestController'
      })
      .when('/about', {
        templateUrl: '/templates/about.html'
      })
      .when('/admin', {
        templateUrl: '/templates/manage.html',
        controller: 'manageController'
      })
      .when('/admin/create', {
        templateUrl: '/templates/create.html',
        controller: 'createController'
      })
      .when('/admin/edit/:id', {
        templateUrl: '/templates/edit.html',
        controller: 'editController'
      })
      .when('/admin/manage', {
        templateUrl: '/templates/manage.html',
        controller: 'manageController'
      })
      .when('/contact', {
        templateUrl: '/templates/contact.html',
        controller: 'contactController'
      })
      .when('/login', {
        templateUrl: '/templates/login.html',
        controller: 'loginController'
      })
      .when('/portfolio', {
        templateUrl: '/templates/portfolio.html'
      })
      .when('/portfolio/arthrex', {
        templateUrl: '/templates/portfolio-arthrex.html'
      })
      .when('/portfolio/hitech', {
        templateUrl: '/templates/portfolio-hitech.html'
      })
      .when('/portfolio/oms', {
        templateUrl: '/templates/portfolio-oms.html'
      })
      .when('/portfolio/ptgl', {
        templateUrl: '/templates/portfolio-ptgl.html'
      })
      .when('/posts', {
        templateUrl: '/templates/posts.html',
        controller: 'postsController'
      })
      .when('/posts/:id', {
        templateUrl: '/templates/post.html',
        controller: 'postController'
      })
      .when('/2008/05/14/my-basic-ado-net-helper-functions/', {redirectTo: '/posts/my-basic-ado.net-helper-functions'})
      .when('/2008/05/01/what-the-heck-ill-start-a-blog/', {redirectTo: '/posts/what-the-heck,-i\'ll-start-a-blog'})
      .when('/2008/05/07/more-than-one-way-to-skin-a-cat-and-a-webpage/', {redirectTo: '/posts/more-than-one-way-to-skin-a-cat...-and-a-webpage'})
      .when('/2008/05/21/firebug-why-develop-without-it/', {redirectTo: '/posts/firebug!-why-develop-without-it!'})
      .when('/2008/05/28/microsoft-vs-linux-asp-net-vs-php/', {redirectTo: '/posts/microsoft-vs.-linux,-asp.net-vs.-php'})
      .when('/2008/06/07/a-recipe-for-ajax-webservices/', {redirectTo: '/posts/a-recipe-for-ajax-webservices'})
      .when('/2008/06/09/plagiarizing-myself-about-entry-level-experience/', {redirectTo: '/posts/plagiarizing-myself-about-entry-level-experience'})
      .when('/2008/06/10/feed-the-soul-a-few-technology-rss-feeds/', {redirectTo: '/posts/feed-the-soul---a-few-technology-rss-feeds'})
      .when('/2008/06/13/non-web-referenced-webservices-in-vb-net/', {redirectTo: '/posts/non-web-referenced-webservices-in-vb.net'})
      .when('/2008/06/16/urlrewriting-with-urlrewritingnet-urlrewriting-supertroopers-meow/', {redirectTo: '/posts/urlrewriting-with-urlrewritingnet-.-urlrewriting-(supertroopers---meow)'})
      .when('/2008/06/16/do-you-need-to-be-pci-and-pabp-certified/', {redirectTo: '/posts/do-you-need-to-be-pci-and-pabp-certified?'})
      .when('/2008/08/02/oh-bitter-frustrations/', {redirectTo: '/posts/oh,-bitter-frustrations...'})
      .when('/2008/08/03/an-example-of-writing-your-own-blog-engine-mini-version/', {redirectTo: '/posts/an-example-of-writing-your-own-blog-engine-(mini-version)'})
      .when('/2008/08/11/an-example-of-writing-your-own-blog-engine-mini-version-part-two/', {redirectTo: '/posts/an-example-of-writing-your-own-blog-engine-(mini-version)-part-two'})
      .when('/2008/08/17/an-example-of-writing-your-own-blog-engine-mini-version-part-three/', {redirectTo: '/posts/an-example-of-writing-your-own-blog-engine-(mini-version)-part-three'})
      .when('/2008/08/21/things-to-do-on-a-rainy-day-create-visual-studio-code-snippets/', {redirectTo: '/posts/things-to-do-on-a-rainy-day---create-visual-studio-code-snippets'})
      .when('/2008/08/31/calling-all-beta-testers-mycatchlog-needs-help/', {redirectTo: '/posts/calling-all-beta-testers!-mycatchlog-needs-help!'})
      .when('/2008/10/21/triple-des-encryption-class/', {redirectTo: '/posts/triple-des-encryption-class'})
      .when('/2008/10/21/linq-to-sql-basic-operations/', {redirectTo: '/posts/linq-to-sql-basic-operations'})
      .when('/2008/10/21/someday-i-need-to-write-a-js-library/', {redirectTo: '/posts/someday-i-need-to-write-a-js-library'})
      .when('/2008/10/22/creating-greater-application-error-transparency/', {redirectTo: '/posts/creating-greater-application-error-transparency'})
      .when('/2008/10/27/very-good-benefit-for-very-little-work-iis-compression-for-iis6/', {redirectTo: '/posts/very-good-benefit,-for-very-little-work---iis-compression-for-iis6'})
      .when('/2008/12/18/virtual-earth-and-the-windows-live-ctp/', {redirectTo: '/posts/virtual-earth-and-the-windows-live-ctp'})
      .when('/2008/12/23/using-microsoft-virtual-pc-pros-and-cons/', {redirectTo: '/posts/using-microsoft-virtual-pc---pros-and-cons'})
      .when('/2009/01/13/web-session-management-and-centralization-class/', {redirectTo: '/posts/web-session-management-and-centralization-class'})
      .when('/2009/01/16/homegrown-css-standards/', {redirectTo: '/posts/homegrown-css-standards'})
      .when('/2009/01/16/no-analytics-no-problem-go-old-school-with-iis-log-parsing/', {redirectTo: '/posts/no-analytics,-no-problem---go-old-school-with-iis-log-parsing'})
      .when('/2009/01/18/running-multiple-versions-of-ie/', {redirectTo: '/posts/running-multiple-versions-of-ie'})
      .when('/2009/01/20/its-the-little-things-that-make-the-difference/', {redirectTo: '/posts/it\'s-the-little-things-that-make-the-difference'})
      .when('/2009/01/23/creating-a-thick-entity-class-template/', {redirectTo: '/posts/creating-a-thick-entity-class-template'})
      .when('/2009/01/30/manage-connection-strings-in-multiple-environments/', {redirectTo: '/posts/manage-connection-strings-in-multiple-environments'})
      .when('/2009/02/05/lets-talk-unit-tests/', {redirectTo: '/posts/let\'s-talk-unit-tests'})
      .when('/2009/02/17/not-photoshop-vs-fireworks-photoshop-and-fireworks/', {redirectTo: '/posts/not-photoshop-vs.-fireworks,-photoshop-and-fireworks'})
      .when('/2009/02/19/book-review-head-first-object-oriented-analysis-and-design/', {redirectTo: '/posts/book-review---head-first-object-oriented-analysis-and-design'})
      .when('/2009/03/04/converting-an-asp-net-2-0-project-to-asp-net-2-0-ajax-project/', {redirectTo: '/posts/converting-an-asp.net-2.0-project-to-asp.net-2.0-ajax-project'})
      .when('/2009/03/11/common-reusable-business-entities-part-1/', {redirectTo: '/posts/common-reusable-business-entities-part-1'})
      .when('/2009/03/16/common-reusable-business-entities-part-2/', {redirectTo: '/posts/common-reusable-business-entities-part-2'})
      .when('/2009/03/19/common-reusable-business-entities-part-3/', {redirectTo: '/posts/common-reusable-business-entities-part-3'})
      .when('/2009/03/19/battle-of-the-third-party-controls/', {redirectTo: '/posts/battle-of-the-third-party-controls'})
      .when('/2009/04/07/learning-design-patterns/', {redirectTo: '/posts/learning-design-patterns'})
      .when('/2009/06/19/i-wrote-it-why-do-i-need-to-document-it/', {redirectTo: '/posts/i-wrote-it,-why-do-i-need-to-document-it?'})
      .when('/2009/06/22/a-simple-tableless-form/', {redirectTo: '/posts/a-simple-tableless-form'})
      .when('/2009/07/03/css-zen-garden/', {redirectTo: '/posts/css-zen-garden'})
      .when('/2009/07/14/staying-in-touch-how-to-build-a-contact-form/', {redirectTo: '/posts/staying-in-touch---how-to-build-a-contact-form'})
      .when('/2009/07/15/code-disassembly-and-reflection/', {redirectTo: '/posts/code-disassembly-and-reflection'})
      .when('/2009/07/27/opencourseware-from-mit-harvard-yale/', {redirectTo: '/posts/opencourseware-from-mit-harvard-yale'})
      .when('/2009/09/04/southwest-florida-code-camp-2009/', {redirectTo: '/posts/southwest-florida-code-camp-2009'})
      .when('/2009/09/25/developing-asp-net-custom-controls/', {redirectTo: '/posts/developing-asp.net-custom-controls'})
      .when('/2009/10/28/subversion-tips/', {redirectTo: '/posts/subversion-tips'})
      .when('/2009/12/14/a-tale-of-two-architectures/', {redirectTo: '/posts/a-tale-of-two-architectures'})
      .when('/2010/01/18/implementing-data-access-interfaces-and-stubbing/', {redirectTo: '/posts/implementing-data-access-interfaces-and-stubbing'})
      .when('/2010/01/26/setting-up-development-environments-based-on-life-cycle/', {redirectTo: '/posts/setting-up-development-environments-based-on-life-cycle'})
      .when('/2010/03/01/a-generic-data-mapper-for-simple-data/', {redirectTo: '/posts/a-generic-data-mapper-for-simple-data'})
      .when('/2010/03/07/cache-management-helper-class/', {redirectTo: '/posts/cache-management-helper-class'})
      .when('/2010/09/24/qxtend-query-service-net-and-dexter/', {redirectTo: '/posts/qxtend-query-service,-.net,-and-dexter'})
      .when('/2010/10/05/vs2010-schema-compare-crashing/', {redirectTo: '/posts/vs2010-schema-compare-crashing'})
      .when('/2010/10/06/vs2010-schema-compare-order-of-operations/', {redirectTo: '/posts/vs2010-schema-compare-order-of-operations'})
      .when('/2010/11/03/testing-web-services-with-soapui/', {redirectTo: '/posts/testing-web-services-with-soapui'})
      .when('/2010/11/10/wp7-u-s-launch/', {redirectTo: '/posts/wp7-u.s.-launch'})
      .when('/2010/12/17/my-windows-phone-7-christmas-story/', {redirectTo: '/posts/my-windows-phone-7-christmas-story'})
      .when('/2011/01/23/not-all-roses-with-azure/', {redirectTo: '/posts/not-all-roses-with-azure'})
      .when('/2011/01/25/photomemory-wp7-app/', {redirectTo: '/posts/photomemory-wp7-app'})
      .when('/2011/02/21/tips-for-working-with-enums/', {redirectTo: '/posts/tips-for-working-with-enums'})
      .when('/2011/04/20/running-ssms-under-another-windows-authenticated-user/', {redirectTo: '/posts/running-ssms-under-another-windows-authenticated-user'})
      .when('/2011/04/26/running-zune-and-wp7-on-virtualbox/', {redirectTo: '/posts/running-zune-and-wp7-on-virtualbox'})
      .when('/2011/04/28/reviving-dependency-walker/', {redirectTo: '/posts/reviving-dependency-walker'})
      .when('/2011/05/01/a-30-year-old-mythical-man-month/', {redirectTo: '/posts/a-30+-year-old-mythical-man-month'})
      .when('/2011/07/13/the-stored-procedure-for-searching-challenge/', {redirectTo: '/posts/the-stored-procedure-for-searching-challenge'})
      .when('/2011/08/04/jquery-makes-100-height-so-much-easier/', {redirectTo: '/posts/jquery-makes-100%-height-so-much-easier'})
      .when('/2011/08/12/tfs-management-with-team-foundation-sidekicks-2010/', {redirectTo: '/posts/tfs-management-with-team-foundation-sidekicks-2010'})
      .when('/2011/09/05/moving-to-the-cloud-as-a-consumer/', {redirectTo: '/posts/moving-to-the-cloud,-as-a-consumer'})
      .when('/2011/10/25/my-recent-speaking-presentations/', {redirectTo: '/posts/my-recent-speaking-presentations'})
      .when('/2012/01/29/catching-up-to-mvc/', {redirectTo: '/posts/catching-up-to-mvc'})
      .when('/2012/03/11/fun-and-struggles-with-mvc-no-parameterless-constructor-defined/', {redirectTo: '/posts/fun-and-struggles-with-mvc---no-parameterless-constructor-defined'})
      .when('/2012/05/20/learning-knockout-js-crazy-mom-baby-tracker-demo/', {redirectTo: '/posts/learning-knockout-js-–-crazy-mom-baby-tracker-demo'})
      .when('/2013/02/09/paralysis-analysis-and-the-paradox-of-choice/', {redirectTo: '/posts/paralysis-analysis-and-the-paradox-of-choice'})
      .otherwise({
        templateUrl: '/templates/not-found.html',
        controller: 'notFoundController'
      });
  })
  .constant('appSettings', {
    ver: '3.0.0',
    apiUrl: 'http://localhost:3000/api',
    defaultPageSize: 25
  });