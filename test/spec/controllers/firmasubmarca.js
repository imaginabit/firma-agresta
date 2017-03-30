'use strict';

describe('Controller: FirmasubmarcaCtrl', function () {

  // load the controller's module
  beforeEach(module('agrestaApp'));

  var FirmasubmarcaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirmasubmarcaCtrl = $controller('FirmasubmarcaCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
