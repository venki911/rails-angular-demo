Application.config(['$routeProvider', function($routeProvider){
  $routeProvider.when('/', {
    templateUrl: '../assets/index.html',
    controller: 'IndexController'
  });
  $routeProvider.when('/about', {
    templateUrl: '../assets/about.html',
    controller: 'AboutController'
  });
  $routeProvider.when('/posts', {
    templateUrl: '../assets/posts.html',
    controller: 'PostsController'
  });
}]);