(function (){
    'use strict';
    angular
        .module('app')
        .controller('LoginController',LoginController);

   function LoginController(
      $scope,
      $state,
      $ionicLoading,
      $ionicPopup,
      $ionicHistory,
      authService
   ){
      var vm = this;
      vm.login = login;
      $scope.$on('$ionicView.enter',onViewEntered);
    function login(credentials){
        $ionicLoading.show();

	      return authService.login(credentials)
	         .then(redirectToItems)
	         .catch(notifyFailure)
		       .finally($ionicLoading.hide)
    }
    function redirectToItems(){
        $state.go('items');
    }
    function notifyFailure(error){
        if(error.status === 400){
      	    $ionicPopup.alert({
	          title: 'Advertencia',
		        template: 'Usario o Contrasenya Invalidos.',
		        okText: 'Aceptar',
		        okType: 'button-positive'
	         });
	     }
    }
    function onViewEntered(){
        $ionicHistory.clearHistory();
	      $ionicHistory.clearCache();
    }
  }
})();
