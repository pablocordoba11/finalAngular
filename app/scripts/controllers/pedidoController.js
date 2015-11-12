angular.module('dashboardApp')
.controller('pedidoCtrl', ['$scope','$modal',function($scope,$modal)
{
	/**
	* abre la modal
	*/
	$scope.openModal = function (size)
	{
	    var modalInstance = $modal.open({
		    templateUrl: '/views/modal.html',
		    controller: 'modalCtrl',
		    size: size,
		    resolve: {
		    	Items: function() //scope del modal
		        {
		          	return "Hola que asé";
		        }
		    }
	    });
	}
}]);
