(function(){
    'use strict';

    angular
	.module('app')
	.config(restangularConfig);

   function restangularConfig(RestangularProvider){
        RestangularProvider.setBaseUrl('http://p3rception.herokuapp.com/api');   
   }
})();
