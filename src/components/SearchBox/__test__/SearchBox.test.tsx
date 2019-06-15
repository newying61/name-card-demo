import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import SearchBox from '../';

afterEach(cleanup);

describe('SearchBox', () => {
  it('should render without crash', () => {
    const onChange = jest.fn();

    const { container } = render(
      <SearchBox searchTerm="test" handleChange={onChange} />
    );

    fireEvent.change(container.querySelector('#search-box'), { target: { value: 'a' } });

    expect(onChange).toBeCalledWith('a');

    expect(container.firstChild).toMatchSnapshot();
  });
});