'use strict';

describe('Service: Services', function () {

  // load the service's module
  beforeEach(module('protoJoApp'));

  // instantiate service
  var Services;
  beforeEach(inject(function (_Services_) {
    Services = _Services_;
  }));

  it('should do something', function () {
    expect(!!Services).toBe(true);
  });

});
