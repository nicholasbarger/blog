var nb = angular.module('nb', [])
  .constant('appSettings', {
    ver: '3.0.0',
    apiUrl: 'http://localhost:3000/api',
    defaultPageSize: 25
  });