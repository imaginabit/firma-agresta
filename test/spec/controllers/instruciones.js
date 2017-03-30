'use strict';

describe('Controller: InstrucionesCtrl', function () {

  // load the controller's module
  beforeEach(module('agrestaApp'));

  var InstrucionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstrucionesCtrl = $controller('InstrucionesCtrl', {
      $scope: scope
    });
  }));

  // it('should attach a list of awesomeThings to the scope', function () {
  //   expect(scope.awesomeThings.length).toBe(3);
  // });
});
