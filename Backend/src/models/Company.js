const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  companyCode: {
    type: String,
    required: true,
    unique: true,
  },
  companyLogo: {
    type: String,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Company', companySchema);
