const userCtrl = {};

const User = require('../models/User');

userCtrl.LognIn = async (req, res) => {
	const { email, id_user } = req.body;
	const user = await User.findOne({ id_user, email });
	if (!user) return res.status(401).json({ message: 'The email does not exist' });
	const token = await user.generateAuthToken(email);
	res.json({ message: 'Logn In', user, token });
};

userCtrl.SignUp = async (req, res) => {
	const { email, id_user } = req.body;
	const ValidatExist = await User.findOne({ id_user, email });
	if (ValidatExist) return res.status(401).json({ message: 'The email already exists.' });
	const NewUser = await User({ id_user, email });
	const token = await NewUser.generateAuthToken(email);
	await NewUser.save()
		.then(user => {
			res.json({ message: 'Sign Up', user, token });
		})
		.catch(error => {
			console.log(error);
			res.status(401).json({ message: 'Sign up error' });
		});
};

module.exports = userCtrl;
