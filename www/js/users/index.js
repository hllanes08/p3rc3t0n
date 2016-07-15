(function (){
    angular
	.module('app')
	.config(state);

    function state($stateProvider){
       $stateProvider.state('users',{
           url:'/users',
	   abstract: true   
       }); 
    }
})();
