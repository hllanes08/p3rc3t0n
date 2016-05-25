(function (){
    'use strict';
    angular
        .module('app')
        .controller('LoginController',LoginController);

   function LoginController(
      $scope,
      $state,
      $ionicLoading
   ){
      var vm = this;
      vm.login = login;

    function login(credentials){
        $ionicLoading.show();
    }
  }
})();
