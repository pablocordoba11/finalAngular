'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ClienteCtrl
 * @description
 * # ClienteCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ClienteCtrl', function($scope, $rootScope, cliente, toaster,$q,uiGmapGoogleMapApi) {
      console.log("carga controller");

    /*  //carga maps
      $scope.map = { center: { latitude: -33.333333, longitude: -60.216667 }, zoom: 8, refresh:{} };

      function placeToMarker(searchBox, id) {
                        var place = searchBox.getPlaces();
                          if (!place || place == 'undefined' || place.length == 0) {
                            return;
                            }

          var marker = {
                        id: id,
                        place_id: place[0].place_id,
                        name: place[0].name,
                        address: place[0].formatted_address,
                        latitude: place[0].geometry.location.lat(),
                        longitude: place[0].geometry.location.lng(),
                        latlng: place[0].geometry.location.lat() + ',' + place[0].geometry.location.lng()
                      };
                      console.log(place[0].name);
                  // push your markers into the $scope.map.markers array
                    if (!$scope.map.markers) {
                        $scope.map.markers = [];
                      }
                    };
    $scope.map.control.refresh({latitude: marker.latitude, longitude: marker.longitude});


      var searchBoxEvents = {
                            places_changed: function (searchBox) {
                            placeToMarker(searchBox, id);
                      }
                    };

      $scope.marker = {
                        id: 0,
                        coords: {
                          latitude: -33.333333,
                          longitude: -60.216667
                                },
                                options: { draggable: false }
                        };

    $scope.searchBox = { template: 'searchBox.template.html', events: searchBoxEvents, parentdiv: 'searchBoxParent' };
*/

      $scope.clientes= [];

     $scope.cargarClietes = function(nuevoCli){
        //console.log(nuevoCli);
        var objCli = {
          nombre: nuevoCli.nombre.$modelValue,
          /*apellido: nuevoCli.apellido.$modelValue,
          email: nuevoCli.email.$modelValue,
          telefono:nuevoCli.telefono.$modelValue,
          direccion: nuevoCli.direccion.$modelValue*/
        };

      cliente.crearCliente(objCli).then(function(res){
        toaster.pop('success', "Perfecto!", "Cliente Agregado");
        console.log("creado");
      });

}

  $scope.gridOptions= {
    enableSorting: true,
    columnDefs: [
      {name:'Nombre', field:'nombre'},
      {name:'Apellido', field:'apellido'},
      {name:'E-mail', field:'email'},
      {name:'Telefono', field:'telefono'},
      {name:'Direccion', field:'direccion'},
      {name:'Editar', field:'Editar'},
      {name:'Eliminar', field:'Eliminar'}
    ],
  };

  /*  cliente.obtenerClientes().then(function(res){
      console.log("s");
      console.log(res);
      $scope.gridOptions.data = res;
    });*/
    /*$scope.$on('$destroy', function(){
    canceler.resolve();  // Aborts the $http request if it isn't finished.
  });*/

   data: [  {
              "nombre": cliente.obtenerClientes().then(function(res){}),
              "apellido": cliente.obtenerClientes().then(function(res){res.apellido}),
              "email":cliente.obtenerClientes().then(function(res){res.email}),
              "telefono": cliente.obtenerClientes().then(function(res){res.telefono}),
              "direccion":cliente.obtenerClientes().then(function(res){res.direccion}),
              "Editar": cliente.obtenerClientes().then(function(res){res.editar}),
              "Eliminar": cliente.obtenerClientes().then(function(res){res.nombre})

            }

          ]
});
