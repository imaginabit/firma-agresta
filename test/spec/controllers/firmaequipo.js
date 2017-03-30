'use strict';

describe('Controller: FirmaequipoCtrl', function () {

  // load the controller's module
  beforeEach(module('agrestaApp'));

  var FirmaequipoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FirmaequipoCtrl = $controller('FirmaequipoCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
