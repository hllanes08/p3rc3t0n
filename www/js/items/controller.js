(function(){
    'use strict';
    angular
	   .module('app')
	   .controller('ItemsController',ItemsController);

    function ItemsController($scope,$state)
    {
        var vm = this;
        vm.onIonicViewLoaded = onIonicViewLoaded;
        $scope.$on('$ionicView.loaded', vm.onIonicViewLoaded);
    }
    function onIonicViewLoaded() {
    }
});
