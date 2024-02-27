const acceptor = new mongoose.Schema({
  toServe: Number,
  description: String,
  addressFrom: String,
  addressTo: String,
  date: Date,
  status: String,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default acceptor = mongoose.model('Acceptor', acceptor);
  