import * as yup from 'yup';

// TODO: Add more validation
const FormFieldValidator = yup.object({
  firstName: yup.string()
    .required('First name is required.')
    .matches(/^[A-Za-z']+$/ , 'Is not in correct format'),
  lastName: yup.string()
    .required('Last name is required.')
    .matches(/^[A-Za-z']+$/ , 'Is not in correct format'),
  dateOfBirth: yup.string()
    .required('Date of birth is required.'),
});

export default FormFieldValidator;
