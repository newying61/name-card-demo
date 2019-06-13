import { combineReducers } from 'redux';
import nameCards, { StateKey as nameCardsKey, State as NameCardsState } from './nameCards';

export interface BaseAction<TAction, TPayload> {
    type: TAction;
    payload: TPayload;
}

export interface ApplicationState {
    [nameCardsKey]: NameCardsState;
}

const rootReducer = combineReducers({
    [nameCardsKey]: nameCards,
});

export default rootReducer;