import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { StyledDd } from './NameCardItem.style';

interface NameCardProps {
  fieldName: string;
  fieldValue: string;
}

const NameCardItem: React.FC<NameCardProps> = ({ fieldName, fieldValue }) => {
  return (
    <ListGroup.Item as="li">
      <dt>{fieldName}</dt>
      <StyledDd>{fieldValue}</StyledDd>
    </ListGroup.Item>
  );
}

export default NameCardItem;