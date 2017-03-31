# Creator (Auth)

This is chunked out code that fits into [creator-multi](https://github.com/drewbarontini/creator-multi). It uses [Passport JS](http://passportjs.org/) to authenticate a user with Google and Twitter via OAuth.

## Setup

### Google

Go to the [Google Developers Console](https://console.developers.google.com/) and create an OAuth client. They will provide a `CLIENT_ID` and `CLIENT_SECRET` that you can add to the `.env` file. Just `cp .env.example .env` and update the values.

### Twitter

Go to the [Twitter Apps Page](https://apps.twitter.com/) and create a new app. They will provide a `API_KEY` and `API_SECRET` that you can add to the `.env` file. Just `cp .env.example .env` and update the values.

**Note**: You will need to provide links to your Terms of Use and Privacy Policy pages -- and request access to a user's email -- in order to get their email for storage in the database.
