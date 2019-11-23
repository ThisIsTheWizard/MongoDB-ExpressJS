const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		reg_no: { type: Number, unique: true },
		user_name: { type: String, unique: true },
		full_name: { type: String },
		cell: { type: String, unique: true },
		email: { type: String, unique: true },
		address: { type: String }
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Users', userSchema);
