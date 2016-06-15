(function() {
    'use strict';
    angular
	.module('app')
	.controller('ItemsController',ItemsController);

    function ItemsController(
	    $scope,
	    $state,
	    $ionicLoading,
	    authService,
	    Restangular)
    {
        var vm = this;
	vm.logout = logout;
	vm.assignItems = assignItems;
	vm.items = [];
        vm.onIonicViewLoaded = onIonicViewLoaded; 
	$scope.$on('$ionicView.loaded',vm.onIonicViewLoaded)
        function logout(){
	    return authService.logout();
	}
	function onIonicViewLoaded(){
	   Restangular.all('items')
	       .getList()
	       .then(assignItems);
	}
	function assignItems(response){
	   vm.items = response.plain();
	}
    }
 })();
