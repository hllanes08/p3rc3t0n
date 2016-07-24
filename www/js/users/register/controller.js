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
	    $ionicLoading.hide();
	    if(error.status === 400){
		for(var property in error.data){ 
		  vm.errors[property] = 'has_required';
		}
	       if(error.data.username){	
      	        $ionicPopup.alert({
	         	title: 'Advertencia',
		        template: error.data.username[0],
		        okTexr: 'Aceptar',
		        okType: 'button-positive'
	         });
	       }
	     }
	}

    }

})();
