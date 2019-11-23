const mongoose = require('mongoose');

const statementSchema = mongoose.Schema(
	{
		reg_no: { type: Number },
		particulars: { type: String },
		deposited: { type: Number },
		withdrawn: { type: Number },
		total: { type: Number }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Statements', statementSchema);
