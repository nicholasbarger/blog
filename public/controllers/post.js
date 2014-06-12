nb.controller('postController', ['$routeParams', '$sce', '$scope', 'blogFactory',
  function($routeParams, $sce, $scope, blogFactory) {
    $scope.post = {
        title: 'test title',
        description: 'test description',
        pubdate: '01/01/2014',
        content: '<p>Welcome to the test</p>'
    };

  (function init() {
    var link = $routeParams.id;
    blogFactory.getSingle(link).then(function(payload) {
      $scope.post = payload;
      $scope.post.contentHtml = $sce.trustAsHtml($scope.post.content);
    })
  })();
}]);