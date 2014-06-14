nb.controller('postController', ['$routeParams', '$sce', '$scope', 'blogFactory',
  function($routeParams, $sce, $scope, blogFactory) {
    $scope.post = null;

  (function init() {
    var link = $routeParams.id;
    blogFactory.getSingle(link).then(function(payload) {
      $scope.post = payload;
      $scope.post.contentHtml = $sce.trustAsHtml($scope.post.content);
    })
  })();
}]);