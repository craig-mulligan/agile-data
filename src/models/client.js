const mongoose = require('./mongoose');

const ClientSchema = new mongoose.Schema({
  subscription: { type: mongoose.Schema.Types.ObjectId, ref: 'Subscription' },
  name: String,
  clientSecret: String,
  redirectURI: String,
  entityID: String,
  type: String,
  owner: String
});

const Client = mongoose.model('Client', ClientSchema);

module.exports = Client;
