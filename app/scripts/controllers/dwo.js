'use strict';

angular.module('agrestaApp')
  .controller('dwoCtrl', function ($scope,$rootScope) {

    $rootScope.forestmap = 'loaded';
    $scope.msg = '';

    $scope.selectFirma = function() {
      console.log('select firma dwo');
        if ($('#htmlcont').css('display')==='none') {
            $scope.selectText('firma');
        } else {
            $scope.selectText('html');
        }
    };


    $scope.selectText = function(element) {

      console.log('select Text element',element);
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
