import { shallow } from 'enzyme';
import * as React from 'react';

import { ErrorBoundary } from '../index';
import ErrorDetails from '../ErrorDetails';

describe('<ErrorBoundary />', () => {
  it('Should render children if no exception thrown in render', () => {
      const element = shallow(
        <ErrorBoundary>
          <div>test</div>
        </ErrorBoundary>
      );

      expect(element.find('div').length).toBe(1);
  });

  it('Should catch error', () => {
    const TestComponent = () => {
      return null;
    }
    const onError = jest.fn();

    const wrapper = shallow(
      <ErrorBoundary onError={onError}>
        <TestComponent />
      </ErrorBoundary>
    );
    const error = new Error('test');
    wrapper.find(TestComponent).simulateError(error);
    
    const state = wrapper.state();
    expect(state.error).toBe(error);
    expect(state.hasError).toBe(true);

    expect(onError).toBeCalled();
  });

  it('Should catch error without callback', () => {
    const TestComponent = () => {
      return null;
    }
    const onError = null;

    const wrapper = shallow(
      <ErrorBoundary onError={onError}>
        <TestComponent />
      </ErrorBoundary>
    );
    const error = new Error('test');
    wrapper.find(TestComponent).simulateError(error);
    
    const state = wrapper.state();
    expect(state.error).toBe(error);
    expect(state.hasError).toBe(true);
  });

  it('Should render error details', () => {
    class TestComponent extends React.Component {
      render() {
        return null;
      }
    }
    
    const wrapper = shallow(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>
    );

    wrapper.setState({
      hasError: true,
      error: new Error('test'),
      errorInfo: { componentStack: 'test' }
    })

    expect(wrapper.find(ErrorDetails).length).toBe(1);
  });

  it('Should return new state', () => {
    // It seems Enzyme simulateError doesn't trigger this function.
    // TODO: Remove this test when enzyme is ready.
    const state = ErrorBoundary.getDerivedStateFromError();

    expect(state.hasError).toBe(true);
  });
});
