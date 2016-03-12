'use strict';

describe('Service: pumGridService', function () {

  // load the service's module
  beforeEach(module('dashboardApp'));

  // instantiate service
  var pumGridService;
  beforeEach(inject(function (_pumGridService_) {
    pumGridService = _pumGridService_;
  }));

  it('should do something', function () {
    expect(!!pumGridService).toBe(true);
  });

});
