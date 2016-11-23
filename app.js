// SAMPLE APP.JS
//
// var app = angular.module('myModule', ['ngRoute']);
//
// app.config(function($routeProvider){
//   $routeProvider
//   .when('/view1', {
//     controller: 'ctrlOne',
//     templateUrl: 'partials/view1.html'
//   })
//   .when('/view2', {
//     controller: 'ctrlTwo',
//     templateUrl: 'partials/view2.html'
//   })
//   .otherwise({
//     redirectTo: '/'
//   });
// });

// CONTROL ONE:

var app = angular.module('movieMod', []);

app.controller('movieCtrl', function($http, $scope) {

  $scope.findMovie = function(rating) {

// rating is populating as undefined.

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=vote_average.asc&include_adult=false&vote_average.gte=' + rating + '&with_runtime.lte=180')
    .then(function successCallback(response) {

      var movieData = response;
      console.log(movieData);

      $scope.runTime = movieData.data.runtime;

    });

  };

});
