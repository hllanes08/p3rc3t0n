(function() {
    'use strict';
    angular
	.module('app')
	.controller('ItemsController',ItemsController);

    function ItemsController(
	    $scope,
	    $state,
	    $ionicLoading,
	    authService)
    {
        console.log('loading Controller');
        var vm = this;
	vm.logout = logout;
       
        function logout(){
	    return authService.logout();
	}

    }
 })();
