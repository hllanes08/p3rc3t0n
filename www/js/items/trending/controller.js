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
     	var vm = this;
	vm.items = [];
	vm.refreshItems = refreshItems;
	vm.onIonicViewLoaded = onIonicViewLoaded();
	$scope.$on('$ionicView.loaded',vm.onIonicViewLoaded);
	function  onIonicViewLoaded(){
	    vm.isStartingItems = true;
	    Restangular.all('items')
	        .getList()
       	       .then(assignTrendings);
            vm.isStartingItems = false;	    
	}   
	function assignTrendings(response){
           vm.items = response.plain();
    	}
	function refreshItems(){
	    vm.isStartingItems = true;
	    Restangular.all('items')
	        .getList()
		.then(assignTrendings);
	    vm.isStartingItems = false;
	    $scope.$broadcast('scroll.refreshComplete');
	}
    }
})();
