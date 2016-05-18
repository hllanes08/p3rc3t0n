(function () {
    'use strict';

    angular.module('app')
	.config(state)
        .config(restangular)
        .run(platform);

    function state($urlRouterProvider) {
        //$urlRouterProvider.otherwise('/organizations');
    }

  
    function restangular(RestangularProvider) {
        RestangularProvider.setRequestSuffix('/');
        RestangularProvider.setDefaultHttpFields({
            timeout: 30000
        });

        RestangularProvider
            .addResponseInterceptor(djangoPaginationInterceptor);

        function djangoPaginationInterceptor(data, operation) {
            var cleanedData;

            if (operation === 'getList' && data.results) {
                cleanedData = data.results;
                cleanedData.metadata = _.omit(data, 'results');
                cleanedData.metadata.nextPage =
                    getQueryParam(cleanedData.metadata.next)['page'];
            } else {
                cleanedData = data;
            }

            return cleanedData;
        }

        function getQueryParam(url) {
            var query = url ? url.substring(url.indexOf('?') + 1) : false;
            if (!query) {
                return {};
            }

            return _.chain(query.split('&'))
                .map(function(params) {
                    var p = params.split('=');
                    return [p[0], decodeURIComponent(p[1])];
                })
                .object()
                .value();
        }
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
