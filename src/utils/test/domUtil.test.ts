import { setFocusById } from '../domUtil';

describe('domUtil', () => {
  it('Should set focus for element by id', () => {
    const fn = jest.fn();
    const parent = document.createElement('div');
    parent.querySelector = () => ({ focus: fn })

    setFocusById('anyId', parent);

    expect(fn).toBeCalled();
  });

  it('Should do nothing if parent is null', () => {
    //  Check no exception thrown
    setFocusById('anyId', null);
  });

  it('Should do nothing if setting focus on null element', () => {
    const fn = jest.fn();
    const parent = document.createElement('div');
    parent.querySelector = () => null

    setFocusById('anyId', parent);

    expect(fn).not.toBeCalled();
  });
});
