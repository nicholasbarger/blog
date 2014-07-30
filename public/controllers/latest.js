nb.controller('latestController', ['$rootScope', '$sce', '$scope', 'blogFactory',
  function($rootScope, $sce, $scope, blogFactory) {
    $rootScope.title = 'Software development and technology';
    $rootScope.description = 'I would like to begin collecting the information that I’ve learned (and continue to learn) and provide that information here in a very straightforward way to any of those who are interested. Ideally, I hope that this small online presence will encourage others to participate in code discussion, sampling, and learning together.';

    $scope.post = null;

    (function init() {
      blogFactory.getLatest().then(function(payload) {
        $scope.post = payload;
        $scope.post.contentHtml = $sce.trustAsHtml($scope.post.content);
      })
    })();
  }]);