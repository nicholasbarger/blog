nb.controller('manageController', function($scope, blogFactory) {
  $scope.posts = null;

  (function init() {
    blogFactory.getCollection().then(function(data) {
      $scope.posts = data;
    });
  })();
})