import React from 'react';
import { NameCard } from '../../types/NameCardType';
import { Wrapper } from './NameCardsViewer.style';
import NameCardsList from '../NameCardsList/NameCardsList';

interface NameCardsViewerProps {
  nameCards: NameCard[];
  history: any;
  deleteNameCard: (id: string) => void;
}

const NameCardsViewer: React.FC<NameCardsViewerProps> = ({ nameCards, history, deleteNameCard }) => {
  const onEdit = (card: NameCard) => {
    history.push(`/cards/${card.id}`);
  }

  const onDelete = (card: NameCard) => {
    deleteNameCard(card.id);
  }

  return (
    <Wrapper>
      <NameCardsList nameCards={nameCards} onEdit={onEdit} onDelete={onDelete} />
    </Wrapper>
  );
}

export default NameCardsViewer;
