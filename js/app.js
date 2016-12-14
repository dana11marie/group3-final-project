// MODULE
var app = angular.module('movieMod', ['ngRoute', 'youtube-embed']);

// ROUTE SETUP
app.config(function($routeProvider){
 $routeProvider
 .when('/', {
   controller: 'movieCtrl',
   templateUrl: 'partials/view1.html'
 });
});



//START POPUP CONTACT FORM
$(function() {
  // contact form animations
    $('#contactUs').click(function() {
    $('#contactUsForm').fadeToggle();
  });

  $(document).mouseup(function (e) {
    var container = $("#contactUsForm");
    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.fadeOut();
    }
  });
});
//END POPUP CONTACT FORM
