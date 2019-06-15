import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import NameCard from '../';

afterEach(cleanup);

describe('AppNav', () => {
  it('should render without crash', () => {
    const card = {
        id: 'test',
        firstName: 'test',
        lastName: 'test',
        dateOfBirth: '2019-01-01'
    };

    const onEdit = jest.fn();
    const onDelete = jest.fn();

    const { container, getByText } = render(
      <NameCard card={card} onEdit={onEdit} onDelete={onDelete} />
    );

    fireEvent.click(getByText('Edit'));
    expect(onEdit).toBeCalled();

    fireEvent.click(getByText('Delete'));
    expect(onEdit).toBeCalled();

    expect(container.firstChild).toMatchSnapshot();
  });
});