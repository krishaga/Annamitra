const acceptor = new mongoose.Schema({
    username: {type: String},
    password: String,
    uid: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Id' }]
  });