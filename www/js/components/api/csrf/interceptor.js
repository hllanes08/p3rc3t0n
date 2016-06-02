(function(){
    'use strict';
    angular
	.module('app')
	.factory('csrfInterceptor',csrfInterceptor);

    function csrfInterceptor($injector){
        var headerName = 'X-CSRFToken';
	var cookieName = 'csrftoken';
	var allowedMethods = ['GET'];

	var factory = {
	    request:request
	};
	return factory;

	function request(config){ 
	    config.headers = config.headers || {};
	    console.log(allowedMethods.indexOf(config.method));
	    if(allowedMethods.indexOf(config.method) === -1) {
	        config.headers[headerName] = 
		    $injector.get('$cookies').get(cookieName);   
		console.log(config.headers);
	    }
	    return config;
	}
    }	
})();
