nb.controller('editController', function($routeParams, $scope, blogFactory) {
  $scope.post = null;

  // save updates
  $scope.save = function() {
    blogFactory.save($scope.post).then(function(res) {
      alert('saved');
    });
  };

  (function init() {
    var id = $routeParams['id'];
    blogFactory.getSingle(id).then(function(data) {
      $scope.post = data;
    })
  })();
});