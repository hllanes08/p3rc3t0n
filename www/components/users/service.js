(function (){
    'use strict';

    angular
	.module('app')
	.factory('userService',userService);

    function userService(localStorageService){
         var userKey = 'loggedInUser';
         var factory = {
	     set:set
	 };

	 return factory;
	 function set(newUser){
             localStorageService.set(userKey,newUser);		 
	 }
    
    }
})();
