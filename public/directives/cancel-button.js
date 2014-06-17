nb.directive('cancelButton', function() {
  return {
    restrict: 'E',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        window.history.back();
      })
    },
    template: '<button type="button">Cancel</button>'
  }
});
