import React, { useState, useCallback } from 'react';
import { NameCard } from '../../types/NameCardType';
import { Wrapper } from './NameCardsViewer.style';
import NameCardsList from '../NameCardsList';
import SearchBox from '../SearchBox';

interface NameCardsViewerProps {
  nameCards: NameCard[];
  history: any;
  deleteNameCard: (id: string) => void;
}

const NameCardsViewer: React.FC<NameCardsViewerProps> = ({ nameCards, history, deleteNameCard }) => {

  // TODO: Find out whether we need to debounce the input
  const [searchTerm, setSearchTerm] = useState('');

  const onEdit = useCallback((card: NameCard) => {
    history.push(`/cards/${card.id}`);
  }, [history]);

  const onDelete = useCallback((card: NameCard) => {
    // TODO: Display a confirm screen
    // TODO: Find out where to set the focus after card deleted
    deleteNameCard(card.id);
  }, [deleteNameCard]);

  // TODO: If search term is used somewhere else, consider move it into store
  const list = nameCards.filter(
    (card) => card.firstName.toLowerCase().indexOf(searchTerm) > -1
      || card.lastName.toLowerCase().indexOf(searchTerm) > -1);

  return (
    <Wrapper>
      <SearchBox searchTerm={searchTerm} handleChange={setSearchTerm} />
      <NameCardsList nameCards={list} onEdit={onEdit} onDelete={onDelete} />
    </Wrapper>
  );
}

export default NameCardsViewer;
