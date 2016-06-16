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
	vm.item_types = [];
        vm.onIonicViewLoaded = onIonicViewLoaded;
	vm.onCategorySelected=onCategorySelected; 
	$scope.$on('$ionicView.loaded',vm.onIonicViewLoaded)
        function logout(){
	    return authService.logout();
	}
	function onIonicViewLoaded(){
	   Restangular.all('itemtypes')
	       .getList()
	       .then(assignItems);
	}
	function onCategorySelected(category){
	}
	function assignItems(response){
	   vm.item_types = response.plain();
	}
    }
 })();
