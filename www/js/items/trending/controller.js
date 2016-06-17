(function() {
    'use strict';
    angular
	.module('app')
	.controller('TrendingController',TrendingController);

    function TrendingController(
	    $scope,
	    $state,
	    Restangular
	    )
    {
	console.log("I am controller");
     	var vm = this;
	vm.items = [];
	vm.onIonicViewLoaded = onIonicViewLoaded();
	$scope.$on('$ionicView.loaded',vm.onIonicViewLoaded);
	function  onIonicViewLoaded(){
	    Restangular.all('items')
	        .getList()
       	       .then(assignTrendings)	
	}   
	function assignTrendings(response){
           vm.items = response.plain();
    	}
    }
})();
