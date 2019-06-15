import FormFieldValidator from '../formValidator';

describe('nameCardEditFormValidator', () => {
  it('should validate data', async () => {
    const result = await FormFieldValidator.isValid({ firstName: '', lastName: '', dateOfBirth: ''});
    expect(result).toBe(false);
  });

  it('should validate data', async () => {
    const result = await FormFieldValidator.isValid({ firstName: 'abc', lastName: 'def', dateOfBirth: '2019/01/01'});
    expect(result).toBe(true);
  });
});

// TODO: Add more tests
