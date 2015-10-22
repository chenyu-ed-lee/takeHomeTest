var myApp = angular.module("myApp",['ngRoute']);
myApp.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: './partials/form.html'
    })
    .when('/search', {
      templateUrl: './partials/search.html'
    })
    .otherwise({
      redirectTo: '/'
    })
});