import { shallow } from 'enzyme';
import * as React from 'react';

import { ErrorBoundary, withErrorBoundary } from '../index';

describe('HOC - withErrorBoundary', () => {
  it('Should create error boundary for Component', () => {
    const TestComponent = () => { return null };
    TestComponent.staticNumber = 1;

    const WrapperComponent = withErrorBoundary(TestComponent) as any;

    const wrapper = shallow(<WrapperComponent />);

    expect (WrapperComponent.displayName).toBe('withErrorBoundary(TestComponent)')
    expect(wrapper.find(ErrorBoundary).length).toBe(1);
    expect(wrapper.find(TestComponent).length).toBe(1);

    expect(WrapperComponent.staticNumber).toBe(1);
  });
});
