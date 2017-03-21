const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  providerId: Number,
  provider: String,
  name: String,
  email: String,
  avatar: String
});

module.exports = mongoose.model('User', schema);
