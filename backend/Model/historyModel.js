const mongoose = require('mongoose');

const historySchema = new mongoose.Schema({
  
  tourId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tour', 
    required: true
  },
  
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  

  
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const History = mongoose.model('History', historySchema);

module.exports = History;