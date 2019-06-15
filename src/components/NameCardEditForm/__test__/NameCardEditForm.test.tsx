import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NameCardEditForm from '../';

afterEach(cleanup);

describe('AppsConfig', () => {
    it('should render without crash', () => {
      const { container } = render(
        <NameCardEditForm
          values={{}}
          touched={{}}
          errors={{}}
          handleChange={jest.fn()}
          handleBlur={jest.fn}
          handleSubmit={jest.fn}
          isSubmitting={false}
       />
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});

// TODO: Add more tests for the form
