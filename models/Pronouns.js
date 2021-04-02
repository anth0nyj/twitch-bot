const mongoose = require('mongoose');

const PronounsSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  pronouns: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('pronouns', PronounsSchema);
