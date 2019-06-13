import configureStore from './configureStore';

describe('configureStore', () => {
  it('should configure stroe', () => {
    const store = configureStore();

    expect(store).not.toBe(null);
  });
});