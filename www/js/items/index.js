(function() {
    'use strict';

    angular.module('app')
            .config(state);
    function state($stateProvider,$urlRouterProvideR){
	console.log('Loading provider');
        $stateProvider.state('items',{
  	    url: '/items',
  	    views: {
             'content': {
  		    templateUrl: 'js/items/template.html',
  		    controller: 'ItemsController',
  		    //controllerAs: 'vm'
  		    }  	       
         }
	});
   }
});
