angular.module('portfolio', [
  'portfolio.main',
  'portfolio.work',
  'ngRoute'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/main', {
      templateUrl: 'views/main.html',
      controller: 'MainController'
    })
    .when('/work', {
      templateUrl: 'views/work.html',
      controller: 'WorkController'
    })
    .otherwise({
      redirectTo: '/main'
    });
});