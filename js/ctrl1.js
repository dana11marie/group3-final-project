// var app = angular.module('movieMod', []);
//
// app.controller('movieCtrl', function($http, $scope) {
//
//   $scope.findMovie = function(movieTitle) {
//
//     $http.get('https://api.themoviedb.org/3/discover/movie?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=true&vote_average.gte=' + rating + '&with_genres=' + genre + '&with_runtime.lte=' + runtime)
//     .then(function successCallback(response) {
//
//       var movieData = response;
//       console.log(movieData.data);
//
//       $scope.runTime = movieData.data.runtime;
//
//     });
//
//   };
//
// });
