import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('AppHeader', () => {
    it('should render without crash', () => {
      const { container } = render(<App />);

      expect(container.firstChild).toMatchSnapshot();
  });
});