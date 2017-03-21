const express = require('express');
const session = require('express-session');
const passport = require('passport');
const passportGoogle = require('./app/auth/google');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/creator-auth');

app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'pug');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res, next) => {
  getCurrentUser = (session) => {
    if (session !== undefined) {
      return session.user;
    }

    return null;
  }

  res.render('index', {
    title: 'Creator (Multi)',
    user: getCurrentUser(req.session.passport)
  });
});

app.get('/auth/google',
  passportGoogle.authenticate(
    'google',
    { scope: ['openid profile email https://www.googleapis.com/auth/plus.login'] }
  )
);

app.get('/auth/google/callback',
  passportGoogle.authenticate('google', { failureRedirect: '/auth/failure' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/failure', (req, res, next) => {
  res.send('Authenication failure');
});

app.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = app;
