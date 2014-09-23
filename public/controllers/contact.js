nb.controller('contactController', ['$scope', function($scope) {
  $scope.isEmailDisplayed = false;

  $scope.toggleEmailDisplay = function() {
      $scope.isEmailDisplayed = !$scope.isEmailDisplayed;
  };
}]);
