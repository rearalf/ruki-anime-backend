const { Schema, model } = require('mongoose');

const GenresSchema = new Schema({
	mal_id: { type: Number, required: true },
	type: { type: String, required: true },
	name: { type: String, required: true },
});

const AnimeSchema = new Schema(
	{
		id_user: { type: String, required: true, unique: true },
		mal_id: { type: Number, required: true, unique: true },
		image_url: { type: String, required: true },
		title: { type: String, required: true },
		type: { type: String, required: true },
		genres: { type: [ GenresSchema ], required: true },
		score: { type: Number, required: true },
		favorite: { type: Boolean, default: false },
		date: { type: Date, default: Date.now },
	},
	{
		timestamps: true,
	},
);

module.exports = model('Anime', AnimeSchema);
