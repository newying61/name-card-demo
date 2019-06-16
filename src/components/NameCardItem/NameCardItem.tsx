import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { StyledLabel, StyledValueSpan } from './NameCardItem.style';

interface NameCardItemProps {
  fieldName: string;
  fieldValue: string;
}

const NameCardItem: React.FC<NameCardItemProps> = ({ fieldName, fieldValue }) => {
  return (
    <ListGroup.Item as="li">
      <StyledLabel>{fieldName}</StyledLabel>
      <StyledValueSpan>{fieldValue}</StyledValueSpan>
    </ListGroup.Item>
  );
}

export default NameCardItem;