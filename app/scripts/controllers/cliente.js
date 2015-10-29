'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ClienteCtrl
 * @description
 * # ClienteCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ClienteCtrl', function($scope, $rootScope, cliente, toaster,$q) {
      console.log("carga controller");

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

    cliente.obtenerClientes().then(function(res){
      console.log("s");
      console.log(res);
      $scope.gridOptions.data = res;
    });
    /*$scope.$on('$destroy', function(){
    canceler.resolve();  // Aborts the $http request if it isn't finished.
  });*/

  /*  data: [  {
              "nombre": cliente.obtenerClientes().then(function(res){}),
              "apellido": cliente.obtenerClientes().then(function(res){res.apellido}),
              "email":cliente.obtenerClientes().then(function(res){res.email}),
              "telefono": cliente.obtenerClientes().then(function(res){res.telefono}),
              "direccion":cliente.obtenerClientes().then(function(res){res.direccion}),
              "Editar": cliente.obtenerClientes().then(function(res){res.editar}),
              "Eliminar": cliente.obtenerClientes().then(function(res){res.nombre})

            }

          ]*/
});
