const mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  postalcode: String,
  country: String,
});

const userSchema = new mongoose.Schema({
  // Use Buffer type for storing binary data (e.g., images)
  // image: {
  //   data: Buffer,
  //   contentType: String,
  // },
  name: String,
  mobileno: String,
  email: String,
  username: String,
  password: String,
  address: AddressSchema,
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
