'use strict';

/**
 * @ngdoc function
 * @name dashboardApp.controller:ChartCtrl
 * @description
 * # ChartCtrl
 * Controller of the dashboardApp
 */
angular.module('dashboardApp')
  .controller('ChartCtrl', function ($scope,chartService) {
    // obtener Negocios para llenar el combo

    // obtener json Temp que contenga el nombre de las temporadas y la cantidad (por año por parametro a definir)
    $scope.temp= [];
    $scope.year = 2015;
    $scope.business = "todos";

    $scope.loadDefaultseasons = function(){
      $scope.obtenerTemporadas();
    }

    $scope.obtenerTemporadas = function(){
      chartService.obtenerPedidosTemporada().then(function(temporadas){

        $scope.temp = temporadas;
        $scope.torta = {};
        $scope.torta.labels=[];
        $scope.torta.data=[];
        var sumPri=0;
        var sumVer=0;
        var sumOto=0;
        var sumInv=0;

            angular.forEach($scope.temp, function(v,k){
              if(v.año == $scope.year && v.negocio == $scope.business){
                console.log("A " + v + " B " + k);
                $scope.torta.labels.push(v.temporada);
                $scope.torta.data.push(v.cantidad);
              }else {
                if ($scope.business == "todos" && v.año == $scope.year) {
                  switch (v.temporada) {
                    case "Primavera":
                        sumPri = sumPri + v.cantidad;
                      break;
                    case "Verano":
                      sumVer = sumVer + v.cantidad;
                      break;
                    case "Otoño":
                        sumOto = sumOto + v.cantidad;
                      break;
                    case "Invierno":
                        sumInv = sumInv + v.cantidad;
                      break;
                  }

                }
              }
            resetData();
            });
            $scope.torta.labels.push("Primavera");
            $scope.torta.data.push(sumPri);
            $scope.torta.labels.push("Verano");
            $scope.torta.data.push(sumVer);
            $scope.torta.labels.push("Otoño");
            $scope.torta.data.push(sumOto);
            $scope.torta.labels.push("Invierno");
            $scope.torta.data.push(sumInv);
  });
}

function resetData() {
    angular.forEach($scope.temp, function(value,key){
      $scope.torta.labels.splice(value.temporada)
      $scope.torta.data.splice(value.cantidad)
    })
}

    $scope.loadDefaultseasons();

  //  http://www.json-generator.com/api/json/get/bPRdsJkZCG?indent=2 json si negocios

      $('#yearSelector').on('input',function(){
        $scope.obtenerTemporadas();
      })
      $('#negocioSelector').on('change',function(){
        $scope.obtenerTemporadas();
      })


    // Carga de datos para grafico de barras
    // obtener json Categorias que contenga el nombre de las Categorias y la cantidad (por año por parametro a definir)
      $scope.bar= {};
      $scope.bar.labels = ['Pastas', 'Parrilla', 'Gourmet', 'Ensaladas'];
      $scope.bar.data = [
        [29, 30, 40, 4]
      ];
      // Grafico de linas orientado a las ventas por negocio
      $scope.labels = ["La mira", "ILbaccino", "Bar Avenida", "Rocco", "La caleta"]; // recorrer los restaurantes
      $scope.data = [
       [65, 59, 80, 81,60]
     ];
      $scope.onClick = function (points, evt) {
      console.log(points, evt);
      };

});
