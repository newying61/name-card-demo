import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { updateNameCard, createNameCard } from '../ducks/nameCards';
import { NameCard } from '../types/NameCardType';
import { ApplicationState } from '../ducks';
import { StateKey as nameCardsKey } from '../ducks/nameCards';
import NameCardEditForm from '../components/NameCardEditForm';
import { NameCard_Fields } from '../constants';

// TODO: Add more validation
export const FormFieldValidator = yup.object({
    firstName: yup.string()
      .required('First name is required.')
      .matches(/^[A-Za-z']+$/ , 'Is not in correct format'),
    lastName: yup.string()
      .required('Last name is required.')
      .matches(/^[A-Za-z']+$/ , 'Is not in correct format'),
    dateOfBirth: yup.string()
      .required('Date of birth is required.'),
  });

function findCardById(cards: NameCard[], cardId: string) {
  return cards.find((c) => c.id === cardId);
}

const mapStateToProps = (state: ApplicationState, ownProps: any) => {
  const cardId = ownProps.match.params.id;
  if (cardId) {
      const nameCard = findCardById(state[nameCardsKey], cardId);
      if (nameCard) {
          return {
            nameCard,
          };
      } else {
          Promise.resolve().then(() => {
              ownProps.history.push('/apps');
          });
          return { nameCard: null };
      }
  }

  return {};
}

const mapDispatchToProps = (dispatch) => ({
  updateNameCard: (cardId: string, formValues: any, history: any) => dispatch(updateNameCard(cardId, formValues, history)),
  createNameCard: (formValues: any, history: any) => dispatch(createNameCard(formValues, history))
});


function copyToValues(values: any, nameCard: NameCard) {
  NameCard_Fields.forEach((key: string) => {
    values[key] = '' + ((nameCard && nameCard[key]) || '');
  });
}

const formikFormHandler = withFormik({
  validationSchema: FormFieldValidator,
  handleSubmit: (formValues, { props, setSubmitting }: any) => {
      // If we have an app here, update the app
      setSubmitting(true);

      if (props.nameCard) {
          props.updateNameCard(props.nameCard.id, formValues, props.history);
          return;
      }

      // Create a new app
      props.createNameCard(formValues, props.history);
  },
  mapPropsToValues: (props: any) => {
    const values = {};
    copyToValues(values, props.nameCard);
    return values;
  },
  displayName: 'Name card form'
});

export const NameCardCreateForm = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(formikFormHandler(NameCardEditForm)));

export const NameCardUpdateForm = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(formikFormHandler(NameCardEditForm)));

