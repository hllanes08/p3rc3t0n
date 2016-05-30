(function () {
    'use strict';

    angular.module('app')
	.config(state)
        .config(restangular)
	.config(interceptors)
	.config(localStorageService)
	.constant('_',_)
	.run(platform);
     
    function state($urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
    }
    
    function localStorageService(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('app');
    }
    
    function restangular(RestangularProvider) {
	RestangularProvider.setRequestSuffix('/');
    }

    function platform($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.cordova &&
		window.cordova.plugins &&
                window.cordova.plugins.Keyboard)
            {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    }
    function interceptors($httpProvider){
	$httpProvider.defaults.withCredentials = true;
        $httpProvider.interceptors.push('authInterceptor');
        $httpProvider.interceptors.push('csrfInterceptor');
    }
    function backState($rootScope, $state, $ionicPlatform) {
        var $ionicGoBack = $rootScope.$ionicGoBack;

        $rootScope.$ionicGoBack = goBack;
        $ionicPlatform.registerBackButtonAction(goBack, 101);

        function goBack() {
            switch ($state.current.name) {
                case 'login':
                    ionic.Platform.exitApp();
                    break;
                default:
                    $ionicGoBack();
                    break;
            }
        }
    }
})();
