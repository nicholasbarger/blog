nb.directive('blogPost', function() {
  return {
    restrict: 'E',
    scope: {
        post: '=',
        showBackground: '@'
    },
    replace: 'true',
    template: '<div class="post">' +
                '<h2 class="title">' +
                  '<span ng-if="post.content != null">{{post.title}}</span>' +
                '</h2>' +
                '<small class="pubDate">{{post.pubDate | date: \'mediumDate\'}}</small>' +
                '<div class="post-content" ng-bind-html="post.contentHtml"></div>' +
              '</div>'
  }
});
