nb.controller('contactController', ['$rootScope', '$scope', function($rootScope, $scope) {
  $rootScope.title = 'Contact me for projects, careers, or anything technology';
  $rootScope.description = 'Contact Nicholas Barger in regards to projects, careers, or anything technology related.';

  $scope.isEmailDisplayed = false;

    $scope.toggleEmailDisplay = function() {
        $scope.isEmailDisplayed = !$scope.isEmailDisplayed;
    };

    (function init() {

    })();
  }]);
