nb.directive('blogPosts', function($parse) {
  var nextColumn = 0;

  return {
    restrict: 'E',
    scope: {
      id: '@',
      columns: '@',
      posts: '='
    },
    replace: 'true',
    template: '<div id="{{id}}" class="post-list"></div>',
    controller: function($scope, $location) {
        $scope.open = function(name) {
          $location.path('/posts/' + name);
        }
    },
    compile: function(elem, attrs) {
      var columnHtml = '';

      attrs.columns = attrs.columns || 1;
      var columnClass = "columns-" + attrs.columns;

      for(var i = 0; i < attrs.columns; i++) {
        columnHtml += '<div id="column' + i + '" class="' + columnClass + '"></div>';
      }
      elem.html(columnHtml);

      return function(scope, elem, attrs) {
        scope.$watch(attrs.posts, function(val) {
          // clear to begin
          nextColumn = 0;
          for(var i = 0; i < scope.columns; i++) {
            $('#column' + i).empty('');
          }

          if(val != null) {
            for (var i = 0; i < val.length; i++) {
              var post = val[i];
              var postHtml = '<a class="post" href="/posts/' + post.name + '">' +
                '<h2 class="title">' + post.title + '</h2>'
              '<small class="pubDate">' + post.pubDate + '</small>' +
              '</a>';
              $('#column' + nextColumn).append(postHtml);

              var shortestHeight = $('#column0').height();
              for(var j = 0; j < scope.columns; j++) {
                var columnHeight = $('#column' + j).height();
                if(columnHeight <= shortestHeight) {
                  shortestHeight = columnHeight;
                  nextColumn = j;
                }
              }

            }
          }
        });
      }
    }
  }
});