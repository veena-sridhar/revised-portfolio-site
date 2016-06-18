angular.module('portfolio.contact', [])

.controller('ContactController', function ($scope, GoogleMaps) {
  $scope.initMap = function () {

    GoogleMaps.getData()
      .then(function () {
        var myLocation = {
          lat: 37.773,
          lng: 122.419
        };

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLocation,
          scrollwheel: false,
          zoom: 7
        });

        var marker = new google.maps.Marker({
          map: map,
          position: myLocation,
          title: 'My home base is in the San Francisco Bay Area'
        });

      });

  };
});