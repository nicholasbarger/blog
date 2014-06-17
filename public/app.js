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