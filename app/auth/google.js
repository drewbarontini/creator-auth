const passport = require('passport');
const config = require('./config').google;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const init = require('./init');
const createUser = require('../lib/auth').createUser;

passport.use(
  new GoogleStrategy({
    clientID: config.clientID,
    clientSecret: config.clientSecret,
    callbackURL: config.callbackURL
  }, createUser)
);

init();

module.exports = passport;
