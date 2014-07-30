nb.controller('rootController', ['$location', '$rootScope', '$scope', '$window', function($location, $rootScope, $scope, $window) {
  $rootScope.$on('$routeChangeSuccess', function(event) {
    $window.ga('send', 'pageview', { page: $location.path() });
  });
}]);