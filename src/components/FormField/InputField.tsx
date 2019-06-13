import React from 'react';
import Form from 'react-bootstrap/Form';

interface FormFieldProps {
  name: string;
  label: string;
  inputType: string;
  placeHolder: string;
  value: string;
  handleChange: any;
  errors: any;
}

const FormField: React.FC<FormFieldProps> = ({ name, label, inputType, placeHolder, value, handleChange, errors }) => {
  return (
    <Form.Group controlId={`${name}-field`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={inputType}
        placeholder={placeHolder}
        name={name}
        value={value}
        onChange={handleChange}
        isInvalid={!!errors[name]}
      />
      <Form.Control.Feedback type="invalid">
        {errors[name]}
      </Form.Control.Feedback>
  </Form.Group>
  );
}

export default FormField;