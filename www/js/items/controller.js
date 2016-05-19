(function(){
    'use strict';
    angular
	.module('app')
	.controller('ItemsController',ItemsController);
   
    function ItemsController(
        $scope,$state)
    {
        var vm = this;
    }
});
