nb.controller('latestController', ['$rootScope', '$sce', '$scope', 'blogFactory',
  function($rootScope, $sce, $scope, blogFactory) {
    $scope.post = null;

    (function init() {
      blogFactory.getLatest().then(function(payload) {
        $scope.post = payload;
        $scope.post.contentHtml = $sce.trustAsHtml($scope.post.content);

        $rootScope.title = payload.title;
        $rootScope.description = payload.content.replace(/<\/?[^>]+>/gi, '').substr(0, 100);
      })
    })();
  }]);