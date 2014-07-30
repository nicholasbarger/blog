nb.controller('postsController', ['$rootScope', '$scope', 'blogFactory', function($rootScope, $scope, blogFactory) {
  $rootScope.title = 'Blog posts and articles on software development and technology';
  $rootScope.description = 'A variety of blog posts on topics around software development and careers in technology.';

  $scope.posts = null;

  (function init() {
    blogFactory.getCollection(null).then(function(payload) {
      $scope.posts = payload;
    });
  })();
}]);