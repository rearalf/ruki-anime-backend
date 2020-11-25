const router = require('express').Router();
const { LognIn, SignUp } = require('../controllers/user.controllers');

router.get('/', (req, res) => {
	res.json({ message: 'User path' });
});

router.route('/lognin').post(LognIn);

router.route('/signup').post(SignUp);

module.exports = router;
