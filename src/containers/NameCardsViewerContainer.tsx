import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadNameCards, deleteNameCard, State as NameCardsState, StateKey as NameCardsKey } from '../ducks/nameCards';
import { ApplicationState } from '../ducks';
import NameCardsViewer from '../components/NameCardsViewer';
import { withErrorBoundary } from '../components/ErrorBoundary';

interface StateProps {
  nameCards: NameCardsState;
  history: any;
}

interface ActionProps {  
  loadNameCards: () => void;
  deleteNameCard: (id: string) => void;
}

const NameCardsViewerContainer: React.FC<StateProps & ActionProps> = ({ loadNameCards, deleteNameCard, history, nameCards }) => {
  useEffect(() => {
    loadNameCards();
  }, [loadNameCards]);

  return (
    <NameCardsViewer
      nameCards={nameCards}
      deleteNameCard={deleteNameCard}
      history={history}
    />
  );
}

function mapStateToProps(state: ApplicationState, ownProps: any): StateProps {
    return {
        nameCards: state[NameCardsKey],
        ...ownProps
    }
}

const mapDispatchToProps: ActionProps = {
  loadNameCards,
  deleteNameCard,
};

export default withErrorBoundary(withRouter(connect(mapStateToProps, mapDispatchToProps)(NameCardsViewerContainer)));
