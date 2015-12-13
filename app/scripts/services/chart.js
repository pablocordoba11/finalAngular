

/**
 * @ngdoc service
 * @name dashboardApp.chart
 * @description
 * # chart
 * Factory in the dashboardApp.
 */
angular.module('dashboardApp')
  .factory('chartService', function ($http) {
    // Service logic
        console.log("factoriaa");
    return{
      obtenerPedidosTemporada : function(){
        return $http({
          method:"GET",
          url:"http://www.json-generator.com/api/json/get/bIuaqAcrNe?indent=2"
        }).then(function(res){
          if(res.status == 200){
            //console.log(res.data);
            return res.data;
          }else{
            return res.error;
          }
        });
      }
    }



  });
