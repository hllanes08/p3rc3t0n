(function (){
    angular
	.module('app')
	.config(state);
    function state($stateProvider){
        $stateProvider.state('users.register', {
	    url : '/register',
	    views:{ 
	        '':{
	            templateUrl: 'js/users/register/template.html',
		    controller:'RegisterController',
	     	    controllerAs:'vm'	
	    	}
	    }
	});
    }
})();
