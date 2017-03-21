const passport = require('passport');
const config = require('./config').google;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const init = require('./init');

passport.use(
  new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  },
  (accessToken, refreshToken, profile, done) => {
    const user = {
      providerId: profile.id,
      provider: profile.provider,
      name: profile.displayName,
      avatar: profile.photos[0].value
    };

    return done(null, user);
  }
));

init();

module.exports = passport;
