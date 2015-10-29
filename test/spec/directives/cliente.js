'use strict';

describe('Directive: cliente', function () {

  // load the directive's module
  beforeEach(module('dashboardApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<cliente></cliente>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the cliente directive');
  }));
});
