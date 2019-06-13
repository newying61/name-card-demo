import React from 'react';
import Form from 'react-bootstrap/Form';
import { StyledButton, ButtonsWrapper } from '../Styled/Buttons';
import { FieldNameMap } from '../../constants';
import FormField from '../FormField';

const NameCardEditForm: React.FC<any> = ({
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
}) => {
    return (
      <Form noValidate onSubmit={handleSubmit}>
        <FormField
          name="firstName"
          label={FieldNameMap.firstName}
          inputType="text"
          placeHolder=""
          value={values.firstName}
          handleChange={handleChange}
          errors={errors}
        />
        <FormField
          name="lastName"
          label={FieldNameMap.lastName}
          inputType="text"
          placeHolder=""
          value={values.lastName}
          handleChange={handleChange}
          errors={errors}
        />
        <FormField
          name="dateOfBirth"
          label={FieldNameMap.dateOfBirth}
          inputType="date"
          placeHolder=""
          value={values.dateOfBirth}
          handleChange={handleChange}
          errors={errors}
        />
        <ButtonsWrapper>
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton>Cancel</StyledButton>
        </ButtonsWrapper>
    </Form>
    );
};

export default NameCardEditForm;
