(function(){
    'use strict';

    angular
	.module('app')
	.factory('authService',authService);


    function authService(
        $q,$state,Restangular,userService,permissionsService
     ) {

	var factory = {
	   login: login,
           logout: logout,
	   register: register
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
	   return Restangular
	            .all('auth')
	            .all('groups')
	            .getList()
		    .then(setPermissions);
 		function setPermissions(response){
	    		var permissions = response.plain();
	    		permissionsService.set(permissions);
	    		return user;
	
		}
	}
	function logout(){
            userService.clear();
	    $state.go('login',{},{reload:true});
	}
	function register(user){
	   var request = {
		username: user!==undefined ?  user.username : null,
		email: user!==undefined ?  user.email : null ,
		password: user!==undefined ? user.password : null
	   };
	    return Restangular
		       .all('auth')
		       .customPOST(request,'register')
		       .then(onRegisterSuccess);
	       	             
	}
	function onRegisterSuccess(response){
	    console.log(response.plain());
	}
    }

})();
