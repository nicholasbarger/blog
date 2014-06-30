nb.controller('rootController', function($rootScope, $location, $window) {
  $rootScope.$on('$routeChangeSuccess', function(event) {
    $window.ga('send', 'pageview', { page: $location.path() });
  });
});