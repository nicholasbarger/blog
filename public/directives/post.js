nb.directive('blogpost', function() {
    return {
        restrict: 'E',
        scope: {
            post: '='
        },
        replace: 'true',
        templateUrl: 'directives/post-template.html'
    }
  });
