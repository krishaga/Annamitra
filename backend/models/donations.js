const donationSchema = new mongoose.Schema({
  serves: Number,
  type: String,
  description: String,
  addressFrom: String,
  addressTo: String,
  date: Date,  
  status: String,  
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default Donations = mongoose.model('Donations', donationSchema);
