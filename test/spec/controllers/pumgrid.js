'use strict';

describe('Controller: PumgridCtrl', function () {

  // load the controller's module
  beforeEach(module('dashboardApp'));

  var PumgridCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PumgridCtrl = $controller('PumgridCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PumgridCtrl.awesomeThings.length).toBe(3);
  });
});
