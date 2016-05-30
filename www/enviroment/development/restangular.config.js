(function(){
    'use strict';

    angular
	.module('app')
	.config(restangularConfig);

   function restangularConfig(RestangularProvider){
        RestangularProvider.setBaseUrl('http://127.0.0.1:8100/api');   
   }
})();
