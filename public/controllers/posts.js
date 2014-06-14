nb.controller('postsController', ['$scope', 'blogFactory', function($scope, blogFactory) {
  $scope.posts = null;

  (function init() {
    blogFactory.getCollection(null).then(function(payload) {
      $scope.posts = payload;
    });
  })();
}]);