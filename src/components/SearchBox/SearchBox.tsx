import React from 'react';
import Form from 'react-bootstrap/Form';
import { FormInput } from '../Styled/FormInput';

interface SearchBoxProps {
  searchTerm: string;
  handleChange: (val: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ searchTerm, handleChange }) => {
  const onChange = (e: any) => {
    const val = e.target.value;
    handleChange(val)
  }

  return (
    <Form.Group controlId="search-box">
      <Form.Label>Search by name</Form.Label>
      <FormInput
        type="text"
        placeholder=""
        name="searchBox"
        value={searchTerm}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default SearchBox;
