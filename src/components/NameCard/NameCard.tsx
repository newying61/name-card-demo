import React, { useCallback } from 'react';
import { NameCard as NameCardType } from '../../types/NameCardType';
import NameCardItem from '../NameCardItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { StyledButton, ButtonsWrapper } from '../Styled/Buttons';
import { Wrapper } from './NameCard.style';
import { FieldNameMap } from '../../constants';

interface NameCardProps {
  card: NameCardType,
  onEdit: (card: NameCardType) => void,
  onDelete: (card: NameCardType) => void
}

const NameCard: React.FC<NameCardProps> = React.memo(({ card, onEdit, onDelete }) => {
  const onEditBtnClick = useCallback(() => {
    onEdit(card);
  }, [card, onEdit]);

  const onDeleteBtnClick = useCallback(() => {
    onDelete(card);
  }, [card, onDelete]);

  return (
    <Wrapper>
      <ListGroup as="ul" variant="flush">
        {Object.keys(card).map((c) => {
          if (c === 'id') {
            return null;
          }

          return (
            <NameCardItem key={c} fieldName={FieldNameMap[c]} fieldValue={card[c]} />
          );
        })}
      </ListGroup>
      <ButtonsWrapper>
        <StyledButton variant="primary" onClick={onEditBtnClick}>Edit</StyledButton>
        <StyledButton variant="danger" onClick={onDeleteBtnClick}>Delete</StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
});

export default NameCard;