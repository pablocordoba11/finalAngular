'use strict';

describe('Service: pumGrid', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var pumGrid;
  beforeEach(inject(function (_pumGrid_) {
    pumGrid = _pumGrid_;
  }));

  it('should do something', function () {
    expect(!!pumGrid).toBe(true);
  });

});
