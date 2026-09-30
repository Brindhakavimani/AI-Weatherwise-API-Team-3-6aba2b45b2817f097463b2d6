const mongoose = require('mongoose');
const weatherSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  city: {
    type: String,
    required: true
  },
    temperature: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('Weather', weatherSchema);