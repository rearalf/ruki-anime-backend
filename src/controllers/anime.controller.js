const animeCtrl = {};
const Anime = require('../models/Anime');

animeCtrl.getAllAnimes = async (req, res) => {
	const { id_user } = req.params;
	const AllAnimes = await Anime.find({ id_user });
	res.json({ message: 'Animes', AllAnimes });
};

animeCtrl.addAnime = async (req, res) => {
	const { id_user, mal_id, image_url, title, type, genres, watched, favorite } = req.body;
	const validateAnime = await Anime.findOne({ mal_id });
	if (validateAnime) return res.status(401).json({ message: 'Anime already added has seen' });
	const anime = Anime({ id_user, mal_id, image_url, title, type, genres, watched, favorite });
	await anime
		.save()
		.then(data => {
			res.json({ message: 'Added anime', data });
		})
		.catch(error => {
			res.json({ message: 'Error adding anime', error });
		});
};

module.exports = animeCtrl;
