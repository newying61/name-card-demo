import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FormField from '../FormField';

afterEach(cleanup);

describe('FormField', () => {
    it('should render without crash', () => {
      const { container } = render(
        <FormField
          name="test"
          label="test label"
          inputType="text"
          placeHolder="test"
          value="test"
          handleChange={jest.fn()}
          errors={{}}
          touched={{}}
        />
      );

      expect(container.firstChild).toMatchSnapshot();
  });
});