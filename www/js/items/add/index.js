(function (){
   'use strict';
    angular
	.module('app')
	.config(state);
    
    function state($stateProvider){
	$stateProvider.state('items.add',{
	    url: '/add',
	    views: {
	    'content@items': {
		    templateUrl: 'js/items/add/template.html',
		    controller: 'AddController',
		    controllerAs: 'vm'
		}
	    }
	});
    }
})();
