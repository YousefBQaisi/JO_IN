const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"]
  },
  email: {
    type: String,
    required: [true, "Please add your email"],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Password must be at least 6 characters long"]
  },
  phoneNumber: {
    type: String,
    required: [true, "Please add your phone number"]
  },
  Address: {
    type: String,
    required: [true, "Please add your address"]
  },
  isActive: {
    type: Boolean
    // You can set a default value if needed
  },
  roleId: {
    type: String,
    required: [true, "Please add the Role id"]
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
