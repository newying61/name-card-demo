import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LogoImage from '../';

afterEach(cleanup);

describe('AppNav', () => {
    it('should render without crash', () => {
      const { container } = render(
        <LogoImage />
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});