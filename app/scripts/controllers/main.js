'use strict';

/**
 * @ngdoc function
 * @name agrestaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agrestaApp
 */
angular.module('agrestaApp')
  .controller('MainCtrl', function ($scope, $rootScope) {

    $rootScope.main = 'loaded';

    $scope.selectText = function(element) {
      var doc = document;
      var text = doc.getElementById(element);
      var range;

      if (doc.body.createTextRange) { // ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      $scope.msg = 'Pulsa Ctrl + C para copiar';
    };

    $scope.selectFirma = function() {
      console.log('select firma main');
      console.log($('#htmlcont').css('display'));

      if ($('#htmlcont').css('display')==='none') {
          $scope.selectText('firma');
      } else {
          $scope.selectText('html');
      }
    };

    $scope.selectText = function(element) {
      var doc = document;
      var text = doc.getElementById(element);
      var range;
      if (doc.body.createTextRange) { // ms
        range = doc.body.createTextRange();
        range.moveToElementText(text);
        range.select();
      } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        range = doc.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      $scope.msg = 'Pulsa Ctrl + C para copiar';
    };

});
