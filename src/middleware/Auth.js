const jwt = require('jsonwebtoken');

const Auth = async (req, res, next) => {
	try {
		if (!req.headers.authorization)
			return res.status(401).send('Authorization request denied.');

		const token = req.headers.authorization;
		if (token === 'null' && token === '')
			return res.status(401).send('No Autorization request.');

		const payload = jwt.verify(token, process.env.JWT_KEY);
		req.body.email = payload;
		next();
	} catch (error) {
		res.status(401).send({
			code: 'Error Authentication.',
			message: 'Not authorized to access this resource.',
			error,
		});
	}
};

module.exports = Auth;
