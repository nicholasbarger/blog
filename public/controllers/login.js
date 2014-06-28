nb.controller('loginController', function($location, $scope, authentication) {
  $scope.username = null;
  $scope.password = null;
  $scope.message = null;

  $scope.login = function() {
    authentication.authenticate($scope.username, $scope.password).then(function(res) {
      $location.path('/admin');
    },
    function(err) {
        $scope.message = 'The login failed, give it another try.';
    });
  };
});