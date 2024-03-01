const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  serves: Number,
  category: String,
  description: String,
  addressFrom: String,
  addressTo: String,
  date: Date,
  completed: Boolean,
  donator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  recipient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

const Donations = mongoose.model('Donations', donationSchema);

module.exports = {Donations}