nb.controller('rollController', ['$scope', function($scope) {
  $scope.posts = [{
      title: 'Paralysis Analysis and the Paradox of Choice',
      description: 'test description',
      pubDate: '01/01/2014',
      link: 'paralysis-analysis-and-the-paradox-of-choice',
      content: '<p>Welcome to the test</p>'
    },
    {
      title: 'Learning Knockout JS - Crazy Mom Baby Tracker Demo',
      description: 'test description 2',
      pubDate: '01/02/2014',
      link: 'learning-knockout-js---crazy-mom-baby-tracker-demo',
      content: '<p>Welcome to the test 2</p>'
    },
    {
      title: 'Fun and Struggles with MVC - No Parameterless Constructor Defined',
      description: 'test description 3',
      pubDate: '01/02/2014',
      link: 'fun-and-struggles-with-mvc-no-parameterless-constructor-defined',
      content: '<p>Welcome to the test 3</p>'
    },
    {
      title: 'Catching up to MVC',
      description: 'test description 4',
      pubDate: '01/02/2014',
      link: 'catching-up-to-mvc',
      content: '<p>Welcome to the test 4</p>'
    }
  ];
}]);