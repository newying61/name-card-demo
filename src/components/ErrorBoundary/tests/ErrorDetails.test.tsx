import { shallow } from 'enzyme';
import * as React from 'react';

import ErrorDetails from '../ErrorDetails';

describe('<ErrorDetails />', () => {
  it('Should render error details', () => {
    const wrapper = shallow(<ErrorDetails error={new Error('test')} errorInfo={{ componentStack: '' }} />);

    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('details').length).toBe(2);
  });

  it('Should render error details title only', () => {
    const wrapper = shallow(<ErrorDetails error={null} errorInfo={null} />);

    expect(wrapper.find('h1').length).toBe(1);
  });
});
