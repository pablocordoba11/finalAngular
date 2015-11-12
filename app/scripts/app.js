'use strict';

/**
 * @ngdoc overview
 * @name dashboardApp
 * @description
 * # dashboardApp
 *
 * Main module of the application.
 */
angular
  .module('dashboardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.grid',
    'toaster',
    'uiGmapgoogle-maps'
  ])
  .config(function ($routeProvider,uiGmapGoogleMapApiProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/maps.html',
        controller: 'MapsCtrl',
        //controllerAs: 'cliente'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/pedido',{
        templateUrl:'views/enviarPedido.html',
        controller:'pedidoCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
    uiGmapGoogleMapApiProvider.configure({
        //    key: 'your api key',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
  })

  .run(function ($rootScope, $location, $route, $timeout) {
        console.log($location.url());
        $rootScope.layout = {};
        $rootScope.layout.loading = true;
        $rootScope.config = {};
        $rootScope.config.service_url = 'http://localhost:9001';
        $rootScope.config.base_url = '';
        $rootScope.config.base_url += $location.protocol()+'://';
        $rootScope.config.base_url += $location.host();

        if($location.port()!=80){
          $rootScope.config.base_url += ':'+$location.port();
        }

        $rootScope.$on('$routeChangeStart', function () {
            console.log('$routeChangeStart');
            //show loading gif
            $timeout(function(){
              $rootScope.layout.loading = true;
            });
        });
        $rootScope.$on('$routeChangeSuccess', function () {
            console.log('$routeChangeSuccess');
            //hide loading gif
            $timeout(function(){
              $rootScope.layout.loading = false;
            }, 200);
        });
        $rootScope.$on('$routeChangeError', function () {

            //hide loading gif
            console.log('error');
            $rootScope.layout.loading = false;
        });
    });
