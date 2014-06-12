nb.directive('back', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        window.history.back();
      })
    },
    template: '<a href=""><i class="fa fa-caret-left"></i>Go back</a>'
  }
});
