const User = require('../models/user');

const createFields = (profile) => ({
  providerId: profile.id,
  provider: profile.provider,
  name: profile.displayName,
  email: profile.emails[0].value,
  avatar: profile.photos[0].value
});

const createOptions = () => ({
  upsert: true,
  'new': true
});

const createQuery = (profile) => ({
  email: profile.emails[0].value
});

const createUser = (accessToken, refreshToken, profile, done) => {
  const query = createQuery(profile);
  const fields = createFields(profile);
  const options = createOptions();

  User.findOneAndUpdate(
    query,
    fields,
    options,
    (err, user) => {
      if (err) {
        return done(err);
      } else {
        return done(null, user);
      }
    }
  );
}

module.exports = {
  createFields,
  createOptions,
  createQuery,
  createUser
};
