var app = angular.module('movieMod');

app.controller('movieCtrl', function($http, $scope) {

  $scope.findMovie = function(genre, rating, startYear, endYear, runtime) {

    $http.get('https://api.themoviedb.org/3/discover/movie?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_date.gte=' + startYear + '&primary_release_date.lte=' + endYear + '&vote_average.gte=' + rating + '&with_genres=' + genre + '&with_runtime.lte=' + runtime + '&page=1')
      .then(function successCallback(response) {
        $scope.movies = response.data.results;

        // movies.forEach(function(movie){
        //
        //     $http.get('https://api.themoviedb.org/3/movie/' + movie.id + '/videos?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US')
        //        .then(function (response) {
        //        //movie.trailerkey = response[0].trailerkey;
        //          console.log(response);
        //        });
        //        console.log($scope.movies);
        //     });
        });


  // movieId = movie.id;
  //
  // $scope.watchTrailer = function(movieId) {
  //   $http.get('https://api.themoviedb.org/3/movie/' + movieId + '/videos?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US')
  //   .then(function successCallback(response) {
  //     var trailerData = response;
  //     console.log(trailerData);
  //     //https://www.youtube.com/watch?v=
  //     // $scope.movies = movieData.data.results;
  //     // console.log($scope.movies);
  //   });
  // };



  };

});
