const animeCtrl = {};
const Anime = require('../models/Anime');

animeCtrl.getAllAnimes = async (req, res) => {
	const AllAnimes = await Anime.find();
	res.json({ message: 'Animes', AllAnimes });
};

module.exports = animeCtrl;
