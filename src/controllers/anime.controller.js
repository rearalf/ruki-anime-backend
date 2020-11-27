const animeCtrl = {};
const Anime = require('../models/Anime');

animeCtrl.getAllAnimes = async (req, res) => {
	const { id_user } = req.params;
	const AllAnimes = await Anime.find({ id_user });
	res.json({ message: 'Animes', AllAnimes });
};

animeCtrl.addAnime = async (req, res) => {
	const { id_user, mal_id, image_url, title, type, score, genres, watched, favorite } = req.body;
	const validateAnime = await Anime.findOne({ mal_id });
	if (validateAnime) return res.status(401).json({ message: 'Anime already added has seen' });
	const anime = Anime({
		id_user,
		mal_id,
		image_url,
		title,
		type,
		score,
		genres,
		watched,
		favorite,
	});
	await anime
		.save()
		.then(data => {
			res.json({ message: 'Added anime', data });
		})
		.catch(error => {
			res.json({ message: 'Error adding anime', error });
		});
};

animeCtrl.deleteAnime = (req, res) => {
	const { mal_id, id_user } = req.body;
	Anime.findOneAndDelete({ mal_id, id_user })
		.then(data => {
			res.json({ message: 'Anime removed', data });
		})
		.catch(error => {
			res.json({ message: 'Could not delete anime', error });
		});
};

animeCtrl.watchedAnime = async (req, res) => {
	const { mal_id, id_user } = req.body;
	const validateAnime = await Anime.findOne({ mal_id, id_user });
	validateAnime
		? res.json({ message: 'Anime found', found: true })
		: res.json({ message: 'Anime not found', found: false });
};

module.exports = animeCtrl;
