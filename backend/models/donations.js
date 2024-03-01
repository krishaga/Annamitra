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

export default Donations = mongoose.model('Donations', donationSchema);
