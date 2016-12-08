// MODULE
var app = angular.module('movieMod');

// CONTROLLER
app.controller('movieCtrl', function($http, $scope) {

  $scope.findMovie = function(type, genre, rating, startYear, endYear, runtime) {
    // MOVIES REQUEST BASED ON FILTERS
    $http.get('https://api.themoviedb.org/3/discover/'+ type +'?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&primary_release_date.gte=' + startYear + '&primary_release_date.lte=' + endYear + '&vote_average.gte=' + rating + '&with_genres=' + genre + '&with_runtime.lte=' + runtime + '&first_air_date.gte=' + startYear + '&first_air_date.lte='+ endYear )
        .then(function successCallback(responseOne) {
          //STORE RESPONSE AS VARIABLE
          var movies = responseOne.data.results;
          //MAKE RESPONSE AVAILABLE ON THE SCOPE
           $scope.movies = movies;
           // SET NUMBER OF RESULTS TO DISPLAY
           $scope.quantity = 10;
           console.log($scope.movies);
      // END MOVIES REQUEST BASED ON FILTERS

        // REQUEST FOR YOUTUBE KEY
       movies.forEach(function(movie){
           $http.get('https://api.themoviedb.org/3/movie/' + movie.id + '/videos?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US')
                .then(function successCallback(responseTwo) {
                movie.trailerkey = responseTwo.data.results[0].key;
                });

           });
        // END REQUEST FOR YOUTUBE KEY

                // REQUEST FOR ADDITIONAL DETAILS
               movies.forEach(function(movie){
                  $http.get('https://api.themoviedb.org/3/'+ type +'/'+ movie.id +'?api_key=246abf971b8f4d88b4c901eeacc07819&language=en-US&append_to_response=runtime')
                       .then(function successCallback(responseThree) {
                       movie.runtime = responseThree.data.runtime;
                       });
                  });
               // END REQUEST FOR ADDITIONAL DETAILS

      });

    };



});
