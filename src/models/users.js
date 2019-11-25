const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		reg_no: { type: Number },
		user_name: { type: String },
		full_name: { type: String },
		cell: { type: String },
		email: { type: String },
		address: { type: String },
		balance: { type: Number },
		lastDep: { type: Number }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Users', userSchema);
