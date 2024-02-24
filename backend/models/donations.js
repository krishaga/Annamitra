const donationSchema = new mongoose.Schema({
    quantity: String,
    description: String,
    addressFrom: String,
    addressTo : String,
    date: Date,
    Uid: [{ type: mongoose.Schema.Types.ObjectId, ref: '_id' }]
  });

export const Donations = mongoose.model('Donations', donationSchema);
