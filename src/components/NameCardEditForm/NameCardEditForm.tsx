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
    history,
}) => {
    const onCancelClick = () => {
      history.push('/cards');
    };

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
          touched={touched}
        />
        <FormField
          name="lastName"
          label={FieldNameMap.lastName}
          inputType="text"
          placeHolder=""
          value={values.lastName}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
        />
        <FormField
          name="dateOfBirth"
          label={FieldNameMap.dateOfBirth}
          inputType="date"
          placeHolder=""
          value={values.dateOfBirth}
          handleChange={handleChange}
          errors={errors}
          touched={touched}
        />
        <ButtonsWrapper>
            <StyledButton type="submit">Submit</StyledButton>
            <StyledButton onClick={onCancelClick}>Cancel</StyledButton>
        </ButtonsWrapper>
    </Form>
    );
};

export default NameCardEditForm;
