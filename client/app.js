$(document).ready(function () {

  $(".button-collapse").sideNav();

  $('#textarea1').val('New Text');
  $('#textarea1').trigger('autoresize');

});


angular.module('portfolio', [
  'portfolio.main',
  'portfolio.contact',
  'portfolio.work',
  'portfolio.services',
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
    .when('/contact', {
      templateUrl: 'views/contact.html',
      controller: 'ContactController'
    })
    .otherwise({
      redirectTo: '/main'
    });
});