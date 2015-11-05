'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:MapsCtrl
 * @description
 * # MapsCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('MapsCtrl',['factoryMaps', '$scope', function (factoryMaps, $scope) {
    console.log("Controladora mapas");

  factoryMaps.createByCoords(-33.333333, -60.216667, function (marker) {
      marker.options.labelContent = 'Pickupmeal';
      $scope.PickupmealMarker = marker;
  });
  $scope.address = '';

    $scope.map = {
            center: {
                latitude: -33.333333,
                longitude: -60.216667
            },
            zoom: 12,
            markers: [],
            control: {},
            options: {
                scrollwheel: false
            }
        };

    /*  $scope.marker = {
        id:0,
        coords:{
          latitude: -33.333333,
        longitude: -60.216667
      },
      options: {
          animation: 1,
          labelAnchor: "28 -5",
          labelClass: 'markerlabel'
      }
    };*/

        $scope.map.markers.push($scope.PickupmealMarker);
        console.log($scope.marker);
        console.log($scope.map.markers);

        $scope.addCurrentLocation = function () {
                factoryMaps.createByCurrentLocation(function (marker) {
                    marker.options.labelContent = 'Usted está aquí';
                    $scope.map.markers.push(marker);
                    refresh(marker);
                    console.log(marker);
                });
            };


            $scope.addAddress = function() {
                var address = $scope.address;
                if (address !== '') {
                    factoryMaps.createByAddress(address, function(marker) {
                        $scope.map.markers.push(marker);
                        refresh(marker);
                        console.log(marker);
                    });
                }
            };
            function refresh(marker) {
            $scope.map.control.refresh({latitude: marker.latitude,
                longitude: marker.longitude});
        }

  }]);
