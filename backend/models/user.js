const AddressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  postalCode: String,
  country: String,
})





const userSchema = new mongoose.Schema({
    name: String,
    mobileNo: Number,
    emailid : String,
    username: String,
    password: String,
    address : AddressSchema
  });

export const User = mongoose.model('User', userSchema);