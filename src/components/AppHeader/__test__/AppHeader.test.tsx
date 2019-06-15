import React from 'react';
import { render, cleanup } from '@testing-library/react';
import AppHeader from '../AppHeader';

afterEach(cleanup);

describe('AppHeader', () => {
    it('should render without crash', () => {
      const { container } = render(<AppHeader />);

      expect(container.firstChild).toMatchSnapshot();
  });
});