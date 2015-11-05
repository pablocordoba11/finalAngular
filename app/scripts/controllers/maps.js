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
      $scope.PickupmealMaker = marker;
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
        console.log($scope.PickupmealMaker);
        $scope.map.markers.push($scope.PickupmealMaker);
        console.log($scope.map.markers);
        $scope.addCurrentLocation = function () {
                createByCurrentLocation(function (marker) {
                    marker.options.labelContent = 'Usted está aquí';
                    $scope.map.markers.push(marker);
                    refresh(marker);
                });
            };


            $scope.addAddress = function() {
                var address = $scope.address;
                if (address !== '') {
                    createByAddress(address, function(marker) {
                        $scope.map.markers.push(marker);
                        refresh(marker);
                    });
                }
            };


  }]);
