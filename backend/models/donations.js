const donations = new mongoose.Schema({
    Quantity: String,
    description: String,
    Address: String,
    date: Date,
    Time: Time,
    Uid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Id' }]
  });