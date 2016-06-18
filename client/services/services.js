angular.module('portfolio.services', [])

.factory('GoogleMaps', function ($http) {
  var getData = function () {
    return $http({
      method: 'GET',
      url: 'https://maps.googleapis.com/maps/api/js?key=' + API_KEY + '&callback=initMap'
    })
    .then(function (resp) {
      console.log('the response is', resp);
      return resp;
    })
   .catch(function (error) {
      console.error(error);
    });
  };

  return {
    getData: getData
  };

});