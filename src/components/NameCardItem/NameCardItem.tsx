import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

interface NameCardProps {
  fieldName: string;
  fieldValue: string;
}

const NameCardItem: React.FC<NameCardProps> = ({ fieldName, fieldValue }) => {
  return (
    <ListGroup.Item as="li">
      <dt>{fieldName}</dt>
      <dd>{fieldValue}</dd>
    </ListGroup.Item>
  );
}

export default NameCardItem;