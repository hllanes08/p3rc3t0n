(function (){
    angular
	.module('app')
	.config(state);

    function state($stateProvider){
       $stateProvider.state('users',{
           url:'/users',
	   templateUrl: 'js/users/template.html',
	   abstract: true   
       }); 
    }
})();
