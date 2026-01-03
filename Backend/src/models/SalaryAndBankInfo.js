const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salaryAndBankInfoSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  bankName: {
    type: String,
  },
  accountNumber: {
    type: String,
  },
  ifscCode: {
    type: String,
  },
  panNumber: {
    type: String,
  },
  uanNumber: {
    type: String,
  },
  employeeCode: {
    type: String,
  },
  salaryStructure: {
    type: Object,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('SalaryAndBankInfo', salaryAndBankInfoSchema);
