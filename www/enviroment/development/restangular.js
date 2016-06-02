(function(){
    'use strict';

    angular
	.module('app')
	.config(restangularConfig);

   function restangularConfig(RestangularProvider){
        RestangularProvider.setBaseUrl('http://localhost:8000/api');   
   }
})();
