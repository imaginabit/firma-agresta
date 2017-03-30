'use strict';

/**
 * @ngdoc overview
 * @name agrestaApp
 * @description
 * # agrestaApp
 *
 * Main module of the application.
 */
angular
  .module('agrestaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/forestMap', {
        templateUrl: 'views/forestmap.html',
        controller: 'ForestMapCtrl'
      })
      .when('/dwo', {
        templateUrl: 'views/dwo.html',
        controller: 'dwoCtrl'
      })
      .when('/instruciones', {
        templateUrl: 'views/instruciones.html',
        controller: 'InstrucionesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$rootScope', '$location', function($rootScope, $location){
   var path = function() { return $location.path();};
   $rootScope.$watch(path, function(newVal, oldVal){
     console.log(oldVal);
     $rootScope.activetab = newVal;
   });
 }]).run(function($rootScope) {
   //TODO: change to final url
   $rootScope.baseurl = 'http://localhost:9000/';
});
