(function() {
    'use strict';

    angular.module('app')
            .config(state);
    function state($stateProvider){
        $stateProvider.state('items',{
  	    url: '/items',
  	    views: {
            '': {
  		    templateUrl: 'js/items/template.html',
  		    controller: 'ItemsController',
  		    controllerAs: 'vm'
  		    }
         }
	     });
   }
})();
