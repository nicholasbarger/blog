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
              '</div>',
    link: function(scope, elem, attrs) {
//      if(scope.showBackground === 'true' && scope.post.imageUrl != null && scope.post.imageUrl != '') {
//        elem.css('position: relative;');
//        var imageBackgroundHtml = '<span class="post-background-image" ' +
//          'style="background-image: url(' + scope.post.imageUrl + '); display: block; position: absolute;"' +
//          'top: 0; left: 0; width: 100%; height: 100%; opacity: 0.2; z-index: -1;';
//        elem.after(imageBackgroundHtml);
//          //elem.css('background-image', 'url(' + scope.post.imageUrl + ')');
//        //elem.find('.title').css('color', 'black');
//      }
    }
  }
});
