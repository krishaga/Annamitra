const mongoose = require('mongoose');

const recipientSchema = new mongoose.Schema({
  toServe: Number,
  description: String,
  addressFrom: String,
  addressTo: String,
  date: Date,
  completed: Boolean,
  donator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Recipients = mongoose.model('Acceptor', recipientSchema);

module.exports = { Recipients }