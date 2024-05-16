const mongoose = require('mongoose');

const AddressSchema = {
  street: String,
  city: String,
  state: String,
  postalcode: String,
  country: String,
};

const profileSchema = new mongoose.Schema({
  username: String,
  profilePicture: String, // Store file path for profile picture
});

const userSchema = new mongoose.Schema({
  name: String,
  mobileno: String,
  email: String,
  username: String,
  password: String,
  address: AddressSchema,
});

const Profile = mongoose.model('Profile', profileSchema);
const User = mongoose.model('User', userSchema);

module.exports = { User, Profile };
