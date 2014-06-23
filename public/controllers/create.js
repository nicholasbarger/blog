nb.controller('createController', function($location, $scope, blogFactory) {
  $scope.post = {
    title: '',
    pubDate: new Date(),
    content: ''
  };

  $scope.save = function() {
    blogFactory.save($scope.post).then(function(res) {
      $location.path('/admin');
    });
  };
});