import React, { Component } from 'react';
import { getDisplayName } from '../hocUtil';

describe('hocUtil', () => {
  it('Should get component name', () => {
    class TestComponent extends Component {};

    const name = getDisplayName(TestComponent);

    expect(name).toBe('TestComponent');
  });

  it('Should get function component name', () => {
    function testFunc() { return (React.createElement('div')) };

    const name = getDisplayName(testFunc);

    expect(name).toBe('testFunc');
  });

  it('Should get fallback component name', () => {
    const name = getDisplayName('div');

    expect(name).toBe('Component');
  });

});
