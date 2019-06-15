import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NameCardsViewer from '../';

afterEach(cleanup);

describe('AppNav', () => {
    it('should render without crash', () => {
      const { container } = render(
        <NameCardsViewer nameCards={[]} history={{}} deleteNameCard={jest.fn()} />
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});

// TODO: Add more tests
