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
    compile: function(elem, attrs) {
      var columnHtml = '';

      attrs.columns = attrs.columns || 1;
      var widthPerColumn = 100 / attrs.columns;

      for(var i = 0; i < attrs.columns; i++) {
        columnHtml += '<div id="column' + i + '" style="width: ' + widthPerColumn + '%; float: left;"></div>';
      }
      elem.html(columnHtml);

      return function(scope, elem, attrs) {
        var postsAccessor = $parse(attrs.posts);
        scope.$watch(postsAccessor, function(val) {
          // clear to begin
          nextColumn = 0;
          var shortestHeight = $('#column0').height();
          for(var i = 0; i < scope.columns; i++) {
            $('column' + i).empty('');
          }

          if(val != null) {
            for (var i = 0; i < val.length; i++) {
              var post = val[i];
              var postHtml = '<div class="post">' +
                '<h2 class="title">' +
                '<a href="/posts/' + post.name + '">' + post.title + '</a>' +
                '</h2>'
              '<small class="pubDate">' + post.pubDate + '</small>' +
              '</div>';
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
        })
      }
    }
  }
});