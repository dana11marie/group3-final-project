var app = angular.module('movieMod', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    controller: 'movieCtrl',
    templateUrl: 'partials/view1.html'
  });
});

