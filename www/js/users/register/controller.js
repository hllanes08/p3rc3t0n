(function (){
    'use strict';
    angular
	.module('app')
	.controller('RegisterController',RegisterController);
    
    function RegisterController(
	    $scope,
	    $state,
	    $ionicLoading,
	    authService,
	    $ionicPopup
	    ) {
        var vm = this;
	vm.register = register;
	vm.errors = new Array();
 	$scope.$on('$ionicViw.enter',onViewEntered);
	function onViewEntered(){
	
	}
	function register(user){
	    $ionicLoading.show();
    	    return authService
		    .register(user)
		    .catch(notifyFailure);
	    $ionicLoading.hide();

	}
	function notifyFailure(error){
	    vm.erros = [];
	    $ionicLoading.hide();
	    if(error.status === 400){
		for(var property in errors)
		    vm.errors[property] = 'has_required';
		}
	       if(error.data.username){	
      	        $ionicPopup.alert({
	         	title: 'Advertencia',
		        template: error.data.username,
		        okTexr: 'Aceptar',
		        okType: 'button-positive'
	         });
	       }
	       else if(error.data.email){
	        $ionicPopup.alert({
	         	title: 'Advertencia',
		        template: `Email ${error.data.email}`,
		        okTexr: 'Aceptar',
		        okType: 'button-positive'
	         });

	       }
	       
	    }
	}
})();
