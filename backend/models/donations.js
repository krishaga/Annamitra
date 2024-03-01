const donationSchema = new mongoose.Schema({
  serves: Number,
  category: String,
  description: String,
  addressFrom: String,
  addressTo: String,
  date: Date,
  status: String,
  donator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  acceptor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default Donations = mongoose.model('Donations', donationSchema);
