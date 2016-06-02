(function(){
    'use strict';

    angular
	.module('app')
	.factory('authInterceptor',authInterceptor);

    function authInterceptor(
	    userService,
	    $injector,
	    $q
    ) {
        var factory = {
	    request: request,
            responseError: responseError
	};    
        
	return factory;

	function request(config){
	    var user = userService.get();
	    config.headers = config.headers || {};
	    if(user){
	       config.headers.Authorization = 'Token ' + user.token;
	    }
	    return config;
	}

        function responseError(rejection){
	    if(rejection.status === 401 || rejection.status === 403){
	         $injector.get('authService').logout();
	    }
	    return $q.reject(rejection);
	}
    }
})();
