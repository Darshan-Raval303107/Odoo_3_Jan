const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalInfoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
  },
  address: {
    type: String,
  },
  nationality: {
    type: String,
  },
  personalEmail: {
    type: String,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
  },
  maritalStatus: {
    type: String,
    enum: ['Single', 'Married', 'Divorced', 'Widowed'],
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('PersonalInfo', personalInfoSchema);
