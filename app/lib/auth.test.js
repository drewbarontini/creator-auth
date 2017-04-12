const auth = require('./auth');

beforeEach(() => {
  return fields = {
    providerId: '1234',
    provider: 'google',
    name: 'Drew Barontini',
    email: 'drew@example.com',
    avatar: 'avatar.jpg'
  };
});

describe('createFields()', () => {
  test('Should create normalized fields from the profile data', () => {
    const profile = {
      id: '1234',
      provider: 'google',
      displayName: 'Drew Barontini',
      emails: [
        { value: 'drew@example.com' }
      ],
      photos: [
        { value: 'avatar.jpg' }
      ]
    };

    expect(fields).toMatchObject(auth.createFields(profile))
  });
})

describe('createOptions()', () => {
  test('Should return an object', () => {
    expect(auth.createOptions()).toHaveProperty('upsert');
    expect(auth.createOptions()).toHaveProperty('new');
  });
});

describe('createQuery()', () => {
  test('Should return an object', () => {
    const profile = {
      emails: [
        { value: 'drew@example.com' }
      ]
    };

    const expected = {
      email: 'drew@example.com'
    };

    expect(auth.createQuery(profile)).toMatchObject(expected);
  });
});
