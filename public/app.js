var nb = angular
  .module('nb', ['ngRoute', 'wu.masonry'])
  .config(function($locationProvider, $routeProvider) {
    //$locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'templates/roll.html',
        controller: 'rollController'
      })
      .when('/post/:id', {
        templateUrl: 'templates/post.html',
        controller: 'postController'
      });
  })
  .constant('appSettings', {
    ver: '3.0.0',
    apiUrl: 'http://localhost:3000/api',
    defaultPageSize: 25
  });