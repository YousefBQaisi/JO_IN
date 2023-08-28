const mongoose = require("mongoose");
const Tour = require("../Model/tourModel");
const User = require("../Model/userModel")

const userToursSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: User, 
    // required: true,
  },
  tourId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: Tour, 
    // required: true,
  },
});

const UserTour = mongoose.model("UserTour", userToursSchema);
module.exports = UserTour;

