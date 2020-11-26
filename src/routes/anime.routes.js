const router = require('express').Router();
const { getAllAnimes, addAnime } = require('../controllers/anime.controller');
const Auth = require('../middleware/Auth');

router.get('/test', (req, res) => {
	res.json({ message: 'Anime path' });
});

router.route('/:id_user?').all(Auth).get(getAllAnimes).post(addAnime);

module.exports = router;
