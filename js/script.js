var app = angular.module('movieMod', []);

app.controller('movieCtrl', function($http, $scope) {

  $scope.findMovie = function(movieTitle) {

    $http.get('http://netflixroulette.net/api/api.php?title=' + movieTitle)
    .then(function successCallback(response) {

      var movieData = response;
      console.log(movieData.data);

      $scope.runTime = movieData.data.runtime;

    });

  };

});
