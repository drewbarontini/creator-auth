const passport = require('passport');
const config = require('./config').twitter;
const TwitterStrategy = require('passport-twitter').Strategy;
const init = require('./init');
const createUser = require('../lib/auth').createUser;

passport.use(
  new TwitterStrategy({
    consumerKey: config.consumerKey,
    consumerSecret: config.consumerSecret,
    userProfileURL: config.userProfileURL,
    callbackURL: config.callbackURL
  }, createUser)
);

init();

module.exports = passport;
