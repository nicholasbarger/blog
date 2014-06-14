nb.controller('latestController', ['$sce', '$scope', 'blogFactory',
  function($sce, $scope, blogFactory) {
    $scope.post = null;

    (function init() {
      blogFactory.getLatest().then(function(payload) {
        $scope.post = payload;
        $scope.post.contentHtml = $sce.trustAsHtml($scope.post.content);
      })
    })();
  }]);