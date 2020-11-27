const router = require('express').Router();
const Auth = require('../middleware/Auth');
const {
	getAllAnimes,
	addAnime,
	watchedAnime,
	deleteAnime,
} = require('../controllers/anime.controller');

router.get('/test', (req, res) => {
	res.json({ message: 'Anime path' });
});

router.route('/watched').all(Auth).post(watchedAnime);

router.route('/:id_user?').all(Auth).get(getAllAnimes).post(addAnime).delete(deleteAnime);

module.exports = router;
