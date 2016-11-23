// SAMPLE APP.JS

var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/view1', {
    controller: 'ctrlOne',
    templateUrl: 'partials/view1.html'
  })
  .when('/view2', {
    controller: 'ctrlTwo',
    templateUrl: 'partials/view2.html'
  })
  .otherwise({
    redirectTo: '/'
  });
});
