import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { H1 } from '../';

afterEach(cleanup);

describe('H1', () => {
  it('should render without crash', () => {
    const { container } = render(
      <H1>Test</H1>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});