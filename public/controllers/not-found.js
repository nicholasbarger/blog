nb.controller('notFoundController', function($location, $scope) {
  $scope.currentPath = $location.path();
  $scope.currentAbsPath = $location.absUrl();
});