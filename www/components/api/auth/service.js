(function(){
    'use strict';

    angular
	.module('app')
	.factory('authService',authService);


    function authService(
        $q,$state,Restangular,userService
     ) {

	var factory = {
	   login: login,
           logout: logout
	}

        return factory;

	function login(credentials){
	    var request = {
	        username: credentials.username,
		      password: credentials.password
	    };
            return Restangular
	            .all('auth')
	            .customPOST(request,'authorize')
	            .then(onLoginSuccessSetsUser)
	            .then(fetchPermissions);


	    function onLoginSuccessSetsUser(response){
		    var user = response.plain();
		    userService.set(user);
		    return user;
	    }
	}
	function fetchPermissions(user){
	   // return Restangular
	     //       .all('auth')
	       //     .all('groups')
	         //   .getL

	}
	function logout(){
	}
    }

})();
