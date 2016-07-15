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
            // return localStorageService.get(userKey);
	    return JSON.parse(window.localStorage.getItem(userKey));
	 }

	 function set(newUser){
             //localStorageService.set(userKey,newUser);	
	     window.localStorage.setItem(userKey,JSON.stringify(newUser));	 
	 }
	 function clear(){
	     return window.localStorage.removeItem(userKey); 
	 }
    }
})();
