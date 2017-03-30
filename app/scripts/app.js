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
   $rootScope.baseurl = 'http://dev.agresta.org/firma/';

  //  $rootScope.hideCont = function() {
  //   $('#htmlcont').hide();
  //  };

   $rootScope.showHtml = function(element) {
     console.log(element);
     console.log($('#showHtml').html());

     if ($('#showHtml').html()==='Ver html') {
       $('#showHtml').html('Ver firma');

      $('#firma').hide();
      $('#htmlcont').show();
      $('#htmlcont').show();
      console.log('htmlcont show');

     } else {
        $('#showHtml').html('Ver html');

        $('#firma').show();
        $('#htmlcont').hide();
     }



     var firma = $('#firma').html();
     firma = $('<div />').text(firma).html();
     firma += ' <p>&nbsp;</p> ';



     $('#html').html(firma);
     $rootScope.msg = 'Pulsa Ctrl + C para copiar';
   };

});
