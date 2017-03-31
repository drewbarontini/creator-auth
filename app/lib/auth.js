const User = require('../models/user');

exports.createUser = (accessToken, refreshToken, profile, done) => {
  const user = {
    providerId: profile.id,
    provider: profile.provider,
    name: profile.displayName,
    avatar: profile.photos[0].value
  };

  const query = {
    name: profile.displayName
  };

  const fields = {
    providerId: profile.id,
    provider: profile.provider,
    name: profile.displayName,
    email: profile.emails[0].value,
    avatar: profile.photos[0].value
  };

  const options = {
    upsert: true
  };

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
