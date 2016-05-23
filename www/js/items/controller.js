(function() {
    'use strict';
    angular
	.module('app')
	.controller('ItemsController',ItemsController);
   
    function ItemsController(
	    $scope,
	    $state,
	    $ionicLoading)
    {
        console.log('loading Controller');
        var vm = this;
    
    }
 });
