import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { NameCard } from '../../types/NameCardType';

import reducer, { loadNameCards, Action, NameCardAction } from '../nameCards';

const cards: NameCard[] = [{
    id: 'test',
    firstName: 'test',
    lastName: 'test',
    dateOfBirth: '2019-01-01'
}];

jest.mock('../../api', () => ({
    getNameCards: async () => { return Promise.resolve([{
        id: 'test',
        firstName: 'test',
        lastName: 'test',
        dateOfBirth: '2019-01-01'
    }]); }
}));

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('nameCards', () => {
    describe('actions', () => {
        it('should dispatch a loading action and complete action when fetching tenants', async () => {
            const expectedActions: NameCardAction[] = [
                { type: Action.Loading, payload: null },
                { type: Action.Loaded, payload: cards }
            ];

            const store = mockStore({})

            await store.dispatch(loadNameCards());

            expect(store.getActions()).toEqual(expectedActions);
        });

        // TODO: Change api to make the test work
        xit('should dispatch a loading action and failed action when fetching tenants', async () => {
            const expectedActions: NameCardAction[] = [
                { type: Action.Loading, payload: void 0 },
                { type: Action.Failed, payload: 'TODO some error should be here' }
            ];

            const store = mockStore({})

            await store.dispatch(loadNameCards());

            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    describe('reducers', () => {
        it('should return default state', () => {
            const state = reducer(undefined, <any>{});

            expect(state).toEqual([]);
        });

        it('should populate state with tenants', () => {
            const cardsList: NameCard[] = [{
                id: 'test',
                firstName: 'test',
                lastName: 'test',
                dateOfBirth: '2019-01-01'
            }];

            const state = reducer([], { type: Action.Loaded, payload: cardsList });

            expect(state).toEqual(cardsList);
        });
    });
});

