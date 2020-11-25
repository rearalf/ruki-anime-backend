const router = require('express').Router();
const { getAllAnimes } = require('../controllers/anime.controller');
const Auth = require('../middleware/Auth');

router.get('/test', (req, res) => {
	res.json({ message: 'Anime path' });
});

router.route('/').all(Auth).get(getAllAnimes);

module.exports = router;
