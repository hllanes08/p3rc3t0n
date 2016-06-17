(function() {
    'use strict';

    angular
	.module('app')
	.config(state);

    function state($stateProvider){
        $stateProvider.state('items.trending', {
	   url: '/trending',
	    views: {
	    'content@items' : {
		   templateUrl: 'js/items/trending/template.html',
		   controller: 'TrendingController',
		   controllerAs: 'vm'
	         }
	    }	    
	});
    }
})();
