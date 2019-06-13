describe('nameCards', () => {
    it('should', () => {

    });
});

// import thunk from 'redux-thunk';
// import MockAdapter from 'axios-mock-adapter';
// import configureMockStore from 'redux-mock-store';
// import axios from 'axios';

// import reducer, { loadTenants, Action, TenantAction, Tenant } from './nameCards';

// const middlewares = [thunk]
// const mockStore = configureMockStore(middlewares)

// describe('tenants', () => {
//     describe('actions', () => {
//         let mock: MockAdapter;
//         beforeAll(() => {
//             mock = new MockAdapter(axios);
//             environment.sealProperties({
//                 'default': {
//                     'api.tenants.url': 'mock/tenants/url'
//                 }
//             });
//             environment.sealEnvironmentName(Environment.default);
//         });

//         afterAll(() => {
//             mock.restore();
//         });

//         it('WILL dispatch a loading action and complete action when fetching tenants', async () => {
//             const tenants: Tenant[] = [{
//                 brand: 'brand',
//                 displayLabel: 'displayLabel',
//                 lineOfBusiness: 'lineOfBusiness',
//                 name: 'name'
//             }];

//             mock.onGet('mock/tenants/url').reply(200, { getIdentityTenantsResponse: { tenants } });

//             const expectedActions: TenantAction[] = [
//                 { type: Action.Loading, payload: void 0 },
//                 { type: Action.Loaded, payload: tenants }
//             ];

//             const store = mockStore({ tenants: [] })

//             await store.dispatch(loadTenants());

//             expect(store.getActions()).toEqual(expectedActions);
//         });

//         it.skip('WILL dispatch a loading action and failed action when fetching tenants', async () => {
//             mock.onGet('mock/tenants/url').networkError();

//             const expectedActions: TenantAction[] = [
//                 { type: Action.Loading, payload: void 0 },
//                 { type: Action.Failed, payload: 'TODO some error should be here' }
//             ];

//             const store = mockStore({ tenants: [] })

//             await store.dispatch(loadTenants());

//             expect(store.getActions()).toEqual(expectedActions);
//         });
//     });

//     describe('reducers', () => {
//         it('WILL return default state', () => {
//             const state = reducer(void 0, <any>{});

//             expect(state).toEqual([]);
//         });

//         it('WILL populate state with tenants', () => {
//             const tenants: Tenant[] = [{
//                 brand: 'brand',
//                 displayLabel: 'displayLabel',
//                 lineOfBusiness: 'lineOfBusiness',
//                 name: 'name'
//             }];

//             const state = reducer([], { type: Action.Loaded, payload: tenants });

//             expect(state).toEqual(tenants);
//         });
//     });
// });

