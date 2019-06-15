import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NameCardItem from '../';

afterEach(cleanup);

describe('NameCardItem', () => {
    it('should render without crash', () => {
      const { container } = render(
        <NameCardItem fieldName="test" fieldValue="test" />
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});