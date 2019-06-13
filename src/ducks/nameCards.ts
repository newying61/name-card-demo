import { ThunkDispatch } from 'redux-thunk';
import { NameCard } from '../types/NameCardType';
import { BaseAction } from '.';
import Api from '../api';

export const StateKey = 'nameCards/state';

export type State = NameCard[];

const INITIAL_STATE: State = [];

// Actions
export enum Action {
    Loading = 'nameCards/loading',
    Loaded = 'nameCards/loaded',
    Failed = 'nameCards/failed',
    Created = 'nameCards/created',
    Updated = 'nameCards/updated',
    Deleted = 'nameCards/deleted',
}


// Reducer
export default function reducer(state: State = INITIAL_STATE, action: NameCardAction): State {
    switch (action.type) {
        case Action.Loaded:
            return action.payload;

        case Action.Loading:
        case Action.Failed:
        default:
            return state;
    }
}

interface NameCardLoadingAction extends BaseAction<Action, void> {
    type: Action.Loading;
}

interface NameCardLoadedAction extends BaseAction<Action, NameCard[]> {
    type: Action.Loaded;
}

interface NameCardFailedAction extends BaseAction<Action, string> {
    type: Action.Failed;
}

interface NameCardCreatedAction extends BaseAction<Action, NameCard> {
    type: Action.Created;
}

interface NameCardUpdatedAction extends BaseAction<Action, NameCard> {
    type: Action.Updated;
}

interface NameCardDeletedAction extends BaseAction<Action, NameCard> {
    type: Action.Deleted;
}

export type NameCardAction = NameCardLoadingAction | NameCardLoadedAction | NameCardFailedAction | NameCardCreatedAction | NameCardUpdatedAction | NameCardDeletedAction;

export const loadNameCards = () => (dispatch: ThunkDispatch<State, void, NameCardAction>) => {

    dispatch(nameCardsLoading());

    return Api.getNameCards()
        .then((cards) => {
            dispatch(nameCardsLoaded(cards));
        })
        .catch((error: Error) => {
            dispatch(nameCardsFailed(error.toString()));
        });

    // This could be abstracted into a service
    // const request = axios.get(env.getValue('api.tenants.url', true))
    //     .then(rsp => rsp.data.getIdentityTenantsResponse.tenants);

    // return request
    //     .then(tenants => dispatch(tenantsLoaded(tenants)))
    //     .catch((error: AxiosError) => dispatch(tenantsFailed(error.response.statusText)));
};

export const createNameCard = (card: NameCard, history: any) => (dispatch: ThunkDispatch<State, void, NameCardAction>) => {

    dispatch(nameCardsLoading());

    return Api.createNameCard(card)
        .then((newCard) => {
            dispatch(nameCardCreated(newCard));
            history.push('/cards');
        })
        .catch((error: Error) => {
            dispatch(nameCardsFailed(error.toString()));
        });
};


export const updateNameCard = (cardId: string, card: NameCard, history: any) => (dispatch: ThunkDispatch<State, void, NameCardAction>) => {

    dispatch(nameCardsLoading());

    return Api.updateNameCard(cardId, card)
        .then((updatedCard) => {
            dispatch(nameCardUpdated(updatedCard));
            history.push('/cards');
        })
        .catch((error: Error) => {
            dispatch(nameCardsFailed(error.toString()));
        });
};


export const deleteNameCard = (id: string) => (dispatch: ThunkDispatch<State, void, NameCardAction>) => {

    dispatch(nameCardsLoading());

    return Api.deleteNameCard(id)
        .then((deletedCard) => {
            dispatch(nameCardDeleted(deletedCard));

            // TODO: Simply load cards again... need to find a good way to re-load
            dispatch(loadNameCards());
        })
        .catch((error: Error) => {
            dispatch(nameCardsFailed(error.toString()));
        });
};

// Action creators
const nameCardsLoading = (): NameCardLoadingAction => ({
    type: Action.Loading,
    payload: null
});
const nameCardsLoaded = (cards: NameCard[]): NameCardLoadedAction => ({
    type: Action.Loaded,
    payload: cards
});
const nameCardsFailed = (error: string): NameCardFailedAction => ({
    type: Action.Failed,
    payload: error
});
const nameCardCreated = (createdCard: NameCard): NameCardCreatedAction => ({
    type: Action.Created,
    payload: createdCard
});
const nameCardUpdated = (updatedCard: NameCard): NameCardUpdatedAction => ({
    type: Action.Updated,
    payload: updatedCard
});
const nameCardDeleted = (deletedCard: NameCard): NameCardDeletedAction => ({
    type: Action.Deleted,
    payload: deletedCard
});
