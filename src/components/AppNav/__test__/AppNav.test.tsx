import React from 'react';
import { MemoryRouter } from 'react-router';
import { render, cleanup } from '@testing-library/react';
import AppNav from '../';

afterEach(cleanup);

describe('AppNav', () => {
    it('should render without crash', () => {
      const { container } = render(
        <MemoryRouter>
          <AppNav />
        </MemoryRouter>
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});