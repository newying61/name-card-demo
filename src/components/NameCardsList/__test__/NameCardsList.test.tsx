import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { NameCard } from '../../../types/NameCardType';
import NameCardsList from '../NameCardsList';

afterEach(cleanup);

describe('NameCardsList', () => {
    it('should render without crash when nameCards list is null', () => {
      const { container } = render(
        <NameCardsList nameCards={null} onEdit={jest.fn()} onDelete={jest.fn()}  />
      );

      expect(container.firstChild).toMatchSnapshot();
  });

    it('should render without crash when nameCards list is empty', () => {
      const { container } = render(
        <NameCardsList nameCards={[]} onEdit={jest.fn()} onDelete={jest.fn()}  />
      );

      expect(container.firstChild).toMatchSnapshot();
  });

  it('should render without crash when nameCards', () => {
    const cards: NameCard[] = [{
      id: 'test',
      firstName: 'test',
      lastName: 'test',
      dateOfBirth: '2019/01/01'
    }];
    const { container } = render(
      <NameCardsList nameCards={cards} onEdit={jest.fn()} onDelete={jest.fn()}  />
    );

    expect(container.firstChild).toMatchSnapshot();
});
});