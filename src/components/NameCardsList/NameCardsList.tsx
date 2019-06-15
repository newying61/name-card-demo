import React from 'react';
import { NameCard as NameCardType } from '../../types/NameCardType';
import { Wrapper } from './NameCardsList.style';
import NameCard from '../NameCard';
import { NOOP } from '../../constants';

interface NameCardsListProps {
  nameCards: NameCardType[];
  onEdit: (card: NameCardType) => void;
  onDelete: (card: NameCardType) => void;
}

const NameCardsList: React.FC<NameCardsListProps> = React.memo(({ nameCards, onEdit, onDelete }) => {
  if (!nameCards || !nameCards.length) {
    return <div>No cards</div>;
  }

  return (
    <Wrapper>
      {nameCards.map((card) => {
        return (
          <NameCard
            key={card.id}
            card={card}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
    </Wrapper>
  );
});

NameCardsList.defaultProps = {
  onEdit: NOOP,
  onDelete: NOOP
}

export default NameCardsList;