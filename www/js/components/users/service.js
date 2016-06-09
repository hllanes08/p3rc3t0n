(function (){
    'use strict';

    angular
	.module('app')
	.factory('userService',userService);

    function userService(localStorageService){
         var userKey = 'loggedInUser';
         var factory = {
	     set:set,
	     get:get,
	     clear:clear
	 };

	 return factory;

	 function get(){
             localStorageService.get(userKey);
	 }

	 function set(newUser){
             localStorageService.set(userKey,newUser);		 
	 }
	 function clear(){
	     return localStorageService.remove(userKey); 
	 }
    }
})();
