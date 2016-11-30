var app = angular.module('movieMod');

app.controller('movieCtrl', function($http, $scope) {

  $scope.findMovie = function(genre, rating, startYear, endYear, runtime) {

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_date.gte=' + startYear + '&primary_release_date.lte=' + endYear + '&vote_average.gte=' + rating + '&with_genres=' + genre + '&with_runtime.lte=' + runtime)
    .then(function successCallback(response) {

      var movieData = response;

      $scope.movies = movieData.data.results;
      console.log($scope.movies);

    });

  };

});
