const mongoose = require("mongoose");
const User = require("./userModel");
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This tour must have a name"],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, "This tour must have a duration"]
  },

  price: {
    type: Number,
    required: [true, "This tour must have a price"]
  },
  summary: {
    type: String,
    trim: true,
    required: [true, "This tour must have a summary"]
  },
  description: {
    type: String,
    trim: true
  },

  images: {
    type: String
  },

  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User"
  }
});

const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
