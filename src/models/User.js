const { Schema, model } = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new Schema(
	{
		id_user: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true, lowercase: true },
		date: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	},
);

UserSchema.methods.generateAuthToken = async email => {
	const token = await jwt.sign({ email }, process.env.JWT_KEY);
	return token;
};

module.exports = model('User', UserSchema);
