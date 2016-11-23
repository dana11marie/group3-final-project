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

  $scope.findMovie = function(genre, rating, startYear, endYear, runtime) {

// img needs to be added to the end of https://image.tmdb.org/t/p/w500

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_date.gte=' + startYear + '&primary_release_date.lte=' + endYear + '&vote_average.gte=' + rating + '&without_genres=' + genre + '&with_runtime.lte=' + runtime)
    .then(function successCallback(response) {

      var movieData = response;
      console.log(movieData.data.results);

      $scope.movies = movieData.data.results;

      // movies.forEach(function(movie){
      //   $scope.movieImg = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
      // });
    });

  };

});
