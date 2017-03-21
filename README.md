# Creator (Auth)

This is chunked out code that fits into [creator-multi](https://github.com/drewbarontini/creator-multi). It uses [Passport JS](http://passportjs.org/) to authenticate a user (currently only with Google OAuth).

## Setup

### Google

Go to the [Google Developers Console](https://console.developers.google.com/) and create an OAuth client. They will provide a `CLIENT_ID` and `CLIENT_SECRET` that you can add to the `.env` file. Just `cp .env.example .env` and update the values.
