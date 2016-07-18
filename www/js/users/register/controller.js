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
 	$scope.$on('$ionicViw.enter',onViewEntered);
	function onViewEntered(){
	
	}
	function register(user){
	    $ionicLoading.show();
    	    return authService
		    .register(user)
		    .catch(notifyFailure);

	}
	function notifyFailure(error){
	    $ionicLoading.hide();
	    if(error.status === 400){
      	        $ionicPopup.alert({
	         	title: 'Advertencia',
		        template: error.data.username[0],
		        okTexr: 'Aceptar',
		        okType: 'button-positive'
	         });
	     }
	}

    }

})();
