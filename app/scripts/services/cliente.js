'use strict';

/**
 * @ngdoc service
 * @name dashboardApp.cliente
 * @description
 * # cliente
 * Factory in the dashboardApp.
 */
angular.module('dashboardApp')
  .factory('cliente', function ($http,$rootScope) {
    // Service logic
    console.log("entro factory");
    var req = function(method, path, data){
      return $http({
        method:method,
        url:$rootScope.config.service_url+'/clientes'+path,
        data:data
      });
    }

    // Public API here
    return {

      crearCliente: function(data){
          return req('POST','', data);
      },
      obtenerClientes: function(){
        return req('GET','');
      },
      modificarCliente:function(idCliente){
        return req('PUT','',idCliente);
      },
      eliminarCliente:function(idCliente){
        return req('DELETE','',idCliente)
      }
    };
  });
