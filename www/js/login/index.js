(function() {
    'use strict';
    angular
        .module('app')
        .config(loginRouteController);
   function loginRouteController($stateProvider){
       $stateProvider.state('login',{
           url: '/login',
           views: {
               '': {
                   templateUrl: 'js/login/template.html',
                   controller: 'LoginController',
                   controllerAs: 'vm'
               }
           }
       });
   }
})();
